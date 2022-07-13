import  express  from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/product.js";
import {verifyAdmin} from "../utils/verifyToken.js";
const router = express.Router();
//CREATE
router.post("/:shopid",verifyAdmin, createProduct);

//UPDATE
router.put("/:id",verifyAdmin, updateProduct);
 //DELETE
router.delete("/:id/:shopId",verifyAdmin, deleteProduct);
//GET
router.get("/:id", getProduct);
//get all
router.get("/", getProducts);




export default router