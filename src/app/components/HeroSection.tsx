"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative lg:py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 -left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="col-span-12 sm:col-span-8 place-self-left text-center sm:text-left pl-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-semibold"
          >
            👋 Welcome to my portfolio
          </motion.div>
          
          <h1 className="mb-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight">
            {/* Static "Hello, I'm" text */}
            <span className="block text-gray-900 mb-2">
              Hello, I&apos;m{" "}
            </span>
            
            {/* Fixed width container for TypeAnimation to prevent layout shift */}
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent min-h-[1.2em]">
              <span className="inline-block min-w-[280px] sm:min-w-[380px] lg:min-w-[480px] xl:min-w-[580px]">
                <TypeAnimation
                  sequence={[
                    "Onkar",
                    2000,
                    "Web Developer",
                    2000,
                    "App Developer",
                    2000,
                    "System Designer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-lg sm:text-xl mb-8 max-w-2xl leading-relaxed"
          >
            Crafting digital experiences with passion and precision. Building the future, one line of code at a time.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/#contact"
                className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300"
              >
                Get in Touch →
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/#projects"
                className="inline-block px-8 py-4 rounded-full border-2 border-gray-300 bg-white/80 backdrop-blur-sm text-gray-900 font-semibold hover:border-purple-500 hover:text-purple-600 transition-all duration-300"
              >
                View Projects
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="col-span-12 sm:col-span-4 place-self-center mt-8 sm:mt-0"
        >
          <div className="relative">
            {/* Glowing background */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 rounded-full blur-2xl"
            />
            
            {/* Image container */}
            <div className="relative rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px] p-4 shadow-2xl">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/assets/coder.png"
                  alt="hero image"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-purple-400 rounded-full"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${10 + i * 12}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;