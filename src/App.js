import './App.css';
import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Footer, Topnavs} from './myfcompo.js';
import Myhome from './mhome.js';
import {Careers, Cleaning, Scapeing, Fume, Errands} from './careers.js'


class App extends Component {
  render() {
    return(
      <Router>
        <Topnavs />
          <Route exact strict path="/" render={Myhome} />
          <Route exact strict path="/home" render={Myhome} />
          <Route exact strict path="/careers" render={Careers} />
          <Route exact strict path="/cleaning" render={Cleaning} />
          <Route exact strict path="/scaping" render={Scapeing} />
          <Route exact strict path="/Fumigation" render={Fume} />
          <Route exact strict path="/security" render={Errands} />
        <Footer className="absolute"/>
      </Router>

    );
  }
}

export default App;
