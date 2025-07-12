import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Award, Trophy } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Hi! I'm a Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const achievements = [
    { icon: Trophy, text: "Cybersecurity Enthusiast", color: "from-yellow-400 to-orange-500" },
    { icon: Award, text: "Software Developer", color: "from-purple-400 to-pink-500" }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hi! I'm KARTHIK
              <span className="animate-pulse"></span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Cybersecurity Enthusiast & Software Developer specializing in network security, cybersecurity, cryptography and software development
            </p>

            {/* Achievement Badges */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.2 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${achievement.color} text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
                >
                  <achievement.icon size={16} />
                  {achievement.text}
                </motion.div>
              ))}
            </div>

            {/* Resume Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              onClick={() => window.open('https://drive.google.com/file/d/1dnMe9ey2g6rWsCjGKV_dBSCSCxeJ3eW2/view?usp=drive_link', '_blank')}
            >
              <Download size={20} />
              My Resume
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right Content - Developer Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-xl border border-white/20 shadow-2xl flex items-center justify-center"
              >
                <div className="text-6xl">👨‍💻</div>
              </motion.div>
              
              {/* Floating code elements */}
              {['Python', 'Batch Script', 'Network Securtiy'].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="absolute bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 text-sm text-white border border-white/20"
                  style={{
                    top: `${20 + index * 30}%`,
                    right: `${-10 + index * 5}%`,
                  }}
                  animate={{
                    y: [0, -5, 0],
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2 + index * 0.5,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;