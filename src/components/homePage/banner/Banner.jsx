"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

// Local assets
import heroImage from "../../../assets/Banner/hero-thumb1.png";
import heroShap from "../../../assets/Banner/hero-shape1.png";
import heroArrow from "../../../assets/Banner/hero-arrow.png";
import heroShap3 from "../../../assets/Banner/hero-shape3.png";
import heroDot from "../../../assets/Banner/hero-dot.png";

// Floating animation
const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Banner = () => {
  return (
    <div className="w-11/12 max-w-7xl mx-auto pt-12 md:py-20 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
        
        {/* ---------- LEFT TEXT ---------- */}
        <div className="space-y-6 text-center md:text-left relative z-10">
          {/* Top Badge */}
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm border border-[#1EC28E] bg-[#CCF5E0] text-[#1EC28E] px-4 py-2 rounded-full w-fit mx-auto md:mx-0">
            <FaCheck /> Learn Anytime, Anywhere
          </p>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-snug">
            Advance Your Skills with <span className="text-[#1EC28E]">CPS Academy</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Join CPS Academy, the premier E-Learning platform for students and professionals. Access expert-led courses, interactive tutorials, and real-world projects to boost your career.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4 max-w-xs sm:max-w-md md:max-w-full mx-auto md:mx-0">
            <button className="flex-1 sm:flex-initial px-6 py-3 flex items-center justify-center gap-2 bg-[#1EC28E] hover:bg-[#18a874] text-white rounded-full text-sm font-semibold transition">
              GET STARTED <IoIosArrowRoundForward size={20} />
            </button>
            <button className="flex-1 sm:flex-initial px-6 py-3 flex items-center justify-center gap-2 border border-[#1EC28E] text-[#1EC28E] rounded-full text-sm font-semibold hover:bg-[#CCF5E0] transition">
              EXPLORE COURSES <IoIosArrowRoundForward size={20} />
            </button>
          </div>
        </div>

        {/* ---------- RIGHT IMAGE ---------- */}
        <div className="relative w-full h-full flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 w-10/12 sm:w-3/4 md:w-full max-w-lg"
          >
            <Image src={heroImage} alt="CPS Academy Hero" width={600} height={600} />
          </motion.div>

          {/* Floating / Rotating shapes */}
          <motion.div
            className="absolute w-12 md:w-18 top-[-20px] lg:top-[-30px] left-[0px] lg:left-[-30px] z-0"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <Image src={heroShap} alt="shape" width={72} height={72} />
          </motion.div>

          <motion.div
            className="absolute w-8 md:w-12 -top-1 lg:-top-10 left-[16rem] md:left-[19rem] z-0"
            animate={floatAnimation}
          >
            <Image src={heroShap3} alt="shape3" width={48} height={48} />
          </motion.div>

          <motion.div
            className="absolute w-10 md:w-16 top-[4rem] lg:top-[6rem] right-9 lg:right-5 z-0"
            animate={{ x: [0, 10, 0], transition: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
          >
            <Image src={heroDot} alt="dot" width={64} height={64} />
          </motion.div>

          <motion.div
            className="absolute w-12 md:w-18 bottom-[12rem] -left-24 z-0"
            animate={{ y: [0, 15, 0], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
          >
            <Image src={heroArrow} alt="arrow" width={72} height={72} />
          </motion.div>
        </div>
      </div>

      {/* ---------- FLOATING CARD ---------- */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-10 lg:bottom-20 md:bottom-32 bg-white/30 backdrop-blur-md shadow-xl rounded-xl px-4 sm:px-6 py-4 z-20 w-[90%] max-w-sm">
        <div className="flex gap-4 items-center justify-center md:justify-start flex-wrap">
          {/* Avatars */}
          <div className="avatar-group -space-x-6">
            <div className="avatar border-4 border-[#1EC28E]">
              <div className="w-10 sm:w-12">
                <img
                  src="https://i.ibb.co/wNh91MG6/muiii.webp"
                  alt="Avatar 1"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="avatar border-4 border-[#1EC28E]">
              <div className="w-10 sm:w-12">
                <img
                  src="https://i.ibb.co/rG8SkBQP/mui.webp"
                  alt="Avatar 2"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="avatar border-4 border-[#1EC28E]">
              <div className="w-10 sm:w-12">
                <img
                  src="https://i.ibb.co/GN49LVh/00a34707-1ab9-4452-8c8e-b3794eb0da06.webp"
                  alt="Avatar 3"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="avatar avatar-placeholder">
              <div className="bg-neutral text-neutral-content w-10 sm:w-12 rounded-full flex items-center justify-center">
                <span className="text-sm">+99</span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-1 text-center md:text-left">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#1EC28E]">
              500+
            </h1>
            <p className="text-sm sm:text-base md:text-xl font-semibold text-gray-600">
              Expert Tutors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
