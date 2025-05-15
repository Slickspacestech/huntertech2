import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  
  // Get the URL path
  const url = new URL(context.request.url);
  const path = url.pathname;

  // Define cache durations for different file types
  const cacheDurations = {
    // Images and media files - 1 week
    '.(jpg|jpeg|png|gif|ico|svg|webp|avif)$': 'public, max-age=604800, immutable',
    // CSS and JavaScript files - 1 day
    '.(css|js)$': 'public, max-age=86400, stale-while-revalidate=604800',
    // Font files - 1 month
    '.(woff|woff2|ttf|eot)$': 'public, max-age=2592000, immutable',
    // Other static assets - 1 hour
    '.(xml|txt|webmanifest)$': 'public, max-age=3600, stale-while-revalidate=86400'
  };

  // Check if the path matches any of our cache patterns
  for (const [pattern, cacheControl] of Object.entries(cacheDurations)) {
    if (new RegExp(pattern).test(path)) {
      response.headers.set('Cache-Control', cacheControl);
      break;
    }
  }

  return response;
}); 