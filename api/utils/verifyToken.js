import jwt from 'jsonwebtoken';
import { CreateError } from "./error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(CreateError(401, "You are not authenticated!"))
    }
    jwt.verify(token, "veryveryprotected", (err, user) => {
        if (err) {
            return next(CreateError(403, "Token is not Valid"));
        } else { 
            req.user = user; 
        }

        next();

    })
}