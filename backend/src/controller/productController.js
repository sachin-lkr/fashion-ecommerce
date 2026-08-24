import { createProduct,
  deleteProduct,
  updateProduct,
  findProductById,
  getAllProducts,
  createMultipleProduct,} from "../services/productService";
const createProduct = async(req,res)=>{
    try {
        const product = await createProduct(req.body);
         return req.status(201).send(product);
    } catch (error) {
       return res.status(500).send({error:error.message}); 
    }
};


const deleteProduct = async(req,res)=>{
    const productId =req.params.id;
    try {
        const product = await deleteProduct(productId);
         return req.status(201).send(product);
    } catch (error) {
       return res.status(500).send({error:error.message}); 
    }
};


const updateProduct = async(req,res)=>{
    const productId =req.params.id;
    try {
        const product = await updateProduct(productId,req.body);
         return req.status(201).send(product);
    } catch (error) {
       return res.status(500).send({error:error.message}); 
    }
};


const findProductById = async(req,res)=>{
    const productId =req.params.id;
    try {
        const product = await findProductById(productId);
         return req.status(201).send(product);
    } catch (error) {
       return res.status(500).send({error:error.message}); 
    }
};


const getAllProducts = async(req,res)=>{
    const productId =req.params.id;
    try {
        const product = await getAllProducts(req.query);
         return req.status(201).send(product);
    } catch (error) {
       return res.status(500).send({error:error.message}); 
    }
};

const createMultipleProduct = async(req,res)=>{
    const productId =req.params.id;
    try {
        const product = await createMultipleProduct(req.body);
         return req.status(201).send({message:"products creates successfully"});
    } catch (error) {
       return res.status(500).send({error:error.message}) ;
    }
};

export {createProduct,deleteProduct,updateProduct,findProductById,getAllProducts,createMultipleProduct};
