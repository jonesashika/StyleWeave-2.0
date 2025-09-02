import axios from "axios";
import { Button, Modal, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
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
        <Table striped bordered hover style={{ marginTop: "50px" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Quantity</th>
              <th>Size</th>
              <th>Payment</th>
              <th>Actions</th> 
            </tr>
          </thead>
          <tbody>
            {value.map((kk) => (
              <tr key={kk.id}>
                <td>{kk.id}</td>
                <td>{kk.Name}</td>
                <td>{kk.Phone}</td>
                <td>{kk.Address}</td>
                <td>{kk.Quantity}</td>
                <td>{kk.Size}</td>
                <td>{kk.Payment}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => navigate(`/info/${kk.id}`)}
                  >
                   ✏ Edit
                  </Button>{" "}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleShow(kk.id)}
                  >
                    🗑Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      <Button className="mt-3" onClick={() => navigate("/create")}>
        Create
      </Button>

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