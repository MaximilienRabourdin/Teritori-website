import React, {useEffect, useState} from 'react';
import './App.css';

// Components
import Homepage from './components/Homepage';
import Grants from './components/Grants';
import Design from './components/Design';
import Blog from './components/Blog';

// Router -> import Link
import { Routes, Route } from 'react-router-dom';

const App: React.FC = () => { 
  return (
    <div className="App">
   
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/grants' element={<Grants />} />
        <Route path='/design' element={<Design />}/>
        <Route path='/blog' element={<Blog />}/>
      </Routes>
    
    </div>
  );
}

export default App;
