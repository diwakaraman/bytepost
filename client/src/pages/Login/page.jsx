import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:1000/api/user/login', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/admin-dashboard');
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 via-pink-200 to-yellow-200">
      <div className="p-10 shadow-2xl rounded-3xl w-full max-w-md bg-white border border-purple-200">
        <div className="text-3xl text-center mb-6 font-extrabold text-purple-700">
          <h1>Welcome Again!</h1>
          <span className="block text-base mt-1 font-medium text-gray-600">Please Login Here</span>
        </div>

        {error && (
          <p className="text-red-600 text-sm text-center mb-4 font-medium">{error}</p>
        )}

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            required
            placeholder="Email"
            className="px-4 py-2 border-2 border-purple-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
            placeholder="Password"
            className="px-4 py-2 border-2 border-purple-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="submit"
            className="mt-2 bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition duration-300 shadow-md"
          >
            Login
          </button>
        </form>

        <p className="mt-5 text-sm text-center text-gray-700">
          Don't Have An Account?{' '}
          <a href="/signup" className="text-purple-600 font-medium hover:underline">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
