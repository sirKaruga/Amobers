import React from 'react';
import './index.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel } from 'react-bootstrap';
import './App.css';
import Mmi from './staticpics/commercial-cleaning.jpg';
import Scaping from './staticpics/scaping.png';
import Tree from './staticpics/Three-members.jpg';



class Maincarousel extends Component {
  render() {
    return(
      <Carousel>
        <Carousel.Item>
          <img
            className="cimage"
            src={Mmi}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="transparent">
            <h3>Cleaning</h3>
            <p className="csm">We offer dedicated professional cleaning services .</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          className="cimage"
          src={Scaping}
            alt="Third slide"
          />

          <Carousel.Caption>
          <div className="transparent">
          <h3>Landscaping</h3>
          <p className="csm">We land-scape in style for better Env.</p>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          className="cimage"
          src={Tree}
            alt="Third slide"
          />

          <Carousel.Caption>
          <div className="transparent">
          <h3>Security</h3>
          <p className="csm">Meet our Dedicated security service teams.</p>
          </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    );

  }
}



export default Maincarousel;
