import React from 'react'
import Card from '../modules/Card'

export default function HomePage({data}) {
  return (
    <div>
        <h2 className='text-white text-xl font-semibold'>Customers</h2>

        {
            data.map(item=> <Card key={item._id} data={item}/>)
        }
    </div>
  )
}

 