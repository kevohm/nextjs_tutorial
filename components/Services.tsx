import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, Home, Users, Zap } from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Doctor Consultations",
    description:
      "Connect with licensed physicians for diagnosis, treatment, and medical advice via video or in-person.",
  },
  {
    icon: Users,
    title: "Specialist Nurses",
    description:
      "Access certified nurses for specialized care, wound management, and patient monitoring.",
  },
  {
    icon: Home,
    title: "Home Health Visits",
    description:
      "Schedule home-based care from qualified professionals without leaving your house.",
  },
  {
    icon: Zap,
    title: "Quick Response",
    description:
      "Get emergency care coordination and same-day appointments when you need urgent assistance.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">Our Platform</p>
          <h2 className="text-4xl font-bold text-gray-900 text-balance">
            Healthcare Services Tailored to Your Needs
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card
                key={idx}
                className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
