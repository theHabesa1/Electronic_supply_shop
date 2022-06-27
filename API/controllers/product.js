import Products from "../models/Products.js";
import Shops from "../models/Shops.js";
import { createError } from "../utils/error.js";


export const createProduct = async (req, res,next) => {
    const shopId = req.params.shopid;
    const newProduct = new Products(req.body);
     
    try{
        const savedProduct = await newProduct.save();
        try{
            await Shops.findByIdAndUpdate(shopId,
                 {$push:{Products:savedProduct._id}});
        }catch(err){
            next(err)

        }
     res.status(200).json(savedProduct);   
    }catch(err){
        next(err)

    }

};

export const updateProduct = async (req, res,next) => {
    try{
        const updateProduct = await Products.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedProduct);
        

    }catch(err){
        next(err);
    }

}
export const deleteProduct = async (req, res,next) => {
    try{
        await Products.findByIdAndDelete(req.params.id);
       res.status(200).json("Hey you have deleted a product");
       

   }catch (err){
        next(err);
    }

}

export const getProduct = async (req, res,next) => {
    try{
        const product = await Products.findById(req.params.id);
        res.status(200).json(product);
        

    }catch (err){
        next(err);
    }

}

export const getProducts = async (req, res,next) => {
    try{
        const products = await Shops.find();
        res.status(200).json(products);
        

    }catch (err){
        next(err);
    }

}