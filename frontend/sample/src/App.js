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
  const [user,setUser]=React.useState();
  console.log(user);
  function session(name)
  {
    setUser(name);
  }
  console.log(`app ${user}`)
  return (
    <React.Fragment>
      <Router>
        <Navbar ses={user} />
        <Routes>
          <Route path='/' element={<Home ses={user} />} />
          <Route path='lost' element={<Lost ses={user}/>} />
          <Route path='found' element={<Found ses={user} />} />
          <Route path='raise' element={<Raise ses={user}/>} />
          <Route path='login' element={<Login ses={user} oper={session}/>} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
