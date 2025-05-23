export function formatDate(date: string | Date): string {
    const dateObj = typeof date === 'string' ? new Date(date + 'T00:00:00') : date;
    return new Intl.DateTimeFormat('en-CA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
    }).format(dateObj);
}

export function getTodayDateString(): string {
    return new Date().toISOString().split('T')[0]; // Returns YYYY-MM-DD format
}

/**
 * Generates a random date between January and May 2025
 * @returns A date string in YYYY-MM-DD format
 */
export function getRandomFutureDate(): string {
    const start = new Date('2025-01-01');
    const end = new Date('2025-05-31');
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toISOString().split('T')[0];
}

/**
 * Checks if a date is in the future and returns a random future date if it is
 * @param dateString The date string to check
 * @returns The original date if not in future, or a random future date if it is
 */
export function validateDate(dateString: string): string {
    const date = new Date(dateString);
    const today = new Date();
    
    if (date > today) {
        return getRandomFutureDate();
    }
    
    return dateString;
} 