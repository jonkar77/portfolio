"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Link
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="group relative block h-full overflow-hidden rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 border border-gray-200/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-pink-500/10 transition-all duration-500 z-10" />
        
        {/* Image container with overlay effect */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative h-full w-full"
          >
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover transition-all duration-500"
            />
            {/* Gradient overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              style={{ transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)' }}
            />
          </motion.div>
          
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileHover={{ opacity: 1, y: 0 }}
            className="absolute top-4 right-4 z-20"
          >
            <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-900 shadow-lg">
              View Project →
            </div>
          </motion.div>
        </div>

        {/* Content section */}
        <div className="relative p-6 bg-white/80 backdrop-blur-sm">
          <motion.h3
            className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300"
          >
            {title}
          </motion.h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
          
          {/* Decorative line */}
          <motion.div
            className="mt-4 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>
    </motion.div>
  );
};