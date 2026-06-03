import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer, Header } from "./components";
import "./globals.css";
import {
  baseUrl,
  defaultDescription,
  practiceJsonLd,
  siteName,
  websiteJsonLd,
} from "./seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteName} | Psychologie in Wien`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: "Maria Chamarina" }],
  creator: "Maria Chamarina",
  publisher: siteName,
  keywords: [
    "Klinische Psychologie Wien",
    "Psychologische Behandlung Wien",
    "Klinisch-psychologische Diagnostik Wien",
    "Angststörung Behandlung Wien",
    "Zwangsstörung Behandlung Wien",
    "Depression Psychologin Wien",
    "Sexualtherapie Wien",
  ],
  category: "healthcare",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteName} | Psychologie in Wien`,
    description: defaultDescription,
    url: "/",
    siteName,
    locale: "de_AT",
    type: "website",
    images: [
      {
        url: "/images/praxis2.png",
        width: 1600,
        height: 1200,
        alt: "Heller Praxisraum der Praxis Chamarina in Wien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Psychologie in Wien`,
    description: defaultDescription,
    images: ["/images/praxis2.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          Zum Inhalt springen
        </a>
        <div className="min-h-screen bg-white text-[#0D2744]">
          <Header />
          <div id="main-content" tabIndex={-1}>
            {children}
          </div>
          <Footer />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([websiteJsonLd, practiceJsonLd]).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
      </body>
    </html>
  );
}
