import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Web3Provider } from './utils/web3';
import LandingPage from './components/LandingPage';
import UserRegistration from './components/UserRegistration';
import UserLogin from './components/UserLogin';
import CheckoutPage from './components/CheckoutPage';

function App() {
  return (
    <Web3Provider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<UserRegistration />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </Web3Provider>
  );
}

export default App;