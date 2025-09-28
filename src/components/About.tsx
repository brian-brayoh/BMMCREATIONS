import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const skills = [
    "Java", "C++", "Python", "PHP", "JavaScript", "HTML/CSS",
    "MySQL", "SQL Server", "Laravel", "Network Administration", 
    "Cybersecurity", "Ethical Hacking", "Windows", "Linux", 
    "Git", "Microsoft Azure", "ERP Systems", "Database Management"
  ];

  const experiences = [
    {
      title: "ICT Trainer",
      company: "Ndia Technical and Training Institute",
      period: "March 2025 - Present",
      description: "Delivering hands-on training in ICT courses including computer applications, networking, and database management. Developing school management systems and providing mentorship to students."
    },
    {
      title: "Volunteer - IT Support",
      company: "Office of the Director of Public Prosecutions",
      period: "May 2024 - February 2025",
      description: "Developing lesson plans and instructional materials, conducting practical sessions on software development and cybersecurity, integrating modern teaching methodologies."
    },
    {
      title: "Industrial Attachment",
      company: "Office of the Director of Public Prosecutions",
      period: "May 2023 - August 2023",
      description: "Developed memo management system for ICT Department, provided IT support for Uadilifu Case Management System, and co-designed the official ODPP website."
    },
    {
      title: "Industrial Attachment",
      company: "Nairobi Technical Training Institute",
      period: "June 2022 - August 2022",
      description: "Provided end user ICT support, system installation, staff training on ICT equipment, and network administration including cabling and printer configuration."
    }
  ];

  const certifications = [
    "Introduction to Programming - Kaggle.com",
    "Introduction to Pandas - Kaggle.com",
    "Introduction to Machine Learning - Kaggle.com",
    "Python Essential 1 - Cisco Academy",
    "Ethical Hacker - Cisco Academy",
    "Introduction to Cyber Security - Cisco Academy"
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A motivated, responsible and data-driven individual with expertise in software development, 
            network administration, and cybersecurity. I excel in delivering hands-on technical education 
            and developing innovative ICT solutions for real-world challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Skills */}
          <Card className="bg-gradient-card border-card-border shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="bg-muted hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Personal Info */}
          <Card className="bg-gradient-card border-card-border shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">
                Background
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  🎓 Bachelor of Science in Software Engineering - Kirinyaga University (2020-2024)
                </p>
                <p>
                  🌍 Based in Runyenjes, Kenya
                </p>
                <p>
                  💡 Passionate about cybersecurity and ethical hacking
                </p>
                <p>
                  🚀 Specializing in network administration and database management
                </p>
                <p>
                  ⚡ Committed to continuous learning and professional development
                </p>
                <p>
                  📧 Contact: mmuthomibrian@gmail.com | +254746404011
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Experience Timeline */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8 text-foreground">
            Professional Experience
          </h3>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gradient-card border-card-border shadow-lg hover:shadow-glow transition-all">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-card-foreground">{exp.title}</h4>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-gradient-card border-card-border shadow-lg hover:shadow-glow transition-all">
                <CardContent className="p-6 text-center">
                  <p className="text-card-foreground font-medium">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
            </h3>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-card border-card-border shadow-lg">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-card-foreground mb-2">
                  Bachelor of Science in Software Engineering
                </h4>
                <p className="text-accent font-medium mb-2">Kirinyaga University</p>
                <p className="text-muted-foreground mb-4">September 2020 – September 2024</p>
                <div className="bg-muted/20 rounded-lg p-4">
                  <h5 className="font-semibold text-card-foreground mb-2">Final Year Project:</h5>
                  <p className="text-muted-foreground">Gate Pass Management System</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;