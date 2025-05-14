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
        assets: '_assets'
    }
}); 