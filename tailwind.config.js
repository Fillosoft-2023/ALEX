/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          deep: '#155E63',
          dark: '#0e4145',
          light: '#1f7b82',
        },
        forest: {
          DEFAULT: '#267A63',
          dark: '#1b5b4a',
          light: '#319579',
        },
        sage: {
          DEFAULT: '#DCEBE2',
          light: '#edf5f0',
          dark: '#c4dbce',
        },
        ivory: {
          DEFAULT: '#F7F5EF',
          warm: '#f1ede3',
          light: '#fbfaf7',
        },
        mint: {
          muted: '#EAF3ED',
        },
        charcoal: {
          green: '#243631',
          DEFAULT: '#1c2825',
          soft: '#2e423d',
        },
        coral: {
          accent: '#D98267',
          hover: '#c77156',
          light: '#faeeea',
        },
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        body: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        cormorant: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        heading: ['var(--font-cormorant)', 'Cormorant Garamond', 'var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        display: ['var(--font-cormorant)', 'Cormorant Garamond', 'var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        playfair: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        mephisto: ['var(--font-mephisto)', 'Mephisto', 'sans-serif'],
        chavalard: ['var(--font-chavalard)', 'Chavalard', 'sans-serif'],
        pierknife: ['var(--font-pierknife)', 'Pierknife', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(36, 54, 49, 0.04)',
        'elevated': '0 12px 32px -8px rgba(21, 94, 99, 0.12)',
        'card': '0 6px 24px -4px rgba(36, 54, 49, 0.07)',
        'float': '0 20px 40px -15px rgba(21, 94, 99, 0.18)',
      },
      letterSpacing: {
        tighter: '0.01em',
        tight: '0.035em',
        normal: '0.04em',
        wide: '0.065em',
        wider: '0.09em',
        widest: '0.15em',
      },
      borderRadius: {
        'xl': '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      scale: {
        108: '1.08',
      },
    },
  },
  plugins: [],
};
