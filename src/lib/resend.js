import { Resend as ResendSDK } from 'resend';

function createResend() {
  if (process.env.RESEND_API_KEY) {
    return new ResendSDK(process.env.RESEND_API_KEY);
  }

  // Fallback for CI / Preview envs without the key
  console.warn('[resend] RESEND_API_KEY not set – e-mails will be skipped');
  return {
    emails: {
      send: async () => {
        /* no-op */
      },
    },
  };
}

export const resend = createResend();
