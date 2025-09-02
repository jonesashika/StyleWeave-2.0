import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'Name is required.';
    if (!email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = 'Please enter a valid email address.';

    if (!password) newErrors.password = 'Password is required.';

    if (!phone.trim()) newErrors.phone = 'Phone number is required.';
    else if (!/^\d{10}$/.test(phone))
      newErrors.phone = 'Phone number must be exactly 10 digits.';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { Name: name, Email: email, Password: password, Phone: phone };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some(u => u.Email === email)) {
      alert("User already registered, please login!");
      navigate('./');
      return;
    }
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registered successfully, please login.");
    navigate('./');
  };

  return (
    <div
      className="text-center bg-cover h-170"
      style={{
        backgroundImage: "url(https://img.freepik.com/free-photo/young-woman-wearing-colorful-winter-clothes_273609-20939.jpg)",
        marginTop: 0,
        alignContent: 'center',
      }}
    >
      <h1 style={{ color: 'purple', fontFamily: 'cursive' }}>SIGN UP</h1>
      <Form
        noValidate
        onSubmit={handleSubmit}
        style={{
          alignItems: 'center',
          justifySelf: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Form.Group className="mb-3 w-90 p-4">
          <Form.Control
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            isInvalid={!!errors.name}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 w-90 p-4">
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={!!errors.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 w-90 p-4">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={!!errors.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 w-90 p-4">
          <Form.Control
            name="phone"
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            isInvalid={!!errors.phone}
            required
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>
        <p>
          Already have an account, please <a href="./">login</a>
        </p>
        <Button variant="info" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
