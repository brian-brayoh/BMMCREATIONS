import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Gate Pass Management System",
      description: "A comprehensive digital solution for managing visitor access and gate passes in educational institutions. Features include visitor registration, pass generation, and security monitoring.",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&h=400&fit=crop",
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
      github: "https://github.com/brianmuthomi",
      demo: null,
      featured: true
    },
    {
      title: "Ndia TVC Website ",
      description: "Official website for Ndia Technical and Vocational College. Developed Ndiatvc.ac.ke, featuring modern design and responsive layout.",
      image: "https://www.istockphoto.com/photo/laptop-computer-with-books-pen-and-yellow-legal-pad-gm92259124-743945?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fschool-website&utm_medium=affiliate&utm_source=unsplash&utm_term=school+website%3A%3Aad-balancing-template%3Acontrolw=800&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL","wordpress"],
      github: "https://github.com/brianmuthomi",
      demo: "https://demo.ndiatvc.ac.ke/",
      featured: true
    },
    {
      title: "Memo Management System",
      description: "Digital system for managing incoming and outgoing memos in the ICT Department of ODPP. Streamlines document workflow and improves efficiency.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/brianmuthomi",
      demo: null,
      featured: false
    },
    {
      title: "Ndia TVC School Management System",
      description: "Comprehensive school management system for Ndia Technical and Vocational College, handling student records, course management, and administrative tasks.",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=400&fit=crop",
      technologies: ["PHP", "Laravel", "MySQL", "Vue.js", "Bootstrap"],
      github: "https://github.com/brianmuthomi",
      demo: null,
      featured: false
    },
    {
      title: "Network Security Assessment Tool",
      description: "Python-based tool for conducting automated network security assessments and vulnerability scanning in corporate environments.",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=400&fit=crop",
      technologies: ["Python", "Nmap", "Scapy", "Tkinter", "SQLite"],
      github: "https://github.com/brianmuthomi",
      demo: null,
      featured: false
    },
    {
      title: "Database Performance Optimizer",
      description: "MySQL database optimization tool that analyzes query performance, suggests indexing strategies, and provides performance metrics.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      technologies: ["Python", "MySQL", "Pandas", "Matplotlib", "Jupyter"],
      github: "https://github.com/brianmuthomi",
      demo: null,
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="bg-gradient-card border-card-border shadow-lg hover:shadow-glow transition-all group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <CardHeader>
                <h3 className="text-2xl font-bold text-card-foreground">{project.title}</h3>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-muted">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                {project.demo && (
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground">Other Projects</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card key={index} className="bg-gradient-card border-card-border shadow-lg hover:shadow-glow transition-all group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <h4 className="text-xl font-bold text-card-foreground">{project.title}</h4>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-muted">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-muted">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                {project.demo && (
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
