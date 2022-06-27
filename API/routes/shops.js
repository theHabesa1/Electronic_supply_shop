import  express  from "express";
import { createShop, deleteShop, getShop, getShops, updateShop } from "../controllers/shop.js";
import Shops from "../models/Shops.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/",verifyAdmin, createShop);

//UPDATE
router.put("/:id",verifyAdmin, updateShop);
 //DELETE
router.delete("/:id",verifyAdmin, deleteShop);
//GET
router.get("/:id", getShop);
//get all
router.get("/", getShops);


export default router