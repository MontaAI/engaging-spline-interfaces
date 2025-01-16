import { SplineSceneBasic } from "@/components/ui/splite.demo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { AnimeNavBarDemo } from "@/components/ui/anime-navbar.demo";
import { Squares } from "@/components/ui/squares-background";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-[#060606]">
      {/* Background with gradient overlay */}
      <div className="fixed inset-0 z-0">
        <Squares 
          direction="diagonal"
          speed={0.3}
          squareSize={50}
          borderColor="rgba(255,255,255,0.1)"
          hoverFillColor="rgba(255,255,255,0.05)"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <AnimeNavBarDemo />

        {/* Hero Section */}
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

        {/* About Section */}
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Skills
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <Card 
                  key={skill} 
                  className="bg-black/40 border-gray-800 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Projects
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card 
                  key={project.title} 
                  className="bg-black/40 border-gray-800 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
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
  "React",
  "TypeScript",
  "Node.js",
  "JavaScript",
  "HTML/CSS",
  "Git",
  "REST APIs",
  "SQL",
  "MongoDB",
];

const projects = [
  {
    title: "Project 1",
    description: "A full-stack web application built with React and Node.js.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Project 2",
    description: "An e-commerce platform with real-time updates.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Project 3",
    description: "A mobile-first responsive web application.",
    technologies: ["React Native", "Firebase", "Redux"],
  },
  {
    title: "Project 4",
    description: "A real-time chat application with video calls.",
    technologies: ["WebRTC", "Socket.io", "Express"],
  },
];

export default Index;
