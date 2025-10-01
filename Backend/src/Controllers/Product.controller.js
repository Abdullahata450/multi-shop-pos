
import Product from "../models/Product.model.js";
import StockLevel from "../models/StockLevel.model.js";



export const CreateProduct =  async (req,res)=>{
    try {
        const payload = {...req.body , shopId: req.shopId};
        const p = await Product.create(payload);
        if(req.body.initialQty){
            await StockLevel.findOneAndUpdate(
                {shopId:req.shopId,productId:p._id},
                {$set : {quantity : req.body.initialQty}},
                {upsert :true}
            );
        }
        res.status(200).json({message:"Product Created Successfully", product:p});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getProduct = async (req,res)=>{
    try {
        const q = req.query.search;
        const filter = {shopId : req.shopId}

        if(q){
            filter.$or=[
                {name: new RegExp(q, "i")},
                {barcode: new RegExp(q, "i")},
                {sku: new RegExp(q, "i")},
            ]
        }
        const product = await Product.find(filter);
        if(product.length === 0){
            return res.json({message:"Product not found"})
            
        }
        res.status(200).json({product});

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}