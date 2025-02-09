
import { AnimeNavBarDemo } from "@/components/ui/anime-navbar.demo";
import { Squares } from "@/components/ui/squares-background";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen relative bg-white transition-theme">
      {/* Theme Toggle Button */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-black/5 hover:bg-black/10 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 text-yellow-500" />
        ) : (
          <Moon className="h-5 w-5 text-black" />
        )}
      </button>

      {/* Background with gradient overlay */}
      <div className="fixed inset-0 z-0">
        <Squares 
          direction="diagonal"
          speed={0.3}
          squareSize={50}
          borderColor="rgba(0,0,0,0.1)"
          hoverFillColor="rgba(0,0,0,0.05)"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <AnimeNavBarDemo />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
