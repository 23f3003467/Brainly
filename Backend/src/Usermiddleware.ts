import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { Secretkey } from "./utils.js"
declare global {
    namespace Express {
        interface Request {
            userid?: string;
        }
    }
}



export const verifyToken=(req:Request,res:Response,next:NextFunction)=>{
    const token=req.headers.authorization;
    if(!token){
        res.status(401).json({ message: "Authorization header is missing" });
        return;
    }
    // console.log("Authorization header:", authHeader);
    
    if(!token){
        res.status(401).json({ message: "Token is missing" });
        return;
    }
    jwt.verify(token, Secretkey, (err:any, decoded:any) => {
        if (err) {
            res.status(401).json({ message: "Invalid token" });
        } else {
            req.userid = decoded.id;
            next();
        }
    });
};