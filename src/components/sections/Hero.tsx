
import { SplineSceneBasic } from "@/components/ui/splite.demo";

export const Hero = () => {
  return (
    <section id="home" className="section-padding min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 gradient-bg -z-10" />
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 animate-fade-in">
            Software Engineer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building exceptional digital experiences with modern web technologies
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#projects" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground button-hover-effect"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground button-hover-effect"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="mt-16">
          <SplineSceneBasic />
        </div>
      </div>
    </section>
  );
};
