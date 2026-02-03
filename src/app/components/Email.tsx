"use client"
import Image from "next/image";
import GithubIcon from "../../../public/assets/github-icon.svg";
import LinkedinIcon from "../../../public/assets/linkedin-icon.svg";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        
        try {
            const res = await fetch("/api/sendEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.status === 200) {
                setEmailSubmitted(true);
                e.target.reset();
                setTimeout(() => {
                    setEmailSubmitted(false);
                }, 5000);
            }
        } catch (error) {
            console.error("Error sending email:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative py-24 overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-gray-900 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                        Let's Connect
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full mx-auto mt-4" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Image and Social */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center md:items-start space-y-6"
                    >
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-xl opacity-50" />
                            <div className="relative rounded-full bg-gradient-to-br from-gray-900 to-gray-800 p-6 shadow-2xl">
                                <Image
                                    src="/assets/hello.png"
                                    alt="Hello"
                                    width={180}
                                    height={180}
                                    draggable={false}
                                    className="relative z-10"
                                />
                            </div>
                        </motion.div>

                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Connect with me
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Let's build something amazing together!
                            </p>

                            <div className="flex flex-row justify-center md:justify-start gap-4">
                                <motion.a
                                    href="https://github.com/jonkar77"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 rounded-full bg-gray-900 hover:bg-gray-800 transition-colors shadow-lg"
                                >
                                    <Image
                                        src={GithubIcon}
                                        alt="Github Icon"
                                        width={24}
                                        height={24}
                                        style={{ filter: 'brightness(0) invert(1)' }}
                                    />
                                </motion.a>

                                <motion.a
                                    href="https://www.linkedin.com/in/joshi-onkar/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg"
                                >
                                    <Image
                                        src={LinkedinIcon}
                                        alt="Linkedin Icon"
                                        width={24}
                                        height={24}
                                    />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-200">
                            <AnimatePresence mode="wait">
                                {emailSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="text-center py-12"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200 }}
                                            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                        >
                                            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </motion.div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            Message Sent!
                                        </h3>
                                        <p className="text-gray-600">
                                            I'll get back to you as soon as possible.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex flex-col space-y-6"
                                        onSubmit={handleSubmit}
                                    >
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block mb-2 text-sm font-semibold text-gray-700"
                                            >
                                                Your Email
                                            </label>
                                            <input
                                                name="email"
                                                type="email"
                                                id="email"
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-300"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="subject"
                                                className="block mb-2 text-sm font-semibold text-gray-700"
                                            >
                                                Subject
                                            </label>
                                            <input
                                                name="subject"
                                                type="text"
                                                id="subject"
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-300"
                                                placeholder="What's this about?"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="block mb-2 text-sm font-semibold text-gray-700"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                rows={5}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-300 resize-none"
                                                placeholder="Tell me about your project or just say hi!"
                                            />
                                        </div>
                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    Sending...
                                                </span>
                                            ) : (
                                                "Send Message →"
                                            )}
                                        </motion.button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default EmailSection;
