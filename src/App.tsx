import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Routers, Routes ,Router, Route, Link } from 'react-router-dom';
import Header from "./Components/Header";
import Offer from "./Components/Offer";
import Pricing from "./Components/Pricing";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import CloseButton from "./Components/Button/CloseButton";
import Register from "./Components/Register";


function App() {

  return (
      <div>
          <Header />
          <Routes>
              <Route path='/' element={<CloseButton  backgroundColor={'blue'} color={'white'} text={'hallo'} />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/offer' element={<Offer />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
          </Routes>
      </div>
  );
}

export default App;
