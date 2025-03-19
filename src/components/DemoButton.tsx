import React from 'react';
import { ExternalLink } from 'lucide-react';

interface DemoButtonProps {
  className?: string;
}

const DemoButton = ({ className = '' }: DemoButtonProps) => {
  return (
    <div className="relative group inline-block w-full">
      <div className="absolute -inset-px bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 rounded-sm blur-[2px] opacity-60 group-hover:opacity-85 transition-all duration-300"></div>
      <a
        href="https://calendly.com/kwame-bvm/30min"
        target="_blank"
        rel="noopener noreferrer"
        className={`relative bg-white/5 backdrop-blur-[2px] text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-all text-sm sm:text-base ${className}`}
      >
        SCHEDULE A DEMO
        <ExternalLink size={16} />
      </a>
    </div>
  );
};

export default DemoButton;