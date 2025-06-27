import { Resend } from 'resend';

export async function POST(request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: 'Missing fields' }, { status: 422 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM,
      to: process.env.RESEND_TO,
      subject: `New inquiry from ${name}`,
      reply_to: email,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return Response.json({ error: 'Email failed' }, { status: 500 });
  }
}
