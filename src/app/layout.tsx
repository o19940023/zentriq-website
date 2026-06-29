import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zentriq — AI Trading Bot for Forex & Crypto | $299 Lifetime",
  description: "AI-powered trading bot for Forex & Crypto. Automated 24/7 trading with advanced risk management. Lifetime license, no subscriptions. Get started for $299.",
  keywords: ["trading bot", "automated trading", "forex bot", "crypto trading bot", "MT5 bot", "algorithmic trading", "forex automation", "crypto bot", "trading software"],
  authors: [{ name: "Zentriq" }],
  creator: "Zentriq",
  publisher: "Zentriq",
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
    type: 'website',
    locale: 'en_US',
    url: 'https://zentriq.com',
    siteName: 'Zentriq',
    title: 'Zentriq — AI Trading Bot for Forex & Crypto',
    description: 'AI-powered trading bot for Forex & Crypto. Automated 24/7 trading with advanced risk management. Lifetime license for $299.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Zentriq Trading Bot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zentriq — AI Trading Bot for Forex & Crypto',
    description: 'AI-powered trading bot for Forex & Crypto. Automated 24/7 trading with advanced risk management.',
    images: ['/logo.png'],
    creator: '@zentriq',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://zentriq.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#9D5CFF" />
        
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#080B11] text-[#E2E8F0] antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
