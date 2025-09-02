import React, { useState } from 'react'

// export const Comp = () => {
//     const[name,setName]=useState()
//     const Click=()=>{
//         setName("Ashika")
//     }
//   return (
//     <div>
//         <p>My name is {name}</p>
//         <button onClick={Click}>click here</button>
//     </div>
//   )
// }


export const use = () => {
    const[name,setEmail]=useState()
    const Click= () => {
        setEmail('jonesashika004@gmail.com')
    }
  return (
    <div>
        <p>My email is {name}</p>
        <button onClick={Click}>click here</button>
    </div>
  )
}

export default use
