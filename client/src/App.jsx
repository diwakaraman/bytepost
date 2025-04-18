import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/page';
import MainLayout from './layout/mainlayout';
import OtherLayout from './layout/OtherLayout';
import Login from './pages/Login/page';
import Signup from './pages/Signup/page';
import Profile from './pages/Profile/page';
import AllBlogs from './pages/All Blogs/page.jsx';
import DashboardProfile from './components/Profile/DashboardProfile.jsx';
import Favorites from './components/Profile/Favorites.jsx';
import LikedBlogs from './components/Profile/LikedBlogs.jsx';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>

          <Route path='/all-blogs' element={<AllBlogs/>}/>
          <Route path='/profile' element={<Profile/>}>
          
          <Route index element={<DashboardProfile/>}/>
          <Route path='/profile/favorites'  element={<Favorites/>}/>
          <Route path='/profile/liked-blogs' element={<LikedBlogs/>}/>
          </Route>
          </Route>
          
        
          <Route element={<OtherLayout/>}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          </Route>
      </Routes>
    </Router>
  );
};

export default App;