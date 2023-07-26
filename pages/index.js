import connectDB from '../utils/connectDB';
import Customer1 from '../models/Customer1';
import HomePage from '../components/templates/HomePage';

export default function index({data}) {

  return (
    <div>
      <HomePage data={data}/>
    </div>
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
    res.status(500).json({ status: "failed", message: "failed to connect to DB" })
    return;
  }


} 