import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award, Calendar, Building } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Connect and Protect: Networks and Network Security',
      issuer: 'Coursera',
      date: 'Jun 2024',
      description: 'Comprehensive course on network security fundamentals and protection strategies',
      icon: '🔐',
      color: 'from-blue-400 to-blue-600',
      url: 'https://drive.google.com/file/d/1VE4JiTpfw4i5BswbFabkahR8mjjxndxm/view?usp=drive_link'
    },
    {
      id: 2,
      title: 'SQL Injection Attacks',
      issuer: 'EC-Council',
      date: 'Oct 2023',
      description: 'Advanced training on SQL injection vulnerabilities and prevention techniques',
      icon: '🛡️',
      color: 'from-red-400 to-red-600',
      url: 'https://drive.google.com/file/d/1PJlW9rlBU-hBs6pfXSBymCNpcpxAcwoH/view?usp=drive_link'
    },
    {
      id: 3,
      title: 'Programming in Java',
      issuer: 'NPTEL',
      date: '2023',
      description: 'Comprehensive Java programming course covering OOP concepts and applications',
      icon: '☕',
      color: 'from-green-500 to-green-600',
      url: 'https://drive.google.com/file/d/1UxXePtae9cPspRCnpzbhdgdocIfslNVl/view?usp=drive_link'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Award className="text-white" size={32} />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Certifications
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that validate my technical expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => window.open(cert.url, '_blank')}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon and External Link */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{cert.icon}</div>
                  <ExternalLink 
                    size={20} 
                    className="text-white/60 group-hover:text-white transition-colors duration-300" 
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-2 mb-2">
                  <Building size={16} className="text-gray-400" />
                  <span className="text-gray-300 text-sm">{cert.issuer}</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={16} className="text-gray-400" />
                  <span className="text-gray-300 text-sm">{cert.date}</span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Hover effect border */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-4">
            Click on any certification to view the official document
          </p>
          <div className="flex justify-center">
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white">
              <span className="text-sm">All certificates are verified and can be viewed instantly</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;