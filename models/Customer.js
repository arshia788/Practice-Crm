import { Schema, models, model } from "mongoose";

const customerSchema= new Schema({
    name:{
        type:String,
        minLength:3,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String
    },
    address:{
        type:String
    },
    postalCode:{
        type:String,
    },
    date:Date,
    products:{
        type:Array,
        default:[]
    },
    createdAt:{
        type:Date,
        default:()=> Date.now(),
        immutable:true
    },
    updatedAt:{
        type:Date,
        default:()=> Date.now(),
    }    
})

const Customer1 = models.Customer1 || model("Customer1", customerSchema);
export default Customer1
