import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Hari Properties | Trusted Real Estate Advisory in Mysuru & Karnataka',
  description: 'Hari Properties is a premium real estate advisory firm serving buyers, sellers, tenants and investors across Karnataka.',
  metadataBase: new URL('https://hariproperties.in'),
  openGraph: {
    title: 'Hari Properties',
    description: 'Premium real estate advisory in Mysuru and Karnataka with luxury service, investment insight and trusted property guidance.',
    type: 'website',
    url: 'https://hariproperties.in',
    siteName: 'Hari Properties',
    images: [
      {
        url: '/assets/images/assets/screen_01.png',
        width: 1200,
        height: 630,
        alt: 'Hari Properties premium real estate advisory in Mysuru',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hari Properties',
    description: 'Premium real estate advisory in Mysuru and Karnataka.',
    images: ['/assets/images/assets/screen_01.png'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Hari Properties',
  description: 'Hari Properties provides premium real estate advisory and property services across Mysuru and Karnataka.',
  url: 'https://hariproperties.in',
  telephone: '+91 90000 12345',
  email: 'hello@hariproperties.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '12 Prestige Plaza, Kuvempunagar',
    addressLocality: 'Mysuru',
    addressRegion: 'Karnataka',
    postalCode: '570023',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '12.2958',
    longitude: '76.6394',
  },
  areaServed: ['Mysuru', 'Bengaluru', 'Mandya', 'Hassan'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '17:00',
    },
  ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-surface text-brand">
        <Header />
        {children}
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  )
}
