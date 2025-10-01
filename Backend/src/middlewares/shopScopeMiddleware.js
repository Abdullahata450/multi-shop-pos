
export const  shopScope = (req,res,next)=>{
 try {
     const shopId = req.headers['shop-id'] || req.users?.shopId;
     if(!shopId){
        return res.status(401).json({error:"Unauthorized"});
     }
     req.shopId = shopId;
     next();
 } catch (error) {
    
 }
}