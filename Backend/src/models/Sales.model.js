import mongoose from "mongoose";


const SalesItemSchema = new mongoose.Schema({
    prductId:{
        type:mongoose.Types.ObjectId,
        ref:"Product",
    },
    name:String,
    qty:Number,
    unitPrice:Number,
    lineTotal:Number,
});

const SalesSchema = new mongoose.Schema({
    shopId:{
        type:mongoose.Types.ObjectId,
        ref:"Shop",
        required:true,
        index:true,
    },
    item:[SalesItemSchema],
    subTotal:Number,
    tax:{type:Number, default:0},
    discount:{type:Number, default:0},
    total:Number,
    
})
const Sales = mongoose.model("Sales", SalesSchema);
export default Sales;