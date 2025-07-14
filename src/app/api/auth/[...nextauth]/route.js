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
          text: `Sign in link: ${url}`,
        });
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    /** Put the DB user.id on the JWT */
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    /** Expose it to the client session object */
    async session({ session, token }) {
      if (session.user && token.id) session.user.id = token.id;
      return session;
    },
  },
  pages: { signIn: '/auth/signin' },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
