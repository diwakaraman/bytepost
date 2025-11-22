import React from "react";
import { Link } from "react-router-dom";
import AllBlogs from "../../../pages/All Blogs/page";


const AdminCard = ({ title, description, path, color, icon }) => {
  return (
    <Link
      to={path}
      className={`block p-6 rounded-xl shadow-lg text-white transition-transform transform hover:scale-105 ${color}`}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm opacity-80">{description}</p>
    </Link>
  );
};

const DashBoard = () => {
  const adminLinks = [
    {
      title: "All Blogs",
      description: "View, edit, and delete all blogs.",
      path: "/admin-dashboard/edit-blogs",
      color: "bg-purple-600",
      icon: "📝",
    },
    {
      title: "Manage Users",
      description: "Control user accounts and permissions.",
      path: "/admin-dashboard/users", 
      color: "bg-blue-600",
      icon: "👥",
    },
    {
      title: "Reports",
      description: "Check flagged blogs and take actions.",
      path: "/admin-dashboard/reports", 
      color: "bg-red-500",
      icon: "🚨",
    },
    {
      title: "Settings",
      description: "Change admin settings and preferences.",
      path: "/admin-dashboard/settings", 
      color: "bg-green-600",
      icon: "⚙",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="text-gray-600">Welcome back, Admin! Manage your blog platform here.</p>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {adminLinks.map((link, index) => (
          <AdminCard key={index} {...link} />
        ))}
      </div>

     
      <div className="bg-white rounded-xl shadow-md p-4">
        <h2 className="text-lg font-bold mb-4">Recent Blogs</h2>
        <AllBlogs />
      </div>
    </div>
  );
};

export default DashBoard;
