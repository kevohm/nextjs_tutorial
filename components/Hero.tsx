"use client";

import { Button } from "@/components/ui/button";
import { Users, Clock, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="h-[calc(100vh-4.5rem)] bg-linear-to-br from-background to-muted/40 py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Connect with Healthcare Providers On-Demand
            </h1>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              HealthConnect bridges the gap between patients and verified
              healthcare professionals. Find and book appointments with doctors,
              nurses, and home-based care providers in minutes.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mb-8">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 transition-colors">
                Find a Provider
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 transition-colors"
              >
                List as Provider
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">
                  500+ Verified Providers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">
                  10K+ Appointments Booked
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">HIPAA Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Side - Image + Floating Card */}
          <div className="relative">
            <div className="bg-card rounded-2xl shadow-xl overflow-hidden border border-border transition-colors">
              <img
                src="/patient-doctor-consultation.jpg"
                alt="Healthcare consultation"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating mini-card */}
            <div className="absolute bottom-6 left-6 bg-popover border border-border rounded-xl shadow-lg p-4 max-w-xs transition-colors">
              <p className="text-sm font-semibold text-foreground mb-3">
                What type of care do you need?
              </p>
              <div className="space-y-2">
                <button className="w-full px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors">
                  🏥 Doctor Consultation
                </button>
                <button className="w-full px-3 py-2 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors">
                  👩‍⚕️ Nurse Care
                </button>
                <button className="w-full px-3 py-2 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors">
                  🏠 Home Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
