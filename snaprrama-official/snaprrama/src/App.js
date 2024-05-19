import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Snapfront from './components/mainpage/Snapfront';
import SnapRank from './components/listpage/SnapRank';
import RateSnappr from './components/ratingpage/RateSnappr';
import LoginRegister from './components/mainpage/menupage/LoginRegister';
import './App.css';
import MainPage from './components/mainpage/snapmainmenu/MainPage';

function App() {
  return (
    <div className="Main">


      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Snapfront />} />
          <Route path="/ratingpage" element={<RateSnappr />} />
          <Route path="/listpage" element={<SnapRank />} />
          <Route path="/menupage" element={<LoginRegister/>} />
        </Routes>
      </BrowserRouter>




</div>
      
  );
}

export default App;
