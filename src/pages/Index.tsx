import { SplineSceneBasic } from "@/components/ui/splite.demo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, ExternalLink, Code2, Brain, Database, GitBranch, Globe, Layout, Server, Terminal, Sparkles, Moon, Sun } from "lucide-react";
import { AnimeNavBarDemo } from "@/components/ui/anime-navbar.demo";
import { Squares } from "@/components/ui/squares-background";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative bg-background">
      {/* Theme Toggle Button */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-yellow-500" />
        ) : (
          <Moon className="h-5 w-5 text-slate-700" />
        )}
      </button>

      {/* Background with gradient overlay */}
      <div className="fixed inset-0 z-0">
        <Squares 
          direction="diagonal"
          speed={0.3}
          squareSize={50}
          borderColor="rgba(255,255,255,0.1)"
          hoverFillColor="rgba(255,255,255,0.05)"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <AnimeNavBarDemo />

        <section id="home" className="pt-32 p-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-fade-in">
                Software Engineer
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Building exceptional digital experiences with modern web technologies
              </p>
            </div>
            <SplineSceneBasic />
          </div>
        </section>

        <section id="about" className="py-24 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                About Me
              </span>
            </h2>
            <Card className="bg-black/40 border-gray-800 backdrop-blur-sm transform hover:scale-[1.01] transition-all duration-300">
              <CardContent className="p-8">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Hi, I'm Montassar Hajri, a passionate Software Engineer with expertise in building modern web applications. 
                  I specialize in frontend development using React, TypeScript, and modern web technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Technical Skills
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <Card 
                  key={skill.name} 
                  className="group bg-card/40 border-border/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        {skill.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground text-center">{skill.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Featured Projects
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={project.title} 
                  className="group bg-black/40 border-gray-800 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={`https://source.unsplash.com/${project.imageId}`}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button 
                          variant="outline"
                          className="flex-1 bg-purple-500/10 border-purple-500/20 hover:bg-purple-500/20 text-purple-300"
                          onClick={() => window.open(project.demoUrl, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button 
                          variant="outline"
                          className="flex-1 bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 text-gray-300"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 px-8 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Get in Touch
              </span>
            </h2>
            
            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-black/40 border-gray-800 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Mail className="h-5 w-5 text-purple-400" />
                    Send a Message
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-2 rounded-md bg-white/5 border border-gray-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none text-gray-300"
                    />
                    <textarea
                      placeholder="Your message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-md bg-white/5 border border-gray-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all outline-none text-gray-300 resize-none"
                    />
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      Send Message
                      <Mail className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-gray-800 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      variant="outline" 
                      className="bg-black/40 border-gray-700 backdrop-blur-sm hover:bg-purple-500/20 hover:text-purple-300 transition-all flex items-center gap-2" 
                      asChild
                    >
                      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="bg-black/40 border-gray-700 backdrop-blur-sm hover:bg-purple-500/20 hover:text-purple-300 transition-all flex items-center gap-2" 
                      asChild
                    >
                      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="bg-black/40 border-gray-700 backdrop-blur-sm hover:bg-purple-500/20 hover:text-purple-300 transition-all flex items-center gap-2" 
                      asChild
                    >
                      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                        Twitter
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="bg-black/40 border-gray-700 backdrop-blur-sm hover:bg-purple-500/20 hover:text-purple-300 transition-all flex items-center gap-2" 
                      asChild
                    >
                      <a href="mailto:your.email@example.com">
                        <Mail className="h-4 w-4" />
                        Email
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const skills = [
  {
    name: "Frontend Development",
    icon: <Layout className="w-8 h-8 text-purple-400" />,
    description: "React, TypeScript, and modern web technologies"
  },
  {
    name: "Backend Development",
    icon: <Server className="w-8 h-8 text-purple-400" />,
    description: "Node.js, Express, and RESTful APIs"
  },
  {
    name: "Database Management",
    icon: <Database className="w-8 h-8 text-purple-400" />,
    description: "SQL, MongoDB, and data modeling"
  },
  {
    name: "Version Control",
    icon: <GitBranch className="w-8 h-8 text-purple-400" />,
    description: "Git, GitHub, and collaborative development"
  },
  {
    name: "Web Technologies",
    icon: <Globe className="w-8 h-8 text-purple-400" />,
    description: "HTML5, CSS3, and responsive design"
  },
  {
    name: "Programming",
    icon: <Code2 className="w-8 h-8 text-purple-400" />,
    description: "JavaScript, TypeScript, and Python"
  },
  {
    name: "Problem Solving",
    icon: <Brain className="w-8 h-8 text-purple-400" />,
    description: "Algorithms, data structures, and optimization"
  },
  {
    name: "DevOps",
    icon: <Terminal className="w-8 h-8 text-purple-400" />,
    description: "CI/CD, Docker, and cloud platforms"
  }
];

const projects = [
  {
    title: "Project 1",
    description: "A full-stack web application built with React and Node.js, featuring real-time updates and responsive design.",
    technologies: ["React", "Node.js", "MongoDB"],
    imageId: "photo-1488590528505-98d2b5aba04b",
    demoUrl: "https://demo1.example.com",
    githubUrl: "https://github.com/yourusername/project1"
  },
  {
    title: "Project 2",
    description: "An e-commerce platform with advanced features like real-time inventory management and secure payment processing.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    imageId: "photo-1461749280684-dccba630e2f6",
    demoUrl: "https://demo2.example.com",
    githubUrl: "https://github.com/yourusername/project2"
  },
  {
    title: "Project 3",
    description: "A mobile-first responsive web application with offline capabilities and push notifications.",
    technologies: ["React Native", "Firebase", "Redux"],
    imageId: "photo-1487058792275-0ad4aaf24ca7",
    demoUrl: "https://demo3.example.com",
    githubUrl: "https://github.com/yourusername/project3"
  },
  {
    title: "Project 4",
    description: "A real-time chat application featuring video calls, file sharing, and end-to-end encryption.",
    technologies: ["WebRTC", "Socket.io", "Express"],
    imageId: "photo-1498050108023-c5249f4df085",
    demoUrl: "https://demo4.example.com",
    githubUrl: "https://github.com/yourusername/project4"
  }
];

export default Index;
