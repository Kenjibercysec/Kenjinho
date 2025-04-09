import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'retro-green': '#00ff00',
        'retro-dark': '#0a0a0a',
        'retro-light': '#f0f0f0',
        'retro-accent': '#00ff00',
        'retro-border': 'rgba(0, 255, 0, 0.3)',
      },
      fontFamily: {
        mono: ['"Courier New"', 'monospace'],
      },
      boxShadow: {
        'retro': '0 0 10px rgba(0, 255, 0, 0.5)',
        'holographic': '0 0 20px rgba(0, 255, 0, 0.3)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 10s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { 'text-shadow': '0 0 5px rgba(0, 255, 0, 0.5)' },
          '100%': { 'text-shadow': '0 0 20px rgba(0, 255, 0, 0.8)' },
        },
        scan: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}); 