// src/components/Sidebar/Sidebar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const navLinks = [
    { to: "/admin-dashboard", label: "Dashboard" },
    { to: "/admin-dashboard/add-blogs", label: "Add Blogs" },
    { to: "/admin-dashboard/edit-blogs", label: "Edit Blogs" },
    { to: "/admin-dashboard/manage-users", label: "Manage Users" },
    { to: "/admin-dashboard/reports", label: "Reports" },
    { to: "/admin-dashboard/settings", label: "Settings" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-white h-screen shadow-md p-4 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <h2 className="text-xl font-bold mb-6 text-gray-700">Admin Panel</h2>
        <nav className="space-y-2">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="block px-3 py-2 rounded-md text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div>
        <button
          onClick={handleLogout}
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-all duration-200"
        >
          Log Out
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
