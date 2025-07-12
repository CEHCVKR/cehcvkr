import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Award, Heart, Code } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
  {
    id: 1,
    title: 'PyWall',
    description: 'Advanced network security tool for monitoring and protection',
    image: 'https://learnubuntu.com/content/images/2023/01/ufw-ubuntu-1.png?auto=compress&cs=tinysrgb&w=400', // Cybersecurity server room
    tags: ['Python', 'Cybersecurity', 'Network Security', 'Monitoring'],
    github: 'https://github.com/CEHCVKR/PyWall',
    live: 'https://youtu.be/Xsq5YC2pjnk?si=Y3yd3yngnx67l6nH',
    gradient: 'from-blue-500 to-purple-600'
  },
  {
    id: 2,
    title: 'PhantomARP',
    description: 'ARP spoofing detection and prevention security tool',
    image: 'https://images.pexels.com/photos/5473951/pexels-photo-5473951.jpeg?auto=compress&cs=tinysrgb&w=400', // ARP spoofing concept
    tags: ['Python', 'ARP Security', 'Network Protection', 'Cybersecurity'],
    github: 'https://github.com/CEHCVKR/PhantomARP',
    live: 'https://youtu.be/G53pmUPXsEQ?si=2MgQnfmEJXK-I7lJa',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    id: 3,
    title: 'WiSpy-Deauth',
    description: 'Wi-Fi deauthentication tool for testing network security',
    image: 'https://www.shutterstock.com/image-vector/wifi-symbol-exclamation-mark-icon-260nw-2146949319.jpg?auto=compress&cs=tinysrgb&w=400', // Wi-Fi signal hacking
    tags: ['Python', 'Wi-Fi Security', 'Deauthentication', 'Cybersecurity'],
    github: 'https://github.com/CEHCVKR/WiSpy-Deauth',
    live: 'https://github.com/CEHCVKR/WiSpy-Deauth',
    gradient: 'from-red-500 to-yellow-600'
  },
  {
    id: 4,
    title: 'SecurePeerSync',
    description: 'Peer-to-peer secure file synchronization application',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVL8_wx2wGJiMi3h-JNVl5ncheGpeRJfu6A&s?auto=compress&cs=tinysrgb&w=400', // File encryption/security
    tags: ['Python', 'File Security', 'P2P Networking', 'Cybersecurity'],
    github: 'https://github.com/CEHCVKR/SecurePeerSync',
    live: 'https://github.com/CEHCVKR/SecurePeerSync',
    gradient: 'from-indigo-500 to-blue-700'
  },
];

  const achievements = [
  {
    title: 'SAC &-CLUBS Council Head',
    description: 'Consistently managed academics and college activities as SAC - CLUBS Head',
    icon: '👑',
    year: '2025',
    color: 'from-purple-500 to-pink-600'
  },
  {
    title: 'Best Class Representative',
    description: 'Awarded for outstanding leadership and coordination; served as CR for all 4 years',
    icon: '🎖️',
    year: '2024',
    color: 'from-blue-400 to-indigo-500'
  },
  {
    title: 'CC CLUB Member',
    description: 'Active member of the Chairman’s Club for excellence in academics and activities',
    icon: '🏅',
    year: '2025',
    color: 'from-red-400 to-rose-500'
  },
  {
    title: 'We Are With You & NSS Volunteer',
    description: 'Active volunteer for social causes and community development initiatives',
    icon: '🤝',
    year: '2024',
    color: 'from-orange-400 to-yellow-500'
  },
];



  const hobbies = [
  { title: 'Cybersecurity Research', icon: '🔒', description: 'Exploring new security vulnerabilities' },
  { title: 'Network Security', icon: '🛡️', description: 'Developing security monitoring tools' },
  { title: 'Software Development', icon: '💻', description: 'Building innovative applications' },
  { title: 'Learning', icon: '📚', description: 'Staying updated with the latest technologies' },
  { title: 'Pencil Art', icon: '🎨', description: 'Creating detailed artworks' },
  { title: 'Singing & Whistling', icon: '🎤', description: 'Singing and whistling tunes for relaxation' },
  { title: 'Organizing & Cleanliness', icon: '🧹', description: 'Keeping personal space neat and orderly' },
  { title: 'Leadership & Coordination', icon: '🤝', description: 'Enjoy organizing events and managing teams' },
];


  const tabs = [
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'hobbies', label: 'Hobbies', icon: Heart },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Work & Interests
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore my projects, achievements, and personal interests
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white text-purple-900 shadow-lg'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === 'projects' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`}></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/20 rounded-full text-xs text-white"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'achievements' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-1 gap-6"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start gap-6 p-6 bg-gradient-to-r ${achievement.color} rounded-xl shadow-lg`}
                >
                  <div className="text-4xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm text-white">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-white/90">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'hobbies' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl mb-4">{hobby.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{hobby.title}</h3>
                  <p className="text-gray-300 text-sm">{hobby.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;