// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyPage from '../src/components/homepage'; // Your existing component
import Navbar from '../src/components/navbar'; // Import the Navbar

const App = () => {
    return (
        <Router>
            <Navbar /> {/* Include the Navbar */}
            <Routes>
                <Route path="/" element={<MyPage />} />
                <Route path="/post-job" element={<div>Post Job Page</div>} />
                <Route path="/find-job" element={<div>Find Job Page</div>} />
                <Route path="/about" element={<div>About Page</div>} />
            </Routes>
        </Router>
    );
};

export default App;
