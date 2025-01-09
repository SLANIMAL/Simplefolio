import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { ExternalLinkIcon, GithubIcon, TagIcon } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform built with React and Node.js',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
      category: ['web', 'fullstack'],
      technologies: ['React', 'Node.js', 'MongoDB'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Modern portfolio website with animations and 3D effects',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      category: ['web', 'frontend'],
      technologies: ['React', 'Three.js', 'TailwindCSS'],
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  const categories = ['all', 'web', 'frontend', 'fullstack'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <PageTransition>
      <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8 dark:text-white">Projects</h1>
            
            <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full capitalize transition-colors ${
                    filter === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group perspective"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                      rotateX: 2,
                      rotateY: 2,
                    }}
                    className="transform-gpu transition-transform"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm flex items-center gap-1"
                          >
                            <TagIcon className="w-4 h-4" />
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a
                          href={project.demoUrl}
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
                        >
                          <ExternalLinkIcon className="w-4 h-4" />
                          Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-700"
                        >
                          <GithubIcon className="w-4 h-4" />
                          Code
                        </a>
                      </div>
                    </div>
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

export default Projects;