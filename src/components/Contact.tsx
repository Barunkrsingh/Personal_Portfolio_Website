import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from 'emailjs-com'; // Import EmailJS

const Contact = () => {
  const contactInfo = [{
    icon: Mail,
    label: "Email",
    value: "barunkrsingh@gmail.com",
    href: "mailto:barunkrsingh@gmail.com",
    color: "from-blue-400 to-cyan-400"
  }, {
    icon: Phone,
    label: "Phone",
    value: "+91 7797919640",
    href: "tel:+917797919640",
    color: "from-green-400 to-emerald-400"
  }, {
    icon: MapPin,
    label: "Location",
    value: "Durgapur, West Bengal, India",
    href: "#",
    color: "from-purple-400 to-pink-400"
  }];

  const socialLinks = [{
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Barunkrsingh",
    color: "hover:text-gray-400"
  }, {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/barun-kr-singh-it",
    color: "hover:text-blue-400"
  }, {
    icon: Mail,
    label: "Email",
    href: "mailto:barunkrsingh@gmail.com",
    color: "hover:text-green-400"
  }];

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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  // Function to handle form submission
  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    emailjs.sendForm('barun_singh', 'template_e4zcbsm', e.target, '_e9QOxfj1xjRtUvQe')
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
      }, (error) => {
        console.log(error.text);
        alert("Failed to send message, please try again.");
      });
    
    e.target.reset(); // Reset the form after submission
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </motion.div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a key={index} href={item.href} variants={itemVariants} whileHover={{ scale: 1.05, x: 10 }} className="flex items-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className={`p-3 rounded-full bg-gradient-to-r ${item.color} mr-4`}>
                    <item.icon size={24} className="text-white" />
                  </motion.div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-medium group-hover:text-blue-400 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a key={index} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 360 }} whileTap={{ scale: 0.95 }} className={`p-3 bg-white/10 backdrop-blur-sm rounded-full text-white ${social.color} transition-all duration-300 border border-white/20 hover:border-white/40`}>
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            <form className="space-y-6" onSubmit={sendEmail}>
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                  <label className="text-gray-300 text-sm font-medium">First Name</label>
                  <Input type="text" name="first_name" placeholder="Barun" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400" required />
                </motion.div>
                <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                  <label className="text-gray-300 text-sm font-medium">Last Name</label>
                  <Input type="text" name="last_name" placeholder="Singh" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400" required />
                </motion.div>
              </div>
              
              <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">Email</label>
                <Input type="email" name="email" placeholder="barun@example.com" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400" required />
              </motion.div>
              
              <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">Subject</label>
                <Input type="text" name="subject" placeholder="Project Discussion" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400" required />
              </motion.div>
              
              <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                <label className="text-gray-300 text-sm font-medium">Message</label>
                <Textarea name="message" placeholder="Tell me about your project..." rows={5} className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 resize-none" required />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pt-4">
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-full shadow-lg">
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} viewport={{ once: true }} className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-400">© 2025 Barun Kumar Singh. ❤️</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
