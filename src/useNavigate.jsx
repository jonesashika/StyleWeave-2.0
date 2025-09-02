import React from 'react'
import {useNavigate} from 'react-router-dom'
export const Register = () => {
    const navigate=useNavigate()
  return (
    <div>
        <h1>Welcome to Register</h1>
        <button onClick={()=>navigate ('/login')}>click to login</button>
    </div>
  )
}
export default Register