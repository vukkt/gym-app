import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
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

  /* ---------- NEW ---------- */
  icons: {
    icon: '/favicon.ico', // serves <link rel="icon" …>
    // optional extras:
    // shortcut: '/favicon-32x32.png',
    // apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest', // serves <link rel="manifest" …>
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navbar />

        {/* JSON-LD business schema */}
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

        {children}
      </body>
    </html>
  );
}
