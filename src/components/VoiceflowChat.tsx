import { useEffect } from 'react';

const TixaeChat = () => {
  useEffect(() => {
    // Create container div
    const container = document.createElement('div');
    container.id = 'VG_OVERLAY_CONTAINER';
    container.style.width = '0';
    container.style.height = '0';
    document.body.appendChild(container);

    // Initialize TIXAE configuration
    window.VG_CONFIG = {
      ID: "uprsfip7q63nx67d",
      region: 'na',
      render: 'bottom-right',
      stylesheets: [
        "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
      ],
    };

    // Load TIXAE script
    const script = document.createElement('script');
    script.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(container);
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default TixaeChat;