import React, { useEffect, useState } from 'react'

export const comp = () => {
    const[count,setCount]=useState(0)
    const[name,setName]=useState()
    useEffect( () => {
        console.log(count)
        console.log(name)
    },[name,count])

  return (
    <div>
        <button onClick={()=>setCount(count+1)} disabled={count>=10 && true}>click here</button><br />
        <div>{count}</div>
        <button onClick={()=>setName('ashika')}>click here</button><br />
        {name}
    </div>
  )
}
export default comp
