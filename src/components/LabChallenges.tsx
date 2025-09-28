import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Shield, Database, Network } from "lucide-react";

const LabChallenges = () => {
  const challenges = [
    {
      title: "Network Security Assessment",
      category: "Cybersecurity",
      icon: Shield,
      problemStatement: "Conduct a comprehensive security assessment of a corporate network infrastructure to identify vulnerabilities and recommend security improvements.",
      approach: "Utilized ethical hacking methodologies including reconnaissance, scanning, enumeration, and vulnerability analysis following OWASP guidelines.",
      toolsUsed: ["Nmap", "Wireshark", "Metasploit", "Burp Suite", "Nessus"],
      keyLessons: [
        "Understanding of network protocols and security vulnerabilities",
        "Importance of defense-in-depth security strategies",
        "Proper documentation and reporting of security findings"
      ],
      outcome: "Successfully identified 15 critical vulnerabilities and provided detailed remediation strategies, improving overall network security posture by 70%.",
      difficulty: "Advanced"
    },
    {
      title: "Database Performance Optimization",
      category: "Database Administration",
      icon: Database,
      problemStatement: "Optimize a slow-performing MySQL database system handling 1M+ records with complex queries taking over 30 seconds to execute.",
      approach: "Analyzed query execution plans, implemented indexing strategies, normalized database schema, and optimized SQL queries for better performance.",
      toolsUsed: ["MySQL Workbench", "phpMyAdmin", "Query Profiler", "Performance Schema"],
      keyLessons: [
        "Database indexing strategies and their impact on performance",
        "Query optimization techniques and execution plan analysis",
        "Importance of database normalization and schema design"
      ],
      outcome: "Reduced query execution time from 30+ seconds to under 2 seconds, improving application response time by 85%.",
      difficulty: "Intermediate"
    },
    {
      title: "Network Infrastructure Setup",
      category: "Network Administration",
      icon: Network,
      problemStatement: "Design and implement a secure network infrastructure for a small business with 50+ employees requiring segregated VLANs and secure remote access.",
      approach: "Designed network topology, configured VLANs, implemented firewall rules, set up VPN access, and established network monitoring systems.",
      toolsUsed: ["Cisco Packet Tracer", "pfSense", "OpenVPN", "PRTG Network Monitor"],
      keyLessons: [
        "VLAN configuration and network segmentation best practices",
        "Firewall rules and security policy implementation",
        "VPN setup and secure remote access configurations"
      ],
      outcome: "Successfully deployed a secure, scalable network infrastructure with 99.9% uptime and improved security compliance.",
      difficulty: "Advanced"
    },
    {
      title: "Web Application Penetration Testing",
      category: "Ethical Hacking",
      icon: Code,
      problemStatement: "Perform a comprehensive security assessment of a web application to identify OWASP Top 10 vulnerabilities and security misconfigurations.",
      approach: "Conducted automated and manual testing using various penetration testing tools, documented findings, and provided remediation recommendations.",
      toolsUsed: ["OWASP ZAP", "Burp Suite", "SQLmap", "Nikto", "BeEF"],
      keyLessons: [
        "Understanding of web application security vulnerabilities",
        "Proper use of penetration testing methodologies",
        "Importance of secure coding practices and input validation"
      ],
      outcome: "Identified 12 security vulnerabilities including SQL injection and XSS, helping improve application security score from 3/10 to 9/10.",
      difficulty: "Advanced"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/20 text-green-300";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-300";
      case "Advanced": return "bg-red-500/20 text-red-300";
      default: return "bg-muted";
    }
  };

  return (
    <section id="lab-challenges" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lab <span className="bg-gradient-primary bg-clip-text text-transparent">Challenges</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical challenges and hands-on projects that demonstrate my technical skills 
            and problem-solving abilities in cybersecurity, network administration, and software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <Card key={index} className="bg-gradient-card border-card-border shadow-lg hover:shadow-glow transition-all group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-muted rounded-lg">
                    <challenge.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="bg-muted">
                      {challenge.category}
                    </Badge>
                    <Badge className={getDifficultyColor(challenge.difficulty)}>
                      {challenge.difficulty}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-2xl text-card-foreground">{challenge.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Problem Statement */}
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Problem Statement</h4>
                  <p className="text-muted-foreground text-sm">{challenge.problemStatement}</p>
                </div>

                {/* Approach */}
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Approach</h4>
                  <p className="text-muted-foreground text-sm">{challenge.approach}</p>
                </div>

                {/* Tools Used */}
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {challenge.toolsUsed.map((tool) => (
                      <Badge key={tool} variant="outline" className="bg-muted/50">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Lessons */}
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Key Lessons Learned</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    {challenge.keyLessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Outcome</h4>
                  <p className="text-muted-foreground text-sm">{challenge.outcome}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card border-card-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-card-foreground mb-4">
              Interested in More Technical Details?
            </h3>
            <p className="text-muted-foreground mb-6">
              These challenges represent just a sample of my hands-on experience. 
              I'm always working on new projects and learning emerging technologies.
            </p>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-glow-lg transition-all"
              asChild
            >
              <a href="#contact">
                <ExternalLink className="w-4 h-4 mr-2" />
                Let's Discuss More
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabChallenges;