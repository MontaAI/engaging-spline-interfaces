import { Brain, Code2, Database, GitBranch, Globe, Layout, Server, Terminal } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  icon: LucideIcon;
  description: string;
}

export const skills: Skill[] = [
  {
    name: "Frontend Development",
    icon: Layout,
    description: "React, TypeScript, and modern web technologies"
  },
  {
    name: "Backend Development",
    icon: Server,
    description: "Node.js, Express, and RESTful APIs"
  },
  {
    name: "Database Management",
    icon: Database,
    description: "SQL, MongoDB, and data modeling"
  },
  {
    name: "Version Control",
    icon: GitBranch,
    description: "Git, GitHub, and collaborative development"
  },
  {
    name: "Web Technologies",
    icon: Globe,
    description: "HTML5, CSS3, and responsive design"
  },
  {
    name: "Programming",
    icon: Code2,
    description: "JavaScript, TypeScript, and Python"
  },
  {
    name: "Problem Solving",
    icon: Brain,
    description: "Algorithms, data structures, and optimization"
  },
  {
    name: "DevOps",
    icon: Terminal,
    description: "CI/CD, Docker, and cloud platforms"
  }
];