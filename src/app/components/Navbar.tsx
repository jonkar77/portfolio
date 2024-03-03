"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
        path: "#about",
    },
    {
        title: "Resume",
        path: "#resume",
    },
];

const Navbar: React.FC = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="w-full h-[85px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
            <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
                <Link
                    href="/"
                    className="h-auto w-auto flex flex-row items-center"
                >
                    <Image
                        src="/assets/Logo.png"
                        alt="Logo"
                        width={90}
                        height={100}
                        draggable={false}
                        className="cursor-pointer hover:animate-slowspin"
                    />
                    <div className="font-bold ml-[10px] hidden md:block text-gray-300">

                    </div>
                </Link>

                <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
                    <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                        {navLinks.map((link) => (
                            <Link
                                key={link.title}
                                href={link.path}
                                className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
                            >
                                {link.title}
                            </Link>
                        ))}

                        {/* source code */}

                    </div>
                </div>

                
                    <div className="slider-toggle cursor-pointer relative inline-block w-14 h-8 mr-10" onClick={handleToggle}>
                        <input type="checkbox" id="themeToggle" className="sr-only" />
                        <div className={`slider absolute cursor-pointer border border-black bg-${isChecked ? 'bg-purple-950' : 'bg-gray-500'}-300 rounded-full w-full h-full transition`}></div>
                        <div className={`slider-dot absolute bg-black rounded-full w-8 h-7 top-1/2 transform -translate-y-1/2 ${isChecked ? 'translate-x-3/4' : ''} transition`}></div>
                    </div>

                
            </div>
        </div>
    );
};

export default Navbar;
