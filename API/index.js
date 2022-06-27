import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import shopsRoute from "./routes/shops.js";
import productsRoute from "./routes/products.js";
import cookieParser from "cookie-parser";


const app = express();
dotenv.config();

const connect = async () => {
 try{
     await mongoose.connect(process.env.MONGO);
     console.log("connected to mongoDB");

 }catch (error){
     throw error;
 }
};

mongoose.connection.on("disconnected",()=>{
    console.log("disconnected from mongoDB");
})

mongoose.connection.on("conected",()=>{
    console.log("connected from mongoDB");
})

app.get("/",(req,res)=>{
    res.send("Hello there you have now had access to back end");
})

// middleware
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users",usersRoute);
app.use("/api/shops",shopsRoute);
app.use("/api/products",productsRoute);

app.use((err,req,res,next)=>{
    const errorStatus = err.statusCode || 500;
    const errorMessage = err.message || "Something went wrong";

    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    });
});


 app.listen(8800, () => {
     connect();
     console.log("Server started on port 8800")
     console.log("go to localhost 8800")
});
