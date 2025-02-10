
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { useToast } from "@/hooks/use-toast";

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

  return (
    <section 
      id="projects" 
      className="py-24 px-8"
      aria-label="Featured Projects"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-eerie to-onyx dark:from-seasalt dark:to-anti-flash bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.title} 
              className="group glass-effect card-hover-effect overflow-hidden"
            >
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
                  <div className="flex gap-4">
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
          ))}
        </div>
      </div>
    </section>
  );
};
