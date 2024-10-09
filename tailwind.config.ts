import type { Config } from 'tailwindcss';

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

                btnbg: "rgba(var(--btnbg))",
                btncolor: "rgba(var(--btncolor))",
                btnborder: "rgba(var(--btnborder))",
                btnhoverbg: "rgba(var(--btnhoverbg))",
                btnhovercolor: "rgba(var(--btnhovercolor))",
                btnactivebg: "rgba(var(--btnactivebg))",
                btnactivecolor: "rgba(var(--btnactivecolor))",
            },
            typography: {
                DEFAULT: {
                    css: {
                        a: {
                            textDecoration: 'none',
                        },
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
export default config;
