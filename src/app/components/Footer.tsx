import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer w-full border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white flex flex-row justify-center bg-black">
      <div className="container p-12 text-center">
        <p className="text-white">&copy; 2024. Made by oj. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
