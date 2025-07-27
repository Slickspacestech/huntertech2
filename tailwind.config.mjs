/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#384258',
                secondary: '#00ACAC', 
                accent: '#00C2C2',
                'brand-teal': '#00ACAC',
                'brand-teal-light': '#00C2C2',
                'brand-dark': '#384258',
            },
        },
    },
    plugins: [],
} 