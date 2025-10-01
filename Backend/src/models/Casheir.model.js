import mongoose from "mongoose";


const CashierSchema =  new mongoose.Schema({
    shopId:{
         type:String,
         required:true
       },

   name:{
    type:String,
    required:true,
   },
   email:{
    type:String,
    required:true,
    unique:true
   },
   password:{
    type:String,
    required:true
   },
   role:{
       type:String,
       default:"cashier",
   },
   
})

const Cashier = mongoose.model("Cashier", CashierSchema);
export default Cashier