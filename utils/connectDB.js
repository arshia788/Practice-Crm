import mongoose from "mongoose";

const coonectDB= async()=>{
    if(mongoose.connections[0].readyState) return;
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connect DB");
}

export default coonectDB;


