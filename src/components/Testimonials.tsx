import React, { memo } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The custom chatbot from Automate Elite has revolutionized our customer service. It handles 80% of inquiries automatically, allowing our team to focus on complex cases.",
    name: "Michael Torres",
    position: "Operations Director",
    company: "TechFlow Solutions"
  },
  {
    quote: "The custom CRM system has streamlined our entire operation. Our team's productivity has increased by 200% since implementation.",
    name: "Sarah Johnson",
    position: "CEO",
    company: "Digital Dynamics"
  },
  {
    quote: "The email automation system has transformed our outreach efforts. We've seen a 150% increase in engagement rates and a 90% reduction in manual follow-ups.",
    name: "Alex Chen",
    position: "Marketing Director",
    company: "Growth Ventures"
  },
  {
    quote: "Implementing Automate Elite's solutions has been a game-changer for our sales team. The AI-driven insights have helped us close deals 40% faster.",
    name: "Rachel Martinez",
    position: "Sales Director",
    company: "Nexus Global"
  },
  {
    quote: "The workflow automation tools have eliminated countless hours of manual work. Our team can now focus on strategic initiatives instead of repetitive tasks.",
    name: "David Park",
    position: "CTO",
    company: "Innovation Labs"
  },
  {
    quote: "The level of customization and support we've received has been exceptional. Automate Elite truly understands our business needs and delivers solutions that work.",
    name: "Emma Wilson",
    position: "Operations Manager",
    company: "Stellar Systems"
  }
];

const TestimonialCard = memo(({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="relative bg-white/5 backdrop-blur-lg rounded-lg p-8 border border-white/10 testimonial-card">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
      ))}
    </div>
    <blockquote className="text-white/80 mb-6">
      "{testimonial.quote}"
    </blockquote>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400" />
      <div>
        <div className="text-white font-medium">{testimonial.name}</div>
        <div className="text-white/60 text-sm">{testimonial.position}, {testimonial.company}</div>
      </div>
    </div>
  </div>
));

const Testimonials = memo(() => {
  return (
    <section className="relative py-16 md:py-24 px-4 md:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 [text-shadow:_0_3px_10px_rgba(168,85,247,0.4),_0_6px_20px_rgba(59,130,246,0.3)]">
          TRUSTED BY BUSINESSES WORLDWIDE
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Testimonials;