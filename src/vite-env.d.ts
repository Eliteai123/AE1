/// <reference types="vite/client" />

interface Window {
  VG_CONFIG: {
    ID: string;
    region: string;
    render: string;
    stylesheets: string[];
    autostart?: boolean;
    user?: {
      name?: string;
      email?: string;
      phone?: string;
    };
    userID?: string;
  };
}

declare namespace JSX {
  interface IntrinsicElements {
    'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}