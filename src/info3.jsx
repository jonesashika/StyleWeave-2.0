import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateFormComponent = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");
  const [payment, setPayment] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3007/posts", {
        Name: name,
        Phone: phone,
        Address: address,
        Quantity: quantity,
        Size: size,
        Payment: payment
      })
      .then((res) => {
        navigate("/list");
        console.log(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="hi justify-content-center">
      <Form onSubmit={handleSubmit}>
        <h1 className='text-center mt-4'> Place your order</h1>

        <Form.Group className="w-70 mt-4 mb-3 p-2 justify-self-center">
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="w-70 mb-3 p-2 justify-self-center" controlId="formBasicPhone">
          <Form.Control
            type="number"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="w-70 mb-3 p-2 justify-self-center" controlId="formBasicAddress">
          <Form.Control
            type="text"
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="w-70 mb-3 p-2 justify-self-center" controlId="formBasicOrder">
          <Form.Control
            className="we"
            type="number"
            placeholder="Your Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}

          />
        </Form.Group>
        <Form.Group className="w-70 mb-3 p-2 justify-self-center" controlId="formBasicOrder">
          <Form.Select
            className="we"
            placeholder="Your Size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            <option value="XXXL">XXXL</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="w-70 mb-4 mb-3 p-2 justify-self-center" controlId="formBasicOrder">
          <Form.Select
            className="we"
            placeholder="Your Payment"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          >
            <option value="paytm">Paytm</option>
            <option value="GPay">GPay</option>
            <option value="COD">Cash On Delivery</option>
          </Form.Select>
        </Form.Group>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
          <Button variant="success" type="submit" onClick={() => navigate("/list")} >
            Submit
          </Button>{" "}
          <Button onClick={() => navigate("/list")} className="kk" variant="secondary">
            Back to List
          </Button>
        </div>
      </Form>

    </div>
  );
};

export default CreateFormComponent;