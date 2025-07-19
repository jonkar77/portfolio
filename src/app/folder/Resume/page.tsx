"use client";

import Image from "next/image";
import Navbar from "../../components/Navbar"; // Adjust path if needed
import { AiOutlineDownload } from "react-icons/ai";

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-[40px]"> {/* padding for fixed navbar */}
      {/* Navbar */}
      <Navbar />

      {/* Resume Section */}
      <section className="flex flex-col items-center mt-12">
        {/* Download Button */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3 inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
          download
        >
          <AiOutlineDownload className="w-6 h-6" />
          Download Resume
        </a>

        {/* Resume Image */}
        <div className="p-4">
          <Image
            src="/assets/resume.jpg" // Ensure this is in your public folder
            alt="My Resume"
            width={800}
            height={1100}
            className="shadow-lg rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Resume;
