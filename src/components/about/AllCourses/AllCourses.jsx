'use client';

import { useRef } from 'react';
import { BookOpen, Code, Database, Smartphone, Globe, Cpu, Cloud, Terminal } from 'lucide-react'; 
import Image from 'next/image';

const coursesData = {
  courses: [
    {
      id: 1,
      title: 'Introduction to Web Development',
      description: 'Learn the basics of HTML, CSS, and JavaScript to build your first website.',
      price: 49.99,
      image: '/images/web-dev.jpg',
      icon: BookOpen,
    },
    {
      id: 2,
      title: 'Python for Data Science',
      description: 'Master Python and data analysis techniques with real-world projects.',
      price: 79.99,
      image: '/images/python-data.jpg',
      icon: Database,
    },
    {
      id: 3,
      title: 'Mobile App Development',
      description: 'Build cross-platform apps using Flutter and Dart.',
      price: 99.99,
      image: '/images/mobile-app.jpg',
      icon: Smartphone,
    },
    {
      id: 4,
      title: 'Frontend with React',
      description: 'Learn React.js to build fast and interactive user interfaces.',
      price: 59.99,
      image: '/images/react.jpg',
      icon: Code,
    },
    {
      id: 5,
      title: 'Backend with Node.js',
      description: 'Understand Node.js and Express.js to build powerful backend applications.',
      price: 69.99,
      image: '/images/node.jpg',
      icon: Terminal,
    },
    {
      id: 6,
      title: 'Cloud Computing Basics',
      description: 'Get started with AWS, Azure, and Google Cloud.',
      price: 89.99,
      image: '/images/cloud.jpg',
      icon: Cloud,
    },
    {
      id: 7,
      title: 'AI & Machine Learning',
      description: 'Dive into AI and ML with Python and TensorFlow.',
      price: 119.99,
      image: '/images/ai.jpg',
      icon: Cpu,
    },
    {
      id: 8,
      title: 'Cyber Security Essentials',
      description: 'Learn ethical hacking and security fundamentals.',
      price: 109.99,
      image: '/images/cyber.jpg',
      icon: Globe,
    },
    {
      id: 9,
      title: 'Cyber Security Essentials',
      description: 'Learn ethical hacking and security fundamentals.',
      price: 109.99,
      image: '/images/cyber.jpg',
      icon: Globe,
    },
  ],
};

export default function AllCourses() {
  const courseRefs = useRef({});

  const handleScroll = (title) => {
    courseRefs.current[title]?.scrollIntoView({ behavior: 'smooth' });
  };

 
  const uniqueTitles = [...new Set(coursesData.courses.map((c) => c.title))];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#1EC28E] text-center mb-10">
          All Courses
        </h1>

        {/* Clickable Title List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {uniqueTitles.map((title, idx) => {
            const Icon = coursesData.courses.find(c => c.title === title)?.icon || BookOpen;
            return (
              <div
                key={idx}
                onClick={() => handleScroll(title)}
                className="cursor-pointer bg-white rounded-lg shadow-lg hover:shadow-xl transition p-6 flex flex-col items-center text-center"
              >
                <Icon className="w-10 h-10 text-[#1EC28E] mb-3" />
                <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
              </div>
            );
          })}
        </div>

        {/* Sections by Title */}
        <div className="space-y-16">
          {uniqueTitles.map((title, idx) => (
            <div key={idx} ref={(el) => (courseRefs.current[title] = el)}>
              {/* Section Heading */}
              <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>

              {/* Filter করে সেই title এর course দেখানো */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {coursesData.courses
                  .filter((c) => c.title === title)
                  .map((course) => (
                    <div
                      key={course.id}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                    >
                      <Image
                        src={course.image}
                        alt={course.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-gray-800 ">{course.title}</h3>
                        <p className=" text-sm mb-3 text-gray-800">{course.description}</p>
                        <p className="text-[#1EC28E] font-bold">${course.price}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
