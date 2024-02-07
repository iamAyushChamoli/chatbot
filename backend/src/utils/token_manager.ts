import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";
export const createToken = (id: string, email:string, expiresIn)=>{
    const payload = {id, email};
    const token = jwt.sign(payload, process.env.REACT_APP_JWT_SECRET,{
        expiresIn,
    }); //JWT KEY
    return token;
};

export const verifyToken = async (req:Request, res:Response, next:NextFunction)=>{
    const token = req.signedCookies[`${COOKIE_NAME}`];
    if(!token || token.trim()===""){
        return res.status(401).json({message:"Token Not Received"});
    }
    return new Promise<void>((resolve, reject)=>{
        return jwt.verify(token, process.env.REACT_APP_JWT_SECRET, (err, success)=>{
            if(err){
                reject(err.message);
                return res.status(401).json({message:"Token Expired"});
            }
            else {
                // console.log("Token Verified!");
                resolve();
                res.locals.jwtData = success;
                return next();
            }
        })
    })
}