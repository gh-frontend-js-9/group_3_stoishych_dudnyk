import React from 'react';
import {Home} from "./pages/Home";
import {Header} from "./components/Header";
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

library.add()

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
