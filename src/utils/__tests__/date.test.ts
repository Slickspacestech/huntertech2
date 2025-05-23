import { formatDate } from '../date';

describe('Date Utils', () => {
    test('formatDate should handle dates correctly', () => {
        // Test with a specific date string
        const dateString = '2024-03-15';
        const formattedDate = formatDate(dateString);
        console.log('Input date:', dateString);
        console.log('Formatted date:', formattedDate);
        
        // Test with a Date object
        const dateObj = new Date('2024-03-15');
        const formattedDateObj = formatDate(dateObj);
        console.log('Input date object:', dateObj);
        console.log('Formatted date object:', formattedDateObj);
    });
}); 