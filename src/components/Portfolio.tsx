import { ExternalLink, Smartphone, Monitor, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import ecommerceImage from "@/assets/portfolio-ecommerce.jpg";
import fitnessAppImage from "@/assets/portfolio-fitness-app.jpg";
import brandingImage from "@/assets/portfolio-branding.jpg";
import businessImage from "@/assets/portfolio-business.jpg";
import foodAppImage from "@/assets/portfolio-food-app.jpg";
import logoImage from "@/assets/portfolio-logo.jpg";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "E-commerce Website",
      category: "Web Development",
      image: ecommerceImage,
      icon: Monitor,
      description: "Modern online store with seamless shopping experience"
    },
    {
      title: "Fitness App UI",
      category: "Mobile App Design",
      image: fitnessAppImage,
      icon: Smartphone,
      description: "Engaging fitness tracking application interface"
    },
    {
      title: "Brand Identity",
      category: "Branding",
      image: brandingImage,
      icon: Palette,
      description: "Complete brand identity design and guidelines"
    },
    {
      title: "Business Website",
      category: "Web Development",
      image: businessImage,
      icon: Monitor,
      description: "Professional corporate website with modern design"
    },
    {
      title: "Food Delivery App",
      category: "Mobile App Design",
      image: foodAppImage,
      icon: Smartphone,
      description: "Intuitive food ordering and delivery application"
    },
    {
      title: "Logo Design",
      category: "Branding",
      image: logoImage,
      icon: Palette,
      description: "Creative logo concepts and brand mark design"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web Development":
        return "bg-primary/10 text-primary";
      case "Mobile App Design":
        return "bg-accent/10 text-accent";
      case "Branding":
        return "bg-success/10 text-success";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our portfolio of successful projects that showcase our expertise and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-md hover-lift cursor-pointer scroll-fade"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-primary/0 group-hover:bg-gradient-primary/80 transition-all duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;