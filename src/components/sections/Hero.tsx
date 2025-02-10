
import { SplineSceneBasic } from "@/components/ui/splite.demo";

export const Hero = () => {
  return (
    <section id="home" className="section-padding min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-seasalt via-anti-flash to-platinum animate-gradient-slow -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-eerie dark:text-seasalt animate-fade-in">
            Software Engineer
          </h1>
          <p className="text-xl text-eerie/70 dark:text-seasalt/70 max-w-2xl mx-auto leading-relaxed">
            Building exceptional digital experiences with modern web technologies
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#projects" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-eerie text-seasalt dark:bg-seasalt dark:text-eerie hover:bg-eerie/90 dark:hover:bg-seasalt/90 button-hover-effect"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-eerie/10 text-eerie dark:bg-seasalt/10 dark:text-seasalt hover:bg-eerie/20 dark:hover:bg-seasalt/20 button-hover-effect"
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
