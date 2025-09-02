// import React from 'react'
// import Helo from './a'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Boot from './boot'

// export const App = () => {
//   return (
//     <div>
//     {/* <Helo></Helo> */}
//     <Boot></Boot>
//     </div>
//   )
// }
// export default App;
// import React from 'react';
// import { FormExample, TypesExample,BasicExample } from './boot';

// function App() {
//   return (
//     <>
//       <FormExample />
//       <TypesExample />
//       <BasicExample/>
//     </>
//   );
// }

// export default App;



// import C from './useState'
// import Comp from './useEffect'
// import Slice from './slice'
// import Splice from './splice'
// import Table from './table'
// import Props from './props'
// import Map from './mapp'
// import Form from './form'
// import Home from './home'


// import React from 'react'
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './homee'
// import { useState } from 'react';
// import About from './about'
// import Contact from './contact'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';



// export const App = () => {
//   const [key, setKey] = useState('home');

//   return (

//     <div>

//       <Router>
//       <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand>Eco-Living</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href='/'>Home</Nav.Link>
//             <Nav.Link href='/about'>About</Nav.Link>
//             <Nav.Link href='/contact'>Contact</Nav.Link>


//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//            <Routes>
//             <Route exact path='/' element={<Home />} />
//             <Route exact path='/about' element={<About />} />
//             <Route exact path='/contact' element={<Contact />} />
//           </Routes>


//       </Router>
//         </div>
//   )
// }
// export default App

// import React from 'react'
// import { Navigate } from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Login from './login'
// import Contact from './contact'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import CustomNavigate from './useNavigate'
// export const App = () => {
//   return (
//     <div>

//       <Router>
//         <Routes>
//           <Route exact path='/' element={<CustomNavigate />} />
//           <Route exact path='/login' element={<Login />} />
//           <Route exact path='/contact' element={<Contact />} />

//         </Routes>


//       </Router>
//     </div>
//   )
// }
// export default App

// import React from 'react'
// import Login from './login'
// import { lazy,Suspense } from 'react'
// export const App = () => {
//   const Component=lazy(()=>import('./login'))
//   return (
//     <Suspense fallback={
//     <div>Loading...</div>
//     }>
//       <Component/>
//     </Suspense>
//   )
// }
// export default App

// import React from 'react'
// import Formvalidation from './formvalidation'
// export const App = () => {
//   return (
//     <div>
//       <Formvalidation></Formvalidation>
//     </div>
//   )
// }
// export default App
// import React from 'react'
// // import Material from './mui'
// import Web from './web'
// const App = () => {
//   return (
//     <div>
//         {/* <Material></Material> */}
//         <Web></Web>
//     </div>
//   )
// }
// import React from 'react'
// import Get from './get'
// import Post from './Post'
// import Patching from './Patching'
// import Delete from './Delete'
// export const App = () => {
//   return (
//     <div>
//       {/* <Get></Get> */}
//       {/* <Post></Post> */}
//       <Patching></Patching>
//       {/* <Delete></Delete> */}

//     </div>
//   )
// }
// import React from 'react'
// import {Route,BrowserRouter as Router,Routes} from 'react-router-dom'
// import Get from './getform'
// import Form from './Formm'
// import EditFormComponent from './editForm'
// import Login from './loginn'
// import 'bootstrap/dist/css/bootstrap.min.css';

// const App = () => {
//   return (
//     <>
//     <Router>
// <Routes>
// <Route exact path='/' element={<Login />} />
//   <Route exact path='/get' element={<Get />} />
//   <Route exact path='/getform' element={<Get />} />
//   <Route exact path='/create' element={<Form />} />
//   <Route exact path='/edit/:id' element={<EditFormComponent />} />


// </Routes>
//     </Router>
//     </>
//   )
// }
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import About from './aboutus'
import Contact from './contactus'
import Tweb from './spage'
import Intro from './intro'
import Login from './login'
import Signup from './signup'
import Collections from './collection'
import Vacation from './vacation'
import Pants from './pants'
import Form from './cartform'
import Coord from './coord'
import Skirts from './skirts'
import Gym from './gym'
import Info from './info'
import Infoo from './info2'
import Infooo from './info3'
import Ques from './ques'
import Feed from './feedback'

export const App = () => {
  return (
    <div>
      <Router>
       <Routes>
          <Route exact path='/' element={<Login />} />
          <Route exact path='/intro' element={<Intro />} />
          <Route exact path='/spage' element={<Tweb />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/aboutus' element={<About />} />
          <Route exact path='/contactus' element={<Contact />} />
          <Route exact path='/collection' element={<Collections />} />
          <Route exact path='/vacation' element={<Vacation />} />
          <Route exact path='/pants' element={<Pants />} />
          <Route exact path='/cartform' element={<Form />} />
          <Route exact path='/coord' element={<Coord />} />
          <Route exact path='/coord' element={<Coord />} />
          <Route exact path='/skirts' element={<Skirts />} />
          <Route exact path='/ques' element={<Ques />} />
          <Route exact path='/info3' element={<Infooo />} />
          <Route exact path='/info2' element={<Infoo />} />
          <Route exact path='/list' element={<Infoo />} />
          <Route exact path='/create' element={<Infooo />} />
          <Route exact path='/info/:id' element={<Info />} />
          <Route exact path='/info' element={<Info />} />
          <Route exact path='/feedback' element={<Feed />} />
         </Routes>
      </Router>

    </div>
  )
}

export default App