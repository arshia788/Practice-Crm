import React, { useState } from 'react'
import FormInput from './FormInput'
import ItemList from './ItemList'

export default function Form({ form, setForm }) {

    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <div>
            <FormInput name="name" lable="Name" type="text"
                changeHandler={changeHandler} value={form.name}
            />

            <FormInput name="lastName" lable="Last-Name" type="text"
                changeHandler={changeHandler} value={form.lastName}
            />

            <FormInput name="email" lable="Email" type="text"
                changeHandler={changeHandler} value={form.email}
            />

            <FormInput name="address" lable="Address" type="text"
                changeHandler={changeHandler} value={form.address}
            />

            <FormInput name="phone" lable="Phone" type="text"
                changeHandler={changeHandler} value={form.phone}
            />

            <FormInput name="postalCode" lable="Postal-Code" type="text"
                changeHandler={changeHandler} value={form.postalCode}
            />

            <FormInput name="date" lable="Date" type="date"
                changeHandler={changeHandler} value={form.date}
            />

            <ItemList form={form} setForm={setForm} />

        </div>
    )
}

