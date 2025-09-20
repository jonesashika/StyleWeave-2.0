import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Row, Col } from 'react-bootstrap';
import Insta from './assets/projectimgs/insta.png'
import Flipkart from './assets/projectimgs/flip.png'
import Amazon from './assets/projectimgs/amazon.png'
import Ajio from './assets/projectimgs/ajio.png'
import Icon from './assets/projectimgs/shopping.png'
import Anime from './assets/projectimgs/anime.png'
import { useNavigate } from 'react-router-dom';
import Image from './assets/projectimgs/3420594.jpg'
const contactus = () => {
    const navigate = useNavigate()
    return (
        <div className=' bg-no-repeat w-100 bg-cover' style={{ backgroundImage: `url(https://png.pngtree.com/background/20210714/original/pngtree-beautiful-elegant-pink-red-purple-watercolor-smudge-background-picture-image_1220864.jpg)` }}>
            <div className=''>
                <Navbar expand="lg" style={{ marginTop: 0 }}>
                    <Container>
                        <img src={Icon} alt="" style={{ height: 60, width: 50 }} />
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
                        <img src={Anime} alt="" style={{ float: 'right', height: 70, width: 80 }} />
                    </Container>
                </Navbar>
                <div className='text-center bg-no-repeat bg-cover '>
                    <h2 className='text-center p-4 ' style={{ color: '#b8495fff' }}>Contact Us</h2>

                    <Row className='g-0'>
                        <Col xs={12} sm={6} md={6}>

                            <img className='h-100 w-auto p-2' style={{borderRadius:30,objectFit:'fill'}} src="https://img.freepik.com/free-photo/portrait-curly-girl-with-red-lipstick-taking-notes-tablet-pink-background-with-dressees_197531-17620.jpg?semt=ais_incoming&w=740&q=80" alt="" />

                        </Col>
                        <Col xs={12} sm={6} md={6}>
                            <p className='p-2 mt-5 ' style={{ lineHeight: 3, color: '#d21a5aff' }}>At Berrylush, we are dedicated to delivering quality service and offering our customers personalized attention. <br />

                                Feel free to reach out if there's anything we can assist with, improve upon or if you simply want to discuss fashion! <br />

                                Below are the modes of contact through which you can reach us: <br />

                                <strong>📧Email:</strong> support@berrylush.com (9 AM to 6 PM, Monday to Friday) <br />
                                <strong>📞Call:</strong> 011-41133886 (10 AM to 5 PM, Monday to Friday) <br />
                                <strong>WhatsApp:</strong> +918287765980 (9 AM to 6 PM, Monday to Friday) <br />
                            </p>
                        </Col>
                    </Row>


                   
                </div>
            </div>
            <div className='' style={{ marginTop: 0 }}>
                <h3 className='text-center mt-5' style={{ color: '#a9015a', fontFamily: 'cursive' }}>Follow us for the latest update!</h3>
                <div className='p-5' style={{ display: 'flex', flexDirection: 'row', gap: 20, justifySelf: 'center' }}>

                    <div className='box h-15 w-15 bg-red-300  p-2.5' style={{ borderRadius: 20 }}>
                        <a href="https://www.instagram.com/berrylush_com/"><img className='instagram ' style={{ height: 35, width: 35, alignSelf: 'center', justifySelf: 'center' }} src={Insta} alt="" /></a>
                    </div>
                    <div className='box h-15 w-15 bg-red-300  p-2.5' style={{ borderRadius: 20 }}>
                        <a href="https://www.google.com/search?q=flipkart+leriya+fashion+clothing+women&sca_esv=aa04d796f8c6ba14&udm=2&sxsrf=AE3TifOLwvLv1OpKyJlrCe0rb2cAZFumOA%3A1757427093510&ei=lTXAaOruHqfG4-EP-M-g0Ao&ved=0ahUKEwiqjYKN7suPAxUn4zgGHfgnCKoQ4dUDCBE&uact=5&oq=flipkart+leriya+fashion+clothing+women&gs_lp=EgNpbWciJmZsaXBrYXJ0IGxlcml5YSBmYXNoaW9uIGNsb3RoaW5nIHdvbWVuSM0aUNgCWMUScAF4AJABAJgBlAGgAeEJqgEDMi45uAEDyAEA-AEBmAIBoAIEwgIHECMYJxjJApgDAIgGAZIHATGgB-8DsgcAuAcAwgcDMC4xyAcC&sclient=img"><img className='Flipkart' style={{ height: 35, width: 35, alignSelf: 'center', justifySelf: 'center' }} src={Flipkart} alt="" /></a>
                    </div>
                    <div className='box h-15 w-15 bg-red-300  p-2.5' style={{ borderRadius: 20 }}>
                        <a href="https://www.google.com/search?sca_esv=aa04d796f8c6ba14&sxsrf=AE3TifOipsnt-g4qDLMSaEAYnTjBcPDmUw:1757427145649&q=spring+fashion+amazon+fashion+clothing+women&uds=AOm0WdE2fekQnsyfYEw8JPYozOKz7wITTnAt5qQ4xfLpuGBca8qhB6-B7moxGRtdhzakX4A2itBNtw8aK2jcY_8sc7L27DtrZB24cS2N12FFGV9n8ect1UdN5PlVcFqtmNBg4ALYbcv7dvEwdWtb8qqVE63ZJ2ZOsoehZIKXk_Q43HNtRQ9-9Kw&udm=2&sa=X&ved=2ahUKEwjOuvCl7suPAxWkyzgGHZ1OIR8QxKsJKAN6BAgUEAE&ictx=0&biw=1280&bih=585&dpr=1.5"><img className='amazon' style={{ height: 35, width: 35, alignSelf: 'center', justifySelf: 'center' }} src={Amazon} alt="" /></a>
                    </div>
                    <div className='box h-15 w-15 bg-red-300  p-2.5' style={{ borderRadius: 20 }}>
                        <a href="https://www.google.com/search?q=ajio+fashion+clothing+women&sca_esv=aa04d796f8c6ba14&udm=2&biw=1280&bih=585&sxsrf=AE3TifPMjKW4_BooiRDbKSxjTa9c8DPsVw%3A1757427176721&ei=6DXAaPvXK-aT4-EP9KWHyQk&ved=0ahUKEwj769i07suPAxXmyTgGHfTSIZkQ4dUDCBE&uact=5&oq=ajio+fashion+clothing+women&gs_lp=EgNpbWciG2FqaW8gZmFzaGlvbiBjbG90aGluZyB3b21lbkj8JFCWA1iRH3ABeACQAQCYAacCoAHmGqoBBjAuMjEuM7gBA8gBAPgBAZgCBKACmgXCAgoQABgHGAgYChgewgIIEAAYBxgIGB7CAgYQABgHGB7CAgUQABiABMICBhAAGAgYHpgDAIgGAZIHBTAuMy4xoAe2JbIHBTAuMy4xuAeaBcIHBTItMy4xyAcb&sclient=img"><img className='ajio' style={{ height: 35, width: 35, alignSelf: 'center', justifySelf: 'center' }} src={Ajio} alt="" /></a>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default contactus