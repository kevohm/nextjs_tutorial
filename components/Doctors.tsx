import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const providers = [
  {
    name: "Dr. Emily Turner",
    specialty: "General Practice",
    type: "Doctor",
    rating: 4.9,
  },
  {
    name: "Sarah Johnson, RN",
    specialty: "Home Care Nursing",
    type: "Nurse",
    rating: 4.8,
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Cardiology",
    type: "Doctor",
    rating: 4.9,
  },
  {
    name: "James Wilson, RN",
    specialty: "ICU Specialist",
    type: "Nurse",
    rating: 4.7,
  },
];

export default function Doctors() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">Our Providers</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Verified Healthcare Professionals
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {providers.map((provider, idx) => (
            <Card
              key={idx}
              className="bg-white border-0 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                <img
                  src={`/healthcare-provider-.jpg?height=300&width=300&query=healthcare-provider-${
                    idx + 1
                  }`}
                  alt={provider.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {provider.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {provider.specialty}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <Badge variant="outline" className="text-xs">
                    {provider.type}
                  </Badge>
                  <span className="text-sm font-semibold text-yellow-500">
                    ★ {provider.rating}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Browse All Providers
          </Button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          <button className="w-2 h-2 rounded-full bg-gray-300"></button>
          <button className="w-2 h-2 rounded-full bg-blue-600"></button>
          <button className="w-2 h-2 rounded-full bg-gray-300"></button>
        </div>
      </div>
    </section>
  );
}
