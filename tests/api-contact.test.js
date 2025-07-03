/**
 * Unit tests for POST /api/contact route
 */
import { POST } from '@/app/api/contact/route';

// Polyfill the global Response.json(...) static used in route
global.Response ??= {};
global.Response.json = (obj, init = {}) => ({
  ok: init.status ? init.status < 400 : true,
  status: init.status ?? 200,
  json: () => Promise.resolve(obj),
});

describe('POST /api/contact', () => {
  // helper → fake Request object
  const makeReq = (body) => ({
    json: () => Promise.resolve(body),
    headers: { get: () => 'application/json' },
  });

  it('returns 200 for valid payload', async () => {
    const res = await POST(
      makeReq({ name: 'Ana', email: 'ana@example.com', message: 'Hi!' })
    );
    expect(res.status).toBe(200);
    await expect(res.json()).resolves.toEqual({ ok: true });
  });

  it('returns 422 when missing fields', async () => {
    const res = await POST(makeReq({ name: 'Ana' }));
    expect(res.status).toBe(422);
    const data = await res.json();
    expect(data).toHaveProperty('error');
  });
});
