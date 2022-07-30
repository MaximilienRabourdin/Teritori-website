import React from 'react';
import './App.css';

// Components
import Navbar from './Navbar/navbar';
import Footer from './Footer/footer';
import Homepage from './Homepage';
import Grants from './Grants';

// Router -> import Link
import { Routes, Route } from 'react-router-dom';

function App () {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/grants' element={<Grants />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
