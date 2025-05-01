import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              YourSite
            </h3>
            <p className="text-gray-400 max-w-md">
              Creating beautiful, functional websites that help businesses grow and thrive online.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Twitter</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Instagram</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            &copy; {currentYear} YourSite. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;