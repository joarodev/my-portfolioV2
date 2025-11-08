import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  console.log("🔍 RESEND_API_KEY loaded:", !!process.env.RESEND_API_KEY);

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
      html: `
        <h1>Nuevo mensaje desde el portfolio</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("❌ Error sending email:", error);
      return res.status(400).json({ message: 'Error sending email', error });
    }

    console.log("✅ Email sent:", data);
    return res.status(200).json({ message: 'Email sent successfully', data });

  } catch (error) {
    console.error("🔥 Internal Server Error:", error);
    return res.status(500).json({ message: 'Internal Server Error', error });
  }
}
