// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/navigation';
import Home from './pages/homePage';
import Login from './components/Login/login';
import Registration from './components/Register/registerForm';
import URLManagement from './components/URLManagement/urlManagement';
import ForgotPassword from './components/ForgotPwd/forgotPassword';

const App = () => {
  const authenticated = false;

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Registration} />
        <Route path="/forgot-password" Component={ForgotPassword} />

        <Route path="/url-management" Component={URLManagement} />

      </Routes>
    </Router>
  );
};

export default App;
