import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["innovative", "powerful", "intelligent", "seamless", "elite"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full min-h-[calc(100vh-64px)]">
      <div className="container">
        <div className="flex gap-6 py-24 md:py-32 lg:py-36 items-center justify-center flex-col">
          <div className="flex flex-col items-center max-w-3xl w-full">
            <div className="relative bg-white/20 rounded-lg p-6 md:p-8 mb-6 w-full border border-white/30">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-fluid-5xl tracking-tighter text-center font-semibold flex flex-col items-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 whitespace-nowrap mb-2 md:mb-0 [text-shadow:_0_2px_4px_rgba(168,85,247,0.3)]">Make your business</span>
                <span className="relative flex w-full h-[60px] xs:h-[70px] sm:h-[80px] md:h-[clamp(80px,10vw,120px)] justify-center text-center mt-2 md:mt-0">
                  &nbsp;
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute top-1/2 -translate-y-1/2 font-bold text-2xl xs:text-3xl sm:text-4xl md:text-fluid-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 whitespace-nowrap [text-shadow:_0_2px_4px_rgba(168,85,247,0.3)]"
                      initial={{ opacity: 0, y: "-100" }}
                      transition={{ type: "spring", stiffness: 50 }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -150 : 150,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </h1>
            </div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg md:text-fluid-lg leading-relaxed tracking-tight text-black/90 max-w-2xl text-center px-4 md:px-0 mt-4 md:mt-6 bg-white/20 rounded-lg p-6 border border-white/30"
            >
              Transform your business operations with cutting-edge AI solutions. Our custom automation tools streamline workflows, enhance customer engagement, and drive unprecedented growth.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-row gap-4 md:gap-fluid-4 mt-4 w-full max-w-md px-4 sm:px-0"
          >
            <a
              href="https://calendly.com/kwame-bvm/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-block w-full"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 rounded-sm blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative flex items-center justify-center gap-2 md:gap-fluid-2 text-sm md:text-fluid-sm tracking-wider bg-white w-full px-6 md:px-fluid-8 py-3 md:py-fluid-4 rounded-sm text-black font-medium hover:bg-opacity-90 transition-all">
                SCHEDULE A DEMO <MoveRight className="w-4 h-4" />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export { Hero };