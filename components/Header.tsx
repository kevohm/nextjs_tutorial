"use client";

import { Button } from "@/components/ui/button";
import { Stethoscope } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold text-gray-900">HealthConnect</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 text-sm font-medium"
          >
            Features
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 text-sm font-medium"
          >
            How It Works
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 text-sm font-medium"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 text-sm font-medium"
          >
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            className="text-blue-600 border-blue-600 bg-transparent"
          >
            Sign In
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
