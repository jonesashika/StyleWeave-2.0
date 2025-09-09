import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Faq from './assets/projectimgs/faq.png'
import { useNavigate } from 'react-router-dom';
function FAQ() {
    const navigate = useNavigate()
    return (
        <>
         <Navbar expand="lg" style={{ marginTop: 0 }}>
                <Container>
                    <img src="../src/assets/projectimgs/shopping.png" alt="" style={{ height: 60, width: 50 }} />
                    <Navbar.Brand className=''>Fashion Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link  onClick={() => navigate("/intro")}>Home</Nav.Link>
                            <Nav.Link  onClick={() => navigate("/aboutus")}>About</Nav.Link>
                            {/* <Nav.Link href='/contactus'>Contact</Nav.Link> */}
                            <NavDropdown title="Contact" id="contact-nav-dropdown">
                                <NavDropdown.Item  onClick={() => navigate("/contactus")}>Email Us</NavDropdown.Item>
                                <NavDropdown.Item  onClick={() => navigate("/ques")}>FAQs</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item  onClick={() => navigate("/feedback")}>Feedback</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                    <img src="../src/assets/projectimgs/anime.png" alt="" style={{ float: 'right', height: 70, width: 90 }} />
                </Container>
            </Navbar>
        <div className='flex justify-content-center'><img style={{height:80,width:80,marginTop:30}} src={Faq} alt="" /><h4 className='text-center p-5'>Frequently Asked Questions</h4></div>
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>What is your return policy?</Accordion.Header>
                <Accordion.Body>
                    You can return any item within 30 days of purchase.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Do you ship internationally?</Accordion.Header>
                <Accordion.Body>
                    Yes, we ship to most countries worldwide.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>How can I reset my password?</Accordion.Header>
                <Accordion.Body>
                    Please click on the reset password option and you will receive an email on your registered email address within 10-15 minutes. Kindly click on reset password to change it.
                    Kindly note that it is an auto-generated email which can go in your junk/spam folder too.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>How can I track my order</Accordion.Header>
                <Accordion.Body>
                    Please tap on 'Account' section and select the order, it will re-direct you to the page where there will be an option of Tracking.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>How do I cancel the order?</Accordion.Header>
                <Accordion.Body>
                    Order can be canceled within 6 hours of order placing by contact our customer care on email: support@berrylush.com or WhatsApp on +918287765980 or call us on 011-41133886.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>What is the wholesale process?</Accordion.Header>
                <Accordion.Body>
                    There are some terms and conditions as mentioned below.
                    1. You cannot resell on any marketplaces like Amazon, Flipkart, Nyka etc.
                    2. You will get a 50% discount on all the current prices of the items.
                    3. The order has to be a PREPAID order.
                    4. The minimum items should be 50 to avail 50% discount.
                    5. The code is 'BULK50'.
                    6. If you wish to have a GST invoice then you are required to share the GST certificate on on email: support@berrylush.com or WhatsApp us on +918287765980 .
                    For any additional or more details then WhatsApp at 8742978787.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
                <Accordion.Header>How do I place an exchange or return request?</Accordion.Header>
                <Accordion.Body>
                    You can click on the following link to raise a return or exchange request. https://bit.ly/3FZWIoQ or You can simply contact our customer care on email: support@berrylush.com or WhatsApp on +918287765980 or call us on 011-41133886

                    The address is-
                    Berrylsuh Designs Private Limited
                    B-113, sector-67
                    201031 Noida, UP

                    You have to share scan copy of the courier receipt with us for the reimbursement of the shipping charges.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
                <Accordion.Header>Payment issues?</Accordion.Header>
                <Accordion.Body>
                    If your payment is still processing, you will see ‘We have not received payment confirmation from your bank or credit card yet’.
                    In such cases, do not attempt paying a second time unless you are sure that your payment failed. If you accidentally pay twice, we will refund your extra payment within a few days.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8">
                <Accordion.Header>How do I apply coupon on my order?</Accordion.Header>
                <Accordion.Body>
                    Apply the coupon during checkout and you can check out the Best offers on product page and then before proceeding to place the order.

                    You can apply WELCOME250- Get Flat ₹250 Off All Orders Above ₹1499.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </>
    );
}

export default FAQ;
