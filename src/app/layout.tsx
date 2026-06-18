import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Footer, Header } from "./components";
import "./globals.css";
import {
  baseUrl,
  createPracticeJsonLd,
  createWebsiteJsonLd,
  defaultDescription,
  siteName,
} from "./seo";
import {
  getHomePage,
  getPracticePage,
  getSiteSettings,
  getTopicsPage,
} from "../sanity/content";
import { imageUrl } from "../sanity/image";
import { SanityLive } from "../sanity/live";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const [settings, practice] = await Promise.all([
    getSiteSettings(),
    getPracticePage(),
  ]);
  const ogImage = imageUrl(practice.images[0], "/images/praxis4.jpg");
  const title = `${settings.siteName || siteName} | Psychologie in Wien`;
  const description = settings.defaultDescription || defaultDescription;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: `%s | ${settings.siteName || siteName}`,
    },
    description,
    applicationName: settings.siteName,
    authors: [{ name: settings.ownerName }],
    creator: settings.ownerName,
    publisher: settings.siteName,
    keywords: settings.keywords,
    category: "healthcare",
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title,
      description,
      url: "/",
      siteName: settings.siteName,
      locale: "de_AT",
      type: "website",
      images: [
        {
          url: ogImage,
          width: practice.images[0]?.width || 1600,
          height: practice.images[0]?.height || 1200,
          alt:
            practice.images[0]?.alt ||
            "Praxisraum der Praxis Chamarina in Wien",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
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
    icons: {
      icon: "/icon.png",
      apple: "/icon.png",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [settings, home, practice, topics] = await Promise.all([
    getSiteSettings(),
    getHomePage(),
    getPracticePage(),
    getTopicsPage(),
  ]);
  const jsonLd = [
    createWebsiteJsonLd(settings),
    createPracticeJsonLd({ settings, home, practice, topics }),
  ];

  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          {settings.ui.skipLinkLabel}
        </a>
        <div className="min-h-screen bg-white text-[#0D2744]">
          <Header settings={settings} />
          <div id="main-content" tabIndex={-1}>
            {children}
          </div>
          <Footer settings={settings} />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SanityLive includeDrafts={false} />
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-EMH5Z30Z4D"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-EMH5Z30Z4D');
        `}
      </Script>
    </html>
  );
}
