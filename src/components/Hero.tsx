import React from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, FileTextIcon } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              alt="Professional headshot"
              className="rounded-full w-64 h-64 object-cover mx-auto lg:mx-0 shadow-xl"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
              Hi, I'm <span className="text-blue-600">John Doe</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
              Crafting digital experiences with clean code and creative design solutions.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start mb-8">
              <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a href="#" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                <MailIcon className="w-6 h-6" />
              </a>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2">
                <FileTextIcon className="w-5 h-5" />
                Download CV
              </button>
              <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-white rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};