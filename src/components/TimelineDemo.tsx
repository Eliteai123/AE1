import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="text-black text-xs md:text-sm font-normal mb-8">
            Pioneered custom AI solutions for businesses, helping hundreds of clients automate their workflows.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=500&auto=format&fit=crop"
              alt="AI Technology"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1677442135136-760c813dfc80?q=80&w=500&auto=format&fit=crop"
              alt="AI Automation"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1697800652871-0c3a7a54e2d1?q=80&w=500&auto=format&fit=crop"
              alt="Machine Learning"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500&auto=format&fit=crop"
              alt="Data Analysis"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-black text-xs md:text-sm font-normal mb-8">
            Launched our comprehensive AI voice agent solution, revolutionizing how businesses handle customer service.
          </p>
          <p className="text-black text-xs md:text-sm font-normal mb-8">
            Developed custom CRM systems that increased client efficiency by an average of 200%, leading to significant cost savings.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=500&auto=format&fit=crop"
              alt="Team Collaboration"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=500&auto=format&fit=crop"
              alt="Business Growth"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=500&auto=format&fit=crop"
              alt="Data Analytics"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop"
              alt="Customer Success"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-black text-xs md:text-sm font-normal mb-4">
            Founded Automate Elite with a mission to make businesses elite with AI
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-black text-xs md:text-sm">
              ✅ Initial concept development
            </div>
            <div className="flex gap-2 items-center text-black text-xs md:text-sm">
              ✅ Assembled founding team of AI experts
            </div>
            <div className="flex gap-2 items-center text-black text-xs md:text-sm">
              ✅ Secured initial funding
            </div>
            <div className="flex gap-2 items-center text-black text-xs md:text-sm">
              ✅ Developed prototype AI solutions
            </div>
            <div className="flex gap-2 items-center text-black text-xs md:text-sm">
              ✅ Onboarded first beta clients
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=500&auto=format&fit=crop"
              alt="Team Meeting"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=500&auto=format&fit=crop"
              alt="Strategy Planning"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=500&auto=format&fit=crop"
              alt="Office Space"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop"
              alt="Team Collaboration"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}