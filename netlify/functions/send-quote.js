// Netlify function to send email quotes via SMTP2GO
const https = require('https');

exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method not allowed' })
        };
    }

    try {
        const data = JSON.parse(event.body);
        
        // Validate required fields
        if (!data.email || !data.name || !data.numUsers || !data.planName) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing required fields' })
            };
        }

        // Generate the email content
        const emailHtml = generateQuoteEmail(data);
        const emailText = generateQuoteText(data);

        // Send email via SMTP2GO
        const emailResult = await sendEmailViaSMTP2GO({
            to: data.email,
            subject: `Your Huntertech IT Services Quote - $${data.totalMonthly.toLocaleString()}/month`,
            html: emailHtml,
            text: emailText
        });

        // Submit to Netlify forms for CRM tracking
        await submitToNetlifyForms(data);

        return {
            statusCode: 200,
            body: JSON.stringify({ 
                success: true, 
                message: 'Quote sent successfully',
                emailId: emailResult.data?.email_id
            })
        };

    } catch (error) {
        console.error('Error processing quote request:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal server error' })
        };
    }
};

async function sendEmailViaSMTP2GO(emailData) {
    const payload = {
        api_key: process.env.SMTP2GO_API_KEY,
        to: [emailData.to],
        sender: process.env.SMTP_FROM_EMAIL || 'quotes@huntertech.ca',
        subject: emailData.subject,
        html_body: emailData.html,
        text_body: emailData.text
    };

    return new Promise((resolve, reject) => {
        const postData = JSON.stringify(payload);
        
        const options = {
            hostname: 'api.smtp2go.com',
            port: 443,
            path: '/v3/email/send',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(postData)
            }
        };

        const req = https.request(options, (res) => {
            let responseData = '';
            
            res.on('data', (chunk) => {
                responseData += chunk;
            });
            
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(responseData);
                    if (res.statusCode === 200 && parsed.data) {
                        resolve(parsed);
                    } else {
                        reject(new Error(`SMTP2GO error: ${responseData}`));
                    }
                } catch (error) {
                    reject(new Error(`Failed to parse SMTP2GO response: ${error.message}`));
                }
            });
        });

        req.on('error', (error) => {
            reject(new Error(`SMTP2GO request error: ${error.message}`));
        });

        req.write(postData);
        req.end();
    });
}

