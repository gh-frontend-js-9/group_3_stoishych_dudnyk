import React from 'react';
import {Home} from "./pages/Home";
import Author from './pages/Author';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {Header} from "./components/Header/Header";
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faVk, faPinterestP, faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faSyncAlt, faChevronLeft, faChevronRight, faEllipsisH, faTimes, } from '@fortawesome/free-solid-svg-icons';

library.add(faVk, faPinterestP, faInstagram, faTwitter, faFacebookF, 
            faSyncAlt, faChevronLeft, faChevronRight, faEllipsisH,
            faTimes);


function App() {
  return (
        <Router>
          <Header />
          
          <Switch>
            <Route path='/author' component={Author} />
            <Route path='/' component={Home} />
          </Switch>
        
          <Footer />
        </Router>
  );
}

export default App;
