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
const pants = () => {

    const navigate=useNavigate();
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
                            {/* <Nav.Link href='/contactus'>Contact</Nav.Link>
                             */} <NavDropdown title="Contact" id="contact-nav-dropdown">
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
                            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS8-P5MnXCNdGeGXXQ8T6d8T2SOV6qj2cROWsRzUJRbRqkOvMjVtYncBDjsZ2-7TsYQCeQzwqF9qfAF8ojg07ENIKC2xtogD-T82ZYysQoUSwljzpdFv8o-Ew" alt="" />
                        </div>

                        <div className='content text-center'>
                            <h3 className='dress '>Olive Cropper</h3>
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
                            <div className='flex mt-2 justify-content-center gap-2 '>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark'onClick={() => navigate("/info3")} >Buy Now</Button>
                               
                            </div>
                        </div>



                    </div>
                    <div className='cardd'>
                        <div className='imgbx'>
                            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQRAa4kw5JSEdo8NJz5WIy0ERWaQtRg2bVzfsQlHsCgoTncBclofsi4m1gJyNRlM3TYKnUskY5WQx-V7OERgcGyieBcYxmEMV3aJZRJDMo" alt="" />
                        </div>

                        <div className='content text-center'>
                            <h3 className='dress '>Choco Wide-Leg</h3>
                            <strong>  Rs.1100</strong> <strike>Rs.1300</strike> <br /><p className='text-green-600'>(84% Discount)</p><br />
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
                                <Button className='h-auto w-auto' variant='outline-dark'onClick={() => navigate("/info3")} >Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark'onClick={() => navigate("/info3")} >Buy Now</Button>
                                
                            </div>
                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='imgbx'>
                            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRTNeRnAQ9euBVl6zx1L7de_D5iy7-VXSzq8cBXnpIuXQsD-DjXoPXSv0oQiyi0wFje5S_aR634z4BVcaDHVQqUeXcEoBki3lnlPpIz6wXcyfxYmM5mBZ2f" alt="" />
                        </div>

                        <div className='content text-center'>
                            <h3 className='dress '>Taupe Trouser</h3>
                            <strong>  Rs.1100</strong> <strike>Rs.1300</strike> <br /><p className='text-green-600'>(84% Discount)</p><br />
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
                                <Button className='h-auto w-auto' variant='outline-dark'onClick={() => navigate("/info3")} >Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark'onClick={() => navigate("/info3")} >Buy Now</Button>
                                
                            </div>
                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='imgbx'>
                            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRii2mllJdu0Js1izKqk0PZ0gRMJ9ILEon7p5UBmhcds_zi2p9-Yq0dBBtKxCihh5ybje8Dt14gW5PvZvOui2rMVBozItuvEp1YnbLzD0YLcHs3ok90Xtl21A" alt="" />
                        </div>

                        <div className='content text-center'>
                            <h3 className='dress '>Terracotta Flare</h3>
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
                            <div className='flex mt-2 justify-content-center gap-2 '>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>
                               
                            </div>
                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='imgbx'>
                            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR7mZSszHI3RjbCVbnZ5BSzxeEdivCTqxwStYMtNaYd9uZOzsxkY081-u40JM12iwjTm4n4P1pcS6YXkYr3A2cCVnMTBzAk6sijGo4OgLM" alt="" />
                        </div>

                        <div className='content text-center'>
                            <h3 className='dress '>Cream Cutter</h3>
                            <strong>  Rs.1200</strong> <strike>Rs.1499</strike> <br /><p className='text-green-600'>(80% Discount)</p><br />
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
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>
                               
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className='bodyyy'>
                <div className='container'>
                    <div className='cardd'>
                        <div className='imgbx'>
                            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSC0GOlL0bHIed1TZgny9sMgs0_wq2As667QJvYBMf-ugre2K_kANDbbEIOXLglBa8hcAoyQVTuwLkW1VBkglkdSgc7a9A5T0i_7H41np8q17bESCtoLEY4Kw" alt="" />
                        </div>

                        <div className='content text-center'>
                            <h3 className='dress '>Khaki Cargo</h3>
                            <strong>  Rs.2150</strong> <strike>Rs.2700</strike> <br /><p className='text-green-600'>(79% Discount)</p><br />
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
                                <Button className='h-auto w-auto' variant='outline-dark'onClick={() => navigate("/info3")} >Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark'onClick={() => navigate("/info3")} >Buy Now</Button>
                                
                            </div>
                        </div>



                    </div>
                    <div className='cardd'>
                        <div className='imgbx'>
                            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQM4HqCcxZY5tur-PfEidUk8RbKbrmTDLZXBXalWU32HtyTh7x5kHiKw86f_D5xGsIGN2PT1dJahnEXdiBQ4YxV6lELzxr6tjucRBuM7xmU" alt="" />
                        </div>

                        <div className='content text-center'>
                            <h3 className='dress '>Dark Brown Flare</h3>
                            <strong>  Rs.2150</strong> <strike>Rs.2700</strike> <br /><p className='text-green-600'>(79% Discount)</p><br />
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
                                <Button className='h-auto w-auto' variant='outline-dark'onClick={() => navigate("/info3")}>Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark'onClick={() => navigate("/info3")} >Buy Now</Button>
                               
                            </div>
                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='imgbx'>
                            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSKF6BLMYHt25LD54XAURk-KrojvGha-XgeUq-miDb5kGX82Uc5b3GDrDzm2dNa1_DqAxSZhOTCIS_I6Mcdjj6bZzDp1CsmS3WH_TY8KkMc" alt="" />
                        </div>

                        <div className='content text-center'>
                            <h3 className='dress '>Lavender Dream</h3>
                            <strong>  Rs.2200</strong> <strike>Rs.2500</strike> <br /><p className='text-green-600'>(88% Discount)</p><br />
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
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>
                               
                            </div>
                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='imgbx'>
                            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRqjMkj2KIEEv0NVWQhAxxpYcOsNKpNrW_MnvUkomNGo24B903trz0P1wswqr3p3ze1BveRB5GJP_02s7cCr1l_kRY_39jVQ-lCDyvQ9l8" alt="" />
                        </div>

                        <div className='content text-center'>
                            <h3 className='dress '>Taupe Trouser</h3>
                            <strong>  Rs.2700</strong> <strike>Rs.4000</strike> <br /><p className='text-green-600'>(67% Discount)</p><br />
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
                                <Button className='h-auto w-auto' variant='outline-dark'onClick={() => navigate("/info3")} >Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>
                               
                            </div>
                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='imgbx'>
                            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSIXXCxCpB4lRiW4T3ukTQe6iI-pFVkAWXQPZUS2yD-wGZLrKiRct3WWzNnNMnm1A5_MOrLRYkxkSSvYuarzQ88K5f3_SXWdquORrpaGq6JssLTvnM2Pm1FMA" alt="" />
                        </div>

                        <div className='content text-center'>
                            <h3 className='dress '>Blue Cargo Chic</h3>
                            <strong>  Rs.2150</strong> <strike>Rs.2700</strike> <br /><p className='text-green-600'>(79% Discount)</p><br />
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
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark'onClick={() => navigate("/info3")} >Buy Now</Button>
                               
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className='bodyyy'>
                <div className='container'>
                    <div className='cardd'>
                        <div className='imgbx'>
                            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRh7jDMNlvRqYNLlP8ZyDOGdmcxXJuikeHrfHvxqUKLB0nlLyqfJX4liLdRCjBUIRmDdWDhGF5LHqrXvKYJKPDUgqoUHqAxobww1iHp4RQh13wGBDr3pqNY4A" alt="" />
                        </div>

                        <div className='content text-center'>
                            <h3 className='dress '>Light Wash Jean</h3>
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
                            <div className='flex mt-2 justify-content-center gap-2 '>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>
                               
                            </div>
                        </div>



                    </div>
                    <div className='cardd'>
                        <div className='imgbx'>

                            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRpcw2pP3g7e8bX_7Fx7ZZ5UOd4ZnlZ8gPnFr-wv7-0KtUI_Kguya0WcIqIvEg5f6Kb1PM6nCUBsxrzUn8Lv_I9pGTkrzj4J63Fzz5oj2t79FxkCWl02PixkA" alt="" />
                        </div>

                        <div className='content text-center'>
                            <h3 className='dress '>Distressed Wide-Leg Jean</h3>
                            <strong>  Rs.1100</strong> <strike>Rs.1300</strike> <br /><p className='text-green-600'>(84% Discount)</p><br />
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
                                <Button className='h-auto w-auto' variant='outline-dark'onClick={() => navigate("/info3")} >Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark'onClick={() => navigate("/info3")}>Buy Now</Button>
                               
                            </div>
                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='imgbx'>

                            <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRwcrYjIzR9lli5puD4zvA6pDvueC34lWUAf3-it3iAB1lKqyHR33qSwMphcus--5elPoxFvEUy_8LA71lcXLOfS4uSOUBKqMwhrUQioq1Xd4Q-POf4Fk21O2ql" alt="" />
                        </div>

                        <div className='content text-center'>
                            <h3 className='dress '>Jeans with Green Accent</h3>
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
                            <div className='flex mt-2 justify-content-center gap-2 '>
                                <Button className='h-auto w-auto' variant='outline-dark'onClick={() => navigate("/info3")} >Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark'onClick={() => navigate("/info3")} >Buy Now</Button>

                            </div>
                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='imgbx'>

                            <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ3k5zar-1EZGd3OZXWWkhfz44EivJSSWIaVgC7HM2Rn5cNeHwDdAY_ilB4-BWaS0GU27I84sgBzHTEK2f5EERut-BWTjGkIb73McuNBHM" alt="" />
                        </div>

                        <div className='content text-center'>
                            <h3 className='dress '>Flared Jeans</h3>
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
                            <div className='flex mt-2 justify-content-center gap-2 '>
                                <Button className='h-auto w-auto' variant='outline-dark'onClick={() => navigate("/info3")} >Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark'onClick={() => navigate("/info3")}>Buy Now</Button>
                                
                            </div>
                        </div>

                    </div>
                    <div className='cardd'>
                        <div className='imgbx'>

                            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ09jMGEqy_xyOcpOVNDKgmmdStKUKT9lajLZtERFM2L7-TtJRUtlAcx-itzPW83DmrhTbGs9XukqixLWObZzqg7IHzfqOQQf99E-P6aZY" alt="" />
                        </div>

                        <div className='content text-center'>
                            <h3 className='dress '>Cargo-Style Jeans</h3>
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
                                <Button className='h-auto w-auto' variant='outline-dark'onClick={() => navigate("/info3")} >Add to Cart </Button>
                                <Button className='h-auto w-auto' variant='outline-dark'onClick={() => navigate("/info3")} >Buy Now</Button>
                                
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default pants