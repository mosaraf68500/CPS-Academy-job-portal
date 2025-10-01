"use client";
import React from "react";
import CountUp from "react-countup";

const StatsCounter = () => {
  const stats = [
    {
      id: 1,
      end: 1200,
      duration: 5,
      label: "Experienced Tutors",
    },
    {
      id: 2,
      end: 4800,
      duration: 8,
      label: "5-Star Tutor Reviews",
    },
    {
      id: 3,
      end: 35,
      duration: 3,
      label: "Languages",
    },
    {
      id: 4,
      end: 10000,
      duration: 8,
      label: "Total Users",
    },
  ];

  return (
    <section className="py-12 bg-[#F0FBF8]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl shadow-lg p-6 bg-white text-gray-800 hover:scale-105 transform transition duration-300"
            >
              <h3 className="text-3xl font-bold text-[#1EC28E]">
                <CountUp
                  end={stat.end}
                  duration={stat.duration}
                  separator=","
                />
                +
              </h3>
              <p className="mt-2 text-gray-600 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
