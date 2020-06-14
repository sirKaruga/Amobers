import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
import Phone from './staticpics/icons/phone.png';
import Mail from './staticpics/icons/email.jpg';
import Copyright from './staticpics/icons/copyright.jpg';
import Cico from './staticpics/icons/cicon.png';

import Route from 'react-router-dom/Route';

const Info = ()=>{
  return(
    <div className="text-center postcarousel">
      <h1>Our services are:</h1>
      <ul>
        Professional Services
      </ul>
      <ul>
        Legit
      </ul>
      <ul>
        Timely and saving on resources
      </ul>
    </div>
  );
}

const Footer = ()=>{
  return (
    <Row>
      <Col md={12}>
        <div className="myfooter">
          <Row>
            <Col md={6}>
              <b>Service Requests</b>
              <ul>
                <NavLink activeStyle={{color:'purple'}} to="/Fumigation">Fumigation service<br/></NavLink>
                <NavLink activeStyle={{color:'purple'}} to="/security">Security service<br/></NavLink>
                <NavLink activeStyle={{color:'purple'}} to="/cleaning">Cleaning service<br/></NavLink>
                <NavLink activeStyle={{color:'purple'}} to="/scaping">Landscaping service</NavLink>
              </ul>
            </Col>
            <Col md={6}>
            <b>Get In Touch</b><br/>
            Phone: +254 708 453 589<br/>
            E-mail: tonnydennis443@gmail.com
            </Col>
          </Row>

          <div className="centered"><img style={{height:'2em'}} src={Copyright} alt="CopyRight"/>Designed and Developed By <Link to="/sirkaruga">Sir Karuga</Link></div>
                  <Route path='/sirkaruga' component={() => {
                       window.location.href = 'http://sirkaruga.vidielites.co.ke/';
                       return null;
                  }}/>
        </div>
      </Col>
    </Row>
  );
}


const Topnavs = ()=>{
  return(
    <>
    <div>
    <Row>
     <Col className="prenav" md={12}>
       <span><b>  Contact Us:<i><img style={{color:'white', height:'2em'}} src={Phone} alt="phone ic"/></i> +254 708 453 589
          Email:  <i style={{float: 'right', padding:"1px"}}><img style={{color:'white', height:'2em'}} src={Mail} alt="mail ic" /> vidielites@gmail.com</i> </b>
         </span>
     </Col>
    </Row>

    </div>

    <Navbar bg="light">
    <Navbar.Brand href="/home"><img style={{height:'2em'}} src={Cico} alt="logo" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/careers">Careers</Nav.Link>
      <NavDropdown title="About" id="basic-nav-dropdown">
        <NavDropdown.Item href="/cleaning">Cleaning</NavDropdown.Item>
        <NavDropdown.Item href="/scaping">Scaping</NavDropdown.Item>
        <NavDropdown.Item href="/Fumigation">Fumigation</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/security">Errands</NavDropdown.Item>
      </NavDropdown>
    </Nav>

    </Navbar.Collapse>
    </Navbar>
</>

  );
}


export {Info, Footer, Topnavs};
