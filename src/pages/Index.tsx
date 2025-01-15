import { SplineSceneBasic } from "@/components/ui/splite.demo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { AnimeNavBarDemo } from "@/components/ui/anime-navbar.demo";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Navigation */}
      <AnimeNavBarDemo />

      {/* Hero Section with 3D Scene */}
      <section id="home" className="pt-24 p-8">
        <div className="max-w-6xl mx-auto">
          <SplineSceneBasic />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              About Me
            </span>
          </h2>
          <Card className="bg-black/50 border-gray-800 transform transition-all hover:scale-[1.01]">
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
      <section id="skills" className="py-24 px-8 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Skills
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <Card key={skill} className="bg-black/50 border-gray-800 transform transition-all hover:scale-105">
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
                className="bg-black/50 border-gray-800 transform transition-all hover:scale-[1.02]"
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
      <section id="contact" className="py-24 px-8 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Get in Touch
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              className="bg-black/50 border-gray-700 hover:bg-purple-500/20 hover:text-purple-300 transition-all" 
              asChild
            >
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="bg-black/50 border-gray-700 hover:bg-purple-500/20 hover:text-purple-300 transition-all" 
              asChild
            >
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="bg-black/50 border-gray-700 hover:bg-purple-500/20 hover:text-purple-300 transition-all" 
              asChild
            >
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2 h-4 w-4" />
                Twitter
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="bg-black/50 border-gray-700 hover:bg-purple-500/20 hover:text-purple-300 transition-all" 
              asChild
            >
              <a href="mailto:your.email@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample data - replace with your actual information
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
