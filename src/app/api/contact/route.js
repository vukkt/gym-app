export async function POST(request) {
  const data = await request.json();

  // TODO: plug into your email/SaaS; for now, log + 204 No Content
  console.log('Contact form submission:', data);

  return new Response(null, { status: 204 });
}
