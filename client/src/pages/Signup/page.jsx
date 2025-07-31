
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:1000/api/user/signup', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/admin-dashboard');
    } catch (err) {
      alert(err.response?.data?.message || 'Already registered ');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 shadow-2xl rounded-2xl w-full max-w-md bg-white">
        <div className="text-2xl text-center mb-6">
          <h1 className="font-bold inline">Welcome!</h1>
          <span className="block text-base mt-1">Signup as a new user</span>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="text" name="username" onChange={handleChange} required placeholder="Username" className="px-3 py-2 border rounded-lg" />
          <input type="email" name="email" onChange={handleChange} required placeholder="Email" className="px-3 py-2 border rounded-lg" />
          <input type="password" name="password" onChange={handleChange} required placeholder="Password" className="px-3 py-2 border rounded-lg" />
          <button type="submit" className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Sign Up</button>
        </form>
        <p className="mt-4 text-sm text-center">Already have an account? <a href="/login" className="text-blue-600">Login</a></p>
      </div>
    </div>
  );
};

export default Signup;
