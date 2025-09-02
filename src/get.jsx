import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Get = () => {
    const url="https://jsonplaceholder.typicode.com/posts"
    const[value,setValue]=useState([])
    const fetchData=()=>{
        axios.get(url).then(res=>{
            console.log(res.data)
            setValue(res.data)

        })
        .catch(error=>{
        console.log(error)
    })
    }
    useEffect(()=>{
        fetchData()
    },[])
    
  return (
    <div>
        {value.map(kk=>(
            <ul style={{listStyleType:"none"}}>
                <li key={kk.id}>
                    <div>id:{kk.id}</div>
                    <div>name:{kk.id}</div>
                    <div>email:{kk.id}</div>
                    <div>body:{kk.id}</div>

                </li>
            </ul>
        ))}
    </div>
  )
}

export default Get