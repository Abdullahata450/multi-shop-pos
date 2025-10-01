import mongoose from "mongoose";
const StockLevelSchema = new mongoose.Schema({

shopId:{
    type:mongoose.Types.ObjectId,
    ref:"Shop",
    required:true,
    index:true,
},
productId:{
    type:mongoose.Types.ObjectId,
    ref:"Product",
    required:true,
    index:true,
},
quantity:{
    type:Number,
    default:0,
}
})
StockLevelSchema.index({shopId:1,productId:1},{unique:true})
const StockLevel = mongoose.model("StockLevel", StockLevelSchema);
export default StockLevel