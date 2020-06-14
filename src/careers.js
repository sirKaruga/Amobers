import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Card, Col } from 'react-bootstrap';
import Cardfume from './staticpics/fume3.jpg';
import Scapesm from './staticpics/dscaping.jpg';
import Security from './staticpics/s4.jpeg';
import Cleancom from './staticpics/mop2.jpg';


const Careers = ()=>{
  return (
    <><br /><br />
      <h1> There are No available jobs at the moment</h1>
      <br /><br />
    </>
  );
}

const Cleaning = ()=>{
  return(
    <>
      <Row>
        <Col md={12}>
          <img className="detimages" src={Cleancom}  alt="cleaners"/>
        </Col>
        <Col md={12}>
          <div className="centered">
            <h2>Who do we Clean for and Where?</h2>
            <p>
              All are eligible to get Our cleaning services. Be it at your home, office, places of recidence and others,<br />
               we are here for you. We perform both on contractual basis and on one time service. Reach to us for more.
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}


const Scapeing = ()=>{
  return(
    <>
      <Row>
        <Col md={12}>
            <img className="detimages" src={Scapesm} alt="scaping"/>
          </Col>
          <Col md={12}>
              <div className="centered">
                <Card><br />
                  <Card.Title><h2>We are Land Beauty experts</h2></Card.Title>
                    <Card.Body>
                      <p>
                        With Our Landscaping professionals, We make it our work to Beautify your environment with withot struggle.<br />
                         Why Not call us and find out for yourself? We offer a variety of flowering plantations and make your environment count.
                      </p>
                    </Card.Body>
                  </Card>

              </div>
            </Col>
      </Row>
    </>
  );
}


const Fume = ()=>{
  return(
    <>
      <Row>
        <Col md={12}>
          <img className="detimages" src={Cardfume} alt="Fumigation"/>
            </Col>
            <Col md={12}>
              <div className="centered">
                <Card><br />
                  <Card.Title><h2>Fumigation and Pest Control</h2></Card.Title>
                    <Card.Body>
                      <p>
                        Its Disghusting and at times embarassing to have pests in your home, isnt it? We offer a permanent solution to these .<br />
                         problem. Let us Fix ours while you concentrate on your comfort.
                      </p>
                    </Card.Body>
              </Card>

              </div>
            </Col>
      </Row>
    </>
  );
}


const Errands = ()=>{
  return(
    <>
      <Row>
        <Col md={12}>
          <img className="detimages" src={Security} alt="security"/>
        </Col>
        <Col md={12}>
          <div className="centered">
            <Card><br />
              <Card.Title><h2>Run Your Business in Security</h2></Card.Title>
                <Card.Body>
                  <p>
                    We have a team of able and trained Personel to guard yor premises, business operations and all rour ventures.<br />
                     Let us Fix ours while you concentrate on your comfort.
                  </p>
                </Card.Body>
            </Card>

          </div>
        </Col>
      </Row>
    </>
  );
}




export {Careers, Cleaning, Scapeing, Fume, Errands,};
