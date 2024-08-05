import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './input.css';
import Home from './pages/Home';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Locations from './pages/Locations';
import Contribute from './pages/Contribute';

function AppRoutes() {
  return (
    <div className="App bg-gradient-purple">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Sobre' element={<About />} />
        <Route path='/Agenda' element={<Schedule />} />
        <Route path='/Localizacoes' element={<Locations />} />
        <Route path='/Contribua' element={<Contribute />} />
      </Routes>
    </div>
  );
}
export default AppRoutes;