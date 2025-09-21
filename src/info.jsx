import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useNavigate, useParams } from 'react-router-dom';

const EditFormComponent = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");
  const [payment, setPayment] = useState("");

  const navigate = useNavigate();
  const handleSubmitFn = (e) => {
    e.preventDefault();

    // you might want validation here ...

    const formData = {
      name,
      phone,
      address,
      quantity,
      size,
      payment
    };

    // pass formData via state
    navigate("/list", { state: formData });
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:3007/posts/${id}`);
  //     const data = response?.data;
  //     setName(data?.Name || "");
  //     setPhone(data?.Phone || "");
  //     setAddress(data?.Address || "");
  //     setQuantity(data?.Order || "");
  //     setSize(data?.Order || "");
  //     setPayment(data?.Order || "");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handleSubmitFn = (e) => {
  //   e.preventDefault();
  //   axios
  //     .patch(`http://localhost:3007/posts/${id}`, {
  //       Name: name,
  //       Phone: phone,
  //       Address: address,
  //       Quantity: quantity,
  //       Size: size,
  //       Payment: payment,
  //     })
  //     .then((res) => {
  //       navigate('/list');
  //       console.log(res?.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <Container className="d-flex justify-content-center align-items-center ">
      <Card className="p-4 rounded-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Edit Your Order</h2>
        <Form onSubmit={handleSubmitFn}>
          <Form.Group className="mb-3 ">
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="number"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicOrder">
            <Form.Control
              className="we"
              type="text"
              placeholder="Your Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicOrder">
            <Form.Select
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
          <Form.Group className="mb-3" controlId="formBasicOrder">
            <Form.Select
              placeholder="Your Payment"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
            >
              <option value="paytm">Paytm</option>
              <option value="GPay">GPay</option>
              <option value="COD">Cash On Delivery</option>
            </Form.Select>
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button onClick={() => navigate('/intro')} variant="secondary">
              Back to Collections
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default EditFormComponent;