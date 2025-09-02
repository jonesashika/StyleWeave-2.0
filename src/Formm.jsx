import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './Formm.css'
import { useNavigate } from 'react-router-dom';

const Component = () => {
    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [qualification, setQualification] = useState([])
    const [phone, setPhone] = useState([])
    const navigate = useNavigate()
    const handleSubmit = () => {
        axios.post("http://localhost:3006/posts",
         {
            Name: name,
            Email:email,
            Password:password,
            Qualification:qualification,
            Phone:phone
        }).then((res) => {
            navigate('/getform')
            console.log(res?.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className='hi'>
            
            <Form>
                <h1>Registration Form</h1>

                <Form.Group className="we mb-3" >
                  
                    <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className=" we mb-3" controlId="formBasicEmail">
                   
                    <Form.Control type="email" placeholder=" Email" onChange={(e) => setEmail(e.target.value)} />
                  
                </Form.Group>

                <Form.Group className=" we mb-3" controlId="formBasicPassword">
                  
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group className="we mb-3" controlId="formBasicqualification">
                   
                    <Form.Control type="text" placeholder="Qualification" onChange={(e) => setQualification(e.target.value)}/>
                </Form.Group>
                <Form.Group className=" we mb-3" controlId="formBasicphone">
                   
                    <Form.Control className='w' type="number" placeholder="Phone Number"onChange={(e) => setPhone(e.target.value)} />
                </Form.Group>

                <Button variant="primary" onClick={handleSubmit} >
                    Submit
                </Button>
                <Button onClick={()=> navigate('/getform')} className='kk'>List</Button>
            </Form>
        </div>
    )
}

export default Component