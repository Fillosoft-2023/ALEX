import { Cormorant_Garamond, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/layout/FloatingContact';
import FloatingSocials from '@/components/layout/FloatingSocials';
import RouteLoader from '@/components/layout/RouteLoader';
import { companyData } from '@/data/companyData';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

const mephisto = localFont({
  src: [
    {
      path: './fonts/Mephisto.otf',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: './fonts/Mephisto.ttf',
      weight: 'normal',
      style: 'normal',
    }
  ],
  variable: '--font-mephisto',
  display: 'swap',
});

const chavalard = localFont({
  src: './fonts/ChavalardStencil.otf',
  variable: '--font-chavalard',
  display: 'swap',
});

const pierknife = localFont({
  src: './fonts/Pierknife-Regular.otf',
  variable: '--font-pierknife',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.alexhealthcaresystems.com'),
  title: {
    default: 'Alex Healthcare System | Hospital Construction & Healthcare Infrastructure',
    template: '%s | Alex Healthcare System'
  },
  description: 'Alex Healthcare System is your trusted turnkey partner in hospital construction, modular operating theatres, medical gas pipeline systems (MGPS), ICU critical care setups, and healthcare infrastructure development across Northeast India.',
  keywords: [
    'hospital construction Northeast India',
    'medical gas pipeline installation Assam',
    'modular OT setup Guwahati',
    'ICU setup Assam',
    'turnkey hospital solutions',
    'hospital architectural planning',
    'healthcare infrastructure India',
    'medical equipment supply Guwahati',
    'hospital licensing compliance'
  ],
  authors: [{ name: 'Alex Healthcare System' }],
  creator: 'Alex Healthcare System',
  publisher: 'Alex Healthcare System',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Alex Healthcare System | Hospital Construction & Healthcare Infrastructure',
    description: 'Turnkey solutions for hospital planning, civil construction, modular operating theatres, MGPS, and critical care infrastructure across Northeast India.',
    url: 'https://www.alexhealthcaresystems.com',
    siteName: 'Alex Healthcare System',
    images: [
      {
        url: '/alexreal.png',
        width: 1200,
        height: 630,
        alt: 'Alex Healthcare System - Hospital Infrastructure Specialists',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Healthcare System | Hospital Construction & Engineering',
    description: 'Building the infrastructure behind better healthcare across Northeast India.',
    images: ['/alexreal.png'],
  },
  icons: {
    icon: '/alexhd.png',
    shortcut: '/alexhd.png',
    apple: '/alexhd.png',
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: companyData.name,
    legalName: companyData.legalName,
    url: 'https://www.alexhealthcaresystems.com',
    logo: 'https://www.alexhealthcaresystems.com/alexreal.png',
    description: companyData.fullDesc,
    telephone: companyData.contact.phoneRaw,
    email: companyData.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${companyData.contact.address.line1}, ${companyData.contact.address.line2}`,
      addressLocality: companyData.contact.address.city,
      addressRegion: companyData.contact.address.state,
      postalCode: companyData.contact.address.postalCode,
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 26.13135,
      longitude: 91.80183
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00'
      }
    ],
    priceRange: '$$$$',
    areaServed: [
      'Assam',
      'Meghalaya',
      'Tripura',
      'Arunachal Pradesh',
      'Nagaland',
      'Mizoram',
      'Manipur',
      'West Bengal',
      'Northeast India'
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${cormorant.variable} ${playfair.variable} ${plusJakarta.variable} ${mephisto.variable} ${chavalard.variable} ${pierknife.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-ivory text-charcoal-green antialiased min-h-screen flex flex-col font-sans">
        <RouteLoader />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingContact />
        <FloatingSocials />
      </body>
    </html>
  );
}
