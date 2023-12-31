import React from 'react';
import NavBar from './components/NavBar'; // Fixed the component name here
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Contact from './components/pages/Contact';


function App() {
  return (
    <>
      <Router>
        <NavBar /> {/* Fixed the component name here */}
        <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/services' element={<Services />} />
  <Route path='/products' element={<Products />} />
  <Route path='/contact' element={<Contact />} />

</Routes>
      </Router>
    </>
  );
}

export default App;
