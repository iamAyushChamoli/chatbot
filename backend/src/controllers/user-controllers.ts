import User from "../models/user.js"
import { Request, Response, NextFunction } from "express";

export const getAllUsers= async (req, res, next)=>{
    try {
        const users= await User.find();

        return res.status(200).json({message:"OK", users});
    } catch (error) {
        return res.status(200).json({message:"ERROR", cause:error.message });
    }
}
export const userSignup= async (req, res, next)=>{
    try {
        const users= await User.find();

        return res.status(200).json({message:" SIGNUP OK", users});
    } catch (error) {
        return res.status(200).json({message:"ERROR", cause:error.message });
    }
}