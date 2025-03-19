/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontSize: {
        'fluid-sm': ['clamp(0.875rem, 0.8rem + 0.25vw, 1rem)', { lineHeight: '1.5' }],
        'fluid-base': ['clamp(1rem, 0.925rem + 0.375vw, 1.125rem)', { lineHeight: '1.75' }],
        'fluid-lg': ['clamp(1.125rem, 1rem + 0.625vw, 1.375rem)', { lineHeight: '1.75' }],
        'fluid-xl': ['clamp(1.25rem, 1.125rem + 0.875vw, 1.75rem)', { lineHeight: '1.75' }],
        'fluid-2xl': ['clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem)', { lineHeight: '1.5' }],
        'fluid-3xl': ['clamp(1.875rem, 1.5rem + 1.875vw, 3rem)', { lineHeight: '1.5' }],
        'fluid-4xl': ['clamp(2.25rem, 1.75rem + 2.5vw, 3.75rem)', { lineHeight: '1.25' }],
        'fluid-5xl': ['clamp(3rem, 2.25rem + 3.75vw, 5rem)', { lineHeight: '1.25' }],
        'fluid-6xl': ['clamp(3.75rem, 2.75rem + 5vw, 6rem)', { lineHeight: '1.25' }],
      },
      spacing: {
        'fluid-1': 'clamp(0.25rem, 0.2rem + 0.25vw, 0.5rem)',
        'fluid-2': 'clamp(0.5rem, 0.4rem + 0.5vw, 1rem)',
        'fluid-3': 'clamp(0.75rem, 0.6rem + 0.75vw, 1.5rem)',
        'fluid-4': 'clamp(1rem, 0.8rem + 1vw, 2rem)',
        'fluid-6': 'clamp(1.5rem, 1.2rem + 1.5vw, 3rem)',
        'fluid-8': 'clamp(2rem, 1.6rem + 2vw, 4rem)',
        'fluid-12': 'clamp(3rem, 2.4rem + 3vw, 6rem)',
        'fluid-16': 'clamp(4rem, 3.2rem + 4vw, 8rem)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'gradient-text': 'gradient 4s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse': 'spin 6s linear reverse infinite',
        'aurora': 'aurora 60s linear infinite',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = {};
  Object.entries(theme('colors')).forEach(([key, value]) => {
    if (typeof value === 'object') {
      Object.entries(value).forEach(([subKey, color]) => {
        allColors[`${key}-${subKey}`] = color;
      });
    } else {
      allColors[key] = value;
    }
  });

  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}