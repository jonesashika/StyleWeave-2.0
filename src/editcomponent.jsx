// Make sure to import:
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
const EditFormComponent = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("XS");
  const [payment, setPayment] = useState("COD");

  const handleSubmitFn = (e) => {
    e.preventDefault();
    const formData = {
      name,
      phone,
      address,
      quantity,
      size,
      payment
    };
    console.log("About to navigate with state:", formData);
    navigate("/cart", { state: { order: formData } });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
          <Card className="p-4 rounded-4" style={{ width: "400px" }}>
            <h2 className="text-center mb-4">Fill Your Details</h2>
            <Form onSubmit={handleSubmitFn}>
              <Form.Group className="mb-3 ">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
    
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </Form.Group>
    
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicOrder">
                <Form.Control
                  className="we"
                  type="text"
                  placeholder="Your Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicOrder">
                <Form.Select
                  placeholder="Your Size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  required
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
                  required
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
