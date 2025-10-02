'use client';

import Link from 'next/link';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon issue in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function Support() {
  // Approximate coordinates for Khaja Super Market, Dhaka-1207
  const position = [23.7718, 90.3667]; // Kalyanpur, Dhaka

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-64 bg-cover bg-center mb-20"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/qHN4RwJ/depositphotos-232776356-stock-video-paper-texture-animation-white-page.jpg')",
        }}
      >
       
        <div className="relative text-white text-center pt-16">
          <h1 className="text-4xl font-bold text-gray-800">Support</h1>
          <div className="mt-4">
            <Link href="/" className="text-red-500 hover:underline mr-4">
              Home
            </Link>
            <Link href="/support" className="text-[#1EC28E] hover:underline">
              Support
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
        {/* FAQ Section */}
        <section className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-[#1EC28E] mb-8 border-b-2 border-[#1EC28E] pb-2 inline-block">
            Frequently Asked Questions
          </h2>
          <div className="join join-vertical bg-white shadow-lg rounded-lg w-full max-w-4xl mx-auto">
            <div className="collapse collapse-arrow join-item border-b border-gray-200">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-lg font-medium text-gray-900">
                How do I create an account?
              </div>
              <div className="collapse-content text-gray-600 leading-relaxed">
                Click the "Sign Up" button in the top right corner, fill in your details, and follow the registration process to get started.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-b border-gray-200">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium text-gray-900">
                I forgot my password. What should I do?
              </div>
              <div className="collapse-content text-gray-600 leading-relaxed">
                Visit the login page, click "Forgot Password," and follow the instructions sent to your registered email to reset it.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-b border-gray-200">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium text-gray-900">
                How do I update my profile information?
              </div>
              <div className="collapse-content text-gray-600 leading-relaxed">
                Log in, navigate to "My Account" settings, and select "Edit Profile" to update your personal information.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-b border-gray-200">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium text-gray-900">
                How can I access my purchased courses?
              </div>
              <div className="collapse-content text-gray-600 leading-relaxed">
                After logging in, go to "My Courses" in your dashboard to view and access all purchased content.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-b border-gray-200">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium text-gray-900">
                What payment methods are accepted?
              </div>
              <div className="collapse-content text-gray-600 leading-relaxed">
                We accept credit/debit cards, PayPal, and bank transfers. Check the payment page for details.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-b border-gray-200">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium text-gray-900">
                How do I contact the support team?
              </div>
              <div className="collapse-content text-gray-600 leading-relaxed">
                Reach out via email at support@e-laetd.com or through our 24/7 live chat feature.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-b border-gray-200">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium text-gray-900">
                Can I get a refund for a course?
              </div>
              <div className="collapse-content text-gray-600 leading-relaxed">
                Refunds are available within 7 days of purchase. Submit a request via the support page with your order details.
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-gray-200">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-lg font-medium text-gray-900">
                How do I download course materials?
              </div>
              <div className="collapse-content text-gray-600 leading-relaxed">
                Log in, go to your course, and look for the "Download" option next to applicable materials.
              </div>
            </div>
          </div>
        </section>

        {/* Support Team Section */}
        <section className="text-center mt-16 mb-16">
          <h2 className="text-2xl font-semibold text-[#1EC28E] mb-8 border-b-2 border-[#1EC28E] pb-2 inline-block">
            Meet Our Support Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="John Doe"
                  className="w-32 h-32 object-cover rounded-full border-4 border-[#CCF5E0]"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">John Doe</h3>
              <p className="text-gray-600 font-semibold">Senior Support Specialist</p>
              <p className="text-gray-500 text-sm mt-1">Available Mon-Fri, 9 AM - 5 PM</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Jane Smith"
                  className="w-32 h-32 object-cover rounded-full border-4 border-[#CCF5E0]"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Jane Smith</h3>
              <p className="text-gray-600 font-semibold">Technical Support Lead</p>
              <p className="text-gray-500 text-sm mt-1">Available 24/7 via Email</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Ali Hasan"
                  className="w-32 h-32 object-cover rounded-full border-4 border-[#CCF5E0]"
                />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Ali Hasan</h3>
              <p className="text-gray-600 font-semibold">Customer Support Agent</p>
              <p className="text-gray-500 text-sm mt-1">Available 24/7 via Chat</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
