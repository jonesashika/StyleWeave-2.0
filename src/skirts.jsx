import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import CheckoutModal from './cartform';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './spage.css'
import { useNavigate } from 'react-router-dom';
import Icon from './assets/projectimgs/shopping.png'
import Anime from './assets/projectimgs/anime.png'
const spage = () => {
    const navigate = useNavigate();
    return (
        <>
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
            <div className='bodyyy'>

                <div className='container'>
                    <div className='cardd'>
                        <div className='imgbx'>
                            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS7C0ugRQHpUNRAWFHHi19-PGLS_-8MhTwuQ_5_r84y1BjcnuDhQQ2caAy2BDhSEw9OCfjoRskD2XnCe7tJ40ozjbuNmo3DUlsr-EY8VhEzKIdLSbsSGeA-0Q" alt="" />
                        </div>
                        <div className='content text-center'>
                            <h3 className='dress '>Floral Asymmetry Skirt</h3>
                            <strong>  Rs.700</strong> <strike>Rs.999</strike> <br /><p className='text-green-600'>(70% Discount)</p><br />
                            <div className='flex justify-content-center ' style={{ marginTop: -35 }}>
                                <div className='flex flex-column'>
                                    <strong>Material:</strong>
                                    <strong>Color:</strong>
                                    <strong>size:</strong>
                                    <strong>Care :</strong>

                                </div>
                                <div className='flex flex-column'>
                                    Polyester <br />
                                    Pink <br />
                                    All sizes <br />
                                    Machine wash
                                </div>
                            </div>
                            <div className='flex mt-2 justify-content-center gap-2 '>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/editcomponent")}>Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>

                            </div>
                        </div>


                    </div>
                    <div className='cardd'>
                        <div className='imgbx'>
                            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQg9Lpu5jhV1jGB7UrbLpuh76cnLvukd-5DL7df7FEWoY6cKu8C743P8FodKR9LDNd3-9ytRNDc42eVtQ6nGcXJuJSSyPvoJpCKDoSOubg" alt="" />
                        </div>
                        <div className='content'>
                            <h3 className='dress name'>Embroidered Hem Skirt</h3>
                            <strong>  Rs.500</strong> <strike>Rs.1000</strike> <br /><p className='text-green-600'>(50% Discount)</p><br />
                            <div className='flex justify-content-center ' style={{ marginTop: -35 }}>
                                <div className='flex flex-column'>
                                    <strong>Material:</strong>
                                    <strong>Color:</strong>
                                    <strong>size:</strong>
                                    <strong>Care :</strong>

                                </div>
                                <div className='flex flex-column'>
                                    Polyester <br />
                                    Pink <br />
                                    All sizes <br />
                                    Machine wash
                                </div>
                            </div>
                            <div className='flex mt-2  justify-content-center gap-2 '>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/editcomponent")}>Add to cart</Button> <br />
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>
                            </div>
                        </div>
                    </div>
                    <div className='cardd'>
                        <div className='imgbx'>
                            <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRHz-hK7aFCbhjeG0v5xsIc3xXZa6n-fJkdyRQYa6uCwxVwFhzwn6ZAeSBJACSk13fbm2l_k-8yRawAaUybCvNnGdKS9AKcfVHxFGwWp8em" alt="" />
                        </div>
                        <div className='content'>
                            <h3 className='dress name'>White Spotted Skirt</h3>
                            <strong>  Rs.1000</strong> <strike>Rs.1500</strike> <br /><p className='text-green-600'>(66% Discount)</p><br />
                            <div className='flex justify-content-center ' style={{ marginTop: -35 }}>
                                <div className='flex flex-column'>
                                    <strong>Material:</strong>
                                    <strong>Color:</strong>
                                    <strong>size:</strong>
                                    <strong>Care :</strong>

                                </div>
                                <div className='flex flex-column'>
                                    Polyester <br />
                                    Pink <br />
                                    All sizes <br />
                                    Machine wash
                                </div>
                            </div>
                            <div className='flex mt-2 justify-content-center gap-2'>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/editcomponent")} >Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")} >Buy Now</Button>
                            </div>
                        </div>
                    </div>
                    <div className='cardd'>
                        <div className='imgbx'>
                            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQBDMaxrOSqKczEPSZRspwD97uAwYDdsKDq2WbS6JG2xLdL-DUp6uHY_p5lv-E7W1IB9U9mU0UNfr7Tq89QUNNwXf5v2JIwqe-os_CEQUrrCcz_CSsP0A_G" alt="" />
                        </div>
                        <div className='content'>
                            <h3 className='dress name'>Cartoon Charm Skirt</h3>
                            <strong>  Rs.1500</strong> <strike>Rs.2000</strike> <br /><p className='text-green-600'>(75% Discount)</p><br />
                            <div className='flex justify-content-center ' style={{ marginTop: -35 }}>
                                <div className='flex flex-column'>
                                    <strong>Material:</strong>
                                    <strong>Color:</strong>
                                    <strong>size:</strong>
                                    <strong>Care :</strong>

                                </div>
                                <div className='flex flex-column'>
                                    Polyester <br />
                                    Pink <br />
                                    All sizes <br />
                                    Machine wash
                                </div>
                            </div>
                            <div className='flex mt-2 justify-content-center gap-2'>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/editcomponent")}>Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>
                            </div>
                        </div>
                    </div>
                    <div className='cardd'>
                        <div className='imgbx'>
                            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT6DxQrtDv7TnaDCdPvZgZ6JRYOV5YTLkq8zoz7MRk8RLPDFqhA0SPGPYC-Vu7JrL2QA-37fO9XfyN5LynWU_rI1gVH0hst3LTGVGWQcJv2" alt="" />
                        </div>
                        <div className='content'>
                            <h3 className='dress name'>Blue Blossom Skirt</h3>
                            <strong>  Rs.1800</strong> <strike>Rs.2000</strike> <br /><p className='text-green-600'>(90% Discount)</p><br />
                            <div className='flex justify-content-center ' style={{ marginTop: -35 }}>
                                <div className='flex flex-column'>
                                    <strong>Material:</strong>
                                    <strong>Color:</strong>
                                    <strong>size:</strong>
                                    <strong>Care :</strong>

                                </div>
                                <div className='flex flex-column'>
                                    Polyester <br />
                                    Pink <br />
                                    All sizes <br />
                                    Machine wash
                                </div>
                            </div>
                            <div className='flex mt-2 justify-content-center gap-2'>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/editcomponent")} >Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")} >Buy Now</Button>
                            </div>
                        </div>
                    </div>
                    <div className='cardd'>
                        <div className='imgbx'>
                            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQqwFpHFsHcLkr4S2Lbg4h2CLwBFEMH6Fl4GwZDktuFQhNPMd5nYxv9C1LKzlPOYBxasQj3p-r_bz6eCODh7koYNFrPKR0oYYNn1G4Lkj4x9CX65RL2FWjd6Q" alt="" />
                        </div>
                        <div className='content'>
                            <h3 className='dress name'>Tan Slit Skirt</h3>
                            <strong>  Rs.1300</strong> <strike>Rs.1799</strike> <br /><p className='text-green-600'>(72% Discount)</p><br />
                            <div className='flex justify-content-center ' style={{ marginTop: -35 }}>
                                <div className='flex flex-column'>
                                    <strong>Material:</strong>
                                    <strong>Color:</strong>
                                    <strong>size:</strong>
                                    <strong>Care :</strong>

                                </div>
                                <div className='flex flex-column'>
                                    Polyester <br />
                                    Pink <br />
                                    All sizes <br />
                                    Machine wash
                                </div>
                            </div>
                            <div className='flex mt-2 justify-content-center gap-2'>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/editcomponent")}>Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>
                            </div>
                        </div>
                    </div>
                    <div className='cardd'>
                        <div className='imgbx'>
                            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ59T6FyAMYXgbvmhjDWnXoEOKRqjG-B-vWKz2C4u2pRqhnNAVXkLyfMpQYSeNZc4mr1ix_f2N1U-LHpWw3LbAYLGDp93LShgoBpiLuLjxT" />
                        </div>
                        <div className='content'>
                            <h3 className='dress name'>Denim Pencil Skirt</h3>
                            <strong>  Rs.1500</strong> <strike>Rs.1999</strike> <br /><p className='text-green-600'>(75% Discount)</p><br />
                            <div className='flex justify-content-center ' style={{ marginTop: -35 }}>
                                <div className='flex flex-column'>
                                    <strong>Material:</strong>
                                    <strong>Color:</strong>
                                    <strong>size:</strong>
                                    <strong>Care :</strong>

                                </div>
                                <div className='flex flex-column'>
                                    Polyester <br />
                                    Pink <br />
                                    All sizes <br />
                                    Machine wash
                                </div>
                            </div>
                            <div className='flex mt-2 justify-content-center gap-2'>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/editcomponent")} >Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")} >Buy Now</Button>
                            </div>
                        </div>
                    </div>
                    <div className='cardd'>
                        <div className='imgbx'>
                            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcStkbFWKDWUDwnCXdxDaWIai-YCA-OPM87jFwkDH8cmqTFtRBl826393GTBwPomz11YMF6WDWYoH8MTKV7vr6uFxwwb74k3hwZyzZqTg2fe" alt="" />
                        </div>
                        <div className='content'>
                            <h3 className='dress name'>Pleated Painted Skirt</h3>
                            <strong>  Rs.400</strong> <strike>Rs.900</strike> <br /><p className='text-green-600'>(44% Discount)</p><br />
                            <div className='flex justify-content-center ' style={{ marginTop: -35 }}>
                                <div className='flex flex-column'>
                                    <strong>Material:</strong>
                                    <strong>Color:</strong>
                                    <strong>size:</strong>
                                    <strong>Care :</strong>

                                </div>
                                <div className='flex flex-column'>
                                    Polyester <br />
                                    Pink <br />
                                    All sizes <br />
                                    Machine wash
                                </div>
                            </div>
                            <div className='flex mt-2 justify-content-center gap-2'>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/editcomponent")} >Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default spage