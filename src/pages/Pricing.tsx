import React from 'react';
import { Check, ExternalLink } from 'lucide-react';
import DemoButton from '../components/DemoButton';
import { AuroraBackground } from '../components/ui/aurora-background';
import { motion } from 'framer-motion';

const plans = [
  {
    name: "Voice Agent",
    price: "999",
    description: "AI-powered voice agent for calls",
    features: [
      "24/7 Automated Support",
      "Inbound Call Handling",
      "Outbound Call Capabilities",
      "Natural Language Processing",
      "Call Analytics Dashboard",
      "Voice-to-Text Transcription",
      "Standard Support",
      "$149 per Additional Integration"
    ],
    additionalInfo: "Starting at"
  },
  {
    name: "Custom CRM",
    price: "2,197",
    description: "Tailored CRM solution for your business",
    features: [
      "Workflow Automation",
      "Customer Data Management",
      "Team Collaboration Tools",
      "Advanced Analytics",
      "Integration Capabilities",
      "Priority Support",
      "Custom Features Available"
    ],
    popular: true,
    additionalInfo: "Starting from"
  },
  {
    name: "Email Automation",
    price: "5,499",
    description: "Advanced email automation system",
    features: [
      "AI-Powered Personalization",
      "Campaign Automation",
      "A/B Testing",
      "Engagement Analytics",
      "Custom Templates",
      "Integration with CRM",
      "Premium Support"
    ],
    additionalInfo: "Starting from"
  }
];

const Pricing = () => {
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
            Pricing
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-black text-base sm:text-lg md:text-xl max-w-3xl"
          >
            Choose the perfect plan for your business needs.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              key={index}
              className={`relative bg-white/5 backdrop-blur-lg rounded-lg p-6 sm:p-8 border transition-all ${
                plan.popular
                  ? 'border-blue-400/50 hover:border-blue-400 pricing-card'
                  : 'border-white/10 hover:border-white/20 pricing-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-blue-400 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-black text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-black">${plan.price}</span>
                <span className="text-black block text-xs sm:text-sm mt-1">{plan.additionalInfo}</span>
              </div>
              <p className="text-black mb-6 text-sm sm:text-base">{plan.description}</p>
              
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-black">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="relative group inline-block w-full">
                <div className="absolute -inset-px bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 rounded-sm blur-[2px] opacity-60 group-hover:opacity-85 transition-all duration-300"></div>
                <a
                  href="https://calendly.com/kwame-bvm/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative bg-white/5 backdrop-blur-[2px] text-black px-4 sm:px-6 py-2.5 sm:py-3 rounded-sm flex items-center justify-center gap-2 hover:bg-white/10 transition-all w-full text-sm sm:text-base"
                >
                  SCHEDULE A DEMO
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AuroraBackground>
  );
};

export default Pricing;