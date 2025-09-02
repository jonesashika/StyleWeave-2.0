import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import CheckoutModal from './cartform';
import './spage.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
const vacation = () => {
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
              <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTWkFscIAFUoX4ucK2mMKXsJVFvpo12N8q7aD2sJ-LUxb8-xyN87tD_u6EhK4JPePsj2BCZK0U1yTZ4hF2ye4LgT46YH5_qjdixi3UhJSIJ&usqp=CAc" alt="" />
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
              <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ_2NA2ZJmA4Groew4dFLjqhnz2Z14seLFVgI1DSj09rdO7aZrcoRPlDx0NsvQ1jvanw-2agtCE9bhVfm4ABSxPaR3Rk0xK5pjxikq1Gas&usqp=CAc" alt="" />
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
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")} >Add to Cart </Button>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")}>Buy Now</Button>

              </div>
            </div>

          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRvffduxnZq7PBXnyrsQ_yWTJT_rW22LKhVqDzfGMXLOc3cmsql1A-xXYVrOjWs4mH3ogJTnHe42B0nU8QbApQ-PPvzdI8FSC2MvjjHEJaqL9h7qB3mIsTGHw0" alt="" />
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
              <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRVHO9P1VHlvutACxXP_aL_4ZJk9MX3yajJLacw3lMuqHITRj_VhleRh6s54uwGCsuUHBp0Y-1y1JII4UtCbOUV9gKBqB48A3f5MI2V0e4" alt="" />
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
              <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSU3TUu6pEfVbe26f5BKG9unnagdAqsx74VBQBjM5jl8e3Niu1PWJRJvMiPm1WFs0IzCGkCH2yPdbuZKmxOsz-t1xL9civ9SQTkox-QDyyKaPrOMYrGlkqi" alt="" />
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
              <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTZwOh4jqaWIpAQpIAAr6iubxDhIn9nGIcrIfRkV7q0Z-vt8rRThtLemz8VJW_6FooFne7L5Vb5v_aIr7Rsh3KrQtMT07Xsv_eXRvcwYUTL" alt="" />
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
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")} >Add to Cart </Button>
                <Button className='h-auto w-auto' variant='outline-dark' onClick={() => navigate("/info3")} >Buy Now</Button>

              </div>
            </div>

          </div>
          <div className='cardd'>
            <div className='imgbx'>
              <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS9GYs2WWHVpzkEJB1N8cK0HlMNGH96skJp3Feuzqa2pD__DK6hVGNXYfGn2SVriaxuu09MBC7ZqeWnol2mv5CYMARO_19XT0NzdjVrQSiPJz_f-Yj3LU0H" alt="" />
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
        </div>
      </div>
    </>
  )
}

export default vacation