import React from 'react';
import {Home} from "./pages/Home";

import {Header} from "./components/Header/Header";
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faVk, faPinterestP, faInstagram, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faVk, faPinterestP, faInstagram, faTwitter, faFacebookF, faSyncAlt);


function App() {
  return (
        <>
          <Header />
          <Home />
          <Footer />
        </>
  );
}

export default App;
