import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HomePage from './Page/HomePage'; 
import HotelPage from './Page/Hotel'; 
import UserProfile from './Page/UserProfile'; 
import '../src/index.css'

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HotelPage />} /> 
        <Route path="/hotels" element={<HotelPage />} />  {/* Trang khách sạn */}
        <Route path="/profile" element={<UserProfile />} />  {/* Trang thông tin cá nhân */}
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
