import React, {useEffect, useState} from 'react';
import './App.css';

// Components
import Homepage from './components/screens/Homepage';
import Grants from './components/screens/Grants';
import Design from './components/screens/Design';
import Blog from './components/screens/Blog';

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
