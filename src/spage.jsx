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
          <img src={Anime} alt="" style={{ float: 'right', height: 70, width: 80 }} />
        </Container>
      </Navbar>
      <div className='bodyyy'>

        <div className='container'>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://www.globalrepublic.in/cdn/shop/products/17-11-2022KSGR1316_result.webp?v=1717410956&width=1800" alt="" />
            </div>
            <div className='content text-center'>
              <h3 className='dress '>Pink Knit Dress</h3>
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
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Add to Cart </Button>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>

              </div>
            </div>


          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://img.freepik.com/premium-psd/woman-gold-dress-is-posing-photo_357958-8696.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
            </div>
            <div className='content'>
              <h3 className='dress name'>Gold Bodycon Dress</h3>
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
              <img src="https://img.freepik.com/free-photo/elegant-indoor-portrait-beautiful-glamour-woman-posing-near-grey-wall-sunny-day-wearing-silk-dress-warm-knitted-cardigan-black-hat_291049-2687.jpg?semt=ais_hybrid&w=740" alt="" />
            </div>
            <div className='content'>
              <h3 className='dress name'>Pink Elegance Wear</h3>
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
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")} >Add to Cart </Button>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")} >Buy Now</Button>
              </div>
            </div>
          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://img.freepik.com/free-photo/portrait-young-beautiful-smiling-girl-trendy-summer-zebra-dress-sexy-carefree-woman-posing-positive-model-having-fun-round-sunglasses_158538-5247.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
            </div>
            <div className='content'>
              <h3 className='dress name'>Striped Bodycon Wear</h3>
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
              <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQCC7AaFXHO9pKg23Ak7z8bgm3S2cqmJF65HEE5-3Tf2ukp9NVk6YYfnTBEOHHF8j6qQedCrBZgnDUQI1wcmOO8TPRlWcXs9xHxTajvkJyBFNCIo84PU_2Jyw" alt="" />
            </div>
            <div className='content'>
              <h3 className='dress name'>Black Ruffle Bodycon</h3>
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
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")} >Add to Cart </Button>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")} >Buy Now</Button>
              </div>
            </div>
          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQNtrIaGMgEY7tRPJ4jQdwUYKAMgAyEj6CM7ptk1THs3XepSjucVhf24PmqXPv9XUyVSvC31fdmpVtmyRf7nv6R4fZBnHfKcfE944sNZO43mzosWVbT2ZDhug" alt="" />
            </div>
            <div className='content'>
              <h3 className='dress name'>Pink Satin Bodycon </h3>
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
              <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQqIMcu9X-QCR1cpOG1RONkqvgecwaKXx_c2o6DxfaNETKVt6g0guo6MCFpY5t3DOiPKcy3IJU-bqSSfdaNsNfeDx5_j_53hQVJXph1bGY" />
            </div>
            <div className='content'>
              <h3 className='dress name'>White Full Bodycon</h3>
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
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")} >Add to Cart </Button>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")} >Buy Now</Button>
              </div>
            </div>
          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTWr2SAJcN8SwhonSbGDGuoZzvDa-55QkodIxM9We-o04OHpXNTv7vNGPZqXf7Lg_-HccrNyXq4_N3iVRhdGbwY0t-XnUA8xVuR8j041Kvo" alt="" />
            </div>
            <div className='content'>
              <h3 className='dress name'>Red Full Bodycon</h3>
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
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")} >Add to Cart </Button>
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