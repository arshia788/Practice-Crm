import coonectDB from "../../../utils/connectDB";
import Customer1 from "../../../models/Customer";

export default async function handler(req,res){
    try{
        await coonectDB()
    }catch(err){
        console.log(err);
        res.status(500).json({status:'failed', message:'failed to connect to DB'})
        return;
    }

    if(req.method === "POST"){
        const {data} = req.body;

        if(!data.name || !data.email || !data.lastName){
            return res.status(400).json({status:'failed', message:'Invalid data'})
        }

        try{
            const customer = await Customer1.create(data)
            res.status(200).json({status:"success", message:"data created", data:customer})
        }catch(err){
            res.status(500).json({status:'failed', message:'failed to send data to DB'})

        }
    }
}
