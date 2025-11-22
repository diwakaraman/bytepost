import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/page';
import MainLayout from './layout/MainLayout';
import OtherLayout from './layout/OtherLayout';
import Login from './pages/Login/page';
import Signup from './pages/Signup/page';
import Profile from './pages/Profile/page';
import AllBlogs from './pages/All Blogs/page.jsx';
import DashboardProfile from './components/Profile/DashboardProfile.jsx';
import Favorites from './components/Profile/Favorites.jsx';
import LikedBlogs from './components/Profile/LikedBlogs.jsx';
import Description from './pages/Description/Description.jsx';
import Categories from './pages/Categories/Categories.jsx';
import AdminLogin from './pages/Admin Login/adminlogin.jsx';
import AdminDashboard from './pages/AdminDashboard/page.jsx';
import DashBoard from './components/Admin Components/Dashboard/DashBoard.jsx';
import AddBlogs from './components/Admin Components/Add Blogs/AddBlogs.jsx';
import EditBlogs from './components/Admin Components/Edit Blogs/EditBlogs.jsx';
import UpdateBlog from './components/Admin Components/Edit Blogs/Compo/UpdateBlog.jsx';
import { BlogProvider } from './Context/BlogContext.jsx';
import Settings from './components/Admin Components/Setting/Settings.jsx';
import ReportForm from './components/Admin Components/Report/ReportForm.jsx';
import Users from './components/Admin Components/ManageUsers/Users.jsx';


const App = () => {
  return (
    <BlogProvider>
      <Router>
        <Routes>
        
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="all-blogs" element={<AllBlogs />} />
            <Route path="description/:id" element={<Description />} />
            <Route path="cat/:id" element={<Categories />} />

         
            <Route path="profile" element={<Profile />}>
              <Route index element={<DashboardProfile />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="liked-blogs" element={<LikedBlogs />} />
            </Route>
          </Route>

    
          <Route element={<OtherLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="admin-login" element={<AdminLogin />} />

           
            <Route path="admin-dashboard" element={<AdminDashboard />}>
              <Route index element={<DashBoard />} />
              <Route path="add-blogs" element={<AddBlogs />} />
              <Route path="edit-blogs" element={<EditBlogs />} />
              <Route path="update-blog/:id" element={<UpdateBlog />} />
              <Route path="settings" element={<Settings/>} />
              <Route path="manage-users" element={<Users/>} />
              <Route path="reports" element={<ReportForm/>} />


            </Route>
          </Route>
        </Routes>
      </Router>
    </BlogProvider>
  );
};

export default App;
