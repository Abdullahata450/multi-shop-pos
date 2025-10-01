import jwt from "jsonwebtoken";
import Cashier from "../models/Casheir.model.js";
import Admin from "../models/Admin.model.js";


export const authMiddleware = async (req,res, next)=>{
     try {
        const token  = req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(401).json({error:"Unauthorized Token Error"});
        }
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        const LoginUser = await Cashier.findById(decode.id).select("-password") || await Admin.findById(decode.id).select("-password");
        if(!LoginUser){
            return res.status(401).json({error:"Casheir not found"});
        }
        req.users = LoginUser;
        next();

     } catch (error) {
        // res.status(401).json({error:"Unauthorized"});
        return res.status(401).json({messege:"Unauthorized Token Error"});
     }
}