// Table of Contents Generator Utility
// Generates TOC structure from headings for consistent blog navigation

export interface TocItem {
    id: string;
    text: string;
    level: number;
}

/**
 * Generates table of contents items from heading text
 * @param headings Array of heading objects with text and level
 * @returns Array of TOC items with IDs
 */
export function generateTableOfContents(headings: { text: string; level: number }[]): TocItem[] {
    return headings.map(heading => ({
        id: createSlug(heading.text),
        text: heading.text,
        level: heading.level
    }));
}

/**
 * Creates a URL-friendly slug from text
 * @param text The text to convert to a slug
 * @returns URL-friendly slug
 */
export function createSlug(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/--+/g, '-') // Replace multiple hyphens with single
        .trim();
}

/**
 * Common TOC structures for different blog types
 */
export const commonTocStructures = {
    itServicesBlog: [
        { text: "The Challenge", level: 2 },
        { text: "Our Solution", level: 2 },
        { text: "Key Benefits", level: 2 },
        { text: "Implementation Process", level: 2 },
        { text: "Results & ROI", level: 2 },
        { text: "Frequently Asked Questions", level: 2 },
        { text: "Next Steps", level: 2 }
    ],
    
    cybersecurityBlog: [
        { text: "The Security Threat", level: 2 },
        { text: "Impact on Businesses", level: 2 },
        { text: "Prevention Strategies", level: 2 },
        { text: "Best Practices", level: 2 },
        { text: "Technology Solutions", level: 2 },
        { text: "Frequently Asked Questions", level: 2 },
        { text: "Getting Started", level: 2 }
    ],
    
    caseStudyBlog: [
        { text: "Client Background", level: 2 },
        { text: "The Challenge", level: 2 },
        { text: "Our Approach", level: 2 },
        { text: "Implementation", level: 2 },
        { text: "Results", level: 2 },
        { text: "Lessons Learned", level: 2 },
        { text: "Frequently Asked Questions", level: 2 }
    ]
};

/**
 * Validates heading structure for accessibility
 * @param headings Array of headings to validate
 * @returns Validation results
 */
export function validateHeadingStructure(headings: { text: string; level: number }[]) {
    const issues: string[] = [];
    
    // Check for proper hierarchy (no skipping levels)
    for (let i = 1; i < headings.length; i++) {
        const current = headings[i];
        const previous = headings[i - 1];
        
        if (current.level > previous.level + 1) {
            issues.push(`Heading "${current.text}" skips from h${previous.level} to h${current.level}`);
        }
    }
    
    // Check for duplicate IDs
    const ids = headings.map(h => createSlug(h.text));
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    if (duplicates.length > 0) {
        issues.push(`Duplicate heading IDs found: ${duplicates.join(', ')}`);
    }
    
    return {
        isValid: issues.length === 0,
        issues
    };
}