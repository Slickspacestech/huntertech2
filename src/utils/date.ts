export function formatDate(date: string | Date): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return new Intl.DateTimeFormat('en-CA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(dateObj);
}

export function getTodayDateString(): string {
    return new Date().toISOString().split('T')[0]; // Returns YYYY-MM-DD format
} 