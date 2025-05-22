# Scheduled Blog Posts

This folder is for storing future blog posts that are not yet ready to be published. Posts in this folder will not be included in the site's routing.

## How to Use

1. Create new blog posts in this folder using the template from `../template.astro`
2. When ready to publish, move the file from `_scheduled` to the parent `blog` directory
3. The post will automatically be included in the site's routing once moved

## Naming Convention

- Use kebab-case for filenames (e.g., `my-new-blog-post.astro`)
- Include relevant keywords in the filename for SEO
- Keep filenames descriptive but concise

## Example

```bash
# To move a post from scheduled to published
mv _scheduled/my-new-blog-post.astro ../my-new-blog-post.astro
```

## Notes

- The underscore prefix (`_`) in the folder name prevents Astro from including these files in the routing
- You can work on multiple posts simultaneously in this folder
- Remember to update the date when moving a post to the published folder 