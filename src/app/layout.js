import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/NavbarServer';
import Script from 'next/script';
import Analytics from '@/components/Analytics';
import Footer from '@/components/Footer';
import { ToastProvider } from '@/components/ToastProvider';
import PageTransition from '@/components/PageTransition';
import AuthProvider from '@/components/AuthProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  metadataBase: new URL('https://gym-app-prod.vercel.app'),
  title: {
    default: 'Gym XYZ – Train Hard. Feel Powerful.',
    template: '%s | Gym XYZ',
  },
  description:
    'Modern training facility offering HIIT, powerlifting, yoga & personal coaching in downtown Belgrade.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gym-xyz.com',
    siteName: 'Gym XYZ',
    images: '/og-home.jpg',
  },
  twitter: { card: 'summary_large_image', site: '@GymXYZ' },
  icons: { icon: '/favicon.ico' },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {/* GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { page_path: window.location.pathname });
            `,
          }}
        />

        <AuthProvider>
          <ToastProvider>
            <Navbar /> <PageTransition>{children}</PageTransition>
            <Analytics />
            <Footer />
          </ToastProvider>
        </AuthProvider>
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HealthClub',
              name: 'Gym XYZ',
              image: 'https://gym-xyz.com/og-home.jpg',
              telephone: '+1-555-555-5555',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '123 Muscle Ave',
                addressLocality: 'Belgrade',
                addressCountry: 'RS',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
