import { motion } from "framer-motion";
import React from "react";
import { ExternalLink } from 'lucide-react';
import { AuroraBackground } from "./aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Automate Elite
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Make your business elite with AI
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 rounded-sm blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <a
            href="https://calendly.com/kwame-bvm/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-2 text-sm tracking-wider bg-white px-8 py-3 rounded-sm text-black font-medium hover:bg-opacity-90 transition-all"
          >
            SCHEDULE A DEMO <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}