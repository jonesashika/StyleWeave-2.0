import axios from "axios";
import { Button, Modal, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
import { Card, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
const App = () => {
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [delID, setDelID] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setDelID(id);
    setShow(true);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3007/posts");
      setValue(response?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteFn = () => {
    axios
      .delete(`http://localhost:3007/posts/${delID}`)
      .then(() => {
        fetchData();
        handleClose();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p className="text-center mt-4">Loading...</p>
      ) : (
        <Row xs={1} className="g-3">
          {value.map((kk) => (
            <Col key={kk.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{kk.Name}</Card.Title>
                  <Card.Text>
                    <strong>Id:</strong> {kk.id}<br />
                    <strong>Phone:</strong> {kk.Phone}<br />
                    <strong>Address:</strong> {kk.Address}<br />
                    <strong>Quantity:</strong> {kk.Quantity}<br />
                    <strong>Size:</strong> {kk.Size}<br />
                    <strong>Payment:</strong> {kk.Payment}
                  </Card.Text>
                  <Button variant="warning" size="sm" onClick={() => navigate(`/info/${kk.id}`)}>✏ Edit</Button>{" "}
                  <Button variant="danger" size="sm" onClick={() => handleShow(kk.id)}>🗑 Delete</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <div style={{justifySelf:'center'}}><Button className="mt-3" onClick={() => navigate("/create")}>
        Create
      </Button></div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteFn}>
            🗑 Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default App;