// Blog helper utilities for automatic content parsing and TOC generation

/**
 * Extracts headings from HTML or markdown content to generate table of contents
 * @param content - The HTML content as a string
 * @returns Array of heading objects with text, id, and level
 */
export function extractHeadings(content: string): Array<{
    text: string;
    id: string;
    level: number;
}> {
    const headings: Array<{ text: string; id: string; level: number }> = [];
    
    // Regex to match heading tags with optional existing IDs
    const headingRegex = /<h([1-6])(?:\s+id="([^"]*)")?[^>]*>(.*?)<\/h[1-6]>/gi;
    let match;
    
    while ((match = headingRegex.exec(content)) !== null) {
        const level = parseInt(match[1]);
        const existingId = match[2];
        const textContent = match[3]
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .trim();
        
        // Generate ID if one doesn't exist
        const id = existingId || generateSlug(textContent);
        
        headings.push({
            text: textContent,
            id,
            level
        });
    }
    
    return headings;
}

/**
 * Generates a URL-friendly slug from text
 * @param text - The text to slugify
 * @returns URL-friendly slug
 */
export function generateSlug(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters except spaces and hyphens
        .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Automatically adds IDs to headings in HTML content if they don't exist
 * @param content - The HTML content
 * @returns Content with IDs added to headings
 */
export function addHeadingIds(content: string): string {
    return content.replace(/<h([1-6])(?!\s+id=)([^>]*)>(.*?)<\/h[1-6]>/gi, (match, level, attrs, textContent) => {
        const cleanText = textContent.replace(/<[^>]*>/g, '').trim();
        const id = generateSlug(cleanText);
        return `<h${level}${attrs} id="${id}">${textContent}</h${level}>`;
    });
}

/**
 * Parses FAQ content from various formats and structures it
 * @param content - Content that might contain FAQ sections
 * @returns Array of FAQ items
 */
export function extractFAQs(content: string): Array<{
    question: string;
    answer: string;
}> {
    const faqs: Array<{ question: string; answer: string }> = [];
    
    // Look for FAQ sections with details/summary pattern
    const faqRegex = /<details[^>]*>[\s\S]*?<summary[^>]*>(.*?)<\/summary>[\s\S]*?<div[^>]*class="faq-content"[^>]*>([\s\S]*?)<\/div>[\s\S]*?<\/details>/gi;
    let match;
    
    while ((match = faqRegex.exec(content)) !== null) {
        const question = match[1]
            .replace(/<span[^>]*class="expand-icon"[^>]*>.*?<\/span>/gi, '') // Remove expand icons
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .trim();
        
        const answer = match[2]
            .replace(/<p[^>]*>(.*?)<\/p>/gi, '$1') // Extract paragraph content
            .trim();
        
        if (question && answer) {
            faqs.push({ question, answer });
        }
    }
    
    return faqs;
}

/**
 * Extracts mentions (companies, tools, etc.) from content for structured data
 * @param content - The blog content
 * @param baseUrl - Base URL for the site
 * @returns Array of mention objects for structured data
 */
export function extractMentions(content: string, baseUrl: string = "https://huntertech.ca"): Array<{
    "@type": string;
    name: string;
    url: string;
}> {
    const mentions: Array<{ "@type": string; name: string; url: string }> = [];
    
    // Common mentions with their URLs and types
    const commonMentions = [
        { name: "Bluebeam Revu", url: "https://www.bluebeam.com/solutions/revu", type: "SoftwareApplication" },
        { name: "Microsoft 365", url: "https://www.microsoft.com/microsoft-365", type: "SoftwareApplication" },
        { name: "Huntertech", url: baseUrl, type: "Organization" },
        { name: "Architecture Firms", url: `${baseUrl}/industries/architecture`, type: "Organization" },
        { name: "Engineering Firms", url: `${baseUrl}/industries/engineering`, type: "Organization" },
        { name: "Calgary", url: `${baseUrl}/locations/calgary`, type: "Place" },
        { name: "Vancouver", url: `${baseUrl}/locations/vancouver`, type: "Place" }
    ];
    
    // Check which mentions appear in the content
    commonMentions.forEach(mention => {
        if (content.toLowerCase().includes(mention.name.toLowerCase())) {
            mentions.push({
                "@type": mention.type,
                name: mention.name,
                url: mention.url
            });
        }
    });
    
    return mentions;
}

/**
 * Generates default CTA based on blog category/content
 * @param category - The blog post category
 * @param content - The blog content for context
 * @returns CTA configuration object
 */
export function generateCTA(category: string, content: string): {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
} {
    const lowerContent = content.toLowerCase();
    
    // Cybersecurity-focused content
    if (category.toLowerCase().includes('cybersecurity') || 
        lowerContent.includes('cybersecurity') || 
        lowerContent.includes('security')) {
        return {
            title: "Concerned About Your Business Security?",
            description: "Get a free cybersecurity assessment and learn how we can protect your Calgary or Vancouver business.",
            buttonText: "Get Security Assessment",
            buttonLink: "/contact/?form_conversion=cybersecurity"
        };
    }
    
    // Bluebeam-related content
    if (lowerContent.includes('bluebeam')) {
        return {
            title: "Need help standardizing your Bluebeam profiles and toolsets?",
            description: "Contact us to schedule a consultation or learn more about our Managed IT Services.",
            buttonText: "Get Expert Help",
            buttonLink: "/contact/?form_conversion=bluebeam"
        };
    }
    
    // Microsoft 365 content
    if (lowerContent.includes('microsoft 365') || lowerContent.includes('office 365')) {
        return {
            title: "Ready to Optimize Your Microsoft 365 Environment?",
            description: "Let our experts help you get the most out of your Microsoft 365 investment.",
            buttonText: "Schedule Consultation",
            buttonLink: "/contact/?form_conversion=microsoft365"
        };
    }
    
    // Default IT services CTA
    return {
        title: "Need Expert IT Support?",
        description: "Contact us to schedule a consultation or learn more about our Managed IT Services.",
        buttonText: "Get Expert Help",
        buttonLink: "/contact/"
    };
}