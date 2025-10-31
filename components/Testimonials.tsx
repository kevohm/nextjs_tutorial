import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-semibold mb-2">Testimonials</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Success Stories
            </h2>

            <p className="text-gray-700 mb-6">
              Discover the experiences and success stories shared by those we
              serve. Our commitment to exceptional care is reflected in the
              positive feedback and life-changing results our patients have
              experienced.
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  From Hope to Healing: Sarah's Journey to Recovery
                </h4>
                <p className="text-sm text-gray-600">
                  Read how our comprehensive treatment approach transformed
                  Sarah's health and renewed her hope for a better future.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Transforming Challenges: Mary's Path of Triumph
                </h4>
                <p className="text-sm text-gray-600">
                  Discover how our expert team supported Mary through her
                  healthcare journey with compassion and professional
                  excellence.
                </p>
              </div>
            </div>

            <Button variant="link" className="text-blue-600 p-0 h-auto">
              See More →
            </Button>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/patient-testimonial-video-thumbnail.jpg"
              alt="Testimonial"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition">
                <Play className="w-6 h-6 text-blue-600 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
