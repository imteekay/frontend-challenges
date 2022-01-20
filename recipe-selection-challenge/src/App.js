import React from 'react';
import { Router } from '@reach/router';

import Recipes from './pages/Recipes';
import ThemeProvider from './components/ThemeProvider';
import Header from './layout/Header';
import Body from './layout/Body';
import Footer from './layout/Footer';

const App = () => (
  <ThemeProvider>
    <Header />
    <Body>
      <Router>
        <Recipes path="/" />
      </Router>
    </Body>
    <Footer />
  </ThemeProvider>
);

export default App;
