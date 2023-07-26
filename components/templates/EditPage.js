import { useState } from 'react';
import Form from '../modules/Form';
import { useRouter } from 'next/router';

export default function EditPage({ data , id}) {

    const [form, setForm] = useState({
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone || '',
        address: data.address || '',
        postalCode: data.postalCode || '',
        date: data.date || '',
        products: [],

    })

    const router= useRouter();

    const cancelHandler=()=>{ router.push('/')}

    const saveHandler=async (id)=>{
        const res= await fetch(`/api/edit/${id}`,{
            method:"PATCH",
            body:JSON.stringify({data:form}),
            headers:{"Content-Type":"application/json"}
        })
        const data= await res.json()
        console.log(data);
    }


    return (
        <div>
            <h2 className='text-xl font-semibold text-white mb-4'>Edit-Page</h2>

            <Form form={form} setForm={setForm} />
            
            <div className='flex justify-between items-center my-4'>
                <button
                    onClick={cancelHandler}
                    className='bg-red-500 rounded text-white px-2 py-1'
                >cancel</button>

                <button
                    onClick={saveHandler}
                    className='bg-green-500 rounded text-white px-2 py-1'
                >save</button>
            </div>

        </div>
    )
}

