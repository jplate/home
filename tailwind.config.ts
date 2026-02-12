import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',

                btnbg: 'rgba(var(--btnbg))',
                btncolor: 'rgba(var(--btncolor))',
                btnborder: 'rgba(var(--btnborder))',
                btnhoverbg: 'rgba(var(--btnhoverbg))',
                btnhovercolor: 'rgba(var(--btnhovercolor))',
                btnactivebg: 'rgba(var(--btnactivebg))',
                btnactivecolor: 'rgba(var(--btnactivecolor))',
            },
            typography: ({ theme }: { theme: any }) => ({
                DEFAULT: {
                    css: {
                        '--tw-prose-body': 'var(--prose-body)',
                        '--tw-prose-headings': 'var(--prose-headings)',
                        '--tw-prose-links': 'var(--links)',
                        '--tw-prose-bold': 'var(--prose-bold)',
                        '--tw-prose-counters': 'var(--prose-counters)',
                        '--tw-prose-bullets': 'var(--prose-bullets)',
                        a: {
                            textDecoration: 'none',
                        },
                    },
                },
            }),
        },
    },
    plugins: [typography],
};
export default config;
