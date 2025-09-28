import Admin from "../models/Admin.model.js"
import Shop from "../models/Shop.model.js"
import bycrypt from "bcrypt"
import Cashier from "../models/Casheir.model.js"
import jwt from "jsonwebtoken"

export const checkingRouter = (req,res)=>{
    res.send("hello world")
}

export const signToken = (user)=>{
return jwt.sign({ id: user._id , role:user.role},process.env.JWT_SECRET,{expiresIn:"3d"})
}


export const Register = async (req,res)=>{
    try {
        const {shop:shopData , admin} = req.body;
        if(!shopData || !admin){
            res.status(400).json({error:"Shop and Admin Data is Required"});
        }
          const existingUser = await Admin.findOne({ email: admin.email });
    if (existingUser) {
      return res.status(400).json({ error: "User with this email already exists" });
    }

        const hashedPassword = await bycrypt.hash(admin.password,10);
        const shop = await Shop.create(shopData);
        const user = await Admin.create({
            ...admin,
            password:hashedPassword,
            role:"admin",
            shopId: shop._id
        })
        const token = signToken(user);
         res.status(201).json({
      shop,
      user: { _id: user._id, name: user.name, email: user.email, role: user.role },
      token
    });


    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


export const CreateCashier = async (req,res)=>{
    try {
        const {name,email,password}=req.body;

        if(!name || !email || !password){
            res.status(400).json({error:"Rquired Data is Missing"});
        }

        const existingCashier = await Cashier.findOne({email:email});
        if(existingCashier){
            res.status(400).json({error:"Cashier with this email already exists"});
        }
        const hashedPassword = await bycrypt.hash(password,10);
        const cashier = await Cashier.create({
            name,
            email,
            password:hashedPassword,
            role:"cashier"
        })
        const token = signToken(cashier);

        res.status(200).json({
            message:"Cashier created successfully",
            Cashier:{
                _id:cashier._id,
                name:cashier.name,
                email:cashier.email,
                role:cashier.role
            },
            token
        })
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
