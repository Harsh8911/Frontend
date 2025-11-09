export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': {
          'primary': '#0a0a0f',
          'secondary': '#13131a',
          'tertiary': '#1a1a24',
        },
        'accent': {
          'DEFAULT': '#00d4aa',
          'light': '#00f5d4',
          'dark': '#00a886',
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delay-2': 'float 8s ease-in-out infinite 2s',
        'float-delay-4': 'float 10s ease-in-out infinite 4s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  safelist: [
    'bg-dark-primary',
    'bg-dark-secondary',
    'bg-dark-tertiary',
    'text-accent',
    'border-accent',
    'from-accent',
    'to-accent-light',
  ],
  plugins: [],
}
