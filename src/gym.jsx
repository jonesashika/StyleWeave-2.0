import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import CheckoutModal from './cartform';
import './spage.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
              <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRPd_KbrzXY7HpoaWA95cPBnjbDuAXsW369Uz2kAUMdL1m4KdTTMQLhOZpQbHQ5h5hD-kMSDOU43buZlsRu8B91rmmBBXoOjmZo3We_uR7yD9ZmWEWRYAXiyQ" alt="" />
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
              <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT01y7-HSXWVDS0mP86VeUz-bCOuYmOEVe7BznWX4j7lL-i5hnz_l7w73_qBuaMNw1gcl9jCqi-5xBTEZUmLnZ600cRhWw3AdBLk2COI_jHQ52PhRNtBB96" alt="" />
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
              <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTirAMGAlJbFAaK7KL60KVfbLGFAoQu-asia1SY-i0WCTT9kVgjG_gLLGhjEbN0eLxTTdLqpb0VgF6gGHYtR7pZ63RRAdI-sbd8Shqno-p6XUCq7NnRt_lo_w" alt="" />
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
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Add to Cart </Button>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>
              </div>
            </div>
          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSfd0E6YvM0YswgX4nWiSboIJ_yJbuV92cL-DAF_np5NRIkSAqJyfrFfkIwOy589sM9aEvNFq8k0eZQf_V5LNNjECwBxeEF_O3OkIEVy2wMiu-MNXlZV11q" alt="" />
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
              <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT9fKddGCqS6kXQhoF6J-I5gLBewgyufbpM0I8Ss42HjoUKeiiIrzgPXEAtzNsoSzAV5Kgq1WoUsNyEkEF7HYVYiBWHIxFGY2mP-xaYU12IHwUu1OyS6eEJMA" alt="" />
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
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Add to Cart </Button>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")} >Buy Now</Button>
              </div>
            </div>
          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQtbfurjX36NnxsZrz9vlYP0k-wtPlLj1r7NvRaiIMm9b-cYt4PghiePL6w_RtjjQd5vEWhxH1kvcky-FclzxdHuuNgbQ4_9BiKIkAfgLM" alt="" />
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
              <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_rPzo87Qjgk76bCCTvg1GU4ZsAkEo9EL6JYTmkF_aoQaNcFBBpY_vabBBpsJOdcPpPwRcxlyw8AXnVptnvD5tFqM36EQsVeXO24p_RwT2OStjAaExwTsK" />
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
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Add to Cart </Button>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")} >Buy Now</Button>
              </div>
            </div>
          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTOaaXl_SCYzFBH8qeCXtGIcd93EWorf-wQ4bqwe7z3JN0-YvtpjgWlvO-PwcmIKCp5cKlRdy_kwU1cGNW3qqvmxCaPH0VNS8AFcS4QeMY-6Fih5xGzgnt_" alt="" />
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