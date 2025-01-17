import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/data/skills";

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Technical Skills
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <Card 
              key={skill.name} 
              className="group glass-effect card-hover-effect"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {<skill.icon className="w-8 h-8 text-primary" />}
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
  );
};