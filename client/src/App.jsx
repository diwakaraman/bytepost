import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/page.jsx';
import MainLayout from './layout/mainlayout.jsx';
import Login from './pages/Login/page.jsx';
import Signup from './pages/Signup/page.jsx';
import OtherLayout from './layout/OtherLayout.jsx';
import Profile from './pages/Profile/page.jsx';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>

          <Route path='profile' element={<Profile/>}/>
          </Route>

          <Route  element={<OtherLayout/>}>
          
          <Route path='/login' element={<Login/>}/>
        
          <Route path='/signup' element={<Signup/>}/>
          </Route>
        
      </Routes>
    </Router>
  );
};

export default App;