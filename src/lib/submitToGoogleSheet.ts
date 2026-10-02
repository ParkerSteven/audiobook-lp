const WEBHOOK_URL = 'https://hook.us1.make.com/lqy6w5qba6mwnnbak7likgzti4edzt4h';

interface FormData {
  firstName?: string;
  lastName?: string;
  name?: string;
  email: string;
  phone: string;
  manuscriptStatus?: string;
  message?: string;
  marketingConsent?: boolean;
  preventRedirect?: boolean;
  source?: string;
}

export async function submitToGoogleSheet(data: FormData) {
  try {
    const name = data.name || `${data.firstName || ''} ${data.lastName || ''}`.trim();
    const email = data.email || '';
    const phone = data.phone || '';
    const manuscriptStatus = data.manuscriptStatus || data.message || '';
    const baseSource = data.source || 'Home Page Form';
    const pageUrl = typeof window !== 'undefined' ? window.location.href : '';
    const source = pageUrl ? `${baseSource} | Page URL: ${pageUrl}` : baseSource;
    const timestamp = new Date().toISOString();

    // Prevent Sheets from treating values like "+1..." as formulas when Make writes them
    const sanitizeForSheet = (value: string) => {
      const str = (value || '').toString();
      return /^[=+\-@]/.test(str) ? `'${str}` : str;
    };

    const sheetPhone = sanitizeForSheet(phone);

    const emailBody = `Hi,

You have received a new lead from the website. Here are the details:

Name: ${name}
Email: ${email}
Phone: ${phone}
Manuscript Status: ${manuscriptStatus}
Source: ${source}
Submitted At: ${timestamp}

---
This is an auto-generated lead notification from the website.`;

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        phone: sheetPhone,
        manuscriptStatus,
        marketingConsent: data.marketingConsent ?? false,
        source,
        timestamp,
        emailBody,
        emailSubject: `New Lead: ${name} via ${source}`,
      }),
    });

    if (!response.ok) {
      throw new Error(`Webhook error: ${response.status}`);
    }

    return {
      success: true,
      message: "Thank you! Your submission has been received. We'll get back to you within 24 hours.",
    };
  } catch (error) {
    console.error('Submission error:', error);
    return {
      success: false,
      message: 'There was an issue submitting your form. Please try again or contact us directly.',
    };
  }
}
