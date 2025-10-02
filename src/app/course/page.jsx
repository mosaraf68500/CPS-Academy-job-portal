import Link from "next/link";
import React from "react";
import AllCourses from "../../components/about/AllCourses/AllCourses";

const course = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-64 bg-cover bg-center mb-20"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/qHN4RwJ/depositphotos-232776356-stock-video-paper-texture-animation-white-page.jpg')",
        }}
      >
        <div className="relative text-white text-center pt-16">
          <h1 className="text-4xl font-bold text-gray-800">Regular Courses</h1>
          <div className="mt-4">
            <Link href="/" className="text-red-500 hover:underline mr-4">
              Home
            </Link>
            <Link href="/course" className="text-[#1EC28E] hover:underline">
              Regular Courses
            </Link>
          </div>
        </div>
      </section>

      {/* main secdtion */}

      <section className="bg-[#071136]  text-white">
        {/* all courses  */}
        <div className="w-11/12 mx-auto">
           <AllCourses></AllCourses>
        </div>

      </section>
    </div>
  );
};

export default course;
