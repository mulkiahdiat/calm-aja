import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Beautiful, modern designs tailored to your brand and audience.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Development',
      description: 'Clean, efficient code that ensures your site runs smoothly.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'SEO Optimization',
      description: 'Strategic optimization to help customers find your site.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Content Creation',
      description: 'Compelling content that engages visitors and drives conversions.',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <section 
      id="services" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            We offer a range of services to help your online presence thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;