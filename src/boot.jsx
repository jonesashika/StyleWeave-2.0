import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Img from '../src/assets/download.jpeg';

function FormExample() {
  return (
    <Navbar bg="light" expand="lg" className="justify-content-between px-3">
      <Container>
        <Form className="d-flex">
          <InputGroup>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Form>

        <Form>
          <Row className="align-items-center">
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className="me-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
}

function TypesExample() {
  return (
    <div className="p-3">
      <Button variant="primary" className="me-2">Primary</Button>
      <Button variant="secondary" className="me-2">Secondary</Button>
      <Button variant="success" className="me-2">Success</Button>
      <Button variant="warning" className="me-2">Warning</Button>
      <Button variant="danger" className="me-2">Danger</Button>
      <Button variant="info" className="me-2">Info</Button>
      <Button variant="light" className="me-2">Light</Button>
      <Button variant="dark" className="me-2">Dark</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}


function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


export { FormExample, TypesExample,BasicExample };
