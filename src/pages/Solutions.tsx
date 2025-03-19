import React from 'react';
import { Brain, Microscope, Clock, Shield, BarChart, Users } from 'lucide-react';

const solutions = [
  {
    icon: Brain,
    title: "AI-Powered Diagnostics",
    description: "Advanced machine learning algorithms provide real-time diagnostic assistance with unprecedented accuracy."
  },
  {
    icon: Microscope,
    title: "Image Analysis",
    description: "State-of-the-art computer vision technology for rapid and precise medical imaging interpretation."
  },
  {
    icon: Clock,
    title: "Workflow Optimization",
    description: "Streamline clinical workflows with intelligent automation and prioritization systems."
  },
  {
    icon: Shield,
    title: "Secure Infrastructure",
    description: "HIPAA-compliant platform with enterprise-grade security and data protection."
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description: "Comprehensive analytics and reporting tools for data-driven decision making."
  },
  {
    icon: Users,
    title: "Collaborative Platform",
    description: "Seamless collaboration tools for healthcare teams with real-time updates."
  }
];

const Solutions = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">
          Our Solutions
        </h1>
        
        <p className="text-white/80 text-xl mb-16 max-w-3xl">
          Empowering healthcare professionals with cutting-edge AI technology for improved patient outcomes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg rounded-lg p-8 border border-white/10 hover:border-white/20 glow-card"
            >
              <div className="mb-6">
                <solution.icon className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-4">{solution.title}</h3>
              <p className="text-white/70">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;