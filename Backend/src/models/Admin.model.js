import mongoose from "mongoose";

const UserScheme = new mongoose.Schema({
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
        default:"admin"
     },
     shopId:{
       type:mongoose.Types.ObjectId,
       ref:"Shop"
     },
     createdAt: {
        type: Date,
        default: Date.now,
      },
})

const Admin = mongoose.model("Admin", UserScheme);
export default Admin