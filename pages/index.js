import connectDB from '../utils/connectDB';
import Customer1 from '../models/Customer1';

export default function index({data}) {
  console.log(data);
  
  return (
    <div >index</div>
  )
}

export async function getServerSideProps() {
  try {
    await connectDB()
    const customer= await Customer1.find()
    return{
      props:{
        data:JSON.parse(JSON.stringify(customer))
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "success", message: "failed to connect to DB" })
    return;
  }


} 