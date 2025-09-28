import mogoose from "mongoose";

export const connectDB = async ()=>{
    try{
        const con = await mogoose.connect(process.env.MONGO_URI);
        console.log(`Database connected with ${con.connection.host}`);
    }
    catch(error){
        console.log(error.message);
    }
}