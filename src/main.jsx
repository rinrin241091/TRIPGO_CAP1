import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Restaurant from './Page/Restaurant'; // Import Restaurant Page
import HomePage from './Page/HomePage'; // Import Home Page
import HotelPage from './Page/Hotel'; // Import Hotel Page
import UserProfile from './Page/UserProfile'; // Import User Profile Page
import TourPage from './Page/TourPage';
import '../src/index.css'; 


const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home Page */}
        <Route path="/hotels" element={<HotelPage />} /> {/* Hotel Page */}
        <Route path="/restaurants" element={<Restaurant />} /> {/* Restaurant Page */}
        <Route path="/profile" element={<UserProfile />} /> {/* User Profile Page */}
        <Route path="/tours" element={<TourPage />} /> {/* User Profile Page */}
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
