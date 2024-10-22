import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                button: '#fb7500',
                'white-10%': 'rgba(255, 255, 255, 0.1)',
                'black-25%': 'rgba(26, 27, 29, 0.25)',
                black: '#202124',
                'black-45%': 'rgba(26, 27, 29, 0.45)',
                'bg-light-grey': '#f3f3f3',
                'black-blur-10%': 'rgba(20, 20, 20, 0.1)',
                'bg-footer': '#1f1f1f',
                'orange-50': '#fff9ec',
                'orange-100': '#fff2d3',
                'orange-200': '#ffe2a5',
                'orange-300': '#ffcc6d',
                'orange-400': '#ffaa32',
                'orange-500': '#ff8f0a',
                'orange-600-primary': '#fb7500',
                'orange-700': '#cc5602',
                'orange-800': '#a1430b',
                'orange-900': '#82390c',
                'orange-950': '#461a04',
            },
            screens: {
                mobile: '360px',
                tablet: '834px',
                laptop: '1440px',
                desktop: '1920px',
            },
            fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '3.75rem',
            },
        },
    },
    plugins: [],
};
export default config;
