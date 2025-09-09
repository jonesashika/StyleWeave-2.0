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
const vacation = () => {
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
              <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT4BJBhck6iesSu3fNl8nxGZjjDm6OLekJ05FZhGo5c21ixs8Ehfl2m46DFGoWydZPz5CzhJhsWzHlYaGK_TcyRzgq6dgfpy5NKG2fUFcIL" alt="" />
            </div>
            <div className='content text-center'>
              <h3 className='dress '>Something Blue Dress</h3>
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
              <div className='flex mt-2 justify-content-center gap-2 '>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Add to Cart </Button>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>

              </div>
            </div>


          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQIbA4nYw7WEV2x7Iws_Cjeh59KJNn03rRxhESTQacggRaMrveH1W_EMTvfGhSAa5uvKCgeixbwXnLQq5tIdhwhu-TWy-HzkPuePB_koH4" alt="" />
            </div>
            <div className='content text-center'>
              <h3 className='dress '>Bow & Halter Wear</h3>
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
              <div className='flex mt-2 justify-content-center gap-2 '>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Add to Cart </Button>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>

              </div>
            </div>

          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ1ck4DGgrlQ8tglnx91gvzssr6rGElkVSdnSfcl7MS0bdMBUWWNjhCHTqEpQimKOBQGNPLtNisploSlD4hkivpMaNRBDtPuVLZup-pDCs" alt="" />
            </div>
            <div className='content text-center'>
              <h3 className='dress '>Printed Top & Skirt</h3>
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
              <div className='flex mt-2 justify-content-center gap-2 '>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")} >Add to Cart </Button>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>

              </div>
            </div>

          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRSjOXLuRAFAbi2UfHFQce6t5hQ_UX7EuLRQCM-ZyqqbMij2oJr5oM6HtaXKlCVx1YBptdCepq80yESdspWlrCh6Jp56AW4uhXKQCIhLdcF" alt="" />
            </div>
            <div className='content text-center'>
              <h3 className='dress '>Flare Mini Dress</h3>
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
              <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSdLXggwoh-SEBPPWgg5-aPpa4bHzEpxIGNlayekLlumNStOrsczeiq-u33wh8RxSeh3f6pNVPhRccLXQ2ScXbI5QvmVSv-khsDZI9iR2Bp" alt="" />
            </div>
            <div className='content text-center'>
              <h3 className='dress '>Crop Top With Shrug</h3>
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
              <div className='flex mt-2 justify-content-center gap-2 '>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Add to Cart </Button>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>

              </div>
            </div>

          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTSYbVoOzfiUyy9q7FOxuoHYWQmT1hPPMZmYj__0U9Gpx_jdN41hXvBDwl4rw1ymzJdos49rwU8kF2sYavTOfAUwsgO9WNgZ7LcEhvMNRU" alt="" />
            </div>
            <div className='content text-center'>
              <h3 className='dress '>Stripe Cowl Dress</h3>
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
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Add to Cart </Button>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>

              </div>
            </div>

          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSukpLW2lQ76ZJeLftxJtm95DlPA3QBKoEMLzmHctouvvh3GnPIWXDmx5l0EqoFLcEgy1vg5d-6hiw8iJiir_XxIbHBMTqf4IGeOAnYH6MN7eSEzLroOOTCCQ" alt="" />
            </div>
            <div className='content text-center'>
              <h3 className='dress '>Polyester Fit Dress</h3>
              <strong>  Rs.3550</strong> <strike>Rs.4200</strike> <br /><p className='text-green-600'>(84% Discount)</p><br />
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
              <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSMcQ3VPGV-y0uGdDuA-N081XkcuvREGRLtrnrdzM9y5dYylVxnV8vGaSxKjZ6zOWMXMSPsrwuM85Ix9OnhnqjreHZyS3bjcfm8opNV7s6IMeHCd8JTtwu4" alt="" />
            </div>
            <div className='content text-center'>
              <h3 className='dress '>Solid Top & Skirt</h3>
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
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default vacation