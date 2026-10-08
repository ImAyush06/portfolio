export function validateContactForm({ name, email, message }) {
  const errors = {};
  if (!name || !name.trim()) {
    errors.name = 'Please provide your name.';
  }
  if (!email || !email.trim()) {
    errors.email = 'Please provide an email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }
  if (!message || !message.trim()) {
    errors.message = 'Please provide a message.';
  } else if (message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }
  return errors;
}

export async function submitContact({ name, email, message, siteContact }) {
  const mode = siteContact?.mode || 'mailto';

  if (mode === 'mailto') {
    const recipient = siteContact?.email || 'ayushsharmar521978@gmail.com';
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    return { success: true, mode: 'mailto' };
  }

  if (mode === 'formspree' && siteContact?.formspreeEndpoint) {
    const res = await fetch(siteContact.formspreeEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });
    if (!res.ok) {
      throw new Error('Failed to send message via form endpoint.');
    }
    return { success: true, mode: 'formspree' };
  }

  return { success: true, mode: 'none' };
}
