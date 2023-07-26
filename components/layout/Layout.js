import Link from 'next/link'
import React from 'react'

export default function Layout({ children }) {
    return (
        <div className='bg-black h-full box-border p-4'>

            <header className='w-10/12 mx-auto flex justify-between items-center text-white'>
                <h2 className='text-zinc-50 text-xl font-semibold'>Next-Crm</h2>
                <Link href='/add-customer' className=' rounded bg-green-500 px-4 py-1'>Add-Customer</Link>
            </header>

            <div className='min-h-10/12 w-10/12 mx-auto mt-8'>
                {children}
            </div>

            <footer className='w-10/12 mx-auto bg-zinc-300  text-center p-2 rounded'>
                <p>CRM-PROJECT</p>
            </footer>
        </div>
    )
}

