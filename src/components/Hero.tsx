import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  const iconVariants = {
    hidden: {
      scale: 0,
      rotate: -180
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 20
      }
    }
  };
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 30
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
        delay: 0.3
      }
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div className="flex justify-center lg:order-2" initial="hidden" animate="visible" variants={imageVariants}>
            <div className="relative">
              <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-30" animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }} transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }} />
              <motion.img src="/uploads/6ed41154-a104-4771-a68b-e5a472afdabe.png" alt="Barun Kumar Singh" className="relative w-80 h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl" whileHover={{
              scale: 1.05,
              rotate: 5,
              transition: {
                duration: 0.3
              }
            }} drag dragConstraints={{
              left: -50,
              right: 50,
              top: -50,
              bottom: 50
            }} dragElastic={0.1} />
              <motion.div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-20" animate={{
              scale: [1, 1.2, 1]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div initial="hidden" animate="visible" variants={textVariants} className="text-center lg:text-left lg:order-1">
            <motion.h1 whileHover={{
            scale: 1.02
          }} className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-5xl">Barun Kumar Singh</span>
            </motion.h1>
            
            <motion.p initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.5,
            duration: 0.8
          }} className="text-xl text-gray-300 mb-4 md:text-xl">Full Stack Web Developer & Software Engineer</motion.p>
            
            <motion.p className="text-lg text-gray-400 mb-8 max-w-2xl" initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.7,
            duration: 0.8
          }}>
              Passionate about creating innovative web applications with modern technologies. 
              Specialized in React, Node.js, and full-stack development.
            </motion.p>

            {/* Contact Info */}
            <motion.div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-gray-300" initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.9,
            duration: 0.8
          }}>
              <motion.div className="flex items-center gap-2" whileHover={{
              scale: 1.1,
              color: "#60a5fa"
            }}>
                <Mail size={18} />
                <span>barunkrsingh@gmail.com</span>
              </motion.div>
              <motion.div className="flex items-center gap-2" whileHover={{
              scale: 1.1,
              color: "#60a5fa"
            }}>
                <Phone size={18} />
                <span>+91 7797919640</span>
              </motion.div>
              <motion.div className="flex items-center gap-2" whileHover={{
              scale: 1.1,
              color: "#60a5fa"
            }}>
                <MapPin size={18} />
                <span>Durgapur, West Bengal, India</span>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div className="flex justify-center lg:justify-start space-x-6 mb-12" initial="hidden" animate="visible" transition={{
            delay: 1.1
          }}>
              {[{
              icon: Github,
              href: "https://github.com/Barunkrsingh",
              delay: 0
            }, {
              icon: Linkedin,
              href: "https://linkedin.com/in/barun-kr-singh-it",
              delay: 0.1
            }, {
              icon: Mail,
              href: "mailto:barunkrsingh@gmail.com",
              delay: 0.2
            }].map(({
              icon: Icon,
              href,
              delay
            }, index) => <motion.a key={index} href={href} target="_blank" rel="noopener noreferrer" variants={iconVariants} whileHover={{
              scale: 1.2,
              rotate: 360
            }} whileTap={{
              scale: 0.95
            }} className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-blue-500/20 transition-all duration-300 border border-white/20" style={{
              animationDelay: `${delay}s`
            }}>
                  <Icon size={24} />
                </motion.a>)}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" initial={{
            opacity: 0,
            y: 50
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 1.3,
            duration: 0.8
          }}>
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300">
                  <a href="#projects">View My Work</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button variant="outline" size="lg" className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                  <a href="#contact">Get In Touch</a>
                </Button>
              </motion.div>
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300">
                  <a href="https://drive.google.com/file/d/1cdgESTRHjx97jQNfy30dPBPSpqbi07ks/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Hero;