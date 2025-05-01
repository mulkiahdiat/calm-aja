import React from 'react';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Your Site</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            A beautiful website that perfectly captures your brand and engages your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Modern Design',
              description: 'Clean, contemporary aesthetics that make your site stand out from the competition.',
              icon: '💻',
            },
            {
              title: 'Fully Responsive',
              description: 'Your website will look amazing on all devices, from smartphones to desktop computers.',
              icon: '📱',
            },
            {
              title: 'Easy to Update',
              description: 'Simple, intuitive interface that makes updating your content a breeze.',
              icon: '✏️',
            },
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;