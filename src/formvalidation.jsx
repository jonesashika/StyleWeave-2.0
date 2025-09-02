
import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import './form.css'

const Form = () => {
  const schema = yup
    .object()
    .shape({
      firstname: yup.string().required("firstname is required"),
      lastname: yup.string().required("lastname is required"),
      email: yup.string().required("email is required"),
      password: yup.string().min(4).max(8).required("password is required"),
      confirmpassword: yup.string().oneOf([yup.ref("password"), null], "password does not match")
    })
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const submit = (data) => {
    alert("Registered  successfully")
    console.log(data)
  }

  return (
    <div className='hi'>
      <div className='hello'>
        <form onSubmit={handleSubmit(submit)}>

          <div>
            <h1 style={{ marginLeft: 60 }}>LOGIN FORM</h1>
            <input type='text' style={{ height: 30, width: 300, textAlign: 'center' }} placeholder='First-Name' {...register("firstname")} />
            <p>{errors.firstname?.message}</p>
          </div>
          <div>
            <input type='text' style={{ height: 30, width: 300, textAlign: 'center' }} placeholder='Last-Name'  {...register("lastname")} />
            <p>{errors.lastname?.message}</p>
          </div>
          <div>
            <input type='email' style={{ height: 30, width: 300, textAlign: 'center' }} placeholder='Email'  {...register("email")} />
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <input type='password' style={{ height: 30, width: 300, textAlign: 'center' }} placeholder='Password'  {...register("password")} />
            <p>{errors.password?.message}</p>
          </div>
          <div>
            <input type='password' style={{ height: 30, width: 300, textAlign: 'center' }} placeholder='Conform-
                Password'  {...register("confirmpassword")} />
            <p>{errors.confirmpassword?.message}</p>
          </div>
          <button style={{ marginLeft: 100, padding: 15, height: 3, borderRadius: 10, width: 70 }}>submit</button>
        </form>

      </div>

    </div>

  )
}

export default Form