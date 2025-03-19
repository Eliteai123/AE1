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
    const script = document.createElement('script');
    script.defer = true;
    script.textContent = `
      (function() {
        window.VG_CONFIG = {
          ID: "uprsfip7q63nx67d",
          region: 'na',
          render: 'bottom-right',
          stylesheets: [
            "https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css",
          ],
        }
        var VG_SCRIPT = document.createElement("script");
        VG_SCRIPT.src = "https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js";
        VG_SCRIPT.defer = true;
        document.body.appendChild(VG_SCRIPT);
      })()
    `;
    document.body.appendChild(script);

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