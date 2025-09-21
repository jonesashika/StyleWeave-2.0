import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [show, setShow] = useState(false);
  const [delID, setDelID] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Location state in OrderList:", location.state);
  const passedState = location.state?.order;
  // const {
  //   name = "",
  //   phone = "",
  //   address = "",
  //   quantity = "",
  //   size = "",
  //   payment = ""
  // } = location.state || {};
  // const passedState = location.state?.order;
  // Manage orders in local state or if you store orders somewhere (in localStorage or backend)
  const [orderToDelete, setOrderToDelete] = useState(null);

  useEffect(() => {
    if (passedState) {
      // Optionally assign new id
      const newOrder = {
        id: Math.random().toString(36).substr(2, 9),
        ...passedState
      };
      // Add the passed order to the orders list
      setOrders((prev) => [...prev, newOrder]);
    }
  }, [passedState]);

  const handleShow = (id) => {
    setOrderToDelete(id);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setOrderToDelete(null);
  };

  const deleteOrder = () => {
    setOrders((prev) => prev.filter((o) => o.id !== orderToDelete));
    handleClose();
  };

  // const fetchOrders = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:3007/posts");
  //     setOrders(res.data);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // const handleShow = (id) => {
  //   setDelID(id);
  //   setShow(true);
  // };
  // const handleClose = () => setShow(false);

  // const deleteOrder = async () => {
  //   try {
  //     await axios.delete(`http://localhost:3007/posts/${delID}`);
  //     fetchOrders();
  //     handleClose();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchOrders();
  // }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2 className="mb-4 text-danger">📋 Orders List</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Quantity</th>
            <th>Size</th>
            <th>Payment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody> {orders.length === 0 ? (
          <tr>
            <td colSpan="8" className="text-center">
              No orders found.
            </td>
          </tr>
        ) : (
          orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.name}</td>
              <td>{order.phone}</td>
              <td>{order.address}</td>
              <td>{order.quantity}</td>
              <td>{order.size}</td>
              <td>{order.payment}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleShow(order.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          )))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this order?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteOrder}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderList;