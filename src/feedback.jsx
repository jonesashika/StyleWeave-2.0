import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Ficon from './assets/projectimgs/ficon.png'
import Icon from './assets/projectimgs/shopping.png'
import Anime from './assets/projectimgs/anime.png'
import { useNavigate } from 'react-router-dom';
const feedback = () => {
    const navigate = useNavigate()
    return (
        <div className=' bg-no-repeat w-100 bg-cover h-100' style={{ backgroundImage: `url(https://png.pngtree.com/background/20210714/original/pngtree-beautiful-elegant-pink-red-purple-watercolor-smudge-background-picture-image_1220864.jpg)` }}>
            <Navbar expand="lg" style={{ marginTop: 0 }}>
                <Container>
                    <img src={Icon} alt="" style={{ height: 60, width: 50 }} />
                    <Navbar.Brand className=''>Fashion Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate("/intro")}>Home</Nav.Link>
                            <Nav.Link onClick={() => navigate("/aboutus")}>About</Nav.Link>
                            {/* <Nav.Link href='/contactus'>Contact</Nav.Link> */}
                            <NavDropdown title="Contact" id="contact-nav-dropdown">
                                <NavDropdown.Item onClick={() => navigate("/contactus")}>Email Us</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate("/ques")}>FAQs</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => navigate("/feedback")}>Feedback</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                    <img src={Anime} alt="" style={{ float: 'right', height: 70, width: 90 }} />
                </Container>
            </Navbar>

            <div className='flex justify-content-center'><img style={{ height: 60, width: 70, marginTop: 30 }} src={Ficon} alt="" /><h4 className='text-center mt-5' style={{ color: 'blue' }}>Feedback of Our Trustful Customers </h4></div>
            <div className=' p-3 flex flex-wrap gap-4 mt-5 text-center' style={{ alignSelf: 'center' }}>

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.prod.website-files.com/666ad77562dfabab1eb27f63/6743d2a20bb2b52f38e7d361_photo_2024-11-24_19-24-50.webp" />
                    <Card.Body>
                        <Card.Title>Miss. Olivia Michael</Card.Title>
                        <Card.Text>
                            This is my very first order through site, and I am totally and completely satisfied! The fit is great and so are the prices. I will definitely order again and again...
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>📍Los Angeles</ListGroup.Item>

                    </ListGroup>

                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://www.aishot.net/_next/image?url=%2Fimages%2Flanding%2Fwoman-skyline-brown-suit.png&w=3840&q=50" />
                    <Card.Body>
                        <Card.Title>Ms. Rosalie George</Card.Title>
                        <Card.Text>
                            I just order directly through them...I am always complemented on my outfits I will be back for more...Thank you for having cute trendy clothes that fit and look good.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>📍Pennsylvania</ListGroup.Item>

                    </ListGroup>

                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://img.freepik.com/premium-photo/confident-young-woman-professional-attire-smiling-against-neutral-background_1281237-1466.jpg" style={{ objectFit: 'fill' }} />
                    <Card.Body>
                        <Card.Title>Mrs. Katherine Elizabeth</Card.Title>
                        <Card.Text>
                            OMG..great store !!! Found this store while visiting the UK.. what a find -nice clothing/well made/great prices.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>📍Paris</ListGroup.Item>

                    </ListGroup>

                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://replicate.delivery/xezq/FUyOLxFwbrqoORlbpCexjfa96lWeYe4KukhFmDSpKMvkzgDTB/tmp1qiefmaq.png" style={{ objectFit: 'fill' }} />
                    <Card.Body>
                        <Card.Title>Ms. Hazel Bernet</Card.Title>
                        <Card.Text>
                            I love these clothes!! I love the fit!!! I love the price!!! I am on my 3rd order from you!! I too was skeptical because you were international.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>📍California</ListGroup.Item>

                    </ListGroup>

                </Card>
                <div>
                    <h5 className=' p-5' style={{ textAlign: 'center', fontFamily: 'italics', color: 'purple' }}>“We’re sincerely grateful for customers like you who take time to share their thoughts,your kind words genuinely motivate us—thank you!”</h5>
                </div>

            </div>
            <div className='text-center'>
                <Form style={{ justifySelf: 'center', color: 'blue' }}>
                    <h5 className='mb-5' style={{ textDecorationLine: 'underline' }}> Give Your Feedback Here👇🏻</h5>
                    <Form.Group className="mb-3 w-80 p-2" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3 w-80 p-2" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button className='mt-4' variant="outline-info" ><b>SUBMIT </b></Button>
                </Form>
            </div>
        </div>
    )
}

export default feedback