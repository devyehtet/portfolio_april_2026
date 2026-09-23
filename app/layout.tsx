// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { seoKeywords, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: "%s | Ye Htet Aung",
  },
  description: siteConfig.description,
  metadataBase: new URL("https://yehtet.com"),
  applicationName: "Ye Htet Aung Portfolio",
  authors: [{ name: "Ye Htet Aung", url: "https://yehtet.com" }],
  category: "Digital Marketing",
  creator: "Ye Htet Aung",
  keywords: seoKeywords,
  publisher: "Ye Htet Aung",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    locale: "en_TH",
    type: "website",
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: "Ye Htet Aung, digital marketing consultant based in Bangkok, Thailand",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.image],
  },
  other: {
    "business:contact_data:country_name": "Thailand",
    "business:contact_data:email": siteConfig.email,
    "business:contact_data:locality": "Bangkok",
    "geo.placename": "Bangkok, Thailand",
    "geo.region": "TH-10",
    "target-market": "Thailand, Myanmar, Southeast Asia",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-9BH46V9VMG";
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "AW-18045831263";
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "928969039556719";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="lazyOnload"
        />
        <Script id="google-tag" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>

        {/* Meta domain verification */}
        <meta
          name="facebook-domain-verification"
          content="pn466ibwvkay4x78bj4l80legtjhej"
        />
      </head>

      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}

        {/* Meta Pixel */}
        {PIXEL_ID && (
          <>
            <Script
              id="meta-pixel"
              strategy="lazyOnload"
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
                  fbq('init', '${PIXEL_ID}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript
              dangerouslySetInnerHTML={{
                __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1" alt="" />`,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
