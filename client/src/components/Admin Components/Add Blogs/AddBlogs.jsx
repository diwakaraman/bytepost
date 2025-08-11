import React, { useState } from "react";
import { useBlogs } from "../../../Context/BlogContext";
import { useNavigate } from "react-router-dom";

const AddBlogs = () => {
  const { blogs, setBlogs } = useBlogs();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !image) {
      alert("Please fill all fields");
      return;
    }

    const newBlog = {
      img: URL.createObjectURL(image),
      title,
      description,
    };

    setBlogs([...blogs, newBlog]);
    navigate("/admin-dashboard/edit-blogs");
  };

  return (
    <div className="p-4 h-screen">
      <h1 className="text-2xl font-semibold">Add Blogs</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Title"
          className="p-4 border-b border-zinc-400 font-semibold w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="p-4 border-b border-zinc-400 font-semibold w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          accept=".jpeg, .png, .jpg"
          onChange={(e) => setImage(e.target.files[0])}
          className="bg-zinc-900 rounded text-white"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 shadow-2xl hover:bg-blue-700 transition-all"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlogs;
