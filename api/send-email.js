import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, location, budget, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields (name, email, message are required)' });
  }

  // basic email format check
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Use Gmail SMTP. For Gmail you must use an App Password (recommended) or proper OAuth2.
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const to = process.env.EMAIL_TO || process.env.EMAIL_USER;

  if (!user || !pass) {
    console.error('send-email: missing EMAIL_USER or EMAIL_PASS');
    return res.status(500).json({ error: 'Email credentials not configured on server. Set EMAIL_USER and EMAIL_PASS.' });
  }

  try {
    let transporter;
    try {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user,
          pass,
        },
      });
      // verify transporter
      await transporter.verify();
    } catch (err) {
      console.error('send-email transporter error:', err && err.message);
      return res.status(500).json({ error: 'Failed to create mail transporter. Check EMAIL_USER/PASS and provider settings.' });
    }

    const mailOptions = {
      from: user,
      to,
      subject: `Website Contact: ${name} ${subject ? `- ${subject}` : ''}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Location: ${location || '-'} `,
        `Budget: ${budget || '-'} `,
        '',
        'Message:',
        message,
      ].join('\n'),
    };
    const info = await transporter.sendMail(mailOptions);
    console.log('send-email sent', info && info.response);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('send-email error:', err && err.message);
    // try to return meaningful message but avoid leaking sensitive info
    return res.status(500).json({ error: (err && err.message) || 'Failed to send email' });
  }
}
