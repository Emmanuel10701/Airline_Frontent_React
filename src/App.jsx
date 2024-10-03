// src/App.js
import React from 'react';
import Navbar from './components/navbar';
import MainContent from './components/homepage';

const App = () => {
  return (
    <div>
      <Navbar />
      <MainContent />
    </div>
  );
};

export default App;
