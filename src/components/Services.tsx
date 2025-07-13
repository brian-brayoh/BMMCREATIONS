import { Monitor, Smartphone, Search, TrendingUp, Palette, Code } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Design",
      description: "Beautiful, responsive websites that work on all devices.",
      color: "text-primary"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom-built apps using modern technologies.",
      color: "text-accent"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Engaging iOS and Android applications.",
      color: "text-primary"
    },
    {
      icon: Search,
      title: "SEO",
      description: "Boost visibility and rankings with our expert SEO strategies.",
      color: "text-accent"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Tailored strategies to grow your online presence.",
      color: "text-primary"
    },
    {
      icon: Palette,
      title: "Branding",
      description: "Memorable brand identity that resonates with your audience.",
      color: "text-accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions to elevate your business and create lasting impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-gradient-card p-8 rounded-2xl shadow-md hover-lift cursor-pointer scroll-fade"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-1 bg-gradient-primary rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;