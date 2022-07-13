import Products from "../models/Products.js";
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
        const shops = await Shops.find(req.query).limit(req.query.limit);
        res.status(200).json(shops);
        

    }catch (err){
        next(err);
    }

}

export const countByCity = async (req, res,next) => {
    const cities = req.query.cities.split(",")
    try{
        const list = await Promise.all(cities.map(city => Shops.countDocuments({city: city})));
        res.status(200).json(list);
        

    }catch (err){
        next(err);
    }

}
export const countByType = async (req, res,next) => {

    try{
        const shopCount = await Shops.countDocuments({type: "elec shop"});
        const maintainCount = await Shops.countDocuments({type: "maintenance"});
        const exchangeCount = await Shops.countDocuments({type: "exchange"});
        const originalCount = await Shops.countDocuments({type: "original"});
        const acccessCount = await Shops.countDocuments({type: "access"});
        res.status(200).json([
            {type: "shop", count: shopCount},
            {type: "maintenance", count: maintainCount},
            {type: "exchange", count: exchangeCount},
            {type: "original", count: originalCount},
            {type: "access", count: acccessCount}
        ]);
        

    }catch (err){
        next(err);
    }

}
export  const getShopProduct= async (req, res,next) => {
    try{
        const shop = await Shops.findById(req.params.id);
        const list = await Promise.all(shop.Products.map(product => {
            return Products.findById(product);
    }))
    res.status(200).json(list);
    }catch (err){
        next(err);
    }

}


