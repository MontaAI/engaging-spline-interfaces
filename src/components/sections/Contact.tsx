import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Get in Touch
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="glass-effect card-hover-effect">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Send a Message
              </h3>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-md bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-foreground"
                />
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-foreground resize-none"
                />
                <Button 
                  className="w-full button-hover-effect bg-gradient-to-r from-purple-500 to-pink-600"
                >
                  Send Message
                  <Mail className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect card-hover-effect">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="button-hover-effect flex items-center gap-2" 
                  asChild
                >
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="button-hover-effect flex items-center gap-2" 
                  asChild
                >
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="button-hover-effect flex items-center gap-2" 
                  asChild
                >
                  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="button-hover-effect flex items-center gap-2" 
                  asChild
                >
                  <a href="mailto:your.email@example.com">
                    <Mail className="h-4 w-4" />
                    Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};