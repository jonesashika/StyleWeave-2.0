import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Delete = () => {
    const url="https://jsonplaceholder.typicode.com/posts/1"
    const[value,setValue]=useState([])
    const fetchData=()=>{
        axios.get(url).then((res)=>{
            console.log(res.data)
            setValue(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    const Deleting=()=>{
        axios.delete(url).then((res)=>{
            console.log(res.data)
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
        <div>id:{value.id}</div>
        <div>id:{value.title}</div>
        <div>id:{value.body}</div>
        <button onClick={Deleting}>delete</button>

    </div>
  )
}

export default Delete