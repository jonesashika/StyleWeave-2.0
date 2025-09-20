import React, { useState ,useRef,useCallback} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import confetti from "canvas-confetti";
const CreateFormComponent = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState("");
  const [size, setSize] = useState("");
  const [payment, setPayment] = useState("");

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const confettiRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    // trigger show message
    setShowModal(true);
    // you can also reset form or do other tasks here
     triggerConfetti();
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const triggerConfetti = useCallback(() => {
    // one burst
    confetti({
      particleCount: 180,
      spread: 70,
      origin: { y: 0.5 },
      shapes: ['circle', 'star','square'],
      colors: ['#ff0', '#f00', '#0f0', '#0ff', '#00f','rgba(248, 193, 27, 1)', 'rgba(255, 24, 186, 1)','rgba(136, 255, 0, 1)', 'rgba(255, 0, 60, 1)']
    });
    // you could add more shots or shower effect
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   axios
  //     .post("http://localhost:3007/posts", {
  //       Name: name,
  //       Phone: phone,
  //       Address: address,
  //       Quantity: quantity,
  //       Size: size,
  //       Payment: payment
  //     })
  //     .then((res) => {
  //       navigate("/list");
  //       console.log(res?.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

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
            required
          />
        </Form.Group>

        <Form.Group className="w-70 mb-3 p-2 justify-self-center" controlId="formBasicPhone">
          <Form.Control
            type="number"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="w-70 mb-3 p-2 justify-self-center" controlId="formBasicAddress">
          <Form.Control
            type="text"
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="w-70 mb-3 p-2 justify-self-center" controlId="formBasicOrder">
          <Form.Control
            className="we"
            type="number"
            placeholder="Your Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="w-70 mb-3 p-2 justify-self-center" controlId="formBasicOrder">
          <Form.Select
            className="we"
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
        <Form.Group className="w-70 mb-4 mb-3 p-2 justify-self-center" controlId="formBasicOrder">
          <Form.Select
            className="we"
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
        <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
          <Button variant="success" type="submit">
            Submit
          </Button>
          <Button onClick={() => navigate("/intro")} className="kk" variant="secondary">
            Back to Collections
          </Button>
        </div>
      </Form>
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0, width: "100%", height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "40px",
              borderRadius: "8px",
              minWidth: "280px",
              textAlign: "center",
              lineHeight: "50px"

            }}
          >
            <b style={{ color: 'green', marginBottom: '25' }}>" Your Order is Confirmed! "</b> <br />
            <Button variant="dark" onClick={closeModal}>Close</Button>
          </div>
        </div>
      )}
    </div>
  );
}





export default CreateFormComponent;