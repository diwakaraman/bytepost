import React from "react";
import { useBlogs } from "../../../Context/BlogContext";
import { Link } from "react-router-dom";

const EditBlogs = () => {
  const { blogs, setBlogs } = useBlogs();

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      setBlogs(blogs.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Edit Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.length > 0 ? (
          blogs.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 flex flex-col items-center shadow-lg"
            >
              <img
                src={item.img}
                alt="Blog"
                className="rounded-md h-40 w-full object-cover"
              />
              <h2 className="mt-4 text-xl font-semibold">{item.title}</h2>
              <p className="text-sm text-zinc-600 mb-4">
                {item.description.slice(0, 170)}...
              </p>
              <div className="w-full flex flex-col gap-2">
                <Link
                  to={`/admin-dashboard/update-blog/${i}`}
                  className="bg-blue-600 text-center text-white rounded-xl px-4 py-2 hover:bg-blue-700 transition"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(i)}
                  className="bg-red-600 text-white rounded-xl px-4 py-2 hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No blogs yet. Add some first!</p>
        )}
      </div>
    </div>
  );
};

export default EditBlogs;
