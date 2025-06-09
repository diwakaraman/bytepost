import React from 'react';

const AddBlogs = () => {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">📝 Add New Blog</h1>

        <form className="flex flex-col gap-6">
          {/* Title Input */}
          <div className="relative">
            <input
              type="text"
              required
              placeholder=" "
              className="peer w-full border-b-2 border-blue-400 outline-none p-3 text-lg text-gray-800 bg-transparent"
            />
            <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500">
              Blog Title
            </label>
          </div>

          {/* Description */}
          <div className="relative">
            <textarea
              required
              placeholder=" "
              rows="5"
              className="peer w-full border-b-2 border-blue-400 outline-none p-3 text-base text-gray-800 bg-transparent resize-none"
            ></textarea>
            <label className="absolute left-3 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500">
              Blog Description
            </label>
          </div>

          {/* File Upload */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-blue-600">Upload Blog Image</label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300"
            >
              🚀 Post Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlogs;
