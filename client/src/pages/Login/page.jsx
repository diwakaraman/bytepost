import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:1000/api/v1/login', formData);
      console.log('Login successful:', res.data);
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md transform transition duration-500 hover:scale-105">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-indigo-700">Welcome Back!</h1>
          <p className="text-sm text-gray-500 mt-2">Login to your account</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              placeholder="••••••••"
              required
            />
          </div>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-xl transition duration-300 shadow-md"
          >
            Login
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-600">
          Don’t have an account?
          <a href="/Signup" className="ml-1 text-indigo-600 font-medium hover:underline">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
