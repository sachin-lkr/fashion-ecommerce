import { createProduct,
  deleteProduct,
  updateProduct,
  findProductById,
  getAllProducts,
  createMultipleProduct,} from "../services/productService.js";
const createProductController = async(req,res)=>{
    try {
        const product = await createProduct(req.body);
         return req.status(201).send(product);
    } catch (error) {
       return res.status(500).send({error:error.message}); 
    }
};


const deleteProductController = async(req,res)=>{
    const productId =req.params.id;
    try {
        const product = await deleteProduct(productId);
         return req.status(201).send(product);
    } catch (error) {
       return res.status(500).send({error:error.message}); 
    }
};


const updateProductController = async(req,res)=>{
    const productId =req.params.id;
    try {
        const product = await updateProduct(productId,req.body);
         return req.status(201).send(product);
    } catch (error) {
       return res.status(500).send({error:error.message}); 
    }
};


const findProductByIdController = async(req,res)=>{
    const productId =req.params.id;
    try {
        const product = await findProductById(productId);
         return req.status(201).send(product);
    } catch (error) {
       return res.status(500).send({error:error.message}); 
    }
};


const getAllProductsController = async(req,res)=>{
    const productId =req.params.id;
    try {
        const product = await getAllProducts(req.query);
         return req.status(201).send(product);
    } catch (error) {
       return res.status(500).send({error:error.message}); 
    }
};

const createMultipleProductController = async(req,res)=>{
    const productId =req.params.id;
    try {
        const product = await createMultipleProduct(req.body);
         return req.status(201).send({message:"products creates successfully"});
    } catch (error) {
       return res.status(500).send({error:error.message}) ;
    }
};

export {createProductController,deleteProductController,updateProductController,findProductByIdController,getAllProductsController,createMultipleProductController};
