
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export const Projects = () => {
  const { toast } = useToast();

  const handleProjectClick = (url: string) => {
    if (!url) {
      toast({
        title: "Coming Soon",
        description: "This project will be available soon!",
        variant: "default",
      });
      return;
    }
    window.open(url, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section 
      id="projects" 
      className="py-24 px-8 bg-gradient-to-b from-seasalt to-anti-flash dark:from-eerie dark:to-onyx"
      aria-label="Featured Projects"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-eerie to-onyx dark:from-seasalt dark:to-anti-flash bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              variants={cardVariants}
            >
              <Card className="group h-full glass-effect card-hover-effect overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={`https://source.unsplash.com/${project.imageId}`}
                      alt={`Screenshot of ${project.title}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-eerie/80 to-transparent" />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-semibold text-eerie dark:text-seasalt group-hover:text-onyx dark:group-hover:text-anti-flash transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-onyx/80 dark:text-anti-flash/80 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="space-y-2">
                      <p className="font-medium text-eerie dark:text-seasalt">Role: {project.role}</p>
                      <p className="font-medium text-eerie dark:text-seasalt">Duration: {project.duration}</p>
                      <p className="font-medium text-eerie dark:text-seasalt">Impact: {project.impact}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-sm bg-onyx/10 dark:bg-seasalt/10 text-onyx dark:text-seasalt px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-eerie dark:text-seasalt">Key Highlights:</h4>
                      <ul className="list-disc list-inside space-y-2 text-onyx/80 dark:text-anti-flash/80">
                        {project.highlights.map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-4 mt-6">
                      <Button 
                        variant="outline"
                        className="flex-1 button-hover-effect"
                        onClick={() => handleProjectClick(project.demoUrl)}
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button 
                        variant="outline"
                        className="flex-1 button-hover-effect"
                        onClick={() => handleProjectClick(project.githubUrl)}
                        aria-label={`View source code of ${project.title} on GitHub`}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
