import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    integrations: [
        tailwind({
            applyBaseStyles: false, // Disable Tailwind's base styles
        })
    ],
    site: 'https://huntertech.ca',
    build: {
        assets: '_assets',
        inlineStylesheets: 'auto',
    },
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp',
        },
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'huntertech.ca',
            },
            {
                protocol: 'https',
                hostname: 'www.huntertech.ca',
            },
            {
                protocol: 'https',
                hostname: 'huntertech2.fly.dev',
            }
        ],
    },
    compressHTML: true,
    vite: {
        build: {
            rollupOptions: {
                output: {
                    manualChunks: {
                        'vendor': ['react', 'react-dom'],
                    },
                },
            },
        },
    },
}); 