"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Globe, Users } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-background text-foreground transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div>
            <img
              src="/telemedicine-platform.jpg"
              alt="About us"
              className="w-full max-h-[600px] object-cover rounded-2xl shadow-lg border border-border transition-colors"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-primary font-semibold mb-2">
              About HealthConnect
            </p>
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Simplifying Healthcare Access for Everyone
            </h2>

            <div className="space-y-8">
              {/* Mission */}
              <div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  Our Mission
                </h3>
                <p className="text-muted-foreground">
                  To democratize healthcare access by creating a seamless
                  platform that connects patients with qualified healthcare
                  professionals—whether it's doctors, specialized nurses, or
                  home-based care providers.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Instant Matching
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Find the right provider based on expertise and
                      availability
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Virtual & In-Home Care
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Choose between telemedicine or home visits for convenience
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      Verified Professionals
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      All providers are credentialed and verified
                    </p>
                  </div>
                </div>
              </div>

              {/* Learn More Button */}
              <Button
                variant="link"
                className="text-primary hover:text-primary/80 p-0 h-auto font-medium transition-colors"
              >
                Learn More About Our Platform
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
