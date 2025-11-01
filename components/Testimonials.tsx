"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div>
            <p className="text-primary font-semibold mb-2">Testimonials</p>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Success Stories
            </h2>

            <p className="text-muted-foreground mb-6">
              Discover the experiences and success stories shared by those we
              serve. Our commitment to exceptional care is reflected in the
              positive feedback and life-changing results our patients have
              experienced.
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  From Hope to Healing: Sarah's Journey to Recovery
                </h4>
                <p className="text-sm text-muted-foreground">
                  Read how our comprehensive treatment approach transformed
                  Sarah's health and renewed her hope for a better future.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  Transforming Challenges: Mary's Path of Triumph
                </h4>
                <p className="text-sm text-muted-foreground">
                  Discover how our expert team supported Mary through her
                  healthcare journey with compassion and professional
                  excellence.
                </p>
              </div>
            </div>

            <Button variant="link" className="text-primary p-0 h-auto">
              See More →
            </Button>
          </div>

          {/* Right Section (Video Thumbnail) */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/patient-testimonial-video-thumbnail.jpg"
              alt="Testimonial"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <button className="w-16 h-16 bg-background text-primary rounded-full flex items-center justify-center hover:bg-accent transition">
                <Play className="w-6 h-6 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
