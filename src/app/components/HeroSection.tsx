"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-black">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Onkar",
                1000,
                "Web Developer",
                1000,
                "App Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper = "span"
              speed = {50}
              repeat = {Infinity}
            />
          </h1>
          <p className="text-[#3a3c3e] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-[#121212] hover:bg-[#121212ea] text-white"
            >
              Connect
            </Link>
            <Link
              href="/#projects"
              className="px-6 inline-block py-[11px] w-full sm:w-fit rounded-full mr-4 border-2 border-black bg-[#ffffff] hover:bg-[#000000] text-black hover:text-white"
            >
              Projects
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#000000] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/assets/coder.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={290}
              height={230}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;