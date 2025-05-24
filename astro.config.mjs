import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    integrations: [
        tailwind({
            applyBaseStyles: false, // Disable Tailwind's base styles
        }),
        sitemap({
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date(),
            i18n: {
                defaultLocale: 'en',
                locales: {
                    en: 'en',
                },
            },
            filter: (page) => {
                // Exclude tech-it-blog URLs and blog/template/ URLs
                return !page.includes('tech-it-blog') && !page.includes('blog/template/');
            }
        }),
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