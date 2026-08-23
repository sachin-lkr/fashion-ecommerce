import Category from "../models/categoryModel";
import Product from "../models/productModel";

const createProduct = async (reqData) => {
  let topLavel = await Category.findOne({ name: reqData.topLavelCategory });

  if (!topLavel) {
    topLavel = new Category({
      name: reqData.topLavelCategory,
      lavel: 1,
    });
  }
  let secondLavel = await Category.findOne({
    name: reqData.secondLavelCategory,
    parentCategory: topLavel._id,
  });

  if (!secondLavel) {
    secondLavel = new Category({
      name: reqData.secondLavelCategory,
      parentCategory: topLavel._id,
      lavel: 2,
    });
  }

  let thirdLevel = await Category.findOne({
    name: reqData.thirdLevelCategory,
    parentCategory: secondLavel._id,
  });

  if (!thirdLevel) {
    thirdLevel = new Category({
      name: reqData.thirdLevelCategory,
      parentCategory: secondLavel._id,
      lavel: 3,
    });
  }

  const product = new Product({
    title: reqData.title,
    color: redData.color,
    description: reqData.description,
    discountedPrice: reqData.discountedPrice,
    discountedPersent: reqData.discountedPersent,
    imageUrl: reqData.imageUrl,
    brand: reqData.brand,
    price: reqData.price,
    sizes: reqData.size,
    quantity: reqData.quantity,
    category: thirdLevel._id,
  });

  return await product.save();
};

const deleteProduct = async (productId) => {
  const product = await findProductById(productId);

  await Product.findByIdAndDelete(productId);
  return "Product deleted Successfully";
};

const updateProduct = async (productId, reqData) => {
  return await Product.findByIdAndUpdate(productId, reqData);
};

const findProductById = async (id) => {
  const product = await Product.findById(id).populate("category").exec();

  if (!product) {
    throw new Error(`product not found with id ${id}`);
  }
  return product;
};

const getAllProducts = async (reqQuery) => {
  let {
    category,
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqQuery;
  pageSize = pageSize || 10;
  let query = Product.find().populate("category");

  if (category) {
    const existCategory = await Category.findOne({ name: category });
    if (existCategory) {
      query = query.whare("category").equals(existCategory._id);
    } else {
      return { content: [], curentPage: 1, totalPage: 0 };
    }
  }
  if (color) {
    const colorSet = new Set(
      color.split(",").map((color) => color.trim().toLowerCase()),
    );
    const colorRegex =
      colorSet.size > 0 ? new RegExp([...colorSet].join("|"), "i") : null;

    query = query.where("color").regex(colorRegex);
  }
  if (sizes) {
    const sizeSet = new Set(size);
    query.query.where("sizes.name").in([...sizeSet]);
  }

  if (minPrice & maxPrice) {
    query = await query.where(`discountedPrice`).gte(minPrice).lte(maxPrice);
  }
  if (minDiscount) {
    query = query.where("discountPersent").gt(minDiscount);
  }

  if (stock) {
    if (stock == "in_stock") {
      query = query.where("quantity").gt(0);
    } else if (stock == "out_of_stock") {
      query = query.where("quantity").gt(1);
    }
  }

  if (sort) {
    const sortDirection = sort === "price_hight" ? -1 : 1;
    query = query.sort({ discountedPrice: sortDirection });
  }

  const totalProducts = await Product.countDocuments(query);

  const skip = (pageNumber - 1) * pageSize;
  query = query.skip(skip).limit(pageSize);
  const products = await query.exec();

  const totalPages = Math.ceil(totalProducts / pageSize);

  return { content: products, currentPage: pageNumber, totalPages: totalPages };
};

const createMultipleProduct = async (products) => {
  for (let product of products) {
    await createProduct(product);
  }
};

export {
  createProduct,
  deleteProduct,
  updateProduct,
  findProductById,
  getAllProducts,
  createMultipleProduct,
};
