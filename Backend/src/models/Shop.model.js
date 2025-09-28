import mongoose from "mongoose";

const ShopSchema = new mongoose.Schema({
   name:{
     type:String,
     required:true
   },
   code:{
      type:String
   },
   address:{
      type:String,
      required:true,
      unique:true
   },
   phone:{
    type:String,
    required:true,
    unique:true
   },

})

const Shop = mongoose.model("Shop", ShopSchema);
export default Shop