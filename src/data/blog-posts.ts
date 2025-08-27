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
import secureVaultScamImg from '../assets/images/blog/SecureVaultScam.png';
import aiAdoptionImg from '../assets/images/blog/ai-adoption-canada.jpg';
import microsoftGrantImg from '../assets/images/blog/microsoft-grant.jpg';
import passwordlessImg from '../assets/images/blog/passwordless-hero.png';
import bluebeamStandardizeImg from '../assets/images/blog/bluebeam-standardize.png';
import engineeringItServicesImg from '../assets/images/architect_engineer_tech.webp';
import cybersecuritySmallBusinessImg from '../assets/images/blog/cybersecurity-small-business.webp';
import hiddenCostsDiyVancouverImg from '../assets/images/Blog-Hidden-Costs-DIY-Vancouver.jpg';
import itPricingGuideImg from '../assets/images/blog/it-pricing-guide.webp';
import microsoftRescueImg from '../assets/images/handshake.webp';
import cloudDesktopImg from '../assets/images/blog/windows365-vs-azure-virtual-desktop.png';

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
        slug: 'windows-365-vs-azure-virtual-desktop-calgary-vancouver/',
        title: "Windows 365 vs Azure Virtual Desktop: Ultimate Guide for Calgary & Vancouver Businesses",
        date: "2025-08-24",
        author: "Huntertech Team",
        category: "Cloud Computing",
        image: cloudDesktopImg,
        content: `
            <p>Choosing between Windows 365 Cloud PC and Azure Virtual Desktop for your Calgary or Vancouver business? Our expert comparison covers pricing, features, and use cases to help local firms make the right choice. Learn about licensing requirements, management complexity, and real-world cost examples.</p>
        `,
        tags: ["Windows 365 vs Azure Virtual Desktop Calgary", "cloud desktop solutions Vancouver", "virtual desktop Calgary business", "Windows 365 architecture firms", "Azure Virtual Desktop engineering Calgary", "managed IT services Calgary Vancouver", "cloud PC Calgary", "virtual desktop Vancouver"]
    },
    // {
    //     slug: 'escape-microsoft-licensing-hostage-canada/',
    //     title: "How to Escape Microsoft Licensing Hostage Situations in Canada: A Complete Guide",
    //     date: "2025-08-08",
    //     author: "Matt Hunter",
    //     category: "Microsoft Licensing",
    //     image: microsoftRescueImg,
    //     content: `
    //         <p>Complete guide for Canadian businesses trapped in Microsoft licensing hostage situations. Learn your rights under Microsoft's CSP agreement, understand transfer options, and discover how to regain control of your Office 365 and Azure licenses without service disruption.</p>
    //     `,
    //     tags: ["Microsoft license transfer Canada", "CSP transfer service", "Microsoft 365 contract rescue", "IT provider holding licenses", "Azure license migration", "Microsoft licensing freedom", "escape IT provider", "Canadian business IT"]
    // },
    {
        slug: 'managed-it-services-cost-calgary/',
        title: "How Much Do Managed IT Services Cost in Calgary? 2025 Pricing Guide",
        date: "2025-07-31",
        author: "Huntertech Team",
        category: "IT Management",
        image: itPricingGuideImg,
        content: `
            <p>Discover the real cost of managed IT services in Calgary. Learn about per-user pricing models, what's included, and how to budget for IT support in 2025. Compare Essential vs Complete packages and calculate your ROI.</p>
        `,
        tags: ["managed IT services Calgary", "IT support Calgary", "Calgary IT company", "IT pricing Calgary", "managed services pricing", "business IT support Calgary", "MSP pricing Calgary", "IT cost calculator"]
    },
    {
        slug: 'hidden-costs-diy-it-vancouver/',
        title: "The Hidden Costs of DIY IT: What Vancouver Small Businesses Need to Know",
        date: "2025-07-26",
        author: "Huntertech Team",
        category: "IT Services",
        image: hiddenCostsDiyVancouverImg,
        content: `
            <p>Vancouver businesses lose $400-1000 per hour during IT downtime. Discover why DIY IT support costs more than managed IT services Vancouver companies trust. Learn from real stories of 10 Vancouver architecture firms compromised by email attacks—and why Huntertech clients stayed safe.</p>
        `,
        tags: ["IT support Vancouver", "managed IT services Vancouver", "Vancouver IT company", "business IT support Vancouver", "cybersecurity services Vancouver", "Vancouver MSP", "DIY IT risks", "IT consulting Vancouver", "Vancouver technology support", "BC IT services"]
    },
    {
        slug: 'it-services-engineering-firms-calgary/',
        title: "IT Services for Engineering Firms in Calgary: A Complete Guide for 2025",
        date: "2025-07-17",
        author: "Huntertech Team",
        category: "IT Services",
        image: engineeringItServicesImg,
        content: `
            <p>Calgary's engineering sector is experiencing unprecedented growth, with firms handling increasingly complex projects from oil and gas infrastructure to sustainable building design. This comprehensive guide helps Calgary engineering firms choose the right IT services to boost productivity, secure intellectual property, and support business growth.</p>
        `,
        tags: ["IT services engineering firms Calgary", "managed IT Calgary engineering", "CAD software support Calgary", "engineering firm cybersecurity Calgary", "IT support Calgary", "Calgary IT company", "BIM technology support Calgary", "engineering data backup Calgary", "Calgary MSP", "IT consulting Calgary"]
    },
    {
        slug: 'construction-industry-phishing-scam/',
        title: "Construction Industry Targeted by Sophisticated Phishing Scam",
        date: "2025-05-22",
        author: "Huntertech Team",
        category: "Cybersecurity",
        image: secureVaultScamImg,
        content: `
            <p>A sophisticated phishing scam is currently targeting construction companies across Canada, 
            attempting to deceive employees into revealing sensitive information. This article provides 
            crucial information about the scam and how to protect your business.</p>
        `,
        tags: ["phishing scam", "construction industry", "cybersecurity services Calgary", "cybersecurity services Vancouver", "business fraud", "email security", "financial fraud", "construction safety", "IT security Calgary", "IT security Vancouver"]
    },
    {
        slug: 'phishing-attacks-canada/',
        title: "Phishing Attacks Rising in Canada",
        date: "2025-03-10",
        author: "Huntertech Team",
        category: "Cybersecurity",
        image: phishingAttacksImg,
        content: `
            <p>Learn about the increasing threat of phishing attacks in Canada and how to protect your business from cyber fraud.</p>
        `,
        tags: ["cybersecurity services Calgary", "cybersecurity services Vancouver", "phishing attacks Canada", "business cybersecurity", "IT security Calgary", "IT security Vancouver", "email security", "cyber threats Canada"]
    },
    {
        slug: 'password-manager/',
        title: "Why You Should Use a Password Manager",
        date: "2025-03-21",
        author: "Huntertech Team",
        category: "Cybersecurity",
        image: passwordManagerImg,
        content: `
            <p>Learn why password managers are essential for business security and what features to look for when choosing one.</p>
        `,
        tags: ["password manager", "cybersecurity services Calgary", "cybersecurity services Vancouver", "business security", "password security", "IT security Calgary", "IT security Vancouver", "data protection"]
    },
    {
        slug: 'cybersecurity-small-business/',
        title: "Essential Cybersecurity Tips for Small Businesses",
        date: "2025-03-20",
        author: "Huntertech Team",
        category: "Cybersecurity",
        image: cybersecurityImg,
        content: `
            <p>Learn how to protect your small business from cyber threats with expert advice and practical tips.</p>
        `,
        tags: ["cybersecurity services Calgary", "cybersecurity services Vancouver", "small business cybersecurity", "IT security Calgary", "IT security Vancouver", "business security", "cyber threats", "data protection"]
    },
    {
        slug: 'admin-rights-work-computers/',
        title: "Should Employees Have Admin Rights on Their Work Computers?",
        date: "2024-09-12",
        author: "Huntertech Team",
        category: "IT Support",
        image: adminRightsImg,
        content: `
            <p>Learn about the implications of granting administrative rights to employees and how to implement proper access controls in your business.</p>
        `,
        tags: ["IT support Calgary", "IT support Vancouver", "admin rights", "cybersecurity services Calgary", "cybersecurity services Vancouver", "access controls", "IT security Calgary", "IT security Vancouver"]
    },
    {
        slug: 'scan-to-email-printer/',
        title: "Scan to Email on Your Office Printer with Microsoft 365 or Google Workspace",
        date: "2024-08-16",
        author: "Huntertech Team",
        category: "IT Support",
        image: scanToEmailImg,
        content: `
            <p>Learn how to set up scan-to-email functionality on your office printer using Microsoft 365 or Google Workspace. A simple 5-minute guide.</p>
        `,
        tags: ["IT support Calgary", "IT support Vancouver", "printer setup", "Microsoft 365", "office printer", "Calgary IT company", "Vancouver IT company", "business IT support Calgary", "business IT support Vancouver"]
    },
    {
        slug: 'email-verification-dmarc/',
        title: "Help! Emails I Send from Our Email Blast System are Showing Up as Unverified",
        date: "2024-07-29",
        author: "Huntertech Team",
        category: "IT Support",
        image: emailVerificationImg,
        content: `
            <p>Learn how to fix unverified email issues and properly set up DMARC, DKIM, and SPF records for your business email system.</p>
        `,
        tags: ["email verification", "DMARC", "IT support Calgary", "IT support Vancouver", "email security", "cybersecurity services Calgary", "cybersecurity services Vancouver", "business email setup"]
    },
    {
        slug: 'it-services-calgary-vancouver/',
        title: 'IT Service Providers in Calgary & Vancouver: A Guide for Businesses 2025',
        date: '2025-01-20',
        author: 'Huntertech Team',
        category: 'IT Services',
        image: itServicesGuideImg,
        content: `
            <p>As businesses in Calgary and Vancouver continue to embrace digital transformation, finding the right IT service provider has become crucial for success. In this guide, we'll explore what makes a great IT service provider and how to choose the right partner for your business needs.</p>
        `,
        tags: ['IT support Calgary', 'managed IT services Vancouver', 'Calgary IT company', 'Vancouver IT company', 'IT strategy', 'IT outsourcing', 'managed IT services', 'small business IT', 'IT management', 'business technology']
    },
    {
        slug: 'pontem-group-case-study/',
        title: "Case Study: How Pontem Group Transformed Their IT Infrastructure and Saved 1000 hours Annually",
        date: "2025-04-20",
        author: "Huntertech Team",
        category: "Case Studies",
        image: pontemCaseStudyImg,
        content: `<p>Pontem Group, a leading fire suppression and CP code consulting firm in Calgary, faced significant IT challenges before partnering with Huntertech. With 20 staff members and four principals managing IT responsibilities, their technology infrastructure was becoming a liability rather than an asset. Here's how we helped them transform their IT operations and achieve substantial cost savings.</p>`,
        tags: ["managed IT services Vancouver", "IT transformation", "case study", "business IT support Vancouver", "Vancouver IT company", "IT infrastructure", "technology consulting", "productivity improvement"]
    },
    {
        slug: 'in-house-vs-outsourced-it/',
        title: 'Choosing the Right IT Strategy: In-House, Share the Hat? Or Outsource?',
        date: '2024-10-25',
        author: 'Huntertech Team',
        category: 'IT Services',
        image: inHouseVsOutsourcedImg,
        content: "Making the right choice between building an in-house IT team and outsourcing is crucial for business success. This guide explores the pros and cons of each approach, from the benefits of dedicated IT staff to the risks of having non-technical employees handle IT responsibilities. Learn how to make an informed decision that aligns with your business goals and budget.",
        tags: ['IT support Calgary', 'managed IT services Vancouver', 'Calgary IT company', 'Vancouver IT company', 'IT strategy', 'in-house IT team', 'IT outsourcing', 'managed IT services', 'small business IT', 'IT management', 'business technology']
    },
    {
        slug: 'ai-adoption-stats-2025/',
        title: "Eye-Opening Statistics About AI Adoption in Canada (2025)",
        date: "2025-05-27",
        author: "Huntertech Team",
        category: "Artificial Intelligence",
        image: aiAdoptionImg,
        content: `
            <p>Discover the latest statistics on AI adoption in Canada, revealing a fascinating paradox between individual usage and business implementation. From generational differences to industry-specific insights, this comprehensive analysis provides valuable insights for Canadian businesses looking to navigate the AI landscape.</p>
        `,
        tags: ["AI adoption", "Canadian technology", "AI statistics", "business technology", "AI trends", "Canadian business", "AI implementation", "technology adoption", "SME technology", "digital transformation"]
    },
    {
        slug: 'microsoft-365-grant-changes-2025/',
        title: "Important Changes to Microsoft 365 Grants for Non-Profits: What You Need to Know",
        date: "2025-05-28",
        author: "Huntertech Team",
        category: "IT Services",
        image: microsoftGrantImg,
        content: `
            <p>Microsoft has announced significant changes to their grant program for non-profits, effective July 1st, 2025. These changes will affect how non-profit organizations access Microsoft 365 services, with the discontinuation of some popular grant offerings and the introduction of new alternatives.</p>
        `,
        tags: [
            "Microsoft 365 grants",
            "non-profit technology",
            "Microsoft Business Premium",
            "Office 365 E1",
            "non-profit IT",
            "Microsoft grants",
            "Tech for Social Impact",
            "non-profit software"
        ]
    },
    {
        slug: 'passwordless-authentication-microsoft-365/',
        title: "How to Enable Passwordless Authentication in Microsoft 365 Using Entra ID",
        date: "2025-05-31",
        author: "Huntertech Team",
        category: "IT Services",
        image: passwordlessImg,
        content: `
            <p>Passwords are one of the weakest links in cybersecurity. With phishing attacks and credential leaks on the rise, Microsoft 365 now supports passwordless authentication through Entra ID (formerly Azure Active Directory). This guide walks you through how to enable passwordless sign-in using Microsoft Authenticator.</p>
        `,
        tags: ["Microsoft 365", "Entra ID", "passwordless authentication", "cybersecurity", "Microsoft Authenticator", "zero trust", "IT security", "authentication methods"]
    },
    {
        slug: 'bluebeam-standardization/',
        title: "The Strategic Benefits of Standardizing Bluebeam Toolboxes and Profiles for Design Teams",
        date: "2025-06-10",
        author: "Huntertech Team",
        category: "IT Services",
        image: bluebeamStandardizeImg,
        content: `
            <p>In architecture and engineering firms, efficiency, accuracy, and collaboration are essential. One often-overlooked area that significantly impacts all three is the use of standardized Bluebeam Revu toolboxes and profiles across design teams. For firms relying heavily on digital markups, PDF collaboration, and construction documentation, this standardization isn't just a convenience—it's a strategic necessity.</p>
        `,
        tags: ["Bluebeam", "design teams", "standardization", "workflow efficiency", "collaboration", "architecture", "engineering", "digital markups", "PDF collaboration"]
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