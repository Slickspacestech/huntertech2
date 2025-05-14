export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    author: string;
    category: string;
    image: string;
    content: string;
}

export const posts: BlogPost[] = [
    {
        slug: 'phishing-attacks-canada',
        title: "Phishing Attacks Rising in Canada",
        date: "2024-03-10",
        author: "John Smith",
        category: "Cybersecurity",
        image: "/images/blog/phishing-attacks.jpg",
        content: `
            <p>Learn about the increasing threat of phishing attacks in Canada and how to protect your business from cyber fraud.</p>
        `
    },
    {
        slug: 'password-manager',
        title: "Why You Should Use a Password Manager",
        date: "2024-03-21",
        author: "John Smith",
        category: "Cybersecurity",
        image: "/images/blog/password-manager.jpg",
        content: `
            <p>Learn why password managers are essential for business security and what features to look for when choosing one.</p>
        `
    },
    {
        slug: 'cybersecurity-small-business',
        title: "Essential Cybersecurity Tips for Small Businesses",
        date: "2024-03-20",
        author: "John Smith",
        category: "Cybersecurity",
        image: "/images/blog/cybersecurity.jpg",
        content: `
            <p>Learn how to protect your small business from cyber threats with expert advice and practical tips.</p>
        `
    },
    {
        slug: 'admin-rights-work-computers',
        title: "Should Employees Have Admin Rights on Their Work Computers?",
        date: "2024-09-12",
        author: "John Smith",
        category: "IT Support",
        image: "/images/blog/admin-rights.jpg",
        content: `
            <p>Learn about the implications of granting administrative rights to employees and how to implement proper access controls in your business.</p>
        `
    },
    {
        slug: 'scan-to-email-printer',
        title: "Scan to Email on Your Office Printer with Microsoft 365 or Google Workspace",
        date: "2024-08-16",
        author: "John Smith",
        category: "IT Support",
        image: "/images/blog/scan-to-email.jpg",
        content: `
            <p>Learn how to set up scan-to-email functionality on your office printer using Microsoft 365 or Google Workspace. A simple 5-minute guide.</p>
        `
    },
    {
        slug: 'email-verification-dmarc',
        title: "Help! Emails I Send from Our Email Blast System are Showing Up as Unverified",
        date: "2024-07-29",
        author: "John Smith",
        category: "IT Support",
        image: "/images/blog/email-verification.jpg",
        content: `
            <p>Learn how to fix unverified email issues and properly set up DMARC, DKIM, and SPF records for your business email system.</p>
        `
    }
];

export const slugMap: Record<string, string> = {
    'why-you-should-use-a-password-manager': 'password-manager',
    'rising-phishing-attacks-in-canada': 'phishing-attacks-canada',
    'essential-cybersecurity-tips-for-small-businesses': 'cybersecurity-small-business',
    'should-employees-have-admin-rights': 'admin-rights-work-computers',
    'scan-to-email-printer-setup': 'scan-to-email-printer',
    'email-verification-dmarc-setup': 'email-verification-dmarc',
    'it-support-trends-2024': 'it-support-trends',
    'cloud-computing-evolution': 'cloud-computing',
    'cybersecurity-2024': 'cybersecurity-trends'
}; 