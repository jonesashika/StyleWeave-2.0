import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Button, Table, Modal, Card, Row, Col, Container } from "react-bootstrap";

const OrderList = () => {
  const location = useLocation();
  const passedOrder = location.state?.order;

  const [orders, setOrders] = useState([]);
  const seenRef = useRef(false);

  const [show, setShow] = useState(false);
  const [orderToDelete, setOrderToDelete] = useState(null);

  useEffect(() => {
    if (passedOrder && !seenRef.current) {
      seenRef.current = true;
      const newOrder = { id: Date.now(), ...passedOrder };
      setOrders(prev => [...prev, newOrder]);
    }
  }, [passedOrder]);

  const handleShow = (id) => {
    setOrderToDelete(id);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setOrderToDelete(null);
  };

  const deleteOrder = () => {
    if (orderToDelete == null) return;
    setOrders(prev => prev.filter(o => o.id !== orderToDelete));
    handleClose();
  };

  return (
    <>
      <h2 className="mb-4 text-danger d-none d-md-block text-center mt-5">📋 Orders List</h2>
      <Container style={{ padding: "30px" }}>
        


        {/* Desktop View: Table */}
        <div className="d-none d-md-block">
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
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center">
                    No orders found.
                  </td>
                </tr>
              ) : (
                orders.map(o => (
                  <tr key={o.id}>
                    <td>{o.id}</td>
                    <td>{o.name}</td>
                    <td>{o.phone}</td>
                    <td>{o.address}</td>
                    <td>{o.quantity}</td>
                    <td>{o.size}</td>
                    <td>{o.payment}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleShow(o.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>

        {/* Mobile View: Cards */}
        
        <div className="d-block d-md-none">
          {orders.length === 0 ? (
            <p className="text-center">No orders found.</p>
          ) : (
            <Row>
              {orders.map(o => (
                <Col xs={12} sm={6} md={4} lg={3} key={o.id} className="mb-3">
                  <Card className="shadow-sm">
                    <Card.Body>
                      <Card.Title>Order ID: {o.id}</Card.Title>
                      <Card.Text><strong>Name:</strong> {o.name}</Card.Text>
                      <Card.Text><strong>Phone:</strong> {o.phone}</Card.Text>
                      <Card.Text><strong>Address:</strong> {o.address}</Card.Text>
                      <Card.Text><strong>Quantity:</strong> {o.quantity}</Card.Text>
                      <Card.Text><strong>Size:</strong> {o.size}</Card.Text>
                      <Card.Text><strong>Payment:</strong> {o.payment}</Card.Text>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleShow(o.id)}
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>

        {/* Modal for Delete Confirmation */}
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
      </Container>
    </>
  );
};

export default OrderList;
