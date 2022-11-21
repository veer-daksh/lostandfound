import Navbar from './components/navbar';
import Home from './components/Home_body';
import React from 'react';
import Raise from './components/Raise';
import Found from './components/found';
import Lost from './components/lost';
import Login from './components/login'
// react router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='users' element={<Lost />} />
          <Route path='found' element={<Found />} />
          <Route path='raise' element={<Raise />} />
          <Route path='login' element={<Login/>} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
