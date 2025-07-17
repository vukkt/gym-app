import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import EmailProvider from 'next-auth/providers/email';
import GoogleProvider from 'next-auth/providers/google';

import { prisma } from '@/lib/prisma';
import { resend } from '@/lib/resend';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,

  providers: [
    EmailProvider({
      from: process.env.RESEND_FROM,
      sendVerificationRequest: async ({ identifier, url }) => {
        await resend.emails.send({
          from: process.env.RESEND_FROM,
          to: identifier,
          subject: 'Sign in to Gym XYZ',
          text: `Sign‑in link: ${url}`,
        });
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      } else if (token.id) {
        // If user is not available, fetch from database
        const dbUser = await prisma.user.findUnique({
          where: { id: token.id },
          select: { role: true },
        });
        token.role = dbUser?.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },

  pages: { signIn: '/auth/signin' },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
