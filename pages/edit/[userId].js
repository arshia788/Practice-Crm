import React, { useEffect, useState } from 'react'
import EditPage from '../../components/templates/EditPage'
import { useRouter } from 'next/router'

function EditIndex() {  

    const [data, setData]= useState([]);
    console.log(data);

    const router= useRouter();

    const {query:{userId}, isReady}= router


    useEffect(()=>{
        if(isReady){
            fetch(`/api/edit/${userId}`)
            .then(res=> res.json())
            .then(data=> setData(data.data))
        }

    },[isReady])


    if(data) return <EditPage data={data} id={userId}/>
}

export default EditIndex