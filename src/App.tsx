import React from 'react';
import {Home} from "./pages/Home";
import Author from './pages/Author';

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
        <>
          <Header />
          {/* <Home /> */}
          <Author />
          <Footer />
        </>
  );
}

export default App;
