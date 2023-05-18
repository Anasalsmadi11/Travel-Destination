import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import React from 'react';
import Home from "./components/home/Home.js"
import Tours from './components/tours/Tours.js';
import TourDetails from './components/TourDetails/TourDetails.js'

function App() {
  return (
<>

  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/city/:id" element= {<TourDetails/>}/>
    </Routes>

</>
  );
}

export default App;