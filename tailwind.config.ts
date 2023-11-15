import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        ss: '310px',
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        'light-accent': 'var(--light-accent)',
        active: 'var(--active)',
        'semi-transparent': 'var(--semi-transparent)',
        placeholder: 'var(--placeholder)',
      },
      fontSize: {
        '12': ['12px', '1.2'],
        '16': ['16px', '1.3'],
        '18': ['18px', '1.5'],
        '20': ['20px', '1.5'],
        '24': ['24px', '1.3'],
        '28': ['28px', '1.2'],
        '32': ['32px', '1.2'],
        '36': ['36px', '1.3'],
        '40': ['40px', '1.2'],
        '48': ['48px', '1.2'],
        '56': ['56px', '1.2'],
        '60': ['60px', '1.2'],
        '80': ['80px', '1.2'],
      },
    },
  },
  plugins: [],
};
export default config;
