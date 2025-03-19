import React from 'react';
import { Award, Users, Globe, Sparkles } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { AuroraBackground } from '../components/ui/aurora-background';

const stats = [
  { icon: Users, value: "100%", label: "Client Satisfaction" },
  { icon: Globe, value: "10x", label: "Efficiency Boost" },
  { icon: Award, value: "95%", label: "Cost Reduction" },
  { icon: Sparkles, value: "24/7", label: "Support Available" }
];

const About = () => {
  return (
    <AuroraBackground className="!h-full min-h-screen">
      <div className="min-h-screen flex items-center justify-center px-4 xs:px-6 pt-24 pb-16 sm:pt-16 sm:pb-16 md:py-24">
      <div className="max-w-7xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-lg mb-6 sm:mb-8"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 [text-shadow:_0_4px_12px_rgba(168,85,247,0.4),_0_8px_24px_rgba(59,130,246,0.3)]"
          >
            Automate Elite
          </motion.h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-24 bg-white/5 backdrop-blur-lg rounded-lg p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-pink-400/20 rounded-lg blur-xl opacity-75"></div>
          <div className="relative">
          <p className="text-black text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
            At Automate Elite, we're not just another AI company – we're your strategic partner in achieving market dominance. Our cutting-edge AI solutions are designed to give your business the competitive edge it needs in today's rapidly evolving market. By leveraging advanced artificial intelligence, we transform your operations from standard to exceptional, helping you outperform competitors and capture market leadership.
          </p>
          <p className="text-black mb-4 sm:mb-6 text-sm sm:text-base">
            Our elite AI solutions deliver measurable advantages: intelligent chatbots that convert 50% more leads than traditional systems, custom CRM solutions that predict customer needs with 95% accuracy, and automated email systems that increase engagement by 3x. These aren't just incremental improvements – they're game-changing transformations that put you leagues ahead of your competition.
          </p>
          <p className="text-black text-sm sm:text-base">
            What truly sets us apart is our commitment to your competitive advantage. While others offer generic AI solutions, we develop custom-tailored systems that align perfectly with your unique market position. Our AI doesn't just automate – it innovates, learns, and evolves with your business, ensuring you stay ahead of industry trends and maintain your competitive edge. Partner with Automate Elite, and make your business truly elite with AI.
          </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-24 max-w-6xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              key={index}
              className="text-center p-4 sm:p-6 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 hover:border-white/20 glow-card"
            >
              <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 sm:mb-4 text-blue-400" />
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-black text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-6 sm:mb-10 text-center">Ready to Transform Your Business?</h2>
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 rounded-sm blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <a
              href="https://calendly.com/kwame-bvm/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 text-sm sm:text-base tracking-wider bg-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-sm text-black font-medium hover:bg-opacity-90 transition-all"
            >
              SCHEDULE A DEMO <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      </div>
    </AuroraBackground>
  );
};

export default About;