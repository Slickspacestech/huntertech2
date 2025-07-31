# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` or `npm start` (runs on http://localhost:4321)
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`
- **Run Astro CLI**: `npm run astro`

## Tech Stack & Architecture

This is a static website built with Astro.js, featuring:
- **Framework**: Astro.js 4.4+ with static site generation
- **Styling**: Tailwind CSS (base styles disabled in config)
- **Language**: TypeScript
- **Image Processing**: Sharp for optimization
- **SEO**: Sitemap generation, structured data, meta tags

## Project Structure

```
src/
├── components/         # Reusable Astro components
├── layouts/           # Layout templates (Layout.astro is main)
├── pages/             # File-based routing for all pages
│   ├── blog/          # Blog posts as individual .astro files
│   ├── industries/    # Industry-specific landing pages
│   ├── services/      # Service detail pages
│   └── solutions/     # Solution detail pages
├── data/              # Blog metadata and content data
├── assets/images/     # Optimized images
├── styles/           # Global CSS
└── utils/            # Helper functions (date, wordCount)
```

## Blog System Architecture

The site uses a hybrid blog system:

1. **Blog posts**: Individual `.astro` files in `src/pages/blog/`
2. **Blog metadata**: Centralized in `src/data/blog-posts.ts`
3. **Template**: Use `src/pages/blog/_scheduled/_template.astro` for new blog posts

When creating blog posts:
- Create the `.astro` file in the appropriate blog subdirectory
- Add metadata entry to `blog-posts.ts` with matching slug
- Import and reference the featured image in both files
- Follow the structured data pattern for SEO

## Key Configuration

- **Site URL**: https://huntertech.ca
- **Build assets**: `_assets` directory
- **Image service**: Sharp with remote pattern allowlist
- **Sitemap**: Excludes `tech-it-blog` and `blog/template/` URLs
- **Tailwind**: Base styles disabled, custom CSS in `src/styles/global.css`

## Component Guidelines

- Reuse existing components from `src/components/` before creating new ones
- Follow the established icon system in `src/components/icons/`
- Use the `Layout.astro` wrapper for all pages
- Include proper SEO components (`SEO.astro`, structured data)

## SEO Strategy & Local Ranking Rules

### **Primary Target Keywords (Top 3 Ranking Goals)**
Focus on these high-conversion, local commercial intent keywords:

**Calgary Market:**
- "managed IT services Calgary" (Primary - 2,400/month, High Commercial Intent)
- "IT support Calgary" (Secondary - 1,900/month, High Commercial Intent)  
- "Calgary IT company" (Tertiary - 1,300/month, High Commercial Intent)
- "business IT support Calgary" (Long-tail - 590/month, Very High Intent)
- "cybersecurity services Calgary" (Growth - 880/month, High Value)

**Vancouver Market:**
- "managed IT services Vancouver" (Primary - 2,100/month, High Commercial Intent)
- "IT support Vancouver" (Secondary - 1,600/month, High Commercial Intent)
- "Vancouver IT company" (Tertiary - 1,100/month, High Commercial Intent)
- "business IT support Vancouver" (Long-tail - 480/month, Very High Intent)
- "cybersecurity services Vancouver" (Growth - 720/month, High Value)

### **Content Creation Rules**

1. **Local Authority Content (E-A-T Optimization)**
   - Create city-specific service pages for every major offering
   - Include local business case studies (like Pontem Group example)
   - Add "About Our Team" sections highlighting certifications and local presence
   - Use local landmarks and business district references in content

2. **Keyword Integration Standards**
   - Primary keyword in H1, first 100 words, and URL slug
   - Secondary keywords in H2s and naturally throughout content  
   - Include location + service combinations in meta descriptions
   - Use semantic variations (IT support → technology support, IT services → technology solutions)

3. **Technical SEO Requirements**
   - Every page must have unique meta title with location + primary keyword
   - Meta descriptions 145-155 characters with local + service keywords
   - Include structured data markup for LocalBusiness on all location pages
   - Ensure internal linking between related service and location pages

### **Blog Content Strategy**

1. **Local SEO Blog Topics (Create Monthly)**
   - "[Service] for [Industry] in Calgary/Vancouver" 
   - "How [Local Business Name] Saved $X with [Service]"
   - "[Year] Technology Trends for Calgary/Vancouver Businesses"
   - "Cybersecurity Checklist for [Local Industry] Companies"

2. **Authority Building Content**
   - Industry case studies featuring local clients
   - Technical tutorials demonstrating expertise
   - Local IT compliance and regulation guides
   - Small business technology planning guides

### **Local Business Optimization**

1. **Google Business Profile Excellence**
   - Use all predefined IT service categories
   - Include custom services: "24/7 IT Support", "Cloud Migration", "Cybersecurity Assessment"
   - Post weekly updates with local business focus
   - Collect reviews mentioning specific services and locations

2. **NAP Consistency Rules**
   - Calgary: "4030 8 St SE, Calgary, AB T2G 3A7" 
   - Vancouver: Use consistent format across all pages
   - Phone numbers: Calgary (825-415-6990), Vancouver (778-819-7411)
   - Ensure exact match across website, GMB, and citations

### **Content Quality Standards**

1. **Page Length Requirements**
   - Service pages: 1,200+ words with local focus
   - Blog posts: 800+ words minimum
   - Location pages: 1,500+ words with local business info

2. **Expertise Demonstration**
   - Include team member bios with certifications
   - Add client testimonials with business names and locations
   - Feature industry partnerships (Microsoft, etc.)
   - Include technical specifications and methodologies

### **Link Building Focus**

1. **Local Citations Priority**
   - Calgary Chamber of Commerce, Vancouver Board of Trade
   - Local business directories and industry associations
   - Technology meetup and conference mentions
   - Partner vendor directory listings

2. **Content Link Targets**
   - Local news sites for expert commentary
   - Industry blogs for guest posting
   - Client websites for case study features
   - Local university tech programs for partnerships

## Core Values & Pricing Philosophy

Our pricing model aligns with Huntertech's core values:

### **Honesty**
- Transparent, upfront pricing with no hidden fees
- Clear distinction between Essential ($95/user) and Complete ($125/user) tiers
- All costs clearly communicated before engagement

### **Service**
- Both pricing tiers include unlimited technical support
- Responsive local support in Calgary and Vancouver
- Project labour included in Complete tier to remove billing friction

### **Accountability**
- Predictable monthly costs for budget planning
- Clear deliverables and expectations for each tier
- Regular business reviews to ensure value delivery

### **Clarity**
- Simple per-user pricing model
- Interactive pricing calculator at `/pricing-calculator/`
- No confusing contracts or fine print

When discussing pricing, always emphasize how our transparent model reflects these values and builds trust with clients.

## Email Discovery & Verification Workflow

The project includes a NeverBounce MCP server for real-time email verification during prospect research:

### **Sales Navigator Research Process**
1. Find Calgary engineering/accounting firms (7-15 employees)
2. Identify decision makers (Presidents, Principals, Partners)
3. Generate email patterns based on common formats
4. Use NeverBounce MCP to verify emails in real-time

### **Common Email Patterns**
- Engineering firms: 70% use `firstname@company.com`
- Accounting firms: 80% use `firstname@company.com`
- Fallback patterns: `firstname.lastname@` or `flastname@`

### **MCP Integration**
- NeverBounce server configured in `mcp.json`
- Verify emails directly in Claude: "Verify john@example.com"
- Batch verification available for multiple prospects

## Important Notes

- Blog posts require both `.astro` file and `blog-posts.ts` entry
- Images should be optimized and placed in `src/assets/images/`
- Maintain the established URL structure for SEO
- The site uses Astro's static generation - no server-side rendering
- **SEO Rule**: Every new page must target a specific local keyword combination
- **Performance Rule**: Core Web Vitals must pass for all location and service pages
- **Research Rule**: Only add verified emails (NeverBounce "Valid" status) to outreach campaigns