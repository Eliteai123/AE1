import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full py-6 sm:py-8 px-4 xs:px-6 bg-white/5 backdrop-blur-lg text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-xs sm:text-sm mb-4 md:mb-0">© 2024 Automate Elite. All rights reserved.</div>
        <div className="flex space-x-4 sm:space-x-8 text-xs sm:text-sm">
          <Link to="/privacy" className="hover:text-gray-300">Privacy</Link>
          <Link to="/terms" className="hover:text-gray-300">Terms</Link>
          <a href="mailto:contact@automate-elite.com" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;