"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
    title: string;
    path: string;
}

const navLinks: NavLink[] = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/#about",
    },
    {
        title: "Resume",
        path: "/folder/Resume",
    },
];

const Navbar: React.FC = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 3000);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-purple-500/10"
                    : "bg-white/60 backdrop-blur-md"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/assets/Logo.png"
                                alt="Logo"
                                width={80}
                                height={80}
                                draggable={false}
                                className="cursor-pointer transition-transform hover:rotate-12"
                            />
                        </Link>
                    </motion.div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-1">
                        <div className="flex items-center gap-2 bg-violet-700 px-6 py-2.5 rounded-full shadow-lg shadow-violet-500/50">                            {navLinks.map((link, index) => (
                            <motion.div
                                key={link.title}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={link.path}
                                    className="relative px-4 py-2 text-white font-medium rounded-full border-2 border-white/20 transition-all duration-300 hover:text-purple-300 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] group"                                    >
                                    <span className="relative z-10">{link.title}</span>
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                                        layoutId="activeTab"
                                    />
                                </Link>
                            </motion.div>
                        ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {navbarOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Theme Toggle */}
                    <div className="hidden md:block relative">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="slider-toggle cursor-pointer relative inline-block w-16 h-9"
                            onClick={handleToggle}
                        >
                            <div
                                className={`absolute inset-0 rounded-full transition-all duration-300 ${isChecked
                                        ? "bg-gradient-to-r from-purple-600 to-blue-600"
                                        : "bg-gray-300"
                                    }`}
                            />
                            <motion.div
                                className="absolute top-1 left-1 w-7 h-7 bg-white rounded-full shadow-lg"
                                animate={{
                                    x: isChecked ? 28 : 0,
                                }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </motion.div>

                        <AnimatePresence>
                            {showMessage && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-full right-0 mt-2 whitespace-nowrap text-xs italic text-orange-500 bg-white px-3 py-1 rounded-lg shadow-lg"
                                >
                                    ⚠️ Under construction
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {navbarOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden pb-4 space-y-2"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.path}
                                    className="block px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                                    onClick={() => setNavbarOpen(false)}
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
