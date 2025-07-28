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
      localStorage.setItem('token', res.data.token); // optional if using token-based login
      navigate('/admin-dashboard'); // ✅ Redirect after login
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 shadow-2xl rounded-2xl w-full max-w-md bg-white">
        <div className="text-2xl text-center mb-6">
          <h1 className="font-bold inline">Welcome Again!</h1>
          <span className="block text-base mt-1">Please Login Here</span>
        </div>

        {error && <p className="text-red-600 text-sm text-center mb-2">{error}</p>}

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            required
            placeholder="Email"
            className="px-3 py-2 border rounded-lg shadow-sm"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
            placeholder="Password"
            className="px-3 py-2 border rounded-lg shadow-sm"
          />
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Don't Have An Account? <a href="/signup" className="text-blue-600 hover:underline">Signup</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
