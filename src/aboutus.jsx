import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Icon from './assets/projectimgs/shopping.png'
import Anime from './assets/projectimgs/anime.png'
const aboutus = () => {
    return (
        <div>
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
                    <img src={Anime} alt="" style={{ float: 'right', height: 70, width: 90 }} />
                </Container>
            </Navbar>

            <div className=' bg-no-repeat w-100 bg-cover' style={{ backgroundImage: `url(https://png.pngtree.com/background/20210714/original/pngtree-beautiful-elegant-pink-red-purple-watercolor-smudge-background-picture-image_1220864.jpg)` }}>
                <h2 className='text-center' style={{ color: 'purple' }}>About Us</h2>
                <div className='p-4'>
                    <h5 style={{ color: 'purple' }}>Welcome to the Berrylush Universe</h5>
                    Hey gorgeous! Welcome to Berrylush — your style playground where bold meets beautiful and fashion is always fun. We’re here to sprinkle a little magic into your wardrobe with cute, high-quality, and totally affordable pieces that keep your vibe on full sparkle. Think of us as your fashion BFF, cheering you on to define your own style moment.
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
                    <h5 style={{ color: 'purple' }}>Meet the Berrylush Fam 💅</h5>
                    ✨ Berrylush
                    Your main girl — Berrylush is all about bold prints, flirty fits, and feel-good fashion that makes you go “Yaaas, queen!” From brunch dates to weekend getaways, we’ve got outfits that turn heads and spark compliments. Think easy-breezy styles with a serious style game — no boring basics here.
                </div>
            </div>
        </div>
    )
}

export default aboutus