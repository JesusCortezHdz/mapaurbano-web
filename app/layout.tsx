import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MapaUrbano | Ingeniería y datos para proyectos',
  description:
    'Levantamientos en campo, planos y cartografía, análisis y estudios técnicos para infraestructura, territorio, transporte y movilidad.',
  metadataBase: new URL('https://www.mapaurbano.mx/'),
  icons: {
    icon: '/images/icon.svg',
    shortcut: '/images/icon.svg',
    apple: '/images/icon.svg',
  },
  openGraph: {
    title: 'MapaUrbano | Ingeniería y datos para proyectos',
    description:
      'Levantamientos en campo, planos y cartografía, análisis y estudios técnicos para infraestructura, territorio, transporte y movilidad.',
    url: 'https://www.mapaurbano.mx/',
    type: 'website',
    locale: 'es_MX',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MapaUrbano | Ingeniería y datos para proyectos',
    description:
      'Levantamientos en campo, planos y cartografía, análisis y estudios técnicos para infraestructura, territorio, transporte y movilidad.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18304550300"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18304550300');
            gtag('config', 'G-60J08VQVNW');
          `}
        </Script>

        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
