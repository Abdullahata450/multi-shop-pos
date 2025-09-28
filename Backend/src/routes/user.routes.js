import express from "express";
import { checkingRouter,Register,CreateCashier } from "../Controllers/User.controller.js";
const router = express.Router();

router.route("/").get(checkingRouter)
router.route('/register').post(Register)
router.route('/CreateCashier').post(CreateCashier)

export default router