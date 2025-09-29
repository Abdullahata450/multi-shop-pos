import jwt from "jsonwebtoken";
import Cashier from "../models/Casheir.model.js";


export const authMiddleware = async (req,res, next)=>{
     try {
        const token  = req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(401).json({error:"Unauthorized"});
        }
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        const cashier = await Cashier.findById(decode.id).select("-password");
        if(!cashier){
            return res.status(401).json({error:"Casheir not found"});
        }
        req.cashier = cashier;
        next();

     } catch (error) {
        // res.status(401).json({error:"Unauthorized"});
        return res.status(401).json({messege:"Unauthorized Token Error"});
     }
}