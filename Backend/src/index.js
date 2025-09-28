import express from "express";
import dotenv from "dotenv";
import router from "./routes/user.routes.js";
import { connectDB } from "./config/db.js";
//
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", router);



//
const PORT = process.env.PORT || 3000;
app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
})
connectDB();
