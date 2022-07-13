import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    pname: {
        type: String,
        required: true,
        
    },
    price: {
        type: Number,
        required: true,
       
    },
    desc: {
        type: String,
        required: true
    },
   proNumbers:[{number:Number, onsaleDate:{type:[Date]}}],

} ,{timestamps:true});
export default mongoose.model("Product", ProductSchema);