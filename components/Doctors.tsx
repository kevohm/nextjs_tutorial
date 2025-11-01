"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const providers = [
  {
    name: "Dr. Emily Turner",
    specialty: "General Practice",
    type: "Doctor",
    rating: 4.9,
    image: "/healthcare-provider-.jpg",
  },
  {
    name: "Sarah Johnson, RN",
    specialty: "Home Care Nursing",
    type: "Nurse",
    rating: 4.8,
    image: "/healthcare-provider-.jpg",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Cardiology",
    type: "Doctor",
    rating: 4.9,
    image: "/healthcare-provider-.jpg",
  },
  {
    name: "James Wilson, RN",
    specialty: "ICU Specialist",
    type: "Nurse",
    rating: 4.7,
    image: "/healthcare-provider-.jpg",
  },
];

export default function Doctors() {
  return (
    <section className="py-20 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-2">Our Providers</p>
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Meet Our Verified Healthcare Professionals
          </h2>
        </div>

        {/* Provider Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {providers.map((provider, idx) => (
            <Card
              key={idx}
              className="bg-card border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow pt-0"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <CardContent className="p-4 flex justify-between items-start gap-2.5">
                <div>
                  <h3 className="font-semibold text-foreground">
                    {provider.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {provider.specialty}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <Badge variant="outline" className="text-xs capitalize">
                    {provider.type}
                  </Badge>
                  <span className="text-sm flex items-center gap-1 font-semibold text-yellow-500 dark:text-yellow-400">
                    <Star className="w-4 h-4" /> {provider.rating}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Browse All Providers
          </Button>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          <button className="w-2 h-2 rounded-full bg-muted-foreground/30"></button>
          <button className="w-2 h-2 rounded-full bg-primary"></button>
          <button className="w-2 h-2 rounded-full bg-muted-foreground/30"></button>
        </div>
      </div>
    </section>
  );
}
