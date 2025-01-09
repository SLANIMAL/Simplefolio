import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { CodeIcon, PaintbrushIcon, ServerIcon, SmartphoneIcon } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <CodeIcon className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Building modern, responsive websites using the latest technologies.',
      features: ['React/Next.js', 'Vue/Nuxt.js', 'Custom Solutions'],
    },
    {
      icon: <PaintbrushIcon className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user interfaces.',
      features: ['User Research', 'Wireframing', 'Prototyping'],
    },
    {
      icon: <ServerIcon className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Developing robust and scalable backend solutions.',
      features: ['Node.js/Express', 'Database Design', 'API Development'],
    },
    {
      icon: <SmartphoneIcon className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications.',
      features: ['React Native', 'Progressive Web Apps', 'Native Apps'],
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8 dark:text-white">Services</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg group perspective"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      rotateX: 2,
                      rotateY: 2,
                    }}
                    className="transform-gpu transition-transform"
                  >
                    <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;