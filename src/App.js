import React from 'react';
import { NavBar, About, Portfolio, Vault, Blog, Footer } from './sections'
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <About />
      <Portfolio />
      <Vault />
      <Blog />
      <Footer />
    </React.Fragment>
  )
}

export default App;
