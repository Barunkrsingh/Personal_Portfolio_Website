
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Code, Users, BookOpen } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Testing Engineer",
      company: "FC Tech Pvt. Ltd., Gurgaon",
      duration: "Jun 2023 to Dec 2023",
      description: [
        "Developed comprehensive testing strategies for embedded systems.",
        "Wrote bug reports and collaborated with developers to resolve issues.",
        "Participated in test case creation, execution, and result documentation."
      ],
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const training = [
    {
      title: "Full Stack Development",
      organization: "Anovatech Institute of Crystalline Technology Pvt. Ltd.",
      duration: "4 Weeks (6th Aug 2023 to 16th Sep 2023)",
      icon: Code,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cybersecurity Virtual Internship",
      organization: "Paloalto Networks",
      duration: "10 Weeks (Sept 2023 to Nov 2023)",
      icon: Award,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "AI-ML Virtual Internship",
      organization: "India Edu Program",
      duration: "10 Weeks (April 2024 to June 2024)",
      icon: BookOpen,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const activities = [
    {
      title: "Mentor at Robonixx (Tech Club)",
      organization: "Bengal College of Engineering & Technology",
      duration: "Aug 2023 - Present",
      description: [
        "Coding club leader, promoting innovation.",
        "Mentor to 100+ students, nurturing their growth."
      ],
      icon: Users,
      color: "from-orange-500 to-yellow-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-16">
          {/* Work Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Code className="mr-3 text-blue-400" />
              Work Experience
            </h3>
            
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-600 rounded-full"></div>
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="relative flex items-center mb-8"
                >
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-blue-400"></div>
                  
                  <div className="ml-8 md:ml-0 md:w-1/2 md:pr-8">
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <div className="flex items-center mb-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className={`p-3 rounded-full bg-gradient-to-r ${exp.color} mr-4`}
                        >
                          <exp.icon size={20} className="text-white" />
                        </motion.div>
                        <div>
                          <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                          <p className="text-blue-400 font-medium">{exp.company}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-400 mb-4">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-gray-300">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Training & Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Award className="mr-3 text-green-400" />
              Vocational Training
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {training.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex p-3 rounded-full bg-gradient-to-r ${item.color} mb-4`}
                  >
                    <item.icon size={24} className="text-white" />
                  </motion.div>
                  
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-blue-400 text-sm mb-3">{item.organization}</p>
                  <p className="text-gray-400 text-sm">{item.duration}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Co-curricular Activities */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Users className="mr-3 text-purple-400" />
              Co-curricular Activities
            </h3>
            
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`p-4 rounded-2xl bg-gradient-to-r ${activity.color}`}
                  >
                    <activity.icon size={32} className="text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{activity.title}</h4>
                    <p className="text-blue-400 font-medium mb-2">{activity.organization}</p>
                    
                    <div className="flex items-center text-gray-400 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{activity.duration}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {activity.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-gray-300">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
