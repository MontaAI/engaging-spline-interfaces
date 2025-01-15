import { SplineSceneBasic } from "@/components/ui/splite.demo";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      {/* Hero Section with 3D Scene */}
      <section className="p-8">
        <div className="max-w-6xl mx-auto">
          <SplineSceneBasic />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          <Card className="bg-black/50 border-gray-800">
            <CardContent className="p-6">
              <p className="text-gray-300 leading-relaxed">
                Hi, I'm Montassar Hajri, a passionate Software Engineer with expertise in building modern web applications. 
                I specialize in frontend development using React, TypeScript, and modern web technologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-8 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <Card key={skill} className="bg-black/50 border-gray-800">
                <CardContent className="p-4 text-center">
                  <span className="text-gray-300">{skill}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="bg-black/50 border-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
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
      <section className="py-16 px-8 bg-black/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="bg-black/50" asChild>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" className="bg-black/50" asChild>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" className="bg-black/50" asChild>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2 h-4 w-4" />
                Twitter
              </a>
            </Button>
            <Button variant="outline" className="bg-black/50" asChild>
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