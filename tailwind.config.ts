import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#050507',
          secondary: '#0c0c12',
          tertiary: '#12121a',
        },
        foreground: {
          DEFAULT: '#ffffff',
          muted: '#9ca3af',
          subtle: '#6b7280',
        },
        primary: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          dark: '#4f46e5',
        },
        secondary: {
          DEFAULT: '#a855f7',
          light: '#c084fc',
        },
        accent: {
          DEFAULT: '#22d3ee',
          light: '#67e8f9',
        },
        'accent-green': '#10b981',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'system-ui', 'sans-serif'],
        'general-sans': ['General Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-1': 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #22d3ee 100%)',
        'gradient-2': 'linear-gradient(135deg, #0c0c12 0%, #1e1b4b 100%)',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      backgroundSize: {
        'grid': '60px 60px',
        'dots': '24px 24px',
      },
      boxShadow: {
        'glow-primary': '0 0 60px rgba(99, 102, 241, 0.3)',
        'glow-secondary': '0 0 60px rgba(168, 85, 247, 0.3)',
        'glow-accent': '0 0 60px rgba(34, 211, 238, 0.3)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 20px 40px rgba(99, 102, 241, 0.15)',
      },
    },
  },
  plugins: [],
}
export default config
