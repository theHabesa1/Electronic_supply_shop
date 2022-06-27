import Users from "../models/User.js";

export const updateUser = async (req, res,next) => {
    try{
        const updatedUser = await Users.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedUser);
        

    }catch(err){
        next(err);
    }

}
export const deleteUser = async (req, res,next) => {
    try{
        await Users.findByIdAndDelete(req.params.id);
       res.status(200).json("Hey you have deleted a user");
       

   }catch (err){
        next(err);
    }

}

export const getUser = async (req, res,next) => {
    try{
        const User = await Users.findById(req.params.id);
        res.status(200).json(User);
        

    }catch (err){
        next(err);
    }

}

export const getUsers = async (req, res,next) => {
    try{
        const users = await Users.find();
        res.status(200).json(users);
        

    }catch (err){
        next(err);
    }

}


