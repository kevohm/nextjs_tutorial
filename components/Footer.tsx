import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-white">Medical</span>
            </div>
            <p className="text-sm">
              Leading healthcare innovation and patient care.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Location</h4>
            <p className="text-sm">123 Medical Plaza, Healthcare City</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">About</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  About Medical
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Links</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Appointments
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Follow</h4>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-sm text-center">
            © 2025 Medical. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
