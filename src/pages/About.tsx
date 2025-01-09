import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { BriefcaseIcon, GraduationCapIcon, AwardIcon } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      title: 'Senior Developer',
      company: 'Tech Corp',
      period: '2020 - Present',
      description: 'Led development of enterprise applications using React and Node.js',
      icon: <BriefcaseIcon className="w-6 h-6" />,
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      period: '2018 - 2020',
      description: 'Built responsive web applications and e-commerce solutions',
      icon: <BriefcaseIcon className="w-6 h-6" />,
    },
  ];

  const education = [
    {
      degree: 'Master in Computer Science',
      school: 'Tech University',
      period: '2016 - 2018',
      icon: <GraduationCapIcon className="w-6 h-6" />,
    },
    {
      degree: 'Bachelor in Software Engineering',
      school: 'State University',
      period: '2012 - 2016',
      icon: <GraduationCapIcon className="w-6 h-6" />,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8 dark:text-white">About Me</h1>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-12">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm a passionate full-stack developer with over 5 years of experience in building web applications. 
                I specialize in React, Node.js, and modern web technologies.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6 dark:text-white">Experience</h2>
            <div className="space-y-6 mb-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold dark:text-white">{exp.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-6 dark:text-white">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      {edu.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold dark:text-white">{edu.degree}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{edu.school}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;