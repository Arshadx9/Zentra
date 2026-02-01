import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = "!23123";

export const usemiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: "No token provided"
        });
    }

    try {
        const decodedtoken = jwt.verify(token, JWT_SECRET) ;
        
        // @ts-ignore
        req.userId = decodedtoken.id;  
        
        next();
        
    } catch (e) {
        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};