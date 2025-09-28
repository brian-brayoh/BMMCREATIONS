import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-muted-foreground mb-4 md:mb-0">
            <p className="flex items-center">
              Built with <Heart className="w-4 h-4 mx-2 text-destructive" fill="currentColor" /> using React & TypeScript
            </p>
          </div>
          <div className="text-muted-foreground">
            <p>&copy; 2025 Brian Muthomi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;