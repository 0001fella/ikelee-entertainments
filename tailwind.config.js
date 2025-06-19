/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Enhanced amber/orange palette with deeper tones
        amber: {
          25: '#fffcf5',
          50: '#fff9eb',
          100: '#fff1d1',
          200: '#ffe3a8',
          300: '#ffcf75',
          400: '#ffa726', // Primary amber
          500: '#f57c00', // Vibrant accent
          600: '#e65100', // Deep accent
          700: '#c43d00',
          800: '#9a2e00',
          900: '#7c2700',
        },
        // Studio dark theme with more variations
        studio: {
          50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#a3a3a3',
          400: '#858585',
          500: '#666666',
          600: '#4d4d4d',
          700: '#333333',
          800: '#1a1a1a',
          900: '#0a0a0a',
          dark: '#0a0a0a',
          darker: '#050505',
          light: '#1a1a1a',
          amber: {
            light: '#ffb74d',
            DEFAULT: '#ffa726',
            dark: '#f57c00',
          }
        }
      },
      keyframes: {
        // Enhanced floating animations
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0) rotate(0.5deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-0.5deg)' },
        },
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0) rotate(0.2deg)' },
          '50%': { transform: 'translateY(-5px) rotate(-0.2deg)' },
        },
        // New animations
        'gradient-pulse': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'text-glow': {
          '0%, 100%': { 'text-shadow': '0 0 5px rgba(245, 124, 0, 0.5)' },
          '50%': { 'text-shadow': '0 0 20px rgba(245, 124, 0, 0.8), 0 0 30px rgba(245, 124, 0, 0.6)' },
        },
        'border-pulse': {
          '0%, 100%': { 'box-shadow': '0 0 0 0px rgba(245, 124, 0, 0.3)' },
          '50%': { 'box-shadow': '0 0 0 4px rgba(245, 124, 0, 0)' },
        },
        'flicker': {
          '0%, 100%': { opacity: 1 },
          '25%, 75%': { opacity: 0.95 },
          '50%': { opacity: 0.85 },
        },
        'vinyl-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'sound-wave': {
          '0%': { height: '10%' },
          '50%': { height: '100%' },
          '100%': { height: '10%' },
        }
      },
      animation: {
        'float-medium': 'float-medium 5s ease-in-out infinite',
        'float-soft': 'float-soft 9s ease-in-out infinite',
        // New animation utilities
        'gradient-pulse': 'gradient-pulse 8s ease infinite',
        'text-glow': 'text-glow 3s ease-in-out infinite',
        'border-pulse': 'border-pulse 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'vinyl-spin': 'vinyl-spin 60s linear infinite',
        'flicker': 'flicker 4s ease-in-out infinite',
        'sound-wave': 'sound-wave 1.2s ease-in-out infinite',
      },
      backgroundImage: {
        // Studio patterns
        'studio-noise': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDUwMHY1MDBIMHoiLz48L3N2Zz4=')",
        'studio-grid': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0idHJhbnNwYXJlbnQiLz48ZyBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTAgMTBoNTAwTTEwIDB2NTAwIi8+PC9nPjwvc3ZnPg==')",
        'studio-grid-dark': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0idHJhbnNwYXJlbnQiLz48ZyBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAxMGg1MDBNMTAgMHY1MDAiLz48L2c+PC9zdmc+')",
        'studio-diagonal': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0idHJhbnNwYXJlbnQiLz48ZyBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTAgMGw1MDAgNTAwTTAgNTAwTDUwMCAwIi8+PC9nPjwvc3ZnPg==')",
        'studio-diagonal-dark': "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0idHJhbnNwYXJlbnQiLz48ZyBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMCAwbDUwMCA1MDBNMCA1MDBMNTAwIDAiLz48L2c+PC9zdmc+')",
        // Gradient utilities
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from var(--tw-gradient-angle), var(--tw-gradient-stops))',
        // New gradient variations
        'studio-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #050505 100%)',
        'studio-gradient-light': 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 50%, #c2c2c2 100%)',
        'amber-gradient': 'linear-gradient(135deg, #f57c00 0%, #ffa726 50%, #ffc66e 100%)',
        'amber-gradient-dark': 'linear-gradient(135deg, #e65100 0%, #f57c00 50%, #ffa726 100%)',
        'studio-amber-radial': 'radial-gradient(circle, rgba(245,124,0,0.15) 0%, rgba(245,124,0,0) 70%)',
        'studio-dark-radial': 'radial-gradient(circle, rgba(10,10,10,0.7) 0%, rgba(5,5,5,1) 70%)',
      },
      boxShadow: {
        // Enhanced glow effects
        'glow-sm': '0 0 5px rgba(245, 124, 0, 0.5)',
        'glow-md': '0 0 15px rgba(245, 124, 0, 0.5), 0 0 25px rgba(245, 124, 0, 0.3)',
        'glow-lg': '0 0 25px rgba(245, 124, 0, 0.6), 0 0 50px rgba(245, 124, 0, 0.4)',
        'glow-xl': '0 0 35px rgba(245, 124, 0, 0.7), 0 0 75px rgba(245, 124, 0, 0.5)',
        'glow-xxl': '0 0 50px rgba(245, 124, 0, 0.8), 0 0 100px rgba(245, 124, 0, 0.6)',
        // Inner glow
        'inner-glow': 'inset 0 0 10px rgba(245, 124, 0, 0.3)',
        'inner-glow-dark': 'inset 0 0 15px rgba(245, 124, 0, 0.5)',
        // Studio-specific shadows
        'studio-card': '0 10px 30px rgba(0, 0, 0, 0.15)',
        'studio-card-dark': '0 10px 30px rgba(0, 0, 0, 0.35)',
        'studio-card-hover': '0 15px 40px rgba(0, 0, 0, 0.2)',
        'studio-card-hover-dark': '0 15px 40px rgba(0, 0, 0, 0.45)',
        'studio-floating': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'studio-floating-dark': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      },
      // Glass morphism utilities
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '36px',
      },
      backdropBrightness: {
        80: '0.8',
        90: '0.9',
        100: '1',
        110: '1.1',
        120: '1.2',
      },
      backdropSaturate: {
        100: '1',
        120: '1.2',
        150: '1.5',
        200: '2',
      },
      textShadow: {
        // Text glow effects
        'glow-sm': '0 0 5px rgba(245, 124, 0, 0.5)',
        'glow-md': '0 0 10px rgba(245, 124, 0, 0.5), 0 0 20px rgba(245, 124, 0, 0.3)',
        'glow-lg': '0 0 15px rgba(245, 124, 0, 0.6), 0 0 30px rgba(245, 124, 0, 0.4)',
        'glow-xl': '0 0 20px rgba(245, 124, 0, 0.7), 0 0 40px rgba(245, 124, 0, 0.5)',
      },
      // New typography settings
      fontSize: {
        '2xs': '0.625rem', // 10px
        '3xs': '0.5rem',   // 8px
      },
      // Border extensions
      borderWidth: {
        '1': '1px',
        '3': '3px',
        '5': '5px',
      },
      // New spacing scales
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
      },
      // Aspect ratios for studio content
      aspectRatio: {
        'studio-card': '4/3',
        'studio-wide': '16/9',
        'studio-square': '1/1',
        'studio-vertical': '3/4',
        'vinyl': '1/1',
      },
    },
  },
  plugins: [
    // Plugin for text shadows
    function ({ addUtilities }) {
      const textGlowUtilities = {
        '.text-glow-sm': {
          'text-shadow': '0 0 5px rgba(245, 124, 0, 0.5)',
        },
        '.text-glow-md': {
          'text-shadow': '0 0 10px rgba(245, 124, 0, 0.5), 0 0 20px rgba(245, 124, 0, 0.3)',
        },
        '.text-glow-lg': {
          'text-shadow': '0 0 15px rgba(245, 124, 0, 0.6), 0 0 30px rgba(245, 124, 0, 0.4)',
        },
        '.text-glow-xl': {
          'text-shadow': '0 0 20px rgba(245, 124, 0, 0.7), 0 0 40px rgba(245, 124, 0, 0.5)',
        },
        '.text-glow-none': {
          'text-shadow': 'none',
        },
      };
      addUtilities(textGlowUtilities, ['responsive', 'hover']);
    },
    // Plugin for gradient masks
    function ({ addUtilities }) {
      const gradientMaskUtilities = {
        '.gradient-mask-b': {
          maskImage: 'linear-gradient(to bottom, black, transparent 90%)',
          '-webkit-mask-image': 'linear-gradient(to bottom, black, transparent 90%)',
        },
        '.gradient-mask-t': {
          maskImage: 'linear-gradient(to top, black, transparent 90%)',
          '-webkit-mask-image': 'linear-gradient(to top, black, transparent 90%)',
        },
        '.gradient-mask-l': {
          maskImage: 'linear-gradient(to left, black, transparent 90%)',
          '-webkit-mask-image': 'linear-gradient(to left, black, transparent 90%)',
        },
        '.gradient-mask-r': {
          maskImage: 'linear-gradient(to right, black, transparent 90%)',
          '-webkit-mask-image': 'linear-gradient(to right, black, transparent 90%)',
        },
        '.gradient-mask-tr': {
          maskImage: 'linear-gradient(to top right, black, transparent)',
          '-webkit-mask-image': 'linear-gradient(to top right, black, transparent)',
        },
        '.gradient-mask-tl': {
          maskImage: 'linear-gradient(to top left, black, transparent)',
          '-webkit-mask-image': 'linear-gradient(to top left, black, transparent)',
        },
        '.gradient-mask-br': {
          maskImage: 'linear-gradient(to bottom right, black, transparent)',
          '-webkit-mask-image': 'linear-gradient(to bottom right, black, transparent)',
        },
        '.gradient-mask-bl': {
          maskImage: 'linear-gradient(to bottom left, black, transparent)',
          '-webkit-mask-image': 'linear-gradient(to bottom left, black, transparent)',
        },
      };
      addUtilities(gradientMaskUtilities, ['responsive']);
    },
    // Plugin for glass morphism effects
    function ({ addUtilities }) {
      const glassUtilities = {
        '.glass': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(12px) saturate(160%)',
          WebkitBackdropFilter: 'blur(12px) saturate(160%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.glass-dark': {
          backgroundColor: 'rgba(10, 10, 10, 0.3)',
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
        },
        '.glass-amber': {
          backgroundColor: 'rgba(245, 124, 0, 0.1)',
          backdropFilter: 'blur(10px) saturate(180%)',
          WebkitBackdropFilter: 'blur(10px) saturate(180%)',
          border: '1px solid rgba(245, 124, 0, 0.15)',
        },
        '.glass-amber-dark': {
          backgroundColor: 'rgba(245, 124, 0, 0.15)',
          backdropFilter: 'blur(12px) saturate(200%)',
          WebkitBackdropFilter: 'blur(12px) saturate(200%)',
          border: '1px solid rgba(245, 124, 0, 0.2)',
        },
      };
      addUtilities(glassUtilities, ['responsive']);
    },
    // Plugin for vinyl record effect
    function ({ addUtilities }) {
      const vinylUtilities = {
        '.vinyl': {
          background: 'radial-gradient(circle, #333 30%, #222 30%, #222 50%, #333 50%)',
          backgroundSize: '100% 100%',
          borderRadius: '50%',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '20%',
            height: '20%',
            background: '#fff',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '4%',
            height: '4%',
            background: '#000',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '10',
          },
        },
        '.vinyl-amber': {
          background: 'radial-gradient(circle, #f57c00 30%, #e65100 30%, #e65100 50%, #f57c00 50%)',
        },
      };
      addUtilities(vinylUtilities, ['responsive']);
    },
    // Plugin for sound wave visualization
    function ({ addUtilities }) {
      const soundWaveUtilities = {
        '.sound-wave': {
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          height: '2rem',
          gap: '0.25rem',
          '& > div': {
            width: '0.25rem',
            backgroundColor: 'currentColor',
            animation: 'sound-wave 1.2s ease-in-out infinite',
            '&:nth-child(1)': { animationDelay: '0s', height: '30%' },
            '&:nth-child(2)': { animationDelay: '0.1s', height: '60%' },
            '&:nth-child(3)': { animationDelay: '0.2s', height: '90%' },
            '&:nth-child(4)': { animationDelay: '0.3s', height: '60%' },
            '&:nth-child(5)': { animationDelay: '0.4s', height: '30%' },
          },
        },
      };
      addUtilities(soundWaveUtilities, ['responsive']);
    },
  ],
};