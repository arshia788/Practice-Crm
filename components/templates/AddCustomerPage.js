import React, { useState } from 'react'
import Form from '../modules/Form'
import { useRouter } from 'next/router'

export default function AddCustomerPage() {

  const [form, setForm] = useState({
    name: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postalCode: '',
    date: '',
  })

  const router= useRouter();

  const saveHandler=async()=>{
    const res= await fetch('/api/customer',{
      method:"POST",
      body:JSON.stringify({data:form}),
      headers:{"Content-Type":"application/json"}
    })
    const data= await res.json()
    console.log(data);
  }

  const cancelHandler = async () => {
    setForm({
      name: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      postalCode: '',
      date: '',
    })

    router.push('/')
  }

  return (
    <div >
      <h2 className='text-white font-semibold text-lg mb-4'>AddCustomerPage</h2>

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

