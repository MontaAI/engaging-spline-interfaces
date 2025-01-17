import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </span>
        </h2>
        <Card className="glass-effect card-hover-effect">
          <CardContent className="p-8">
            <p className="text-foreground/80 leading-relaxed text-lg">
              Hi, I'm Montassar Hajri, a passionate Software Engineer with expertise in building modern web applications. 
              I specialize in frontend development using React, TypeScript, and modern web technologies.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};