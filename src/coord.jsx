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
              <Nav.Link  onClick={() => navigate("/aboutus")} >About</Nav.Link>
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
              <img src="https://www.ordinaree.com/cdn/shop/files/DSC_6053_b9417f01-2b00-4fb5-87a3-6e0138d6653f_3456x.jpg?v=1756703390" alt="" />
            </div>
            <div className='content text-center'>
              <h3 className='dress '>Treasure Blue co-ord</h3>
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
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")} >Add to Cart </Button>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")} >Buy Now</Button>

              </div>
            </div>


          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://assets.ajio.com/medias/sys_master/root/20250411/scKJ/67f8e59255340d4b4fc768a3/-473Wx593H-700286237-brown-MODEL.jpg" alt="" />
            </div>
            <div className='content'>
              <h3 className='dress name'>Brown Sleeveless co-ord</h3>
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
              <div className='flex mt-2  justify-content-center gap-2 '>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Add to cart</Button> <br />
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>
              </div>
            </div>
          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/27870962/2024/2/26/5c49a25b-99d8-420d-89c4-e6923f24f4621708956234114UptownieWomensLinenTwoPieceCo-ordSetOrangeXS6.jpg" alt="" />
            </div>
            <div className='content'>
              <h3 className='dress name'>Orange co-ord</h3>
              <strong>  Rs.2600</strong> <strike>Rs.3000</strike> <br /><p className='text-green-600'>(86% Discount)</p><br />
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
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Add to Cart </Button>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>
              </div>
            </div>
          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://anastyaoverseas.com/cdn/shop/files/17_2c7d043b-a6a8-43bb-b6cb-5f7b5458dbda.jpg?v=1754650010" alt="" />
            </div>
            <div className='content'>
              <h3 className='dress name'>Yellow Patterned co-ord</h3>
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
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Add to Cart </Button>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")} >Buy Now</Button>
              </div>
            </div>
          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://etiquetteapparel.com/cdn/shop/files/SK314-D_Blue_01.jpg?v=1753532961" alt="" />
            </div>
            <div className='content'>
              <h3 className='dress name'>Blue Embroidered co-ord</h3>
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
              <div className='flex mt-2 justify-content-center gap-2'>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Add to Cart </Button>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>
              </div>
            </div>
          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://manerazz.com/wp-content/uploads/2024/05/Basic-Business-Co-ord-Set.webp" alt="" />
            </div>
            <div className='content'>
              <h3 className='dress name'>Golden Satin co-ord </h3>
              <strong>  Rs.3350</strong> <strike>Rs.3800</strike> <br /><p className='text-green-600'>(88% Discount)</p><br />
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
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Add to Cart </Button>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>
              </div>
            </div>
          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://rukminim2.flixcart.com/image/704/1056/xif0q/apparel-set/z/n/x/xxl-w1846-tr903-w1850-tr907-co-ords-leriya-fashion-original-imagvpymdspgg5rp.jpeg?q=90&crop=false" />
            </div>
            <div className='content'>
              <h3 className='dress name'>Floral Dreamer co-ord</h3>
              <strong>  Rs.2800</strong> <strike>Rs.3500</strike> <br /><p className='text-green-600'>(80% Discount)</p><br />
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
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Add to Cart </Button>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>
              </div>
            </div>
          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://blanc9.com/cdn/shop/files/BLANC9PurpleCo-OrdSetsWithBelt-B9ST170_8.jpg?v=1703162097&width=2048" alt="" />
            </div>
            <div className='content'>
              <h3 className='dress name'>Purple co-ord</h3>
              <strong>  Rs.1800</strong> <strike>Rs.2000</strike> <br /><p className='text-green-600'>(9% Discount)</p><br />
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
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Add to Cart </Button>
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