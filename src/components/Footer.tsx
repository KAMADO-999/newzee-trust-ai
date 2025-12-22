import { Link } from "react-router-dom";
import { Shield, Twitter, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">NEWZEE</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Verify News. Build Trust. AI-powered news verification for a more informed world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/verify" className="text-muted-foreground transition-colors hover:text-foreground">
                  Verify News
                </Link>
              </li>
              <li>
                <Link to="/trending" className="text-muted-foreground transition-colors hover:text-foreground">
                  Trending News
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground transition-colors hover:text-foreground">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/technology" className="text-muted-foreground transition-colors hover:text-foreground">
                  Technology Stack
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-muted-foreground transition-colors hover:text-foreground">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-semibold">Connect</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 NEWZEE by Quantum Crew. Built for UHACK 4.0</p>
        </div>
      </div>
    </footer>
  );
};
