import React, { useState } from 'react'

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
  return (
    <div >
      <h2 className='text-white font-semibold text-lg'>AddCustomerPage</h2>

      <div className='flex justify-between items-center mt-4'>
        <button
          className='bg-red-500 rounded text-white px-2 py-1'
        >cancel</button>

        <button
          className='bg-green-500 rounded text-white px-2 py-1'
        >save</button>


      </div>
    </div>
  )
}

