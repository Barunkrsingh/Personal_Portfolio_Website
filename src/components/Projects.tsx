import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Users, Code, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Data Structure Visualizer",
      duration: "Dec 2023 - Feb 2024",
      description: "A beautiful, interactive, and responsive web application for visualizing data structures and algorithms with real-time animations.",
      technologies: ["Frontend: React.js", "HTML", "CSS", "JavaScript", "Styling: Styled Components", "Animations: Framer Motion", "CSS transitions", "Routing: React Router"],
      features: [
        "Multiple Data Structures visualization",
        "Real-Time Visualization with step-by-step animations", 
        "User -Friendly Responsive Design",
        "Interactive Playground for algorithm testing",
        "Code Preview & Explanation for each algorithm"
      ],
      icon: Code,
      color: "from-purple-500 to-pink-500",
      github: "https://github.com/Barunkrsingh/Data-Structure-Visualizer",
      demo: "https://ds-visualizer-barun-kumar-singhs-projects.vercel.app/"
    },
    {
      title: "LMS (Library Management System with QR Code Attendance & Auto-Generated Library Cards)",
      duration: "Aug 2024 - Dec 2024",
      description: "A comprehensive web application developed by a team of 6 members, enabling comprehensive library management functionalities.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "phpqrcode", "MySQL", "DOMPDF"],
      features: [
        "Member management with secure authentication",
        "Add, view, update, and delete books", 
        "Student and faculty registration and management",
        "QR Code-based attendance tracking",
        "Auto-generated library ID cards with QR codes",
        "Book borrowing and returning system",
        "Reporting system for attendance and transactions",
        "Admin login with access control"
      ],
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      github: "https://github.com/Barunkrsingh/Library-Management-System",
      demo: "https://github.com/Barunkrsingh/Library-Management-System"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development and problem-solving.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 overflow-hidden relative group"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Project Icon and Header */}
                  <div className="lg:w-1/3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${project.color} mb-6`}
                    >
                      <project.icon size={48} className="text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                    
                    <div className="flex items-center text-gray-400 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{project.duration}</span>
                    </div>

                    <div className="flex gap-4 mb-6">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                          onClick={() => window.open(project.github, '_blank')}
                        >
                          <Github size={16} className="mr-2" />
                          Code
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="sm"
                          className={`bg-gradient-to-r ${project.color} hover:opacity-90`}
                          onClick={() => window.open(project.demo, '_blank')}
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </Button>
                      </motion.div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:w-2/3 space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Code size={18} className="mr-2 text-blue-400" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.1 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-white/20 hover:border-blue-400 transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <Users size={18} className="mr-2 text-purple-400" />
                        Key Features
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                            className="flex items-start text-gray-300"
                          >
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Upcoming Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Upcoming Projects
              </span>
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Exciting projects currently in development phase
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Learning Management System with AI Agent",
                status: "In Development",
                progress: 70,
                description: "Advanced LMS integrated with AI agent for auto call support and real-time chat application for seamless learning experience.",
                technologies: ["React.js", "Node.js", "AI/ML", "Socket.io", "MongoDB"],
                features: ["AI Auto Call Support", "Real-time Chat", "Course Management", "Progress Tracking"],
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Local Store E-commerce Platform",
                status: "Planning Phase",
                progress: 40,
                description: "E-commerce platform designed specifically for local stores with inventory management and customer engagement features.",
                technologies: ["React.js", "Node.js", "MongoDB", "Payment API", "GPS Integration"],
                features: ["Local Store Focus", "Inventory Management", "Customer Engagement", "Location-based Services"],
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Social Media Platform",
                status: "Research Phase",
                progress: 20,
                description: "Modern social media platform with advanced features for content sharing, networking, and community building.",
                technologies: ["React.js", "Node.js", "Socket.io", "AWS", "Redis"],
                features: ["Content Sharing", "Real-time Updates", "Community Features", "Advanced Analytics"],
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Ebus Management System",
                status: "Planning Phase",
                progress: 30,
                description: "Location-based bus management system for real-time tracking, route optimization, and passenger information.",
                technologies: ["React.js", "GPS API", "Node.js", "Real-time DB", "Maps Integration"],
                features: ["Real-time Tracking", "Route Optimization", "Passenger Info", "Location Services"],
                color: "from-yellow-500 to-orange-500"
              },
              {
                title: "Super Mall Web Application",
                status: "Research Phase",
                progress: 15,
                description: "Comprehensive mall management system for managing shop offers, products, and location-based services.",
                technologies: ["React.js", "Node.js", "MongoDB", "Location API", "Payment Gateway"],
                features: ["Shop Management", "Offer Management", "Product Catalog", "Location Services"],
                color: "from-red-500 to-pink-500"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 relative overflow-hidden group"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.color} text-white`}>
                      {project.status}
                    </span>
                    <span className="text-gray-400 text-sm">{project.progress}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                    <motion.div
                      className={`h-2 rounded-full bg-gradient-to-r ${project.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>

                  {/* Project Title */}
                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h5 className="text-sm font-semibold text-gray-200 mb-2">Technologies:</h5>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-white/10 text-gray-300 rounded text-xs border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-200 mb-2">Key Features:</h5>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} mr-2`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Animated Corner */}
                <motion.div
                  className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${project.color} rounded-full opacity-20`}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
