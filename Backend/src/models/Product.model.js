import mongoose from "mongoose";


const ProductScheme = new mongoose.Schema({
  shopId : {
    type:mongoose.Types.ObjectId,
    ref:"Shop" ,
    required:true,
    index:true,
    },
    name:{
        type:String,
        required:true,
    },
    sku:{
        type:String,
    },
    barcode:{
        type:String,
        index:true,
    },
    category:{
        type:String,
    },
    unit:{
        type:String,
    },
    costPrice:{
        type:Number,
        default:0
    },
    sellPrice:{
        type:Number,
        default:0,
    },
    isWeighable:{
        type:Boolean,
        default:false
    },
    
})
ProductScheme.index({shopId:1,sku:1,barcode:1},{unique:true, sparse:true});
const Product = mongoose.model("Product", ProductScheme);
export default Product;
