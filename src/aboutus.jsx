import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Icon from './assets/projectimgs/shopping.png'
import Anime from './assets/projectimgs/anime.png'
import { useNavigate } from 'react-router-dom';
import Aboutbg from './assets/projectimgs/aboutbg.jpg'
const aboutus = () => {
    const navigate = useNavigate()
    return (
        <div className=' bg-no-repeat w-100 bg-cover' style={{ backgroundImage: `url(https://png.pngtree.com/background/20210714/original/pngtree-beautiful-elegant-pink-red-purple-watercolor-smudge-background-picture-image_1220864.jpg)` }}>
            <Navbar expand="lg" style={{ marginTop: 0 }}>
                <Container>
                    <img src={Icon} alt="" style={{ height: 60, width: 50 }} />
                    <Navbar.Brand className=''>Fashion Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate("/intro")}>Home</Nav.Link>
                            <Nav.Link onClick={() => navigate("/aboutus")}>About</Nav.Link>
                            {/* <Nav.Link href='/contactus'>Contact</Nav.Link> */}
                            <NavDropdown title="Contact" id="contact-nav-dropdown">
                                <NavDropdown.Item onClick={() => navigate("/contactus")}>Email Us</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate("/ques")}>FAQs</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => navigate("/feedback")}>Feedback</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                    <img src={Anime} alt="" style={{ float: 'right', height: 70, width: 90 }} />
                </Container>
            </Navbar>

                 
            <div className=' bg-no-repeat w-100 bg-cover' style={{ backgroundImage: `url(https://png.pngtree.com/background/20210714/original/pngtree-beautiful-elegant-pink-red-purple-watercolor-smudge-background-picture-image_1220864.jpg)` }}>
                <h2 className='text-center bg-cover bg-center bg-no-repeat' style={{ color: 'purple',backgroundImage:`url(${Aboutbg})`,height:450,width:'auto',objectFit:'contain',fontSize:50 }}>About Us</h2>
                <div className='p-4'>
                    <h5 style={{ color: 'purple' }}>Welcome to the Styleweave Universe</h5>
                    Hey gorgeous! Welcome to Berrylush — your style playground where bold meets beautiful and fashion is always fun. We’re here to sprinkle a little magic into your wardrobe with cute, high-quality, and totally affordable pieces that keep your vibe on full sparkle. Think of us as your fashion BFF, cheering you on to define your own style moment.
                </div>
                <div className='p-4'>
                    <h5 style={{color:'purple'}}>The Origin </h5>
                        Alice grew up in a small village where she learned traditional textile crafts from her grandfather who is a weaver over 50 years.Alice learned weaving technique, having preserved and passed on her grandfather’s style,at now works passionately to preserve this intricate tradition. She saw firsthand how fast fashion often exploited workers and polluted the environment, and she dreamed of building a different kind of clothing business. After saving up and studying design, she launched "StyleWeave" a brand dedicated to beautiful, ethically-made clothing from sustainable fabrics, directly challenging the problematic practices she'd witnessed.
                </div>
                <div className='p-4'>
                    <h5 style={{ color: 'purple' }}> Designs That Speak You</h5>
                    Every outfit you love starts with our in-house dream team, sketching styles with your fearless spirit in mind. Whether you’re brunching or vibing on a vacay, we’ve got you. Our designs are all about being bold, playful, and unapologetically you.
                </div>
                <div className='p-4'>
                    <h5 style={{ color: 'purple' }}>Made Fully In India—with Love </h5>
                    Every stitch, print, and detail? 100% made in India, mama! We take pride in powering local communities and championing female craftsmanship while delivering fab fashion that’s built to last
                </div>
                <div className='p-4'>
                    <h5 style={{ color: 'purple' }} >Quality That Slays</h5>
                    Before any piece lands in your closet, it goes through our no-nonsense 5-step quality squad check. We’re talking full-on inspection to make sure it’s serving looks and quality. Trust us—you deserve nothing less.
                </div>
                <div className='p-4'>
                    <h5 style={{ color: 'purple' }}>Meet the Styleweave Fam 💅</h5>
                    ✨ Berrylush
                    Your main girl — Berrylush is all about bold prints, flirty fits, and feel-good fashion that makes you go “Yaaas, queen!” From brunch dates to weekend getaways, we’ve got outfits that turn heads and spark compliments. Think easy-breezy styles with a serious style game — no boring basics here.
                </div>
            </div>
        </div>
    )
}

export default aboutus