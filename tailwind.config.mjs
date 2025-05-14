/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#2c3e50',
                secondary: '#3498db',
                accent: '#e74c3c',
            },
        },
    },
    plugins: [],
} 