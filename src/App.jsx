import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyPage from '../src/components/homepage'; // Your existing component
import Navbar from '../src/components/navbar'; // Import the Navbar
import Footer from './components/footer.jsx'; // Import the Footer
import NotFound from '../src/NotFound'; // Import the NotFound component
import AccountSelection from './components/account'; // Import the AccountSelection component
import Contact from '../src/pages/contact'; // Import the Contact component
import Register from '../src/pages/register'; // Import the Register component
import Login from '../src/pages/login'; // Import the Login component
import Joblist from '../src/pages/jobaspage.jsx'; // Import the Joblist component
import JobDetail from '../src/pages/jobDetail.jsx'; // Import the JobDetail component
import Profile from '../src/pages/profile.jsx'; // Import the Profile component
import Clientdashboard from '../src/pages/clientdashboard.jsx'; // Import the Clientdashboard component

const App = () => {
    return (
        <Router>
            {window.location.pathname !== '/clientdashboard' && <Navbar />} {/* Render Navbar except on Clientdashboard */}
            <Routes>
                <Route path="/" element={<MyPage />} />
                <Route path="/post-job" element={<div>Post Job Page</div>} />
                <Route path="/account-selection" element={<AccountSelection />} />
                <Route path="/find-job" element={<div>Find Job Page</div>} />
                <Route path="/about" element={<div>About Page</div>} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/jobslist" element={<Joblist />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/clientdashboard" element={<Clientdashboard />} />
                <Route path="/jobDetail/:jobId" element={<JobDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            {window.location.pathname !== '/clientdashboard' && <Footer />} {/* Render Footer except on Clientdashboard */}
        </Router>
    );
};

export default App;
