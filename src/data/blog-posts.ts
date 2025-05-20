import type { ImageMetadata } from 'astro';
import pontemCaseStudyImg from '../assets/images/blog/pontem-16x9.webp';
import phishingAttacksImg from '../assets/images/blog/phishing-attacks.webp';
import passwordManagerImg from '../assets/images/blog/password-manager.webp';
import cybersecurityImg from '../assets/images/blog/cybersecurity.webp';
import adminRightsImg from '../assets/images/blog/admin-rights.webp';
import scanToEmailImg from '../assets/images/blog/scan-to-email.webp';
import emailVerificationImg from '../assets/images/blog/email-verification.webp';
import itServicesGuideImg from '../assets/images/blog/AdobeStock_535677380.webp';
import inHouseVsOutsourcedImg from '../assets/images/blog/in-house-vs-outsourced.webp';

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    author: string;
    category: string;
    image: ImageMetadata;
    content: string;
    tags: string[];
}

export const posts: BlogPost[] = [
    {
        slug: 'phishing-attacks-canada',
        title: "Phishing Attacks Rising in Canada",
        date: "2025-03-10",
        author: "John Smith",
        category: "Cybersecurity",
        image: phishingAttacksImg,
        content: `
            <p>Learn about the increasing threat of phishing attacks in Canada and how to protect your business from cyber fraud.</p>
        `,
        tags: []
    },
    {
        slug: 'password-manager',
        title: "Why You Should Use a Password Manager",
        date: "2025-03-21",
        author: "John Smith",
        category: "Cybersecurity",
        image: passwordManagerImg,
        content: `
            <p>Learn why password managers are essential for business security and what features to look for when choosing one.</p>
        `,
        tags: []
    },
    {
        slug: 'cybersecurity-small-business',
        title: "Essential Cybersecurity Tips for Small Businesses",
        date: "2025-03-20",
        author: "John Smith",
        category: "Cybersecurity",
        image: cybersecurityImg,
        content: `
            <p>Learn how to protect your small business from cyber threats with expert advice and practical tips.</p>
        `,
        tags: []
    },
    {
        slug: 'admin-rights-work-computers',
        title: "Should Employees Have Admin Rights on Their Work Computers?",
        date: "2025-09-12",
        author: "John Smith",
        category: "IT Support",
        image: adminRightsImg,
        content: `
            <p>Learn about the implications of granting administrative rights to employees and how to implement proper access controls in your business.</p>
        `,
        tags: []
    },
    {
        slug: 'scan-to-email-printer',
        title: "Scan to Email on Your Office Printer with Microsoft 365 or Google Workspace",
        date: "2025-08-16",
        author: "John Smith",
        category: "IT Support",
        image: scanToEmailImg,
        content: `
            <p>Learn how to set up scan-to-email functionality on your office printer using Microsoft 365 or Google Workspace. A simple 5-minute guide.</p>
        `,
        tags: []
    },
    {
        slug: 'email-verification-dmarc',
        title: "Help! Emails I Send from Our Email Blast System are Showing Up as Unverified",
        date: "2025-07-29",
        author: "John Smith",
        category: "IT Support",
        image: emailVerificationImg,
        content: `
            <p>Learn how to fix unverified email issues and properly set up DMARC, DKIM, and SPF records for your business email system.</p>
        `,
        tags: []
    },
    {
        slug: 'it-services-calgary-vancouver',
        title: 'IT Service Providers in Calgary & Vancouver: A Guide for Businesses 2025',
        date: '2025-03-20',
        author: 'Huntertech Team',
        category: 'IT Services',
        image: itServicesGuideImg,
        content: `
            <p>As businesses in Calgary and Vancouver continue to embrace digital transformation, finding the right IT service provider has become crucial for success. In this guide, we'll explore what makes a great IT service provider and how to choose the right partner for your business needs.</p>
        `,
        tags: ['IT strategy', 'IT outsourcing', 'managed IT services', 'small business IT', 'IT management', 'IT support', 'business technology']
    },
    {
        slug: 'pontem-group-case-study',
        title: "Case Study: How Pontem Group Transformed Their IT Infrastructure and Saved 3000 hours Annually",
        date: "2025-04-20",
        author: "Huntertech Team",
        category: "Case Studies",
        image: pontemCaseStudyImg,
        content: `<p>Pontem Group, a leading fire suppression and CP code consulting firm in Calgary, faced significant IT challenges before partnering with Huntertech. With 20 staff members and four principals managing IT responsibilities, their technology infrastructure was becoming a liability rather than an asset. Here's how we helped them transform their IT operations and achieve substantial cost savings.</p>`,
        tags: []
    },
    {
        slug: 'in-house-vs-outsourced-it',
        title: 'Choosing the Right IT Strategy: In-House, Share the Hat? Or Outsource?',
        date: '2024-03-25',
        author: 'Huntertech Team',
        category: 'IT Services',
        image: inHouseVsOutsourcedImg,
        content: "Making the right choice between building an in-house IT team and outsourcing is crucial for business success. This guide explores the pros and cons of each approach, from the benefits of dedicated IT staff to the risks of having non-technical employees handle IT responsibilities. Learn how to make an informed decision that aligns with your business goals and budget.",
        tags: ['IT strategy', 'in-house IT team', 'IT outsourcing', 'managed IT services', 'small business IT', 'IT management', 'IT support', 'business technology']
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