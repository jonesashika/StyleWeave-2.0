import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function CheckoutModal({ show, handleClose, onSubmit }) {
  
  const [formData, setFormData] = useState({
    size: '',
    quantity: 1,
    payment: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Checkout</Modal.Title>
      </Modal.Header>
      <Form onSubmit={submitForm}>
        <Modal.Body>
          <Form.Group controlId="size">
            <Form.Label>Size</Form.Label>
            <Form.Select name="size" value={formData.size} onChange={handleChange} required>
              <option value="">Select size</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">X-Large</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="quantity" className="mt-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              name="quantity"
              min="1"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="payment" className="mt-3">
            <Form.Label>Payment Method</Form.Label>
            <Form.Select name="payment" value={formData.payment} onChange={handleChange} required>
              <option value="">Select payment</option>
              <option value="online">Online Payment</option>
              <option value="cod">Cash On Delivery</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="address" className="mt-3">
            <Form.Label>Delivery Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="123 Your Street, City"
              required
            />
          </Form.Group>

          <Form.Group controlId="phone" className="mt-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              required
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button type="submit" variant="primary">Confirm Purchase</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default CheckoutModal;
