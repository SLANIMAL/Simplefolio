import React from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { CalendarIcon, ClockIcon, TagIcon } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Building Modern Web Applications with React',
      excerpt: 'Learn how to create scalable and maintainable web applications using React and modern best practices.',
      date: '2024-03-15',
      readTime: '5 min read',
      category: 'React',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    },
    {
      id: 2,
      title: 'The Future of Web Development',
      excerpt: 'Exploring upcoming trends and technologies that will shape the future of web development.',
      date: '2024-03-10',
      readTime: '8 min read',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd',
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
            <h1 className="text-4xl font-bold mb-8 dark:text-white">Blog</h1>
            
            <div className="space-y-8">
              {posts.map((post) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <ClockIcon className="w-4 h-4" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <TagIcon className="w-4 h-4" />
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold mb-2 dark:text-white">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {post.excerpt}
                      </p>
                      <a
                        href="#"
                        className="inline-block text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Read more →
                      </a>
                    </div>
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Blog;