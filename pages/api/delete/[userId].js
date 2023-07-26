import connectDB from '../../../utils/connectDB';
import Customer1 from '../../../models/Customer1';

export default async function handler(req, res){
    try{
        await connectDB()
    }catch(err){
        console.log(err);
        res.status(500).json({status:"success", message:"failed to connect to DB"})
    }

    if(req.method=== 'DELETE'){
        const {userId}= req.query;
        try{
            const customer1= await Customer1.deleteOne({_id:userId})
            res.status(200).json({status:"success", data:customer1})

        }catch(err){
            console.log(err);
            res.status(400).json({status:"success", message:"failed to delete user from DB"})

        }
    }
}


