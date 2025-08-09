
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import About from './components/about';
import Services from './components/services';
import Projects from './components/projects';
import Contact from './components/contact';
import Header from './components/header';
import Footer from './components/footer';
import ContactForm from './components/contactform';
import SubmittedData from './components/submittedData';
import Brojach  from './components/brojach';
import { useState } from 'react';
function Home() {
  // return <h1>Home</h1>;
}
function App() {
  const [submissions, setSubmissions]=useState([]);
  const hendleFormSubmit=(data)=>{
    setSubmissions([...submissions, data]);
  };
  return (
  
   <>
    <Router>
    {/* <Header></Header> */}
    {/* <nav  className="navbar navbar-expand-lg bg-danger text-dark px-3 fw-bold">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>

    </nav> */}
     <nav className="navbar navbar-expand-lg bg-light text-dark px-3 fw-bold">
  <div className="container-fluid">
    <a className="navbar-brand text-dark px-3 fw-bold" href="#">
      <img src="https://preview.colorlib.com/theme/personalportfolio/assets/img/logo/logo.png" alt="logo" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mx-e justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item text-dark px-3 py-2 fw-bold">
          <Link className="nav-link text-dark px-3 fw-bold" to="/">Home</Link>
          {/* <a className="nav-link text-dark px-3 fw-bold active" aria-current="page" href="#">Home</a> */}
        </li>
        <li className="nav-item text-dark px-3 py-2 fw-bold">
          {/* <a className="nav-link text-dark px-3 fw-bold" href="#">Features</a> */}
           <Link className="nav-link text-dark px-3 fw-bold" to="/about">About</Link>
        </li>
        <li className="nav-item text-dark px-3 py-2 fw-bold">
          {/* <a className="nav-link text-dark px-3 fw-bold" href="#">Pricing</a> */}
           <Link className="nav-link text-dark px-3 fw-bold" to="/services">Services</Link>
        </li>
        <li className="nav-item text-dark px-3 py-2 fw-bold dropdown">
          <a className="nav-link dropdown-toggle text-dark px-3 fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More info
          </a>
          <ul className="dropdown-menu">
            <li>
              {/* <a className="dropdown-item text-dark px-3 fw-bold" href="#">Projects</a> */}
              <Link className="nav-link text-dark px-3 fw-bold" to="/projects">Projects</Link>
              </li>
            <li>
              {/* <a className="dropdown-item text-dark px-3 fw-bold" href="#">Contact</a> */}
              <Link className="nav-link text-dark px-3 fw-bold" to="/contactform">ContactForm</Link>
              </li>
              <li>
              {/* <a className="dropdown-item text-dark px-3 fw-bold" href="#">Contact</a> */}
              <Link className="nav-link text-dark px-3 fw-bold" to="/submittedData">Submitted</Link>
              </li>
          </ul>
        </li>
        <li className="nav-item text-light px-3 fw-bold btn btn-danger">
          {/* <a className="nav-link text-dark px-3 fw-bold" href="#">Pricing</a> */}
           <Link className="nav-link text-light px-3 fw-bold" to="/services">Services</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route  path='/about' element={<About/>} />
      <Route  path='/services' element={<Services/>} />
      <Route  path='/projects' element={<Projects/>} />
      <Route  path='/contact' element={<Contact/>} />
       <Route  path='/contactform' element={<ContactForm onSubmit={hendleFormSubmit}/>} />
        <Route  path='/submittedData' element={<SubmittedData data={submissions}/>} />
    </Routes>
   

   </Router>

   <About></About>
   <Projects></Projects>
   <Services></Services>
   <Contact></Contact>
    <Footer></Footer>
   </>
  );
}

export default App;
