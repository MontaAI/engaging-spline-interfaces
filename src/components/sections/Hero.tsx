import { SplineSceneBasic } from "@/components/ui/splite.demo";

export const Hero = () => {
  return (
    <section id="home" className="pt-32 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-fade-in">
            Software Engineer
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building exceptional digital experiences with modern web technologies
          </p>
        </div>
        <SplineSceneBasic />
      </div>
    </section>
  );
};