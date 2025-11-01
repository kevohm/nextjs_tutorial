import { Heart } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-background text-muted-foreground py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Leading healthcare innovation and patient care.
            </p>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Location</h4>
            <p className="text-sm text-muted-foreground">
              123 Medical Plaza, Healthcare City
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">About</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  About Medical
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Links</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Appointments
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Follow</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <p className="text-sm text-center text-muted-foreground">
            © 2025 HealthConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
