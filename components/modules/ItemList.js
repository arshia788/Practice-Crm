import React from 'react'
import FormInput from './FormInput';

export default function ItemList({ form, setForm }) {

    const { products } = form

    const addHandler = () => {
        setForm({ ...form, products: [...products, { name: '', qty: '', price: '' }] })
    }

    const changeHandler=(e,index)=>{
        const {name, value}= e.target;
        const newProducts= [...products];
        newProducts[index][name]=value
        setForm({...form,products:newProducts})
    }

    const removeHandler= (index)=>{
        const newProducts=[...products];
        newProducts.splice(index,1)
        setForm({...form, products:newProducts})
    }

    return (
        <div className='rounded border border-zinc-500 p-2'>
            <h2 className='my-4 text-white font-semibold'>Purchased-Products</h2>

            {
                products.map((item, index) =>
                    <ProductItem key={index}
                        data={item}
                        changeHandler={(e) => changeHandler(e, index)}
                        removeHandler={(index) => removeHandler(index)} />
                )
            }

            <button
                onClick={addHandler}
                className='border w-full rounded text-green-500 border-green-500 text-center p-1'
            >Add-Item</button>
        </div>
    )
}


function ProductItem({ data, changeHandler, removeHandler }) {
    return (
        <div className='border rounded p-1 border-zinc-400 mb-4'>
            <FormInput name="name" type="text" lable="Product Name" value={data.name} changeHandler={changeHandler} />

            <div className='flex justify-between items-center'>
                <FormInput name="price" type="text" lable="Price" value={data.price} changeHandler={changeHandler}/>
                <FormInput name="qty" type="number" lable="Qty" value={data.qty} changeHandler={changeHandler}/>
            </div>
            <button onClick={removeHandler}
                className='border w-full rounded text-red-500 border-red-500 text-center p-1'
            >Remove-Item</button>

        </div>
    )
}
