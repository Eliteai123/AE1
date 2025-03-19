import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Bot, Users, MessageSquare, Cog } from 'lucide-react';
import { cn } from '../lib/utils';
import DemoButton from './DemoButton';

interface ServiceCardProps {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  className?: string;
  iconClassName?: string;
  pricing?: string;
}

const ServiceCard = ({ number, title, description, icon: Icon, features, className, iconClassName, pricing }: ServiceCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative rounded-xl p-8 md:p-10 overflow-hidden h-full flex flex-col",
        className
      )}
    >
      <div className="flex justify-between items-start mb-6">
        <div className={cn("p-3 rounded-lg", iconClassName)}>
          <Icon className="w-8 h-8 text-current" />
        </div>
        <div className="flex items-center gap-2 font-medium text-sm md:text-base opacity-80">
          <span>#{number}</span>
          <div className="w-4 h-4 rounded-full bg-current opacity-70"></div>
        </div>
      </div>
      
      <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
      <p className="mb-6 opacity-90">{description}</p>
      
      <ul className="space-y-2 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      {pricing && (
        <div className="mb-6 font-semibold text-lg text-blue-500">
          {pricing}
        </div>
      )}
      
      <div className="mt-auto">
        <DemoButton />
      </div>
    </motion.div>
  );
};

export const ServiceShowcase = () => {
  const services = [
    {
      number: 1,
      title: "AI VOICE AGENTS",
      description: "Advanced AI-powered voice agents for inbound and outbound calls, providing 24/7 automated phone support and engagement.",
      icon: Bot,
      features: [
        "Natural voice interactions",
        "Advanced natural language understanding",
        "Inbound & outbound calling",
        "Real-time call analytics",
        "Seamless live agent transfer"
      ],
      className: "bg-gradient-to-br from-white/10 to-gray-100/10 border border-gray-200/20 text-black",
      iconClassName: "bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 text-emerald-500",
      pricing: "From $1500+"
    },
    {
      number: 2,
      title: "AI LEAD GEN & NURTURING",
      description: "Strategic AI implementation to generate and nurture leads, transforming your business operations and sales pipeline.",
      icon: Users,
      features: [
        "Lead generation automation",
        "Prospect qualification",
        "Follow-up sequence optimization",
        "Performance analytics and reporting"
      ],
      className: "bg-gradient-to-br from-gray-900/10 to-gray-800/10 border border-gray-700/20 text-black",
      iconClassName: "bg-gradient-to-br from-blue-400/20 to-blue-600/20 text-blue-500",
      pricing: "Determined on appointment"
    },
    {
      number: 3,
      title: "PERSONALIZED EMAIL OUTREACH",
      description: "AI-powered email outreach campaigns that engage prospects and streamline your sales operations.",
      icon: MessageSquare,
      features: [
        "Personalized message creation",
        "Automated follow-up sequences",
        "A/B testing capabilities",
        "Engagement analytics and tracking"
      ],
      className: "bg-gradient-to-br from-white/10 to-gray-100/10 border border-gray-200/20 text-black",
      iconClassName: "bg-gradient-to-br from-green-400/20 to-green-600/20 text-green-500",
      pricing: "From $2500+"
    },
    {
      number: 4,
      title: "CUSTOM PROJECTS",
      description: "Tailored AI solutions designed specifically for your unique business requirements and objectives.",
      icon: Cog,
      features: [
        "Custom AI model development",
        "Full-stack implementation",
        "Integration with existing systems",
        "Ongoing maintenance and support"
      ],
      className: "bg-gradient-to-br from-gray-900/10 to-gray-800/10 border border-gray-700/20 text-black",
      iconClassName: "bg-gradient-to-br from-purple-400/20 to-purple-600/20 text-purple-500",
      pricing: "Determined on appointment"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {services.map((service, index) => (
        <ServiceCard 
          key={index}
          number={service.number}
          title={service.title}
          description={service.description}
          icon={service.icon}
          features={service.features}
          className={service.className}
          iconClassName={service.iconClassName}
          pricing={service.pricing}
        />
      ))}
    </div>
  );
};