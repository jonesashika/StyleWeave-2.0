import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import CheckoutModal from './cartform';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './spage.css'
import { useNavigate } from 'react-router-dom';
const spage = () => {
  const navigate = useNavigate();
  return (
    <>
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
      <div className='bodyyy'>

        <div className='container'>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="data:image/jpeg;base64,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" alt="" />
            </div>
            <div className='content text-center'>
              <h3 className='dress '>Brown Floral co-ord</h3>
              <strong>  Rs.2500</strong> <strike>Rs.4500</strike> <br /><p className='text-green-600'>(44% Discount)</p><br />
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
              <strong>  Rs.2500</strong> <strike>Rs.4500</strike> <br /><p className='text-green-600'>(44% Discount)</p><br />
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
              <strong>  Rs.2500</strong> <strike>Rs.4500</strike> <br /><p className='text-green-600'>(44% Discount)</p><br />
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
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVYktQ4bZaR_ijfwLBSEmzUDqWQL7-FK5Pkw&s" alt="" />
            </div>
            <div className='content'>
              <h3 className='dress name'>Yellow Patterned co-ord</h3>
              <strong>  Rs.2500</strong> <strike>Rs.4500</strike> <br /><p className='text-green-600'>(44% Discount)</p><br />
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
              <strong>  Rs.2500</strong> <strike>Rs.4500</strike> <br /><p className='text-green-600'>(44% Discount)</p><br />
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
              <img src="https://rukminim2.flixcart.com/image/292/360/xif0q/apparel-set/b/t/h/3xl-w2190-tr1148-co-ords-leriya-fashion-original-imahcsfzhgzysjzg.jpeg?q=90&crop=false" alt="" />
            </div>
            <div className='content'>
              <h3 className='dress name'>Blue & White Abstract co-ord </h3>
              <strong>  Rs.2500</strong> <strike>Rs.4500</strike> <br /><p className='text-green-600'>(44% Discount)</p><br />
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
              <strong>  Rs.2500</strong> <strike>Rs.4500</strike> <br /><p className='text-green-600'>(44% Discount)</p><br />
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
              <strong>  Rs.2500</strong> <strike>Rs.4500</strike> <br /><p className='text-green-600'>(44% Discount)</p><br />
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