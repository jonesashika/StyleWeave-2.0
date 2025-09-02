import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import './Formm.css';

const EditFormComponent = () => {

    const {id} = useParams()
    const [value,setValue] = useState()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [qualification, setQualification] = useState()
    const [phone, setPhone] = useState()
    const navigate = useNavigate()

    const onChangeName = (e,name) =>{
        if(name === "name"){
            setName(e.target.value)
        }else if(name === "email"){
            setEmail(e.target.value)
        }else if(name === "password"){
            setPassword(e.target.value)
        }
        else if(name === "qualification"){
            setQualification(e.target.value)
        }
        else if(name === "phone"){
            setPhone(e.target.value)
        }
    }

    const fetchData=async ()=>{
        try {
          const response = await axios.get(`http://localhost:3006/posts/${id}`);
          setValue(response?.data);
        } catch (error) {
          console.error(error);
        }
    }


    const hadnleSubmitFn = (e) => {
        console.log('name',name);
        axios.patch(`http://localhost:3006/posts/${id}`,
         {
            Name: name,
            Email:email,
            Password:password,
            Qualification:qualification,
            Phone:phone
        }).then((res) => {
            navigate('/list')
            console.log(res?.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className='hi'>
            
            <Form>
                <h1>Registration Form</h1>

                <Form.Group className="we mb-3" >
                 
                    <Form.Control type="text" placeholder="Name"
                        defaultValue={value?.Name}
                     onChange={(e)=>onChangeName(e,"name")}
                      />
                </Form.Group>
                <Form.Group className=" we mb-3" controlId="formBasicEmail">
                   
                    <Form.Control type="email" placeholder=" Email"
                       defaultValue={value?.Email}
                       onChange={(e)=>onChangeName(e,"email")}
                        />
                </Form.Group>

                <Form.Group className=" we mb-3" controlId="formBasicPassword">
                    <Form.Control type="password"
                         defaultValue={value?.Password}
                         onChange={(e)=>onChangeName(e,"password")}
                    placeholder="Password"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicqualification">
                    <Form.Control className='we' type="text"
                        defaultValue={value?.Qualification}
                        onChange={(e)=>onChangeName(e,"qualification")}
                        placeholder="Qualification" />
                </Form.Group>

                <Form.Group className=" we mb-3" controlId="formBasicphone">
                    <Form.Control className='w' type="number"
                        defaultValue={value?.Phone}
                        onChange={(e)=>onChangeName(e,"phone")}
                    placeholder="Phone Number" />
                </Form.Group>

                <Button variant="primary" onClick={hadnleSubmitFn}>
                    Submit
                </Button>
                <Button onClick={()=> navigate('/list')} className='hh'>List</Button>
            </Form>
        </div>
    )
}

export default EditFormComponent