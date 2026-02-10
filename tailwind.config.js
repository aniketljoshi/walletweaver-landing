import svgToDataUri from 'mini-svg-data-uri';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#02040a',
          deep: '#000000',
          elevated: '#0d1016',
          50: '#0a0f1a',
          100: '#0d1320',
          200: '#111827',
          300: '#1a2332',
          400: '#243447',
        },
        light: {
          warm: '#fdfdf9',
          neutral: '#f8f9fa',
          accent: '#e8eaed',
          text: '#0a0f16',
        },
        electric: { cyan: '#00e5ff' },
        quantum: { purple: '#a78bfa' },
        plasma: { emerald: '#34d399' },
        solar: { amber: '#fbbf24' },
        neon: {
          cyan: '#00f0ff',
          violet: '#8b5cf6',
          magenta: '#ff00ff',
          emerald: '#10b981',
          amber: '#f59e0b',
          rose: '#f43f5e',
        },
        holo: {
          blue: '#3b82f6',
          purple: '#a855f7',
          teal: '#14b8a6',
          pink: '#ec4899',
        },
        glass: {
          10: 'rgba(255, 255, 255, 0.02)',
          20: 'rgba(255, 255, 255, 0.04)',
          30: 'rgba(255, 255, 255, 0.06)',
          50: 'rgba(255, 255, 255, 0.08)',
          100: 'rgba(255, 255, 255, 0.1)',
          200: 'rgba(255, 255, 255, 0.15)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-down': 'slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'glow-pulse-slow': 'glowPulse 5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 4s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        aurora: 'aurora 30s ease infinite',
        meteor: 'meteor 5s linear infinite',
        spotlight: 'spotlight 2s ease .75s 1 forwards',
        'move-border': 'moveBorder 4s linear infinite',
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-reverse': 'marquee-reverse var(--duration) linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', filter: 'blur(40px)' },
          '50%': { opacity: '0.8', filter: 'blur(60px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(0, 240, 255, 0.3)' },
          '50%': { borderColor: 'rgba(139, 92, 246, 0.5)' },
        },
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: '0' },
        },
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: '1', transform: 'translate(-50%, -40%) scale(1)' },
        },
        moveBorder: {
          '0%': { offsetDistance: '0%' },
          '100%': { offsetDistance: '100%' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-reverse': {
          from: { transform: 'translateX(calc(-100% - var(--gap)))' },
          to: { transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, rgba(0,240,255,0.03) 0%, rgba(139,92,246,0.03) 50%, rgba(16,185,129,0.03) 100%)',
        'holo-gradient': 'linear-gradient(135deg, #00f0ff 0%, #8b5cf6 50%, #10b981 100%)',
        'shimmer-gradient': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.3), 0 0 40px rgba(0, 240, 255, 0.1)',
        'neon-violet': '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.1)',
        'neon-emerald': '0 0 20px rgba(16, 185, 129, 0.3), 0 0 40px rgba(16, 185, 129, 0.1)',
        'glow-lg': '0 0 60px rgba(0, 240, 255, 0.15)',
        'glow-xl': '0 0 100px rgba(139, 92, 246, 0.2)',
        'inner-glow': 'inset 0 0 20px rgba(0, 240, 255, 0.1)',
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.19, 1, 0.22, 1)',
        holographic: 'cubic-bezier(0.4, 0, 0.2, 1)',
        elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme, addUtilities, addComponents }) {
      // SVG grid/dot background utilities
      matchUtilities(
        {
          'bg-grid-small': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          'bg-dot': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: { DEFAULT: 'rgba(0, 229, 255, 0.03)' }, type: 'color' }
      );

      addUtilities({
        '.text-glow': { textShadow: '0 0 20px currentColor, 0 0 40px currentColor' },
        '.text-glow-sm': { textShadow: '0 0 10px currentColor' },
        '.preserve-3d': { transformStyle: 'preserve-3d' },
        '.perspective-1000': { perspective: '1000px' },
        '.perspective-2000': { perspective: '2000px' },
        '.backface-hidden': { backfaceVisibility: 'hidden' },
        '.glass': {
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        },
        '.glass-strong': {
          background: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(30px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
        },
        '.holo-border': {
          border: '1px solid transparent',
          background: 'linear-gradient(var(--void-100), var(--void-100)) padding-box, linear-gradient(135deg, rgba(0,240,255,0.5), rgba(139,92,246,0.5)) border-box',
        },
        '.grid-pattern': {
          backgroundImage: `linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        },
        '.dot-pattern': {
          backgroundImage: 'radial-gradient(rgba(0, 240, 255, 0.15) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        },
      });

      addComponents({
        '.card-3d': {
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          transformStyle: 'preserve-3d',
          '&:hover': { transform: 'translateY(-8px) rotateX(5deg)' },
        },
        '.btn-glow': {
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '-2px',
            background: 'linear-gradient(135deg, #00f0ff, #8b5cf6, #10b981)',
            borderRadius: 'inherit',
            zIndex: '-1',
            opacity: '0',
            transition: 'opacity 0.3s ease',
            filter: 'blur(8px)',
          },
          '&:hover::before': { opacity: '0.6' },
        },
      });
    },
  ],
};
