import { Button } from "@/components/ui/button";
import { Users, Clock, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight text-balance">
              Connect with Healthcare Providers On-Demand
            </h1>
            <p className="text-gray-700 mb-8 leading-relaxed">
              HealthConnect bridges the gap between patients and verified
              healthcare professionals. Find and book appointments with doctors,
              nurses, and home-based care providers in minutes.
            </p>

            <div className="flex gap-4 mb-8">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Find a Provider
              </Button>
              <Button
                variant="outline"
                className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
              >
                List as Provider
              </Button>
            </div>

            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-700">
                  500+ Verified Providers
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-700">
                  10K+ Appointments Booked
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="text-sm text-gray-700">HIPAA Compliant</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img
                src="/patient-doctor-consultation.jpg"
                alt="Healthcare consultation"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
              <p className="text-sm font-semibold text-gray-900 mb-3">
                What type of care do you need?
              </p>
              <div className="space-y-2">
                <button className="w-full px-3 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200">
                  🏥 Doctor Consultation
                </button>
                <button className="w-full px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
                  👩‍⚕️ Nurse Care
                </button>
                <button className="w-full px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200">
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
