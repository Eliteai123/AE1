import React from 'react';
import { Phone, Users, Cog, Mail } from 'lucide-react';
import DemoButton from '../components/DemoButton';
import { AuroraBackground } from '../components/ui/aurora-background';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Phone,
    title: "AI Voice Agents",
    description: "Advanced AI-powered voice agents for inbound and outbound calls, providing 24/7 automated phone support and engagement.",
    features: [
      "Natural Voice Interactions",
      "Advanced Natural Language Understanding",
      "Inbound & Outbound Calling",
      "Real-time Call Analytics",
      "Seamless Live Agent Transfer"
    ],
    pricing: "From $1500+"
  },
  {
    icon: Users,
    title: "AI Lead Gen & Nurturing",
    description: "Strategic AI implementation to generate and nurture leads, transforming your business operations and sales pipeline.",
    features: [
      "Lead Generation Automation",
      "Prospect Qualification",
      "Follow-up Sequence Optimization",
      "Performance Analytics and Reporting"
    ],
    pricing: "Determined on appointment"
  },
  {
    icon: Mail,
    title: "Personalized Email Outreach",
    description: "AI-powered email outreach campaigns that engage prospects and streamline your sales operations.",
    features: [
      "Personalized Message Creation",
      "Automated Follow-up Sequences",
      "A/B Testing Capabilities",
      "Engagement Analytics and Tracking"
    ],
    pricing: "From $2500+"
  },
  {
    icon: Cog,
    title: "Custom Projects",
    description: "Fully customized AI solutions designed and built specifically for your unique business requirements and challenges.",
    features: [
      "Custom AI Model Development",
      "Full System Integration",
      "Dedicated Project Team",
      "Comprehensive Training",
      "24/7 Premium Support",
      "Ongoing Maintenance"
    ],
    pricing: "Determined on appointment"
  }
];

const Services = () => {
  return (
    <AuroraBackground className="!h-full min-h-screen">
      <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 pt-24 pb-16 sm:py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 [text-shadow:_0_4px_12px_rgba(168,85,247,0.4),_0_8px_24px_rgba(59,130,246,0.3)]"
          >
            Our Services
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-black text-base sm:text-lg md:text-xl max-w-3xl"
          >
            Empowering businesses with cutting-edge AI solutions for growth and efficiency.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-6 sm:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              key={index}
              className={`group relative bg-white/5 backdrop-blur-lg rounded-lg p-4 xs:p-6 sm:p-8 border ${
                service.title === "Custom Projects"
                  ? "border-blue-400/50 hover:border-blue-400"
                  : "border-white/10 hover:border-white/20"
              } glow-card`}
            >
              <div className="mb-4 sm:mb-6">
                <service.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              <h3 className="text-black text-lg xs:text-xl font-semibold mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-black mb-4 sm:mb-6 text-sm sm:text-base">{service.description}</p>
              
              <ul className="space-y-1 sm:space-y-2 mb-6 sm:mb-8 text-sm sm:text-base">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-black flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mb-6 font-semibold text-blue-500">
                {service.pricing}
              </div>

              <DemoButton className="w-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AuroraBackground>
  );
};

export default Services;