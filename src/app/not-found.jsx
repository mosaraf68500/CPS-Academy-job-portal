'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import error from '../assets/Banner/error.png';

export default function NotFound() {
  const currentDateTime = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Dhaka',
    hour12: true,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8 text-center">
      
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-red-600 mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        404 - Oops!
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 mb-8 max-w-md"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        The page you’re looking for doesn’t exist or has been moved. We apologize for the inconvenience.
      </motion.p>

      {/* Animated Image */}
      <motion.div
        className="w-full max-w-[400px] mb-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image
          src={error}
          alt="404 Error Illustration"
          width={400}
          height={300}
          className="rounded-2xl shadow-2xl"
        />
      </motion.div>

      {/* Animated Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <Link href="/">
          <button className="bg-[#1EC28E] hover:bg-[#18a874] text-white font-semibold py-3 px-6 md:px-8 rounded-xl shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#1EC28E] focus:ring-offset-2">
            Back to Home
          </button>
        </Link>
      </motion.div>

      {/* Last Updated */}
      <motion.p
        className="text-sm text-gray-500 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        Last updated: {currentDateTime} (BDT)
      </motion.p>
    </div>
  );
}
