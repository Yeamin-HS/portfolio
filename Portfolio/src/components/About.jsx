// ✅ src/components/About.jsx
import React from 'react';
import profileImg from '../assets/pg.jpg'; // Update the image name if needed

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4 py-12 md:px-12"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Profile Image */}
        <div className="flex justify  items-left">
          <div className="w-80 h-80 rounded-full border-4 border-blue-700 overflow-hidden">
            <img
              src={profileImg}
              alt="Yeamin Hossain Shihab"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right - Text Section */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-blue-400">Me</span>
          </h2>

          <h3 className="text-xl font-semibold">
            Web Developer & UI Designer
          </h3>

          <p className="text-gray-300">
            I’m a passionate web developer with experience in creating elegant
            and interactive digital experiences. I love crafting interfaces that
            are both beautiful and functional using technologies like React,
            Tailwind CSS, Three.js and more.
          </p>

          <p className="text-gray-300">
            My focus is always on delivering clean, optimized code and designing
            experiences that truly engage users. I'm always eager to collaborate
            and grow with other creative developers.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-400">Name:</p>
              <p className="font-semibold">Yeamin Hossain Shihab</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-400">Email:</p>
              <p className="font-semibold">yeamin@example.com</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-400">Location:</p>
              <p className="font-semibold">Dhaka, Bangladesh</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-400">Availability:</p>
              <p className="font-semibold">Freelance / Full-time</p>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 transition px-6 py-2 rounded-full text-white font-semibold">
            Let’s Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
