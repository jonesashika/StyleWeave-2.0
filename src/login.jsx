import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Background from './assets/projectimgs/background.jpg'
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (u) => u.Email === email && u.Password === password
    );
    if (foundUser) {
      alert("Login successful");
      navigate("/intro");
    } else {
      alert("User doesn't exist, please Signup");
      navigate("/signup");
    }
  };

  return (
    <div
      className="w-100 h-157 bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${Background})`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -40,
      }}
    >
      <h1 className="text-center" style={{ color: "brown" }}>
        LOGIN
      </h1>
      {error && (
        <div className="text-danger mb-3" style={{ fontWeight: "bold" }}>
          {error}
        </div>
      )}
      <Form.Floating className="mt-3 mb-3 w-80 text-center p-2">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <Form.Floating className="w-80 p-2">
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
      <p className="mt-3">
        Don't have an account? <a style={{color:'blue',textDecorationColor:'blue',textDecorationLine:'underline'}} onClick={() => navigate("/signup")}>Sign up</a>
      </p>
      <Button className="mt-3" variant="outline-danger" onClick={handleSubmit}>
        SUBMIT
      </Button>
    </div>
  );
};

export default Login;
