export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    author: string;
    category: string;
    image: string;
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
        image: "/images/blog/phishing-attacks.jpg",
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
        image: "/images/blog/password-manager.jpg",
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
        image: "/images/blog/cybersecurity.jpg",
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
        image: "/images/blog/admin-rights.jpg",
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
        image: "/images/blog/scan-to-email.jpg",
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
        image: "/images/blog/email-verification.jpg",
        content: `
            <p>Learn how to fix unverified email issues and properly set up DMARC, DKIM, and SPF records for your business email system.</p>
        `,
        tags: []
    },
    {
        slug: 'it-services-calgary-vancouver',
        title: 'Top IT Service Providers in Calgary & Vancouver: A Complete Guide for Businesses 2025',
        date: '2025-03-20',
        author: 'Huntertech Team',
        category: 'IT Services',
        image: '/images/blog/it-services-guide.jpg',
        content: `
            <p>As businesses in Calgary and Vancouver continue to embrace digital transformation, finding the right IT service provider has become crucial for success. In this comprehensive guide, we'll explore what makes a great IT service provider and how to choose the right partner for your business needs.</p>

            <h2>Why Local IT Support Matters in Calgary and Vancouver</h2>
            <p>When it comes to IT services, having a local provider in Calgary or Vancouver offers significant advantages:</p>
            <ul>
                <li>Faster response times for on-site support</li>
                <li>Better understanding of local business regulations and compliance requirements</li>
                <li>Face-to-face meetings and personalized service</li>
                <li>Knowledge of local infrastructure and connectivity options</li>
            </ul>

            <h2>Essential IT Services Every Business Needs</h2>
            <p>Whether you're in Calgary's booming energy sector or Vancouver's diverse business landscape, these core IT services are essential:</p>
            <ul>
                <li><strong>Managed IT Services:</strong> Proactive monitoring and maintenance of your IT infrastructure</li>
                <li><strong>24/7 Help Desk Support:</strong> Round-the-clock technical assistance for your team</li>
                <li><strong>Network Security:</strong> Protection against cyber threats and data breaches</li>
                <li><strong>Cloud Solutions:</strong> Scalable and secure cloud infrastructure</li>
                <li><strong>Business Continuity:</strong> Disaster recovery and backup solutions</li>
            </ul>

            <h2>What to Look for in an IT Service Provider</h2>
            <p>When choosing an IT service provider in Calgary or Vancouver, consider these key factors:</p>
            <ul>
                <li><strong>Local Presence:</strong> Physical office and support team in your city</li>
                <li><strong>Industry Experience:</strong> Track record in your specific sector</li>
                <li><strong>Service Level Agreements:</strong> Clear response times and resolution guarantees</li>
                <li><strong>Certifications:</strong> Industry-recognized qualifications and partnerships</li>
                <li><strong>Scalability:</strong> Ability to grow with your business</li>
            </ul>

            <h2>IT Support Trends in Calgary and Vancouver</h2>
            <p>Stay ahead of the curve with these emerging IT support trends in Western Canada:</p>
            <ul>
                <li>Hybrid work environment support</li>
                <li>AI-powered IT service management</li>
                <li>Enhanced cybersecurity measures</li>
                <li>Cloud-first strategies</li>
                <li>Green IT initiatives</li>
            </ul>

            <h2>Cost Considerations for IT Services</h2>
            <p>Understanding the cost structure of IT services in Calgary and Vancouver:</p>
            <ul>
                <li>Per-user pricing models</li>
                <li>Fixed-fee vs. time-and-materials billing</li>
                <li>ROI of managed IT services</li>
                <li>Hidden costs to watch out for</li>
            </ul>

            <h2>Making the Right Choice for Your Business</h2>
            <p>Choosing the right IT service provider is a critical decision for your business. Consider your specific needs, budget, and growth plans when making your selection. A good IT partner should not only solve your current IT challenges but also help you prepare for future technological needs.</p>

            <h2>Why Choose Huntertech for IT Services in Calgary and Vancouver</h2>
            <p>As a leading IT service provider in both Calgary and Vancouver, we offer:</p>
            <ul>
                <li>Local presence in both cities with dedicated support teams</li>
                <li>24/7 help desk support with guaranteed response times</li>
                <li>Comprehensive managed IT services tailored to your business</li>
                <li>Proactive monitoring and maintenance</li>
                <li>Expert cybersecurity solutions</li>
                <li>Scalable cloud services</li>
            </ul>

            <p>Contact us today to learn how our IT services can help your business thrive in Calgary or Vancouver's competitive market.</p>
        `,
        tags: []
    },
    {
        slug: 'pontem-group-case-study',
        title: "Case Study: How Pontem Group Transformed Their IT Infrastructure and Saved $50,000 Annually",
        date: "2025-04-20",
        author: "Huntertech Team",
        category: "Case Studies",
        image: "/images/blog/pontem-case-study.jpg",
        content: `<p>Pontem Group, a leading fire suppression and CP code consulting firm in Calgary, faced significant IT challenges before partnering with Huntertech. With 20 staff members and four principals managing IT responsibilities, their technology infrastructure was becoming a liability rather than an asset. Here's how we helped them transform their IT operations and achieve substantial cost savings.</p>`,
        tags: []
    },
    {
        title: "The Transformative Benefits of Revit and BIM in Architecture and Large Projects",
        slug: "revit-bim-benefits",
        date: "2024-03-20",
        category: "Revit & BIM",
        image: "/images/blog/revit-bim-benefits.jpg",
        content: "In today's rapidly evolving construction industry, Building Information Modeling (BIM) and Revit have become indispensable tools for architects and project managers. These technologies are not just changing how we design buildings—they're revolutionizing the entire construction process, from initial concept to final delivery.",
        author: "Huntertech Team",
        tags: ["Revit", "BIM", "Architecture", "Construction", "Project Management"]
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