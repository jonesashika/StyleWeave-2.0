import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import CheckoutModal from './cartform';
import './spage.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import Icon from './assets/projectimgs/shopping.png'
import Anime from './assets/projectimgs/anime.png'
const collection = () => {
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
              <img src="https://5.imimg.com/data5/SELLER/Default/2024/5/415826248/ES/KE/JI/221021814/top-500x500.jpg" alt="" />
            </div>
            <div className='content text-center'>
              <h3 className='dress '>Floral Green Top</h3>
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
              <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTPWSEsgX2-_BqLXyD9tEvmL_ciAtMQWvNoKTpcVAOjvBZZ2oV6RvtyrL60ZKE2bIhbtfPSll9FGCeZIPMLV02nJXfFPrAFso-iuaauIizQ7tAHDN6ndJE5kg&usqp=CAc" alt="" />
            </div>
            <div className='content text-center'>
              <h3 className='dress '>Lace Lovin</h3>
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
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")} >Buy Now</Button>

              </div>
            </div>

          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://img105.savana.com/goods-pic/f5e20342c9d14e2baf5296a424c8e81d_w540_h720_q85.webp" alt="" />
            </div>
            <div className='content text-center'>
              <h3 className='dress '>Blue Floral Top</h3>
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
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")} >Buy Now</Button>

              </div>
            </div>

          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQja5JndfEVu785tr7KyDvW7vxudXpFjhC4hIKV_GsizYNpVgY-CLmy6NGKjOy77WlVHlk&usqp=CAU" alt="" />
            </div>
            <div className='content text-center'>
              <h3 className='dress '>Sick Tee</h3>
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
              <img src="https://img105.savana.com/goods-pic/be524fdc7c7542e08b589479dcafa846_w540_h720_q85.webp" alt="" />
            </div>
            <div className='content text-center'>
              <h3 className='dress '>Boho Shirt</h3>
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
              <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSwE9tcKkOILD0PXsJkFzT91Gqiw96MrdLlEf51WZob4s8sILbc5r-gPTn52CitjekFo3owBAVgjPg-h_thh8fL-HPrAIvn8HKPpnhn53Q7J6pAQNxnp4T0" alt="" />
            </div>
            <div className='content text-center'>
              <h3 className='dress '>Mustard Mood</h3>
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
              <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTWKxfeVsZg5rTjRXq44gO86WWAoXlumqnutSYRpD7qN4OMj4pgsqP_V7QHnXD_iROZqZNHBNX2X13E6ga75HyJ7ZU8R0cDGk-vVZwSRsPQDCokYo85CUx4" alt="" />
            </div>
            <div className='content text-center'>
              <h3 className='dress '>Elegant Puff</h3>
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
              <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRGA_4d1zrJN3nN6CDvoNXgzyM53CwQSfg2kDGR7PI8ralDBN80XAs-b_XldMlUpWVIsV56wSlUJy_RMm1-aRrlN5aUpIvF0XQ3L8E6lYec" alt="" />
            </div>
            <div className='content text-center'>
              <h3 className='dress '>Full Sleeve Crop</h3>
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
        </div>

      </div>
    </>
  )
}

export default collection