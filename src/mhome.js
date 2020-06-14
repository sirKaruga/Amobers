import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Row, Card, Col } from 'react-bootstrap';
import Maincarousel from './carousel.js';
import Cardfume from './staticpics/cardfume.jpg';
import Scapesm from './staticpics/scapesm.jpg';
import Security from './staticpics/Three-members.jpg';
import Cleancom from './staticpics/commercial-cleaning.jpg';
import {Info} from './myfcompo.js';


const Myhome = ()=>{
  return(
    <>

    {/* the carousel component call */}
    <Maincarousel />

    {/* start brief info */}
    <br/>
    <Info />

    {/* start cards */}
    <Row>
     <Col style={{padding: '2em'}} md={3}>
      <Card className="mcard zoom" style={{ width: '18rem' }}>
        <Card.Img style={{height: '10em'}} variant="top" src={Cardfume} />
        <Card.Body>
          <Card.Title>Fumigation</Card.Title>
          <Card.Text>
            We are known for our expertise and professionalism in home fumigation and
            pest control.
          </Card.Text>
          <Link to="/fumigation"><Button variant="primary">See More</Button></Link>
        </Card.Body>
      </Card>
      </Col>

      <Col style={{padding: '2em'}} md={3}>
       <Card className="mcard zoom" style={{ width: '18rem' }}>
         <Card.Img style={{height: '10em'}} variant="top" src={Scapesm} />
         <Card.Body>
           <Card.Title>Landscaping</Card.Title>
           <Card.Text>
             Beautiful homes are happy homes. We are here to make tour home look better
             with less.
           </Card.Text>
           <Link to="/scaping"><Button variant="primary">View More</Button></Link>
         </Card.Body>
       </Card>
       </Col>

       <Col style={{padding: '2em'}} md={3}>
        <Card className="mcard zoom" style={{ width: '18rem' }}>
          <Card.Img style={{height: '10em'}} variant="top" src={Security} />
          <Card.Body>
            <Card.Title>Security services</Card.Title>
            <Card.Text>
              We provide security services to your home, office or any business erands
              with convenience.
            </Card.Text>
            <Link to="/security"><Button variant="primary">See More</Button></Link>
          </Card.Body>
        </Card>
        </Col>

        <Col style={{padding: '2em'}} md={3}>
         <Card className="mcard zoom" style={{ width: '18rem'}}>
           <Card.Img style={{height: '10em'}} variant="top" src={Cleancom} />
           <Card.Body>
             <Card.Title>Cleaning services</Card.Title>
             <Card.Text>
               With our abled sanitary team, we relieve your stress. Get the
               services in a single call.
             </Card.Text>
             <Link to="/cleaning"><Button variant="primary">View More</Button></Link>
           </Card.Body>
         </Card>
         </Col>
         {/* cards ends */}
      </Row>


    </>
  );
}

export default Myhome;
