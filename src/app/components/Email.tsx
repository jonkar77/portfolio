"use client"
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../../public/assets/github-icon.svg";
import LinkedinIcon from "../../../public/assets/linkedin-icon.svg";
import React, { useState } from "react";
// import hello from "/assets/hello.png";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };
      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/send";
  
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: "POST",
        // Tell the server we're sending JSON.
        headers: {
          "Content-Type": "application/json",
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      };
  
      const response = await fetch(endpoint, options);
      const resData = await response.json();
  
      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      }
    };

    return (
        <section
            id="contact"
            className="justify-center grid md:grid-cols-2 my-1 md:my-1 py-20 gap-4 relative bg-[#EA7878] border rounded-3xl px-1"
        >
            <div className="z-10 w-3/4 ml-10">
                <div className="flex flex-row justify-center">

                    <div className="rounded-full bg-[#000000] w-[200px] h-[200px] lg:w-[160px] lg:h-[160px] relative">
                        <Image
                            src="/assets/hello.png"
                            alt="Logo"
                            width={200}
                            height={200}
                            draggable={false}
                            className="hover:animate-slowspin px-10"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">

                    <h5 className="text-xl font-bold text-black my-2 ">
                        Lets Connect
                    </h5>
                    <p className="text-black mb-4 max-w-md">
                        Im currently looking for new opportunities, my inbox is always
                        open. Whether you have a question or just want to say hi, Ill
                        try my best to get back to you!
                    </p>

                <div className="socials flex flex-row items-start gap-2">
                    <Link href="https://github.com/jonkar77">
                    <Image src={GithubIcon} alt="Github Icon" style={{ filter: 'brightness(0) invert(1)' }} />

                    </Link>
                    <Link href="https://www.linkedin.com/in/joshi-onkar/">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
                </div>


            </div>
            <div className="w-3/4">
                {emailSubmitted? (
                    <p className="text-green-500 text-sm mt-2 p-3 bg-black">
                        Email sent successfully!
                    </p>
                ):(
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="text-black block mb-2 text-sm font-medium"
                            >
                                Your email
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                className="bg-[#8D4848] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="jacob@google.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="subject"
                                className="text-black block text-sm mb-2 font-medium"
                            >
                                Subject
                            </label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                className="bg-[#8D4848] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Just saying hi"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="text-black block text-sm mb-2 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="bg-[#8D4848] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                                placeholder="Let's talk about..."
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-black hover:bg-black hover:bg-opacity-85 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                        >
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default EmailSection;
