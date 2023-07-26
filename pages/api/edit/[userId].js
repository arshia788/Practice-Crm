import Customer1 from "../../../models/Customer1";

export default async function handler(req, res){
    try{
        await connectDB()
    }catch(err){
        console.log(err);
        res.status(500).json({status:"success", message:"failed to connect to DB"})
        return;
    }

    if(req.method === "PATCH"){
        const {userId}= req.query;
        const data= req.body.data

        try{
            const customer= await Customer1.findOne({_id:userId})
            customer.name= data.name
            customer.lastName= data.lastName
            customer.email= data.email
            customer.address= data.address
            customer.phone= data.phone
            customer.postalCode= data.postalCode
            customer.date= data.date
            customer.products= data.products
            customer.updatedAt= Date.noe()
            customer.save()

            res.status(200).json({status:'success', data:customer})
        }catch(err){
            res.status(400).json({status:"success", message:"failed to recieve the user to DB"})

        }
    }
}