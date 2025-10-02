'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon issue in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Replace with API call to Strapi
    alert('Form submitted!'); // Placeholder feedback
  };

  // Approximate coordinates for Khaja Super Market, Dhaka-1207
  const position = [23.7718, 90.3667]; // Kalyanpur, Dhaka

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative h-64 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/qHN4RwJ/depositphotos-232776356-stock-video-paper-texture-animation-white-page.jpg')",
        }}
      >
       
        <div className="relative text-gray-800 text-center pt-16">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <div className="mt-4">
            <Link href="/" className="text-red-500 hover:underline mr-4">
              Home
            </Link>
            <Link href="/contact" className="text-[#1EC28E] hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* First Location Section */}
        <section className="text-center mb-12">
          <h2 className="text-xl md:text-2xl  font-semibold text-gray-800 mb-4">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-2">
                <span className="inline-block bg-[#CCF5E0] p-2 rounded-full">
                  <svg
                    className="w-6 h-6 text-[#1EC28E]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
              <p className="text-[#1EC28E]">info@e-laetd.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-2">
                <span className="inline-block bg-[#CCF5E0] p-2 rounded-full">
                  <svg
                    className="w-6 h-6 text-[#1EC28E]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Telephone
              </h3>
              <p className="text-[#1EC28E]">+88 02 58054685 +88 02-8091188</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-2">
                <span className="inline-block bg-[#CCF5E0] p-2 rounded-full">
                  <svg
                    className="w-6 h-6 text-[#1EC28E]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Call</h3>
              <p className="text-[#1EC28E]">+88 01550-058800</p>
            </div>
          </div>
        </section>

        {/* Second Location Section */}
        <section className="text-center mb-12">
          <h2 className="text-xl font-semibold text-[#1EC28E] mb-4">
            Location
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md mx-auto max-w-2xl">
            <div className="flex justify-center mb-2">
              <span className="inline-block bg-[#CCF5E0] p-2 rounded-full">
                <svg
                  className="w-6 h-6 text-[#1EC28E]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <p className="text-gray-900">
              Khaja Super Market, 2nd to 7th Floor, Kalyanpur Bus Stop, Mirpur
              Road, Dhaka-1207.
            </p>
          </div>
        </section>

        {/* Contact Form and Map Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-[#1EC28E] mb-4">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full p-2 border rounded-md"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  className="w-full p-2 border rounded-md"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register('message', { required: 'Message is required' })}
                  className="w-full p-2 border rounded-md"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-[#1EC28E] text-white p-2 rounded-md hover:bg-[#18a874] transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Leaflet Map */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-[#1EC28E] mb-4">
              Location Map
            </h2>
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: '400px', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  Khaja Super Market, Dhaka-1207
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </section>
      </main>
    </div>
  );
}