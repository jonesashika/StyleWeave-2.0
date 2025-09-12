import React from 'react'
import './intro.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import Icon from './assets/projectimgs/shopping.png'
import Anime from './assets/projectimgs/anime.png'
import Bg from './assets/projectimgs/bg.jpg'
import Bg1 from './assets/projectimgs/bg3.jpg'
import Bg2 from './assets/projectimgs/bg2.jpg'
import Insta from './assets/projectimgs/insta.png'
import Flipkart from './assets/projectimgs/flip.png'
import Amazon from './assets/projectimgs/amazon.png'
import Ajio from './assets/projectimgs/ajio.png'

const intro = () => {
    const navigate = useNavigate()
    const items = [
        {
            className: 'image1',
            src: 'https://www.berrylush.com/cdn/shop/files/1_09835782-e971-40dc-9e26-ce611966a76d.jpg?v=1752843086&width=533',
            alt: 'Spage',
            path: '/spage',
        },
        {
            className: 'image2',
            src: 'https://www.younari.com/cdn/shop/products/April2019-1267_1024x1024_72efc7de-5f4c-41a0-839d-d9756eabb492_800x.jpg',
            alt: 'Collection',
            path: '/collection',
        },
        {
            className: 'image3',
            src: 'https://img.freepik.com/free-photo/woman-happy-dress-beach_1303-9441.jpg?semt=ais_hybrid&w=740&q=80',
            alt: 'Vacation',
            path: '/vacation',
        },
        {
            className: 'image4',
            src: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRorP45_3x9lfhcqMFEPz-hgHhKAj16moEw0gG9OktsVZ5oWUXH9xLaZW8Y6xXItaxD38gdrsCE_OAzYWsRMJ7LvDoVM0ccaLKdYDkrma8w',
            alt: 'Pants',
            path: '/pants',
        },
        {
            className: 'image5',
            src: 'https://img.freepik.com/premium-photo/beautiful-happy-young-fitness-model-woman-with-smile-purple-sports-outfit-with-white-shoes-stands-does-warm-up-near-concrete-gray-wall_338491-10740.jpg?semt=ais_hybrid&w=740&q=80',
            alt: 'Gym',
            path: '/gym',
        },
        {
            className: 'image6',
            src: 'https://static.cilory.com/734559-large_default/multicolour-printed-casual-co-ordinate-sets.jpg.webp',
            alt: 'Coord',
            path: '/coord',
        },
        {
            className: 'image7',
            src: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSQc8D0UPOvZ-q236K5q487lvl5s8xKGVK-z5eQhOqZIwZmG2OVUKBmgYN7-_b3ybmiEZ87ptgJuvdApbIra1lgwfn_w5xG4LgrexvYd64',
            alt: 'Skirts',
            path: '/skirts',
        },
    ];
    return (
        <>
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


            <div className='w-100' style={{ backgroundSize: '100% 100%', alignContent: 'center', marginTop: 0, maxWidth: '100%', overflow: 'hidden' }}>
                <Carousel fade>
                    <Carousel.Item>
                        <img className='img-no-repeat img-cover ' style={{ width: '100%', height: '600px', Size: '100% 100%', alignContent: 'center', marginTop: 0, objectFit: 'fill' }} src={Bg} alt="" />
                        <Carousel.Caption className='p-0'>

                            <h1 className='title text-center'>STYLEWEAVE</h1>
                            <p className='heading p-0 text-center'>Where Fashion Meets Individuality</p>
                            {/* <button className='button1' onClick={() => navigate('/spage')} ><strong>Our Collections</strong></button> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='img-no-repeat img-cover ' style={{ width: '100%', height: '600px', Size: '100% 100%', alignContent: 'center', marginTop: 0, objectFit: 'fill' }} src={Bg1} alt="" />
                        {/* <Carousel.Caption className='p-0'>
                            <h1 className='title'>STYLEWEAVE</h1>
                            <p className='heading p-0 '>Where Fashion Meets Individuality</p>
                            {/* <button className='button1' onClick={() => navigate('/spage')} ><strong>Our Collections</strong></button> */}
                        {/* </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='img-no-repeat img-cover ' style={{ width: '100%', height: '600px', Size: '100% 100%', alignContent: 'center', marginTop: 0, objectFit: 'fill' }} src={Bg2}
                            alt="" />
                        {/* <Carousel.Caption className='p-0'> */}
                        {/* <h1 className='title'>STYLEWEAVE</h1> */}
                        {/* <p className='heading p-0 '>Where Fashion Meets Individuality</p> */}
                        {/* <button className='button1' onClick={() => navigate('/spage')} ><strong>Our Collections</strong></button> */}
                        {/* </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div>
            <h3 className='vibe text-center p-2 mt-5' style={{ fontFamily: 'monospace', color: 'purple',fontSize:40 }}>What's Your Vibe</h3>
            {/* <marquee behavior="" direction="" scrollamount="20s"> */}
            <div className='dresses mt-2 mb-2 flex flex-row gap-4'>
                <h4>Bodycon Dresses</h4>
                <h4>Tops</h4>
                <h4>Vacation Wear</h4>
                <h4>Pants</h4>
                <h4>Fitness Wear</h4>
                <h4>Co-Ord Sets</h4>
                <h4>Skirts</h4>
            </div>
            <div className='images gap-2 mt-5'>
                
                    {items.map((img, idx) => (
                        <img
                            key={idx}
                            className={img.className}
                            src={img.src}
                            alt={img.alt}
                            onClick={() => navigate(img.path)}
                            style={{ cursor: 'pointer' }}
                        />
                    ))}
                </div>

                {/* </marquee> */}
                <h3 className='text-center mt-5' style={{ color: 'orchid', fontFamily: 'cursive' }}>Follow us for the latest update!</h3>
                <div className='p-5' style={{ display: 'flex', flexDirection: 'row', gap: 20, justifySelf: 'center' }}>

                    <div className='box h-15 w-15 bg-pink-200  p-2.5' style={{ borderRadius: 20 }}>
                        <a href="https://www.instagram.com/berrylush_com/"><img className='instagram ' style={{ height: 35, width: 35, alignSelf: 'center', justifySelf: 'center' }} src={Insta} alt="" /></a>
                    </div>
                    <div className='box h-15 w-15 bg-pink-200  p-2.5' style={{ borderRadius: 20 }}>
                        <a href="https://www.google.com/search?q=flipkart+leriya+fashion+clothing+women&sca_esv=aa04d796f8c6ba14&udm=2&sxsrf=AE3TifOLwvLv1OpKyJlrCe0rb2cAZFumOA%3A1757427093510&ei=lTXAaOruHqfG4-EP-M-g0Ao&ved=0ahUKEwiqjYKN7suPAxUn4zgGHfgnCKoQ4dUDCBE&uact=5&oq=flipkart+leriya+fashion+clothing+women&gs_lp=EgNpbWciJmZsaXBrYXJ0IGxlcml5YSBmYXNoaW9uIGNsb3RoaW5nIHdvbWVuSM0aUNgCWMUScAF4AJABAJgBlAGgAeEJqgEDMi45uAEDyAEA-AEBmAIBoAIEwgIHECMYJxjJApgDAIgGAZIHATGgB-8DsgcAuAcAwgcDMC4xyAcC&sclient=img"><img className='Flipkart' style={{ height: 35, width: 35, alignSelf: 'center', justifySelf: 'center' }} src={Flipkart} alt="" /></a>
                    </div>
                    <div className='box h-15 w-15 bg-pink-200  p-2.5' style={{ borderRadius: 20 }}>
                        <a href="https://www.google.com/search?sca_esv=aa04d796f8c6ba14&sxsrf=AE3TifOipsnt-g4qDLMSaEAYnTjBcPDmUw:1757427145649&q=spring+fashion+amazon+fashion+clothing+women&uds=AOm0WdE2fekQnsyfYEw8JPYozOKz7wITTnAt5qQ4xfLpuGBca8qhB6-B7moxGRtdhzakX4A2itBNtw8aK2jcY_8sc7L27DtrZB24cS2N12FFGV9n8ect1UdN5PlVcFqtmNBg4ALYbcv7dvEwdWtb8qqVE63ZJ2ZOsoehZIKXk_Q43HNtRQ9-9Kw&udm=2&sa=X&ved=2ahUKEwjOuvCl7suPAxWkyzgGHZ1OIR8QxKsJKAN6BAgUEAE&ictx=0&biw=1280&bih=585&dpr=1.5"><img className='amazon' style={{ height: 35, width: 35, alignSelf: 'center', justifySelf: 'center' }} src={Amazon} alt="" /></a>
                    </div>
                    <div className='box h-15 w-15 bg-pink-200  p-2.5' style={{ borderRadius: 20 }}>
                        <a href="https://www.google.com/search?q=ajio+fashion+clothing+women&sca_esv=aa04d796f8c6ba14&udm=2&biw=1280&bih=585&sxsrf=AE3TifPMjKW4_BooiRDbKSxjTa9c8DPsVw%3A1757427176721&ei=6DXAaPvXK-aT4-EP9KWHyQk&ved=0ahUKEwj769i07suPAxXmyTgGHfTSIZkQ4dUDCBE&uact=5&oq=ajio+fashion+clothing+women&gs_lp=EgNpbWciG2FqaW8gZmFzaGlvbiBjbG90aGluZyB3b21lbkj8JFCWA1iRH3ABeACQAQCYAacCoAHmGqoBBjAuMjEuM7gBA8gBAPgBAZgCBKACmgXCAgoQABgHGAgYChgewgIIEAAYBxgIGB7CAgYQABgHGB7CAgUQABiABMICBhAAGAgYHpgDAIgGAZIHBTAuMy4xoAe2JbIHBTAuMy4xuAeaBcIHBTItMy4xyAcb&sclient=img"><img className='ajio' style={{ height: 35, width: 35, alignSelf: 'center', justifySelf: 'center' }} src={Ajio} alt="" /></a>
                    </div>
                </div>


            </>
            )
}

            export default intro