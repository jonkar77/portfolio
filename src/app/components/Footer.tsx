"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full border-t border-gray-200 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Made with <span className="text-red-500">❤️</span> by{" "}
              <span className="font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Onkar Joshi
              </span>
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-xs text-gray-500"
          >
            <span>Built with</span>
            <span className="font-semibold">Next.js</span>
            <span>•</span>
            <span className="font-semibold">TypeScript</span>
            <span>•</span>
            <span className="font-semibold">Tailwind CSS</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
