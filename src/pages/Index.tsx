
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ParticleBackground from "@/components/ParticleBackground";
import ThemeToggle from "@/components/ThemeToggle";
import { ThemeProvider } from "@/contexts/ThemeContext";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <ThemeProvider>
      <div ref={containerRef} className="relative min-h-screen bg-gray-900 dark:bg-gray-900 overflow-x-hidden transition-colors duration-500">
        {/* 3D Background - Simplified */}
        <div className="fixed inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <mesh position={[2, 0, 0]} rotation={[0, 0, 0]}>
              <sphereGeometry args={[1, 32, 32]} />
              <meshBasicMaterial color="#4f46e5" transparent opacity={0.3} />
            </mesh>
            <mesh position={[-2, 0, 0]} rotation={[0, 0, 0]}>
              <sphereGeometry args={[0.8, 32, 32]} />
              <meshBasicMaterial color="#ec4899" transparent opacity={0.2} />
            </mesh>
          </Canvas>
        </div>

        {/* Particle Background */}
        <ParticleBackground />

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Navigation */}
        <Navbar />

        {/* Content */}
        <div className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>

        {/* Animated Background Gradient */}
        <motion.div
          className="fixed inset-0 z-0 opacity-50"
          style={{
            background: "linear-gradient(45deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
            y: backgroundY,
          }}
        />
      </div>
    </ThemeProvider>
  );
};

export default Index;
