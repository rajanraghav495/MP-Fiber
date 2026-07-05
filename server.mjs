import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/contact', async (req, res) => {
  debugger;
  const { name, email, subject, message } = req.body || {};
  const recipient = process.env.CONTACT_TO_EMAIL || 'info@mpfiber.com';
  const senderEmail = process.env.SMTP_FROM || process.env.SMTP_USER;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please fill in your name, email, subject, and message.'
    });
  }

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return res.status(500).json({
      success: false,
      message: 'Email server is not configured yet. Please set SMTP_HOST, SMTP_USER, SMTP_PASS, and CONTACT_TO_EMAIL in your environment.'
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: senderEmail,
      to: recipient,
      //replyTo: email,
      subject: `New inquiry from ${name}: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        '',
        message
      ].join('\n'),
      html: `
        <h3>New inquiry received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `
    });

    res.json({ success: true, message: 'Your inquiry has been sent successfully.' });
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).json({
      success: false,
      message: 'The inquiry could not be sent right now. Please try again later.'
    });
  }
});

app.listen(port, () => {
  console.log(`Mail server listening on http://localhost:${port}`);
});
