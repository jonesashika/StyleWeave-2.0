
import axios from 'axios'
import { useState } from 'react'
const Post = () => {
     const url="https://jsonplaceholder.typicode.com/posts"
     const[firstName,setFirstName]=useState([])
     const[lastName,setLastName]=useState([])
     const fetchData=(event=>{
        event.preventDefault()
        axios.post(url,{
            firstName,
            lastName
        }).then((res=>{
            console.log(res.data)
        }))
        .catch((error=>{
            console.log(error)
        }))
     })
  return (
    <div>
        <div>
            <label htmlFor="">First Name</label>
            <input type="text" onChange={(event=>setFirstName(event.target.value))} />
        </div>
        <div>
            <label htmlFor="">Last Name</label>
            <input type="text" onChange={(event=>setLastName(event.target.value))} />

        </div>
        <button onClick={fetchData}>Submit</button>

    </div>
  )
}

export default Post