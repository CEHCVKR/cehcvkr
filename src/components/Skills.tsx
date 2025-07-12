import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const skills = [
  { name: 'Python', icon: '🐍', color: 'from-blue-400 to-cyan-400' },
  { name: 'Cybersecurity', icon: '🛡️', color: 'from-purple-500 to-indigo-500' },
  { name: 'Network Security', icon: '🔒', color: 'from-red-400 to-pink-500' },
  { name: 'Linux', icon: '🐧', color: 'from-gray-700 to-black' },
  { name: 'Windows', icon: '🪟', color: 'from-blue-500 to-blue-700' },
  { name: 'Batch Script', icon: '📜', color: 'from-yellow-600 to-yellow-800' },
  { name: 'C', icon: '💻', color: 'from-green-500 to-green-600' },
  { name: 'Java', icon: '☕', color: 'from-red-500 to-red-600' },
  { name: 'HTML', icon: '🌐', color: 'from-orange-400 to-red-400' },
  { name: 'CSS', icon: '🎨', color: 'from-blue-500 to-blue-600' },
  { name: 'JavaScript', icon: '🟨', color: 'from-yellow-400 to-orange-400' },
  { name: 'MySQL', icon: '🗄️', color: 'from-blue-600 to-indigo-600' },
];


  const itemsToShow = 6;
  const maxIndex = Math.max(0, skills.length - itemsToShow);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing digital experiences
          </p>
        </motion.div>

        {/* Skills Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <motion.button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            <div className="flex-1 mx-8">
              <div className="overflow-hidden">
                <motion.div
                  className="flex gap-6"
                  animate={{
                    x: `calc(-${currentIndex * (100 / itemsToShow)}% - ${currentIndex * 24}px)`,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className={`flex-shrink-0 w-48 h-32 bg-gradient-to-br ${skill.color} rounded-xl shadow-lg backdrop-blur-sm border border-white/20 flex flex-col items-center justify-center text-white hover:scale-105 transition-transform duration-300`}
                      whileHover={{ y: -5 }}
                    >
                      <div className="text-3xl mb-2">{skill.icon}</div>
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            <motion.button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;