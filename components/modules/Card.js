import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

export default function Card({ data }) {

    const router= useRouter();
    const deleteHandler=async(id)=>{
        
        const res= await fetch(`/api/delete/${id}`,{
            method:"DELETE"
        })
        const data= await res.json()
        if(data.statuc === 'success') router.reload()
        console.log(data);
    }


    return (
        <div className='flex justify-between items-center bg-zinc-500 rounded p-2 mb-4'>

            <div className='flex justify-between text-white'>
                <p>{data.name}</p>
                <p className='ml-4'>{data.email}</p>
            </div>

            <div className='flex justify-between gap-x-4'>
                <button
                onClick={()=> deleteHandler(data._id)}
                    className=' bg-red-500 rounded px-2 py-1 text-white'
                >delete</button>

                <Link
                href={`/edit/${data._id}`}
                    className=' bg-blue-500 rounded px-2 py-1 text-white'
                >edit</Link>

                <button
                    className=' bg-green-500 rounded px-2 py-1 text-white'
                >details</button>
            </div>

        </div>
    )
}