async function submitToNetlifyForms(data) {
    // Submit to a Netlify form for CRM tracking
    const formData = new URLSearchParams({
        'form-name': 'pricing-quote',
        'email': data.email,
        'name': data.name,
        'company': data.company,
        'phone': data.phone,
        'location': data.location,
        'plan': data.planName,
        'users': data.numUsers,
        'monthly_cost': data.totalMonthly,
        'annual_cost': data.totalAnnual,
        'timestamp': data.timestamp,
        'source': data.source
    });

    const response = await fetch(`${process.env.URL || 'https://huntertech.ca'}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString()
    });

    if (!response.ok) {
        console.warn('Failed to submit to Netlify forms:', response.statusText);
    }
}

function generateQuoteEmail(data) {
    const addonsHtml = data.addons.length > 0 
        ? data.addons.map(addon => `
            <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e1e1e1;">${addon.name}</td>
                <td style="padding: 8px; border-bottom: 1px solid #e1e1e1; text-align: right;">$${addon.pricePerUser}/user</td>
                <td style="padding: 8px; border-bottom: 1px solid #e1e1e1; text-align: right;">$${addon.totalPrice.toLocaleString()}</td>
            </tr>
        `).join('')
        : '<tr><td colspan="3" style="padding: 8px; text-align: center; color: #666; font-style: italic;">No add-ons selected</td></tr>';

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Huntertech IT Services Quote</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f8f9fa;">
    <div style="max-width: 600px; margin: 0 auto; background-color: white; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #00ACAC 0%, #00C2C2 100%); color: white; padding: 2rem; text-align: center;">
            <h1 style="margin: 0; font-size: 1.8rem;">Your IT Services Quote</h1>
            <p style="margin: 0.5rem 0 0 0; opacity: 0.9;">Professional IT support tailored for your business</p>
        </div>

        <!-- Content -->
        <div style="padding: 2rem;">
            <p>Hi ${data.name},</p>
            <p>Thank you for your interest in Huntertech's managed IT services. Here's your personalized quote:</p>

            <!-- Quote Summary -->
            <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;">
                <h2 style="color: #00ACAC; margin: 0 0 1rem 0; font-size: 1.3rem;">Quote Summary</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold;">Company:</td>
                        <td style="padding: 8px 0; text-align: right;">${data.company || 'Not specified'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold;">Location:</td>
                        <td style="padding: 8px 0; text-align: right;">${data.location || 'Not specified'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold;">Number of Users:</td>
                        <td style="padding: 8px 0; text-align: right;">${data.numUsers}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; font-weight: bold;">Selected Plan:</td>
                        <td style="padding: 8px 0; text-align: right;">${data.planName}</td>
                    </tr>
                </table>
            </div>

            <!-- Pricing Breakdown -->
            <div style="margin: 2rem 0;">
                <h3 style="color: #00ACAC; margin-bottom: 1rem;">Pricing Breakdown</h3>
                <table style="width: 100%; border-collapse: collapse; border: 1px solid #e1e1e1;">
                    <thead>
                        <tr style="background: #f8f9fa;">
                            <th style="padding: 12px; text-align: left; border-bottom: 1px solid #e1e1e1;">Service</th>
                            <th style="padding: 12px; text-align: right; border-bottom: 1px solid #e1e1e1;">Rate</th>
                            <th style="padding: 12px; text-align: right; border-bottom: 1px solid #e1e1e1;">Monthly Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 12px; border-bottom: 1px solid #e1e1e1; font-weight: bold;">${data.planName} Plan</td>
                            <td style="padding: 12px; border-bottom: 1px solid #e1e1e1; text-align: right;">$${data.planPrice}/user</td>
                            <td style="padding: 12px; border-bottom: 1px solid #e1e1e1; text-align: right;">$${data.baseCost.toLocaleString()}</td>
                        </tr>
                        ${addonsHtml}
                        <tr style="background: #f8f9fa; font-weight: bold;">
                            <td style="padding: 12px; border-top: 2px solid #00ACAC;">Total Monthly Cost</td>
                            <td style="padding: 12px; border-top: 2px solid #00ACAC;"></td>
                            <td style="padding: 12px; border-top: 2px solid #00ACAC; text-align: right; font-size: 1.2rem; color: #00ACAC;">$${data.totalMonthly.toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; color: #666;">Annual Cost (12 months)</td>
                            <td style="padding: 8px;"></td>
                            <td style="padding: 8px; text-align: right; color: #666;">$${data.totalAnnual.toLocaleString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Plan Details -->
            <div style="background: #e8f7f7; padding: 1.5rem; border-radius: 8px; margin: 2rem 0;">
                <h3 style="color: #00ACAC; margin: 0 0 1rem 0;">Your ${data.planName} Plan Includes:</h3>
                ${getPlanFeatures(data.planName)}
            </div>

            <!-- Why Choose Huntertech -->
            <div style="margin: 2rem 0;">
                <h3 style="color: #00ACAC;">Why Choose Huntertech?</h3>
                <ul style="padding-left: 1.2rem;">
                    <li><strong>Boutique Service:</strong> Personalized attention with direct access to leadership</li>
                    <li><strong>No Call Centers:</strong> Work with your dedicated team who knows your systems</li>
                    <li><strong>Local Expertise:</strong> Calgary & Vancouver focused with on-site support available</li>
                    <li><strong>Transparent Pricing:</strong> No hidden fees or surprise bills</li>
                </ul>
            </div>

            <!-- CTA -->
            <div style="text-align: center; margin: 2rem 0;">
                <a href="https://huntertech.ca/contact/?form_conversion=email-quote" 
                   style="display: inline-block; background: #00ACAC; color: white; padding: 1rem 2rem; 
                          text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 1.1rem;">
                    Schedule Your Free Consultation
                </a>
                <p style="margin-top: 1rem; color: #666; font-size: 0.9rem;">
                    Ready to get started? Let's discuss how we can support your business.
                </p>
            </div>
        </div>

        <!-- Footer -->
        <div style="background: #f8f9fa; padding: 1.5rem; text-align: center; border-top: 1px solid #e1e1e1;">
            <p style="margin: 0; color: #666; font-size: 0.9rem;">
                <strong>Huntertech</strong><br>
                Calgary: (825) 415-6990 | Vancouver: (778) 819-7411<br>
                info@huntertech.ca | huntertech.ca
            </p>
        </div>
    </div>
</body>
</html>`;
}

function generateQuoteText(data) {
    const addonsText = data.addons.length > 0 
        ? data.addons.map(addon => `${addon.name}: $${addon.pricePerUser}/user ($${addon.totalPrice.toLocaleString()} total)`).join('\n')
        : 'No add-ons selected';

    return `
Your Huntertech IT Services Quote

Hi ${data.name},

Thank you for your interest in Huntertech's managed IT services. Here's your personalized quote:

QUOTE SUMMARY
Company: ${data.company || 'Not specified'}
Location: ${data.location || 'Not specified'}
Number of Users: ${data.numUsers}
Selected Plan: ${data.planName}

PRICING BREAKDOWN
${data.planName} Plan: $${data.planPrice}/user ($${data.baseCost.toLocaleString()} total)

Add-ons:
${addonsText}

Total Monthly Cost: $${data.totalMonthly.toLocaleString()}
Annual Cost: $${data.totalAnnual.toLocaleString()}

Your ${data.planName} Plan includes comprehensive IT support tailored for your business needs.

WHY CHOOSE HUNTERTECH?
• Boutique Service: Personalized attention with direct access to leadership
• No Call Centers: Work with your dedicated team who knows your systems
• Local Expertise: Calgary & Vancouver focused with on-site support available
• Transparent Pricing: No hidden fees or surprise bills

Ready to get started? Schedule your free consultation:
https://huntertech.ca/contact/?form_conversion=email-quote

CONTACT US
Calgary: (825) 415-6990
Vancouver: (778) 819-7411
Email: info@huntertech.ca
Website: huntertech.ca

This quote is valid for 30 days.
`;
}

function getPlanFeatures(planName) {
    switch(planName) {
        case 'Security Essentials':
            return `
                <ul style="margin: 0; padding-left: 1.2rem;">
                    <li>24/7 monitoring and threat detection</li>
                    <li>Automatic Office 365/Google backups</li>
                    <li>PhishTitan email protection</li>
                    <li>Basic Office 365 tenant administration</li>
                    <li>User account management</li>
                    <li>Support tickets billed at $150/hour</li>
                </ul>
            `;
        case 'Essential':
            return `
                <ul style="margin: 0; padding-left: 1.2rem;">
                    <li>Unlimited IT support (8am-5pm, M-F)</li>
                    <li>Remote monitoring and management</li>
                    <li>Patch management and updates</li>
                    <li>Basic security protection</li>
                    <li>User account management</li>
                    <li>Email and phone support</li>
                </ul>
            `;
        case 'Complete':
            return `
                <ul style="margin: 0; padding-left: 1.2rem;">
                    <li>Everything in Essential, plus:</li>
                    <li>24/7 monitoring and response</li>
                    <li>Advanced endpoint detection and response (EDR)</li>
                    <li>Managed detection and response (MDR)</li>
                    <li>Cloud backup for Microsoft 365/Google</li>
                    <li>All project labour included</li>
                    <li>Priority response times</li>
                    <li>Quarterly business reviews</li>
                </ul>
            `;
        default:
            return '<p>Custom plan features will be detailed in your consultation.</p>';
    }
}