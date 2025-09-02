import React from 'react'
import axios from 'axios'
const Patching=()=>{
const handleSubmit = () => {
    axios.patch("https://jsonplaceholder.typicode.com/posts/1",{
        title:"Be Positive"
    }).then((res)=>{
        console.log(res.data)

    })
    .catch((error)=>{
      console.log(error)

    })
    alert("updated successfully")
  }
  return (
    <div>
        <button onClick={handleSubmit}>update</button>
    </div>
  )
}

export default Patching