import express from "express";
import { shopScope } from "../middlewares/shopScopeMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { checkingRouter,Register,CreateCashier,Login } from "../Controllers/User.controller.js";
import { CreateProduct, getProduct } from "../Controllers/Product.controller.js";
const router = express.Router();

router.route("/").get(checkingRouter)
router.route('/register').post(Register)
router.route('/Login').post(Login)

//Protected Routes
router.route('/CreateCashier').post(authMiddleware,shopScope,CreateCashier)

router.route('/CreateProduct').post(authMiddleware,shopScope,CreateProduct)
router.route('/getProduct').get(authMiddleware,shopScope,getProduct)

//Protected Routes Will get back to id
router.route('/profile').get(authMiddleware,shopScope,(req,res)=>{
 res.json({
    message: `Hello ${req.users.name}`,
    user:`Loggend in as ${req.users.role}`,
    shop:`Your Shop is ${req.shopId}`
 })
})

export default router