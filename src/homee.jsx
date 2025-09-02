import React from 'react'
import './homee.css'
// import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
export const homee = () => {
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>

                        <img className='carousel' src="https://www.eco-reusable.com/wp-content/uploads/2025/01/Screenshot-2025-01-17-205100.png" alt="" />

                        <Carousel.Caption className='Name'>
                            <h1 className='name mt-5'>EcoLyf - Brown Living</h1>
                            <h4>Plastic Free Future</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='carousel' src="../src/assets/bamboo-toothbrushes-soap-top-view.jpg" alt="" />
                        <Carousel.Caption className='Name'>
                            <h1 className='name'>EcoLyf - Brown Living</h1>
                            <h4>Plastic Free Future</h4>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='carousel' src="../src/assets/ecology-collection-cutlery.jpg" alt="" />
                        <Carousel.Caption className='Name'>
                            <h1 className='name'>EcoLyf - Brown Living</h1>
                            <h4>Plastic Free Future</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
            <div className='heading1 p-5'><h1>HOME DECOR ITEMS</h1></div>
            <div className='quote'>“Where Elegance Meets Earth: Decor That Respects Nature.”</div>
            <div className='mt-5 d-flex justify-content-center gap-4 flex-wrap '>
                
                <Card className='card'  style={{ width: '18rem', height: '30rem' }}>
                    <Card.Img className='Img' variant="top" src="https://brownliving.in/cdn/shop/files/coconut-shell-pot-shaped-planter-pots-ideal-for-small-plants-set-of-1-thenga-sustainable-pots-planters-brown-living-thenga27-804969.jpg?v=1723850975&width=600" />
                    <Card.Body>
                        <Card.Title>Coconut Shell Candle Scented Soy Wax</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        <Button className='buttons d-block mx-auto  ' variant="primary">BUY NOW</Button>
                    </Card.Body>
                </Card>
                <Card className='card'  style={{ width: '18rem', height: '30rem' }}  >
                    <Card.Img className='Img'  variant="top" src="https://brownliving.in/cdn/shop/products/cinnamon-roll-cocoshell-soy-wax-candle-allure-scented-candles-sustainable-candles-fragrances-brown-living-591186.jpg?v=1707319308&width=1080" />
                    <Card.Body>
                        <Card.Title>Cinnamon Roll Cocoshell Soy Wax Candle</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        <Button className='buttons d-block mx-auto  ' variant="primary">BUY NOW</Button>
                    </Card.Body>
                </Card>
                <Card  style={{ width: '18rem', height: '30rem' }}>
                    <Card.Img className='Img'  variant="top" src="https://brownliving.in/cdn/shop/files/mini-jar-hanging-planter-multipurpose-upcycled-scrapshala-sustainable-products-on-brown-living-567689.jpg?v=1745068562&width=1080" />
                    <Card.Body>
                        <Card.Title>Mini Jar Hanging Planter | Multipurpose | Upcycled</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        <Button className='buttons d-block mx-auto  ' variant="primary">BUY NOW</Button>
                    </Card.Body>
                </Card>
                <Card  style={{ width: '18rem', height: '30rem' }} >
                    <Card.Img className='Img' variant="top" src="https://brownliving.in/cdn/shop/products/wooden-wall-hanging-french-cross-plaque-with-antique-design-036-04454-1104-wall-decor-brown-living-731197.jpg?v=1682970073&width=600" />
                    <Card.Body>
                        <Card.Title>Antique Wooden Wall Hanging | French Cross </Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        <Button className='buttons d-block mx-auto  ' variant="primary">BUY NOW</Button>
                    </Card.Body>
                </Card>
                
            </div>
            <div className='heading1 p-5'><h1>KITCHEN ITEMS</h1></div>
            <div className='quote'>“Cook with Conscience. Clean with Care. Conserve the Planet.”</div>
            <div className='mt-5 gap-4 d-flex flex-wrap justify-content-center'>
                <Card style={{ width: '18rem', height: '30rem' }}>
                    <Card.Img className='Img' style={{ height: '15rem' }} variant="top" src="https://brownliving.in/cdn/shop/products/traditional-coconut-shell-wood-cooking-set-a-spatula-a-large-spoon-3-size-ladles-173-07961-thenga-traditional-coconut-shell-wood-cooking-cookware-brown-living-767700.jpg?v=1682968784&width=500" />
                    <Card.Body>
                        <Card.Title>Traditional Coconut Shell & Wood Cooking Set</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        <Button className='buttons d-block mx-auto  ' variant="primary">BUY NOW</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height: '30rem' }}>
                    <Card.Img className='Img' style={{ height: '15rem' }} variant="top" src="https://brownliving.in/cdn/shop/files/coconut-shell-tight-storage-containers-with-lid-set-of-1-thenga-sustainable-containers-brown-living-thenga38-721345.jpg?v=1734092618&width=600" />
                    <Card.Body>
                        <Card.Title>Coconut Shell Storage Containers with Lid</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        <Button className='buttons d-block mx-auto  ' variant="primary">BUY NOW</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height: '30rem' }}>
                    <Card.Img className='Img' style={{ height: '15rem' }} variant="top" src="https://brownliving.in/cdn/shop/products/utensil-scrubbers-coconut-coir-square-pack-of-10-onearth-sustainable-kitchen-brown-living-838102.jpg?v=1707328623&width=900" />
                    <Card.Body>
                        <Card.Title>Utensil Scrubbers Coconut Coir Square </Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        <Button className='buttons d-block mx-auto  ' variant="primary">BUY NOW</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height: '30rem' }}>
                    <Card.Img className='Img' style={{ height: '15rem' }} variant="top" src="https://brownliving.in/cdn/shop/products/steel-straws-reusable-straws-2-bent-2-straight-1-cleaner-1-pouch-eco-friendly-straws-tbb-66-straw-brown-living-613166.jpg?v=1682968290&width=900" />
                    <Card.Body>
                        <Card.Title>Eco-Friendly Steel Straws (Pack of 2)</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        <Button className='buttons d-block mx-auto  ' variant="primary">BUY NOW</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='heading1 p-5'><h1>BATHROOM PRODUCTS</h1></div>
            <div className='quote'>“Wash Away Guilt — Leave No Plastic Behind.”</div>
            <div className='mt-5 gap-4 d-flex flex-wrap justify-content-center'>
                <Card style={{ width: '18rem', height: '30rem' }}>
                    <Card.Img className='Img' style={{ height: '15rem' }} variant="top" src="https://brownliving.in/cdn/shop/products/natural-loofah-straight-round-eco-friendly-loofah-bottle-gourd-exfoliating-loofa-sun-dried-tbb-43-bath-accessories-brown-living-226370.jpg?v=1682965177&width=720" />
                    <Card.Body>
                        <Card.Title>Bottle Gourd Exfoliating Loofa Sun Dried</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        <Button className='buttons d-block mx-auto ' variant="primary">BUY NOW</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height: '30rem' }}>
                    <Card.Img className='Img' style={{ height: '15rem' }} variant="top" src="https://brownliving.in/cdn/shop/products/bamboo-toothbrush-pack-of-4-ecomantraa-sustainable-oral-care-brown-living-em-bl-0001-440632.jpg?v=1710266895&width=1080" />
                    <Card.Body>
                        <Card.Title>Bamboo Toothbrush (Pack of 4)</Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        <Button className='buttons d-block mx-auto  ' variant="primary">BUY NOW</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height: '30rem' }}>
                    <Card.Img className='Img' style={{ height: '15rem' }} variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRlczIiDPoB4sjEqs1IQvf2G7iL9JG556sNJGbfK7R3-mttIMZluLG5Pp4_zI7C1HRJz3fSb8XP4d4zYoFHrQMmjoYUK-EY1fxOxD3U357L-639eVrJtXqF" />
                    <Card.Body>
                        <Card.Title> Natural Bamboo Soap Dispenser </Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        <Button className='buttons d-block mx-auto  ' variant="primary">BUY NOW</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', height: '30rem' }}>
                    <Card.Img className='Img' style={{ height: '15rem' }} variant="top" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRBdVbsrXQ366gO-DzPuCFfHRc2ehvoGoJNLa-_D-036B5n5hp4SVdSlcv_pXpYIDuXrMnyNzs0lrYTWQnzOJLfp6UaSwZa4LZMJ-cIP5sv" />
                    <Card.Body>
                        <Card.Title>Bathroom Accessories Set of 2
                        </Card.Title>
                        {/* <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text> */}
                        <Button className='buttons d-block mx-auto  ' variant="primary">BUY NOW</Button>
                    </Card.Body>
                </Card>
            </div>
            </div>
            <div className='foot gap-5'>

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
              <Col>Terms & Conditions</Col>
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
        </div>
    )
}
export default homee