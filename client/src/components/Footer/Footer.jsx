import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-zinc-200 py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-3 text-yellow-400">
            The BytePost
          </h2>
          <p className="text-sm leading-relaxed">
            BytePost is your go-to platform for sharing knowledge, stories, and
            ideas. From tech trends to lifestyle tips, explore blogs that inspire
            and inform.
          </p>
        </div>

        
        <div>
          <h2 className="text-lg md:text-xl font-bold mb-3 text-yellow-400">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="/all-blogs" className="hover:text-yellow-400 transition">All Blogs</a></li>
            <li><a href="/profile" className="hover:text-yellow-400 transition">Profile</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition">About</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-bold mb-3 text-yellow-400">
            Connect With Us
          </h2>
          <p className="text-sm flex items-center gap-2">
            <FaEnvelope className="text-yellow-400" /> contact@bytepost.com
          </p>
          <p className="text-sm mt-2">Follow us on:</p>
          <div className="flex gap-4 mt-3 text-xl">
            <a href="https://www.instagram.com/mr_aman5588/" className="hover:text-yellow-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/aman-diwakar-48527a28b/" className="hover:text-yellow-400 transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      
      <div className="mt-8 border-t border-zinc-700 pt-4 text-center text-sm text-zinc-400">
        © {new Date().getFullYear()} Made with ❤️ by Aman | The BytePost. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
