// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyPage from '../src/components/homepage'; // Your existing component
import Navbar from '../src/components/navbar'; // Import the Navbar
import Footer from './components/footer.jsx'; // Import the Footer
import NotFound from '../src/NotFound'; // Import the NotFound component
import AccountSelection from './components/account'; // Import the AccountSelection component
import Contact from '../src/pages/contact'; // Import the Contact component

const App = () => {
    return (
        <Router>
            <Navbar /> {/* Include the Navbar */}
            <Routes>
                <Route path="/" element={<MyPage />} />
                <Route path="/post-job" element={<div>Post Job Page</div>} />
                <Route path="/account-selection" element={<AccountSelection />} /> {/* Add this route */}
                <Route path="/find-job" element={<div>Find Job Page</div>} />
                <Route path="/about" element={<div>About Page</div>} />
                <Route path="/contact" element={<Contact />} /> {/* Add the Contact page route */}
                <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
