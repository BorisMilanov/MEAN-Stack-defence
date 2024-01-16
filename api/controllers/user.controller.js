import User from "../models/User.js";
import { CreateSuccess } from "../utils/success.js";

export const getAll = async (req, res , next)=>{
    try {
        const users = await User.find();
        return next(CreateSuccess(200,"All Users",users));
    } catch (error) {
        return res.status(500).send("Internal Server Error!");       
    }
}

export const getById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return next(res.status(400, "Internal Server Error"))
        }
        return next(CreateSuccess(200,"Single User", user));
    } catch (error) {
        return res.status(500).send("Internal Server Error!");
        
    }
}