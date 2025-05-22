Phishing Alert: Fake RFP Scam Targets Greater Vancouver Businesses
A sophisticated phishing campaign is currently targeting businesses in the Greater Vancouver area, masquerading as legitimate Request for Proposal (RFP) communications from reputable firms like AME Group. This scam has already deceived several companies, highlighting the need for heightened vigilance.

Anatomy of the Scam
Cybercriminals have compromised the Microsoft 365 email account of Charles Lankester, a known representative associated with AME Group. Leveraging this legitimate identity, attackers have launched a highly convincing phishing campaign targeting businesses across the Greater Vancouver area—particularly in the construction, engineering, and architecture sectors.

The emails originate from the real AME Group email domain, which makes them difficult to detect as fraudulent at first glance. These messages contain links to what appear to be legitimate RFP (Request for Proposal) documents. The content is professional, the tone is familiar, and the urgency is real—hallmarks of a genuine business opportunity. But instead of leading to a document, the links redirect users to a fake Microsoft 365 login page.

Once a recipient enters their credentials on this spoofed page, the attackers capture the login information. But the attack doesn’t stop there. The threat actors are also performing session token hijacking, a technique that allows them to bypass Multi-Factor Authentication (MFA).

Here’s how that part works:

After a user logs into the fake Microsoft sign-in page, attackers immediately use those credentials to attempt a real-time login to the actual Microsoft 365 platform.

If the user is currently authenticated on their device, or if the attackers can trick them into completing the MFA challenge, the criminals can extract a valid authentication token.

With this token in hand, attackers can bypass MFA altogether, effectively gaining long-term access to the user’s account without needing to repeat the login or MFA process.

From there, they can move laterally across the organization’s email environment, impersonate staff, send out further phishing emails, and access sensitive internal data.

This blend of phishing and token-based hijacking is extremely dangerous because it combines credential theft with real-time identity compromise, all while maintaining the appearance of a legitimate user session.

These kinds of attacks are no longer “spray-and-pray”—they are targeted, intelligent, and persistent, exploiting both human trust and technical gaps.

How to Detect the Scam
To protect your organization, be on the lookout for the following red flags:

Unexpected RFP Emails: Be cautious of unsolicited RFPs, especially if you haven't initiated contact with the sender's organization.

Generic Language: Emails lacking personalized details or specific project information may indicate a phishing attempt.


Urgent or Pressuring Language: Scammers often create a sense of urgency to prompt quick action without due diligence.

Suspicious Links: Hover over links to verify their legitimacy before clicking. Be wary of URLs that don't match the purported sender's domain.

Requests for Credentials: Legitimate organizations will not ask you to enter sensitive information through unsecured links.

The Importance of Branding Your Microsoft Sign-In Page
Branding your Microsoft 365 sign-in page is a crucial step in defending against phishing attacks. Here's why:

Visual Verification: Customized branding helps users quickly verify the authenticity of the login page.

User Awareness: Consistent branding educates users on what legitimate sign-in pages look like, making it easier to spot fakes.

Enhanced Trust: A branded login page reinforces trust in your organization's digital communications.

Implementing custom branding can be done through the Microsoft 365 admin center, allowing you to add your company's logo, colors, and background images to the sign-in experience.

Strengthen Your Defense with ITDR
ITDR (Identity Threat Detection and Response) is now longer an optional part of your IT security platform, it's required. Bolster your organization's security posture, investing in Identity Threat Detection and Response (ITDR) solutions. These tools monitor for suspicious activities, detect potential breaches, and respond to threats in real-time.

The ITDR tool we use offers comprehensive protection for as little as $5 per licensed user per month. With features like continuous monitoring, automated threat response, and detailed reporting, you can ensure your organization's identities remain secure.

Immediate Actions if Compromised
If you suspect that your organization has fallen victim to this phishing scam:

Cease All Activity: Stop using the compromised device immediately.

Notify IT/Security Teams: Inform your internal security personnel to initiate incident response protocols.

Reset Credentials: Change passwords for affected accounts and any others using the same credentials.

Enable Multi-Factor Authentication (MFA): Add an extra layer of security to your accounts.

Educate Employees: Conduct training sessions to raise awareness about phishing tactics and prevention strategies.

Stay vigilant and proactive in protecting your organization against evolving cyber threats. Implementing robust security measures and fostering a culture of awareness are key to mitigating risks.