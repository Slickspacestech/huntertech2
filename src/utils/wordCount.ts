/**
 * Calculates the word count of a given text
 * @param text The text to count words from
 * @returns The number of words in the text
 */
export function calculateWordCount(text: string): number {
    // Remove HTML tags and extra whitespace
    const cleanText = text.replace(/<[^>]*>/g, '').trim();
    // Split by whitespace and filter out empty strings
    const words = cleanText.split(/\s+/).filter(word => word.length > 0);
    return words.length;
}

/**
 * Estimates the reading time in minutes for a given word count
 * @param wordCount The number of words in the text
 * @returns The estimated reading time in minutes
 */
export function estimateReadingTime(wordCount: number): number {
    // Average reading speed: 200-250 words per minute
    const wordsPerMinute = 225;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return minutes;
} 