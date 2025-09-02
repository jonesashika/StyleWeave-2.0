import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './contact.css'
export const contact = () => {
  return (
    <>
    <h1>Contact Us</h1>
    <div className='flex p-5'>
    
      <div className='form' >
        <h5 className='sentence'>Please share your contact details below, and we’ll be in touch shortly.</h5>
          <Form>
            <Form.Group className="mb-3 a" controlId="formBasicEmail">
              <Form.Label>EMAIL ADDRESS</Form.Label> <br />
              <Form.Control type="email" placeholder="Enter your email" />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>PASSWORD</Form.Label> <br />
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>CONTACT NO</Form.Label> <br />
              <Form.Control type="number" placeholder="Phone number" />
            </Form.Group>
          
            <Button className='button1' variant="primary" type="submit">
              SUBMIT
            </Button>
          </Form>
      </div> 
      <div>
          <h5 className='sentence1 ms-5 mt-4 mb-3 text-center'>Come Visit Us – Here’s Where We Are</h5>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d504811.90085456456!2d77.73552640000001!3d8.7064576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sta!2sin!4v1748613512829!5m2!1sta!2sin" frameborder="0"></iframe>
      </div>
    </div> 
    <div className='boxes d-flex p-5 gap-5 flex-wrap'>
      <div className='box text-center'>
        <h5>TRACK YOUR ORDER</h5>

      </div>
      <div className='box text-center'>
        <h5>START A RETURN</h5>

      </div>
      <div className='box text-center'>
        <h5>CANCEL OR EDIT AN ORDER</h5>

      </div>

    </div>
    <div className='foot'>

          <Container>
            <Row>
              <Col><h3>HELP</h3></Col>
              <Col><h3>SHOP ON</h3></Col>
              <Col><h3>FOLLOW US</h3></Col>
            </Row>
            <Row>
              <Col>Contact Us</Col>
              <Col><a href="https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=4444173251953586320&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9298781&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1">Amazon</a></Col>
              <Col><img className='img4' src="../src/assets/images-removebg-preview (1).png" alt="" /></Col>
            </Row>
            <Row>
              <Col> Policies</Col>
              <Col><a href="https://www.flipkart.com/">Flipkart</a></Col>
              <Col><img className='img4' src="../src/assets/insta-removebg-preview.png" alt="" /></Col>
            </Row>
            <Row>
              <Col>Services</Col>
              <Col><a href="https://www.shopify.com/in">Shopify</a></Col>
              <Col><img className='img4' src="../src/assets/fb.png" alt="" /></Col>
            </Row>
            <Row>
              <Col>Terms & Conditions </Col>
              <Col><a href="https://aaplife.com/eco-friendly-products/?gad_source=1&gad_campaignid=21942066697&gbraid=0AAAAACciPVBKRnpA0oic-5XJq7rLadFyu&gclid=CjwKCAjwp_LDBhBCEiwAK7FnkrUpvbp4Y91OuutgogDpJ-t3yWtQsS3IZyI0wJM-CgpBzAfqIjUQFhoCBWEQAvD_BwE">AAP Life</a></Col>
              <Col></Col>
            </Row>
            </Container>
             <div className='feedback p-5'>
           <h3 className='feed'>GIVE A FEEDBACK</h3>
          <FloatingLabel
            controlId="floatingInput"
            label="name@example.com"
            className="mb-5 label"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Leave a comment here"
            className="mb-5 label"
          >
            <Form.Control as="textarea" placeholder="Leave a comment here" />
          </FloatingLabel>
          <div className='submit ms-5 justify-content-center'>
          <Button className='button' variant="outline-warning">Submit</Button>
          </div>
          </div>
           
    </div> 
    <strong> &copy; 2025 Eco Lyf - Brown Living. </strong>
  </>  
  )
}
export default contact