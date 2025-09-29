import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { checkingRouter,Register,CreateCashier,Login } from "../Controllers/User.controller.js";
const router = express.Router();

router.route("/").get(checkingRouter)
router.route('/register').post(Register)
router.route('/CreateCashier').post(CreateCashier)
router.route('/Login').post(Login)


//Protected Routes Will get back to id
router.route('/profile').get(authMiddleware,(req,res)=>{
 res.json({
    message: `Hello ${req.cashier.name}`,
    user:`Loggend in as ${req.cashier.role}`,
 })
})

export default router