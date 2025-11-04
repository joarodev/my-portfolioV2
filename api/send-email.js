import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['joaquinrodriguez.dev@gmail.com'],
      subject: `Nuevo mensaje de ${name} desde portfolio`,
      react: `
        <h1>New message from your portfolio contact form</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return res.status(400).json({ message: 'Error sending email', error });
    }

    res.status(200).json({ message: 'Email sent successfully', data });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error });
  }
}
