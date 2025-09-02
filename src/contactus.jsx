import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col } from 'react-bootstrap';
const contactus = () => {
    return (
        <>
            <div className=''>
                <Navbar expand="lg" style={{ marginTop: 0 }}>
                    <Container>
                        <img src="../src/assets/projectimgs/shopping.png" alt="" style={{ height: 60, width: 50 }} />
                        <Navbar.Brand className=''>Fashion Store</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href='/intro'>Home</Nav.Link>
                                <Nav.Link href='/aboutus'>About</Nav.Link>
                                {/* <Nav.Link href='/contactus'>Contact</Nav.Link> */}
                                <NavDropdown title="Contact" id="contact-nav-dropdown">
                                    <NavDropdown.Item href="/contactus">Email Us</NavDropdown.Item>
                                    <NavDropdown.Item href="/ques">FAQs</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/feedback">Feedback</NavDropdown.Item>
                                </NavDropdown>

                            </Nav>
                        </Navbar.Collapse>
                        <img src="../src/assets/projectimgs/anime.png" alt="" style={{ float: 'right', height: 70, width: 80 }} />
                    </Container>
                </Navbar>
                <div className='text-center bg-no-repeat bg-cover ' style={{ backgroundImage: "url('../src/assets/projectimgs/contactbg.jp')", backgroundSize: '100% 100%', color: 'black', textShadow: '5px 5px 2px pink' }}>
                    <h2 className='text-center p-4 ' style={{ color: 'brown' }}>Contact us</h2>

                    <Row className='g-0'>
                        <Col xs={12} sm={6} md={6}>

                            <img className='h-100 w-auto p-2' src="../src/assets/projectimgs/3420594.jpg" alt="" />

                        </Col>
                        <Col xs={12} sm={6} md={6}>
                            <p className='p-2 mt-5 ' style={{ lineHeight: 3, color: 'maroon' }}>At Berrylush, we are dedicated to delivering quality service and offering our customers personalized attention. <br />

                                Feel free to reach out if there's anything we can assist with, improve upon or if you simply want to discuss fashion! <br />

                                Below are the modes of contact through which you can reach us: <br />

                                <strong>Email:</strong> support@berrylush.com (9 AM to 6 PM, Monday to Friday) <br />
                                <strong>Call:</strong> 011-41133886 (10 AM to 5 PM, Monday to Friday) <br />
                                <strong>WhatsApp:</strong> +918287765980 (9 AM to 6 PM, Monday to Friday) <br />
                            </p>
                        </Col>
                    </Row>


                    <Form style={{ justifySelf: 'center', color: 'maroon' }}>
                        <h5 className='mb-5' style={{ textDecorationLine: 'underline' }}> Give Your Feedback Here</h5>
                        <Form.Group className="mb-3 w-80 p-2" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3 w-80 p-2" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button className='mt-4' variant="outline-warning" >SUBMIT</Button>
                    </Form>
                </div>
            </div>
            <div className='' style={{ marginTop: 0 }}>
                <h3 className='text-center mt-5' style={{ color: 'orchid', fontFamily: 'cursive' }}>Follow us for the latest update!</h3>
                <div className='p-5' style={{ display: 'flex', flexDirection: 'row', gap: 20, justifySelf: 'center' }}>

                    <div className='box h-15 w-15 bg-pink-200  p-2.5' style={{ borderRadius: 20 }}>
                        <img className='instagram ' style={{ height: 35, width: 35, alignSelf: 'center', justifySelf: 'center' }} src="../src/assets/projectimgs/insta.png" alt="" />
                    </div>
                    <div className='box h-15 w-15 bg-pink-200  p-2.5' style={{ borderRadius: 20 }}>
                        <img className='Flipkart' style={{ height: 35, width: 35, alignSelf: 'center', justifySelf: 'center' }} src="../src/assets/projectimgs/flip.png" alt="" />
                    </div>
                    <div className='box h-15 w-15 bg-pink-200  p-2.5' style={{ borderRadius: 20 }}>
                        <img className='amazon' style={{ height: 35, width: 35, alignSelf: 'center', justifySelf: 'center' }} src="../src/assets/projectimgs/amazon.png" alt="" />
                    </div>
                    <div className='box h-15 w-15 bg-pink-200  p-2.5' style={{ borderRadius: 20 }}>
                        <img className='ajio' style={{ height: 35, width: 35, alignSelf: 'center', justifySelf: 'center' }} src="../src/assets/projectimgs/ajio.png" alt="" />
                    </div>
                </div>
            </div>



        </>
    )
}

export default contactus