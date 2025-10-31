import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-100 to-blue-50">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center">
          <p className="text-blue-600 font-semibold mb-2">Get in Touch</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us for Exceptional Care
          </h2>
          <p className="text-gray-700 mb-8">
            We're here to address your healthcare needs and answer your
            questions.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
