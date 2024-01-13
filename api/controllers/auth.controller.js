import Role from "../models/Role.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
export const register = async (req, res, next ) => {
    const role = await Role.find({role: 'User'});
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.passord, salt);
    const newUser = new User({
        firstName: req.body.firstName,
        username: req.body.username,
        email: req.body.email,
        passord: hashPassword,
        roles: role
    });
    await newUser.save();
    return res.status(200).send("User Registered Successfully")
}