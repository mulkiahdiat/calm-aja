import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 flex flex-col items-start space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-800 dark:text-white">Welcome to</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Business
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
              We specialize in creating amazing experiences for our customers. 
              Let us help you bring your vision to life.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Us
              </a>
              <a 
                href="#services" 
                className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-lg border border-gray-300 dark:border-gray-700 transition-colors duration-300 shadow hover:shadow-md"
              >
                Our Services
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team working together" 
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;