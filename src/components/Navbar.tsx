import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navItems = [{
    name: "Home",
    href: "#home"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Skills",
    href: "#skills"
  }, {
    name: "Projects",
    href: "#projects"
  }, {
    name: "Experience",
    href: "#experience"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.8,
    ease: "easeOut"
  }} className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? "bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-white/10" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div whileHover={{
          scale: 1.05
        }} className="text-2xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">BKS</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => <motion.a key={item.name} href={item.href} initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1,
            duration: 0.5
          }} whileHover={{
            scale: 1.1,
            color: "#60a5fa",
            transition: {
              duration: 0.2
            }
          }} className="text-white hover:text-blue-400 transition-all duration-300 font-medium relative group">
                {item.name}
                <motion.div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 group-hover:w-full transition-all duration-300" />
              </motion.a>)}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button whileTap={{
            scale: 0.95
          }} onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              <motion.div initial={false} animate={{
              rotate: isOpen ? 180 : 0
            }} transition={{
              duration: 0.3
            }}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div initial={false} animate={{
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0
      }} transition={{
        duration: 0.3,
        ease: "easeInOut"
      }} className="md:hidden overflow-hidden">
          <motion.div className="py-4 space-y-4 bg-gray-800/50 backdrop-blur-sm rounded-lg mb-4" initial={false} animate={{
          y: isOpen ? 0 : -20
        }} transition={{
          duration: 0.3
        }}>
            {navItems.map((item, index) => <motion.a key={item.name} href={item.href} initial={false} animate={{
            x: isOpen ? 0 : -20,
            opacity: isOpen ? 1 : 0
          }} transition={{
            delay: isOpen ? index * 0.1 : 0,
            duration: 0.3
          }} whileHover={{
            x: 10,
            color: "#60a5fa"
          }} onClick={() => setIsOpen(false)} className="block text-white hover:text-blue-400 transition-all duration-300 font-medium px-4 py-2">
                {item.name}
              </motion.a>)}
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>;
};
export default Navbar;