import React, { useState } from 'react'
import FormInput from './FormInput'

export default function Form({ form, setForm }) {

    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <div>
            <FormInput name="name" lable="Name" type="text"
                onChange={changeHandler} value={form.name}
            />

            <FormInput name="lastName" lable="Last-Name" type="text"
                onChange={changeHandler} value={form.lastName}
            />

            <FormInput name="email" lable="Email" type="text"
                onChange={changeHandler} value={form.email}
            />

            <FormInput name="address" lable="Address" type="text"
                onChange={changeHandler} value={form.address}
            />

            <FormInput name="phone" lable="Phone" type="text"
                onChange={changeHandler} value={form.phone}
            />

            <FormInput name="postalCode" lable="Postal-Code" type="text"
                onChange={changeHandler} value={form.postalCode}
            />

            <FormInput name="date" lable="Date" type="date"
                onChange={changeHandler} value={form.date}
            />

        </div>
    )
}

