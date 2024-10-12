import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        <div className="logo">
          <img src="/icon.png" alt="Eventhub Logo" className="w-24" />
        </div>
        <div className="footer-links">
          <ul className="flex space-x-6">
            <li><a href="/about" className="text-gray-300 hover:text-purple-400 transition-colors">About Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Contact Us</a></li>
            <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Terms of Service</a></li>
          </ul>
        </div>
        <div className="social-icons flex space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-300 hover:text-purple-400 transition-colors">
            <FaFacebook />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-300 hover:text-purple-400 transition-colors">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-300 hover:text-purple-400 transition-colors">
            <FaInstagram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl text-gray-300 hover:text-purple-400 transition-colors">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="text-center text-sm mt-6 text-gray-400">
        &copy; {new Date().getFullYear()} Eventhub. All rights reserved. Created by Achal.
      </div>
    </footer>
  );
};

export default Footer;
