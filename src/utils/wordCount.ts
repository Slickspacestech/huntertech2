/**
 * Calculates the word count from HTML content by stripping HTML tags and counting words
 * @param htmlContent The HTML content to count words from
 * @returns The number of words in the content
 */
export function calculateWordCount(htmlContent: string): number {
    // Remove HTML tags
    const textContent = htmlContent.replace(/<[^>]*>/g, ' ');
    
    // Remove extra whitespace and split into words
    const words = textContent
        .replace(/\s+/g, ' ')
        .trim()
        .split(/\s+/);
    
    // Filter out empty strings and count
    return words.filter(word => word.length > 0).length;
}

/**
 * Estimates reading time in minutes based on word count
 * @param wordCount The number of words in the content
 * @param wordsPerMinute Average reading speed (default: 200)
 * @returns The estimated reading time in minutes
 */
export function estimateReadingTime(wordCount: number, wordsPerMinute: number = 200): number {
    return Math.ceil(wordCount / wordsPerMinute);
} 