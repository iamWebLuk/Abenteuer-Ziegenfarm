import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Routers, Routes ,Router, Route, Link } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Offer from "./Components/Offer/Offer";
import Pricing from "./Components/Pricing/Pricing";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Kontakt/Contact";


function App() {

  return (
      <div>
          <Header />
          <Routes>
        <Route path='/blog' element={<Blog />} />
        <Route path='/offer' element={<Offer />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<Contact />} />
          </Routes>
      </div>
  );
}

export default App;
