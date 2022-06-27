import Shops from "../models/Shops.js";

export const createShop = async (req, res,next) => {
    const newShop = new Shops(req.body)
    try{
        const savedShop = await newShop.save();
        res.status(200).json(savedShop);
        

    }catch (err){
        next(err);
    }

}
export const updateShop = async (req, res,next) => {
    try{
        const updatedShop = await Shops.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedShop);
        

    }catch(err){
        next(err);
    }

}
export const deleteShop = async (req, res,next) => {
    try{
        await Shops.findByIdAndDelete(req.params.id);
       res.status(200).json("Hey you have deleted a shop");
       

   }catch (err){
        next(err);
    }

}

export const getShop = async (req, res,next) => {
    try{
        const Shop = await Shops.findById(req.params.id);
        res.status(200).json(Shop);
        

    }catch (err){
        next(err);
    }

}

export const getShops = async (req, res,next) => {
    try{
        const shops = await Shops.find();
        res.status(200).json(shops);
        

    }catch (err){
        next(err);
    }

}

