import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Linkedin } from 'lucide-react';

const SocialMedia = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white/5 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 [text-shadow:_0_2px_4px_rgba(168,85,247,0.2)]">
            MEET OUR FOUNDER
          </h2>
          <p className="text-black text-lg mt-4 max-w-2xl mx-auto">
            Visionary leadership dedicated to bringing cutting-edge AI solutions to businesses worldwide.
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="w-full md:w-1/2 lg:w-2/5"
            >
              <div className="relative rounded-lg overflow-hidden aspect-square bg-gradient-to-br from-purple-400/20 to-blue-400/20 p-1 mx-auto max-w-sm md:max-w-none">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQEhTrPVD4WAiw/profile-displayphoto-shrink_800_800/B56ZSvDEW9GUAg-/0/1738103604961?e=1746662400&v=beta&t=KSxwhMDEi6JmUWii_-bswTi2ZFIwY1_NRX-fMtP81VE" 
                  alt="Kwame Amankwah, Founder of Automate Elite" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 rounded-lg"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold">Kwame Amankwah</h3>
                  <p className="text-sm text-white/80">Founder & CEO</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="md:w-1/2 lg:w-3/5 flex flex-col items-center md:items-start gap-6"
            >
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 w-full">
                <p className="text-black text-base md:text-lg mb-4">
                  "At Automate Elite, we're dedicated to transforming businesses through the power of AI. Our mission is to make advanced automation accessible to companies of all sizes."
                </p>
                <p className="text-black text-base md:text-lg">
                  "Our custom solutions are designed to streamline operations, enhance customer experiences, and drive growth. We're committed to your success every step of the way."
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <a 
                  href="https://www.linkedin.com/in/kwame-amankwah-20a42a191/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0077B5] hover:bg-[#0077B5]/90 w-14 h-14 flex items-center justify-center rounded-full transition-transform hover:scale-110"
                >
                  <Linkedin size={28} className="text-white" />
                </a>
                
                <div className="relative group inline-block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 rounded-sm blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <a
                    href="https://calendly.com/kwame-bvm/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center gap-2 text-sm tracking-wider bg-white px-4 py-2.5 rounded-sm text-black font-medium hover:bg-opacity-90 transition-all whitespace-nowrap"
                  >
                    SCHEDULE A MEETING <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;