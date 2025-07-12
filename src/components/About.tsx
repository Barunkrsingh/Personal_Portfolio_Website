import { motion } from "framer-motion";
import { Code, Database, Globe, Server, Smartphone, Users } from "lucide-react";
const About = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  const highlights = [{
    icon: Code,
    text: "Full Stack Development",
    color: "text-blue-400"
  }, {
    icon: Database,
    text: "Data Structures & Algorithms",
    color: "text-green-400"
  }, {
    icon: Globe,
    text: "Web Application Development",
    color: "text-purple-400"
  }, {
    icon: Server,
    text: "Backend API Development",
    color: "text-yellow-400"
  }, {
    icon: Smartphone,
    text: "Responsive Design",
    color: "text-pink-400"
  }, {
    icon: Users,
    text: "Team Collaboration",
    color: "text-indigo-400"
  }];
  return <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                As a current B.Tech student in Information Technology, I possess a strong foundation in computer systems, 
                programming languages, and Full Stack Development. With in-depth knowledge of Computer Architecture, 
                Algorithms, DBMS, Computer Networks, and Data Structures, I am confident in my ability to analyze 
                problems and develop efficient solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Proficient in Python, Java, and C, I am eager to apply my skills in a dynamic and innovative environment. 
                My passion for technology drives me to continuously learn and adapt to new challenges in the ever-evolving 
                tech landscape.
              </p>
            </div>

            <motion.div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10" whileHover={{
            scale: 1.02
          }} transition={{
            duration: 0.3
          }}>
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-blue-400">Bachelor of Information Technology</h4>
                  <p className="text-gray-300">Bengal College of Engineering & Technology</p>
                  <p className="text-gray-400 text-sm">Aug 2023 - June 2026 | CGPA: 7.33</p>
                  <p className="text-gray-400 text-sm">Information Technology</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-green-400">Diploma in Electrical Engineering</h4>
                  <p className="text-gray-300">Bengal College of Polytechnic</p>
                  <p className="text-gray-400 text-sm">Aug 2020 - June 2023 | CGPA: 8.6</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }} className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">What I Do</h3>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => <motion.div key={index} variants={itemVariants} whileHover={{
              scale: 1.05,
              y: -5
            }} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center group">
                  <motion.div whileHover={{
                rotate: 360
              }} transition={{
                duration: 0.5
              }} className={`inline-flex p-3 rounded-full bg-white/10 mb-3 ${item.color}`}>
                    <item.icon size={24} />
                  </motion.div>
                  <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                    {item.text}
                  </p>
                </motion.div>)}
            </div>

            <motion.div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10" whileHover={{
            scale: 1.02
          }} transition={{
            duration: 0.3
          }}>
              <h4 className="text-xl font-bold text-white mb-4">Personal Details</h4>
              <div className="grid grid-cols-2 gap-4 text-gray-300">
                <div>
                  <p><span className="text-blue-400">Father's Name:</span> Bhajuram Singh</p>
                  <p><span className="text-blue-400">Date of Birth:</span> 10th Oct 2001</p>
                  <p><span className="text-blue-400">Gender:</span> Male</p>
                </div>
                <div>
                  <p><span className="text-blue-400">Nationality:</span> Indian</p>
                  <p><span className="text-blue-400">Languages:</span> English & Hindi</p>
                  <p><span className="text-blue-400">Religion:</span> Hindu</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;