import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

const store = new Map(); // in-memory: key -> timestamp (ms)
const RATE_LIMIT_MS = 1000 * 60 * 5; // 5 min

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ message: "Method Not Allowed" });
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ message: "Missing required fields" });

  const forwarded = req.headers["x-forwarded-for"];
  const ip = forwarded ? forwarded.split(",")[0].trim() : req.socket.remoteAddress;
  const keyIp = `ip:${ip}`;
  const keyEmail = `email:${email.toLowerCase()}`;
  const now = Date.now();

  const lastIp = store.get(keyIp) || 0;
  const lastEmail = store.get(keyEmail) || 0;
  if (now - lastIp < RATE_LIMIT_MS || now - lastEmail < RATE_LIMIT_MS) {
    const retryAfter = Math.max(RATE_LIMIT_MS - (now - Math.max(lastIp, lastEmail)), 0);
    return res.status(429).json({ message: "Too many requests", retryAfterMs: retryAfter });
  }

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["joaquinrodriguez.dev@gmail.com"],
      subject: `Nuevo mensaje de ${name} desde portfolio`,
      html: `<p>${message}</p><p>From: ${name} (${email}) IP: ${ip}</p>`,
    });

    // guardar timestamps en memoria
    store.set(keyIp, now);
    store.set(keyEmail, now);

    return res.status(200).json({ message: "Email sent" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error", error: String(err) });
  }
}
