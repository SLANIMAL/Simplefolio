import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
      className="min-h-screen"
    >
      <Hero />
      
      <motion.section
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="py-20 bg-gray-50 dark:bg-gray-800"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 dark:text-white"
          >
            Featured Technologies
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['React', 'TypeScript', 'Node.js', 'TailwindCSS'].map((tech, index) => (
              <motion.div
                key={tech}
                variants={itemVariants}
                className="group perspective"
              >
                <motion.div
                  whileHover={{
                    rotateX: 15,
                    rotateY: 15,
                    scale: 1.1,
                  }}
                  className="relative bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transform-gpu transition-transform"
                >
                  <h3 className="text-xl font-semibold text-center dark:text-white">
                    {tech}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;