import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Globe, Users } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/telemedicine-platform.jpg"
              alt="About us"
              className="w-full max-h-[600px] object-cover rounded-2xl shadow-lg"
              
            />
          </div>

          <div>
            <p className="text-blue-600 font-semibold mb-2">
              About HealthConnect
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simplifying Healthcare Access for Everyone
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  To democratize healthcare access by creating a seamless
                  platform that connects patients with qualified healthcare
                  professionals—whether it's doctors, specialized nurses, or
                  home-based care providers.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Instant Matching
                    </h4>
                    <p className="text-sm text-gray-600">
                      Find the right provider based on expertise and
                      availability
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Globe className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Virtual & In-Home Care
                    </h4>
                    <p className="text-sm text-gray-600">
                      Choose between telemedicine or home visits for convenience
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Verified Professionals
                    </h4>
                    <p className="text-sm text-gray-600">
                      All providers are credentialed and verified
                    </p>
                  </div>
                </div>
              </div>

              <Button variant="link" className="text-blue-600 p-0 h-auto">
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
