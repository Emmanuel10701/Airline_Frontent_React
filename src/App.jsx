import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyPage from '../src/components/homepage';
import Navbar from '../src/components/navbar';
import Footer from './components/footer.jsx';
import NotFound from '../src/NotFound';
import AccountSelection from './components/account';
import Contact from '../src/pages/contact';
import Register from '../src/pages/register';
import Login from '../src/pages/login';
import Reset from '../src/pages/reset.jsx'; // Reset Password component
import Forgot from '../src/pages/forgot.jsx';
import Joblist from '../src/pages/jobaspage.jsx';
import JobDetail from '../src/pages/jobDetail.jsx';
import ClientDashboard from '../src/pages/clientdashboard.jsx';
import FreelancerDashboard from '../src/pages/freelancer.jsx';

const App = () => {
    const currentPath = window.location.pathname;

    return (
        <Router>
            {/* Conditionally render Navbar and Footer */}
            {currentPath !== '/clientdashboard' && currentPath !== '/freelancer' && <Navbar />}
            <Routes>
                <Route path="/" element={<MyPage />} />
                <Route path="/account-selection" element={<AccountSelection />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reset-password/:uidb64/:token" element={<Reset />} />
                <Route path="/forgot-password" element={<Forgot />} />
                <Route path="/login" element={<Login />} />
                <Route path="/jobslist" element={<Joblist />} />
                <Route path="/clientdashboard" element={<ClientDashboard />} />
                <Route path="/freelancer" element={<FreelancerDashboard />} />
                <Route path="/jobDetail/:jobId" element={<JobDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            {currentPath !== '/clientdashboard' && currentPath !== '/freelancer' && <Footer />}
        </Router>
    );
};

export default App;
