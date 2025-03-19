import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    // Initial height calculation
    updateHeight();
    
    // Update on resize
    window.addEventListener('resize', updateHeight);
    
    // Update after content loads (images, etc.)
    const timer = setTimeout(updateHeight, 500);
    
    return () => {
      window.removeEventListener('resize', updateHeight);
      clearTimeout(timer);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full relative z-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-10 md:py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">
          Automate Elite Journey
        </h2>
        <p className="text-black text-base md:text-lg max-w-2xl mb-10">
          Our journey building the future of business automation with AI, from initial concept to industry-leading solutions.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row pt-10 md:pt-32 md:gap-10"
          >
            <div className="sticky top-24 md:top-32 z-40 self-start md:w-1/3 flex flex-row md:flex-col items-center md:items-start">
              <div className="h-10 w-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg relative z-10">
                <div className="h-5 w-5 rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 border border-white/50" />
              </div>
              <h3 className="md:mt-4 ml-4 md:ml-0 text-2xl md:text-4xl font-bold text-black">
                {item.title}
              </h3>
            </div>

            <div className="pl-12 md:pl-0 pr-4 md:pr-6 mt-4 md:mt-0 md:w-2/3">
              {item.content}
            </div>
          </div>
        ))}
        
        {/* Timeline line */}
        <div
          style={{ height: `${height}px` }}
          className="absolute left-5 md:left-[16.5%] top-0 w-[3px] bg-gradient-to-b from-transparent via-white/40 to-transparent overflow-hidden"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-full bg-gradient-to-b from-purple-500 via-blue-500 to-pink-500"
          />
        </div>
      </div>
    </div>
  );
};