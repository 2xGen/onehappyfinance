import { NextResponse } from 'next/server';

/**
 * Connect signup API – stores signups by email (no database).
 *
 * Setup (choose one):
 *
 * Option A – Resend (recommended): you receive an email per signup.
 * 1. Sign up at https://resend.com
 * 2. Create an API key, add domain (or use onboarding@resend.dev for testing)
 * 3. In Vercel: Environment variables
 *    - RESEND_API_KEY = your key
 *    - CONNECT_SIGNUP_TO_EMAIL = email where signups are sent (e.g. hello@onehappyfinance.com)
 *    - CONNECT_SIGNUP_FROM_EMAIL = sender (e.g. Connect <noreply@onehappyfinance.com> or onboarding@resend.dev)
 *
 * Option B – Formspree: they store submissions and email you.
 * 1. Create a form at https://formspree.io → get form ID (e.g. https://formspree.io/f/xxxxx)
 * 2. In Vercel: FORMSPREE_ENDPOINT = https://formspree.io/f/xxxxx
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email) {
  return typeof email === 'string' && EMAIL_REGEX.test(email.trim());
}

export async function POST(request) {
  try {
    const body = await request.json();
    const email = body?.email?.trim();
    const fullName = body?.fullName?.trim() || '';
    const company = body?.company?.trim() || '';
    const role = body?.role === 'professional' ? 'professional' : 'individual';

    if (!validateEmail(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Option B: Formspree
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    if (formspreeEndpoint) {
      const formspreeRes = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          fullName,
          company,
          role,
          _subject: `Connect signup: ${role}`,
        }),
      });
      if (!formspreeRes.ok) {
        const text = await formspreeRes.text();
        console.error('Formspree error', formspreeRes.status, text);
        return NextResponse.json({ error: 'Signup service error' }, { status: 502 });
      }
      return NextResponse.json({ ok: true });
    }

    // Option A: Resend
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONNECT_SIGNUP_TO_EMAIL;
    const fromEmail = process.env.CONNECT_SIGNUP_FROM_EMAIL || 'onboarding@resend.dev';

    if (!resendKey || !toEmail) {
      console.warn('Connect signup: set RESEND_API_KEY and CONNECT_SIGNUP_TO_EMAIL (or FORMSPREE_ENDPOINT) in Vercel.');
      return NextResponse.json(
        { error: 'Signup not configured' },
        { status: 503 }
      );
    }

    const { Resend } = await import('resend');
    const resend = new Resend(resendKey);

    const html = `
      <p><strong>New Connect signup</strong></p>
      <ul>
        <li>Email: ${email}</li>
        <li>Name: ${fullName || '—'}</li>
        <li>Company: ${company || '—'}</li>
        <li>Role: ${role}</li>
      </ul>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Connect signup: ${role} – ${email}`,
      html,
    });

    if (error) {
      console.error('Resend error', error);
      return NextResponse.json({ error: 'Failed to send' }, { status: 502 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error('Connect signup error', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
