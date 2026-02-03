import React from "react";
import { motion } from "framer-motion";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: any;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  return (
    <motion.button
      onClick={selectTab}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
        active
          ? "text-white"
          : "text-gray-600 hover:text-gray-900"
      }`}
    >
      <span className="relative z-10">{children}</span>
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg"
          initial={false}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      )}
    </motion.button>
  );
};

export default TabButton;
