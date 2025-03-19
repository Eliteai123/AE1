import React, { lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';

const SplineBackground = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 z-0 transition-opacity duration-500 bg-transparent ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {isLoaded && (
        <spline-viewer
          loading-anim="true"
          url="https://prod.spline.design/xvyBK5JqDO9n94Gf/scene.splinecode"
          class="w-full h-full bg-transparent"
          style={{ visibility: location.pathname === '/' ? 'visible' : 'hidden' }}
        ></spline-viewer>
      )}
    </div>
  );
};

export default SplineBackground;