import { Brain, Code2, Database, GitBranch, Globe, Layout, Server, Terminal } from "lucide-react";

export const skills = [
  {
    name: "Frontend Development",
    icon: <Layout className="w-8 h-8 text-primary" />,
    description: "React, TypeScript, and modern web technologies"
  },
  {
    name: "Backend Development",
    icon: <Server className="w-8 h-8 text-primary" />,
    description: "Node.js, Express, and RESTful APIs"
  },
  {
    name: "Database Management",
    icon: <Database className="w-8 h-8 text-primary" />,
    description: "SQL, MongoDB, and data modeling"
  },
  {
    name: "Version Control",
    icon: <GitBranch className="w-8 h-8 text-primary" />,
    description: "Git, GitHub, and collaborative development"
  },
  {
    name: "Web Technologies",
    icon: <Globe className="w-8 h-8 text-primary" />,
    description: "HTML5, CSS3, and responsive design"
  },
  {
    name: "Programming",
    icon: <Code2 className="w-8 h-8 text-primary" />,
    description: "JavaScript, TypeScript, and Python"
  },
  {
    name: "Problem Solving",
    icon: <Brain className="w-8 h-8 text-primary" />,
    description: "Algorithms, data structures, and optimization"
  },
  {
    name: "DevOps",
    icon: <Terminal className="w-8 h-8 text-primary" />,
    description: "CI/CD, Docker, and cloud platforms"
  }
];