import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Developer workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-primary p-1">
            <div className="w-full h-full rounded-full bg-background p-1">
              <img 
                src="/brian passport.jpeg" 
                alt="Brian Muthomi"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Brian Muthomi
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Software Engineer & ICT Trainer
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Motivated and data-driven professional specializing in software development, 
            network administration, and cybersecurity education. Passionate about delivering 
            innovative ICT solutions and hands-on technical training.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all"
              onClick={() => scrollToSection("#projects")}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-card-border hover:bg-card hover:text-card-foreground"
              onClick={() => scrollToSection("#contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://brianmuthomi.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-card/80 transition-colors shadow-md hover:shadow-glow"
            >
              <Github className="w-6 h-6 text-card-foreground" />
            </a>
            <a 
              href="https://www.linkedin.com/in/brian-muthomi-b4a032257" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-card hover:bg-card/80 transition-colors shadow-md hover:shadow-glow"
            >
              <Linkedin className="w-6 h-6 text-card-foreground" />
            </a>
            <a 
              href="mailto:mmuthomibrian@gmail.com"
              className="p-3 rounded-lg bg-card hover:bg-card/80 transition-colors shadow-md hover:shadow-glow"
            >
              <Mail className="w-6 h-6 text-card-foreground" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection("#about")}
            className="animate-bounce"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-accent transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;