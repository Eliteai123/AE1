import { Hero as AnimatedHero } from './ui/animated-hero';
import { ServiceShowcase } from './ServiceShowcase';
import SocialMedia from './SocialMedia';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="relative flex flex-col items-center overflow-hidden">
        <AnimatedHero />
      </div>

      <section id="services-section" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 [text-shadow:_0_2px_4px_rgba(168,85,247,0.2)]">
              AUTOMATE ELITE AI
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              SERVICES
            </h3>
            <p className="text-black text-lg md:text-xl max-w-3xl mx-auto">
              We transform businesses with custom AI solutions that streamline operations, enhance customer engagement, and drive unprecedented growth.
            </p>
          </motion.div>
          
          <ServiceShowcase />
        </div>
      </section>

      <SocialMedia />
    </div>
  );
}

export default Hero;