import React from 'react';
import { TimelineDemo } from '../components/TimelineDemo';
import { AuroraBackground } from '../components/ui/aurora-background';

const TimelinePage = () => {
  return (
    <AuroraBackground className="!h-full min-h-screen">
      <div className="w-full pt-24 pb-16">
        <TimelineDemo />
      </div>
    </AuroraBackground>
  );
};

export default TimelinePage;