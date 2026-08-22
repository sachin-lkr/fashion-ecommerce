import Category from "../models/categoryModel"
import Product from "../models/productModel"
const createProduct = async (reqData) => {
    let topLavel = await Category.findOne({ name: reqData.topLavelCategory });

    if (!topLavel) {
        topLavel = new Category({
            name: reqData.topLavelCategory,
            lavel: 1
        })
    }
    let secondLavel = await Category.findOne({
        name: reqData.secondLavelCategory,
        parentCategory: topLavel._id,
    })

    if (!secondLavel) {
        secondLavel = new Category({
            name: reqData.secondLavelCategory,
            parentCategory: topLavel._id,
            lavel: 2
        })
    };


    let thirdLevel = await Category.findOne({
        name: reqData.thirdLevelCategory,
        parentCategory: secondLavel._id,
    });

    if(!thirdLevel){
        thirdLevel = new Category({
            name: reqData.thirdLevelCategory,
            parentCategory: secondLavel._id,
            lavel: 3,
        })
    }

    const product = new Product({
        title:reqData.title,
        color:redData.color,
        description:reqData.description,
        discountedPrice:reqData.discountedPrice,
        discountedPersent:reqData.discountedPersent,
        imageUrl:reqData.imageUrl,
        brand:reqData.brand,
        price:reqData.price,
        sizes:reqData.size,
        quantity:reqData.quantity,
        category:thirdLevel._id,
    })

    return await product.save();
};

