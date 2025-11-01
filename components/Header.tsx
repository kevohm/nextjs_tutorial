"use client";

import { Button } from "@/components/ui/button";
import { Stethoscope } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "./ui/ModeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background text-foreground transition-colors">
      <div className="max-w-7xl mx-auto h-18 px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-semibold">HealthConnect</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {["Features", "How It Works", "Pricing", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Buttons + Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            Sign In
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            Get Started
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
