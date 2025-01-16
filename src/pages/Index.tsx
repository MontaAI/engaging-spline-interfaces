import { SplineScene } from "@/components/ui/splite";
import { SplineSceneBasic } from "@/components/ui/splite.demo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { AnimeNavBarDemo } from "@/components/ui/anime-navbar.demo";
import { Squares } from "@/components/ui/squares-background";
import { useEffect, useState, useMemo, lazy, Suspense } from 'react';
import { ContactForm } from "@/components/ui/contact-form"
import { MessageCircle } from "lucide-react"
import { SocialButton } from "@/components/ui/social-button"
import { AnimatedTitle } from "@/components/ui/animated-title";
import { motion } from "framer-motion";
import { TypeWriter } from "@/components/ui/type-writer";
import { SiReact, SiTypescript, SiNodedotjs, SiJavascript, SiHtml5, SiGit, SiMongodb } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { BiLogoPostgresql } from 'react-icons/bi';

// Remove this line since we're using the imported SplineScene directly
// const SplineScene = lazy(() => import('@/components/ui/splite'));

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number}>>([]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const createParticle = (e: React.MouseEvent) => {
    const newParticle = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY
    };
    setParticles(prev => [...prev, newParticle]);
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== newParticle.id));
    }, 1000);
  };

  // Memoize static data
  const skills = useMemo(() => [
    {
      name: "React",
      icon: SiReact,
      color: "#61DAFB",
      progress: 90,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
      progress: 85,
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#339933",
      progress: 80,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
      progress: 90,
    },
    {
      name: "HTML/CSS",
      icon: SiHtml5,
      color: "#E34F26",
      progress: 95,
    },
    {
      name: "Git",
      icon: SiGit,
      color: "#F05032",
      progress: 85,
    },
    {
      name: "REST APIs",
      icon: TbApi,
      color: "#FF5733",
      progress: 85,
    },
    {
      name: "PostgreSQL",
      icon: BiLogoPostgresql,
      color: "#336791",
      progress: 80,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#47A248",
      progress: 75,
    },
  ], []);

  const projects = useMemo(() => [
    {
      title: "Project 1",
      description: "A full-stack web application built with React and Node.js.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "https://picsum.photos/800/600?random=1", // placeholder image
      demoLink: "https://demo1.example.com",
      githubLink: "https://github.com/yourusername/project1",
    },
    {
      title: "Project 2",
      description: "An e-commerce platform with real-time updates.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL"],
      image: "https://picsum.photos/800/600?random=2", // placeholder image
      demoLink: "https://demo2.example.com",
      githubLink: "https://github.com/yourusername/project2",
    },
    {
      title: "Project 3",
      description: "A mobile-first responsive web application.",
      technologies: ["React Native", "Firebase", "Redux"],
      image: "https://picsum.photos/800/600?random=3", // placeholder image
      demoLink: "https://demo3.example.com",
      githubLink: "https://github.com/yourusername/project3",
    },
    {
      title: "Project 4",
      description: "A real-time chat application with video calls.",
      technologies: ["WebRTC", "Socket.io", "Express"],
      image: "https://picsum.photos/800/600?random=4", // placeholder image
      demoLink: "https://demo4.example.com",
      githubLink: "https://github.com/yourusername/project4",
    },
  ], []);

  return (
    <div className="min-h-screen relative bg-[#0a0014]" onClick={createParticle}>
      {/* Scroll Progress */}
      <div 
        className="scroll-progress" 
        style={{ transform: `scaleX(${scrollProgress / 100})` }} 
      />

      {/* Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle w-4 h-4 rounded-full absolute"
          style={{ left: particle.x, top: particle.y }}
        />
      ))}

      {/* Background */}
      <div className="fixed inset-0 z-0">
        <Squares 
          direction="diagonal"
          speed={0.4}
          squareSize={50}
          borderColor="rgba(168, 85, 247, 0.2)"
          hoverFillColor="rgba(168, 85, 247, 0.1)"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-sm border-b border-purple-500/20 z-50">
          <AnimeNavBarDemo />
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-24 p-4 md:p-8 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full gradient-border rounded-2xl p-1">
            <div className="bg-black/40 rounded-xl relative overflow-hidden">
              {/* Updated SplineScene usage */}
              <div className="relative w-full h-screen">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
              
              {/* Hero Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent py-8">
                <div className="container mx-auto px-4 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                  >
                    <AnimatedTitle 
                      text="Creative Developer"
                      className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 via-pink-400 to-purple-500 bg-clip-text title-glow"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4"
                  >
                    <TypeWriter
                      text="Crafting Digital Experiences with Code"
                      className="text-lg md:text-xl text-purple-100 font-light"
                      delay={40}
                      onComplete={() => {
                        document.getElementById('explore-button')?.classList.add('animate-pulse');
                      }}
                    />
                  </motion.div>

                  <motion.div
                    id="explore-button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8"
                  >
                    <Button 
                      className="bg-purple-600/90 hover:bg-purple-500 transition-all duration-300 
                                hover:scale-105 hover:shadow-glow px-6 py-3"
                      onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <span className="relative inline-flex items-center gap-2">
                        Explore My Work
                        <motion.span
                          className="inline-block"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 neon-text bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
              About Me
            </h2>
            <Card className="gradient-border bg-black/50 transform transition-all duration-300 hover:scale-[1.01] hover:neon-glow">
              <CardContent className="p-8">
                <p className="text-gray-200 leading-relaxed text-lg">
                  Hi, I'm Montassar Hajri, a passionate Software Engineer with expertise in building modern web applications. 
                  I specialize in frontend development using React, TypeScript, and modern web technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-8 bg-purple-900/10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Skills & Technologies
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card 
                    className="group gradient-border bg-black/50 transform transition-all duration-300 hover:scale-105 hover:neon-glow overflow-hidden"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center gap-4">
                        <motion.div
                          className="text-4xl"
                          style={{ color: skill.color }}
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <skill.icon />
                        </motion.div>
                        
                        <span className="text-purple-200 font-medium">{skill.name}</span>
                        
                        <div className="w-full h-1 bg-purple-900/30 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.progress}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                          />
                        </div>
                        
                        <span className="text-sm text-purple-300/80">
                          {skill.progress}%
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-8">
          <div className="max-w-6xl mx-auto"> {/* Increased max width for larger cards */}
            <h2 className="text-4xl font-bold text-center mb-12 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Projects
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card 
                  key={project.title} 
                  className="group gradient-border bg-black/50 transform transition-all duration-500 hover:scale-[1.02] hover:neon-glow overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  
                  <CardContent className="p-8 relative">
                    <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full
                                     hover:bg-purple-500/30 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-4 pt-4 border-t border-purple-500/20">
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <span className="text-sm">Live Demo</span>
                          <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          <Github size={16} />
                          <span className="text-sm">View Code</span>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-8 bg-purple-900/10 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 neon-text">
                Reach Out & Connect with Me!
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 relative">
              {/* Contact Form */}
              <div className="glassmorphism p-8 rounded-2xl gradient-border">
                <ContactForm />
              </div>

              {/* Social Links */}
              <div className="space-y-8">
                <div className="glassmorphism p-8 rounded-2xl gradient-border">
                  <h3 className="text-2xl font-semibold text-purple-200 mb-8 neon-text">
                    Let's Connect
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {socialLinks.map((social) => (
                      <SocialButton
                        key={social.name}
                        icon={social.icon}
                        label={social.name}
                        href={social.url}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Message Button */}
          <Button
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-500 shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </section>
      </div>
    </div>
  );
};

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: Linkedin,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: Twitter,
  },
  {
    name: 'Email',
    url: 'mailto:your.email@example.com',
    icon: Mail,
  },
];

export default Index;
