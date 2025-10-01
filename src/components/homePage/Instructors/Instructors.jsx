"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Example instructor data
const instructorsData = [
  {
    id: 1,
    name: "John Doe",
    designation: "Instructor, Web Development",
    about: "Expert in React, Node.js and modern web development.",
    image: "https://i.ibb.co/wNh91MG6/muiii.webp",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Instructor, UI/UX Design",
    about: "Passionate about creating beautiful and intuitive interfaces.",
    image: "https://i.ibb.co/rG8SkBQP/mui.webp",
  },
  {
    id: 3,
    name: "Michael Lee",
    designation: "Instructor, Data Science",
    about: "Specializes in Python, Machine Learning, and AI projects.",
    image: "https://i.ibb.co/GN49LVh/00a34707-1ab9-4452-8c8e-b3794eb0da06.webp",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    designation: "Instructor, Frontend Engineer",
    about: "Skilled in HTML, CSS, JavaScript, and ReactJS.",
    image: "https://i.ibb.co/wNh91MG6/muiii.webp",
  },
  {
    id: 5,
    name: "David Kim",
    designation: "Instructor, Backend Developer",
    about: "Experienced in Node.js, Express, and MongoDB.",
    image: "https://i.ibb.co/rG8SkBQP/mui.webp",
  },
  {
    id: 6,
    name: "Emily Brown",
    designation: "Instructor, Full Stack Developer",
    about: "Loves building full-stack web applications with React & Node.",
    image: "https://i.ibb.co/GN49LVh/00a34707-1ab9-4452-8c8e-b3794eb0da06.webp",
  },
  {
    id: 7,
    name: "Alex Turner",
    designation: "Instructor, AI Specialist",
    about: "Focus on AI & Machine Learning, Python and advanced analytics.",
    image: "https://i.ibb.co/wNh91MG6/muiii.webp",
  },
  {
    id: 8,
    name: "Olivia Wilson",
    designation: "Instructor, Graphic Design",
    about: "Creative designer teaching Photoshop, Illustrator and Figma.",
    image: "https://i.ibb.co/rG8SkBQP/mui.webp",
  },
];

const Instructors = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,        
    autoplaySpeed: 2000,  
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Meet Our Expert Instructors
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Learn from industry experts who bring real-world experience and practical knowledge to every course.
        </p>

        <Slider {...settings}>
          {instructorsData.map((inst) => (
            <div key={inst.id} className="p-4">
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transform transition duration-300">
                <img
                  src={inst.image}
                  alt={inst.name}
                  className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800">{inst.name}</h3>
                <p className="text-[#1EC28E] text-sm font-medium mb-2">{inst.designation}</p>
                <p className="text-gray-600 text-sm">{inst.about}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Instructors;
