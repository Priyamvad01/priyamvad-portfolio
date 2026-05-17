import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { AmbientBackground } from "@/components/layout/ambient-background";
import { ScrollManager } from "@/components/layout/scroll-manager";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteProfile, siteUrl } from "@/constants/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Priyamvad Ranjan Portfolio",
  title: {
    default: "Priyamvad Ranjan | Backend, AI & Cloud Developer",
    template: "%s | Priyamvad Ranjan",
  },
  description:
    "Premium engineering portfolio for Priyamvad Ranjan, a B.Tech CSE student building backend, AI-integrated, and cloud-native systems.",
  keywords: [
    "Priyamvad Ranjan",
    "Backend Developer",
    "Software Developer",
    "AI Developer",
    "Cloud Developer",
    "Python",
    "FastAPI",
    "Flask",
    "AWS",
    "Docker",
  ],
  authors: [{ name: "Priyamvad Ranjan" }],
  creator: "Priyamvad Ranjan",
  publisher: "Priyamvad Ranjan",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Priyamvad Ranjan | Backend, AI & Cloud Developer",
    description:
      "A futuristic developer portfolio for intelligent systems, backend engineering, and cloud-native software.",
    url: siteUrl,
    siteName: "Priyamvad Ranjan Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Priyamvad Ranjan engineering portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyamvad Ranjan | Backend, AI & Cloud Developer",
    description:
      "A premium engineering portfolio for backend systems, AI workflows, and cloud-ready software.",
    images: ["/twitter-image"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon", type: "image/png" }],
    apple: [{ url: "/apple-icon", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  verification: {
    other: {
      "portfolio-owner": "Priyamvad Ranjan",
    },
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
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteProfile.name,
  url: siteUrl,
  email: siteProfile.email,
  telephone: siteProfile.phone,
  jobTitle: siteProfile.role,
  sameAs: [siteProfile.github, siteProfile.linkedin],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: siteProfile.education,
  },
  knowsAbout: [
    "Backend Development",
    "REST APIs",
    "FastAPI",
    "Flask",
    "AWS",
    "Docker",
    "CI/CD",
    "AI-integrated systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-background text-foreground">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ScrollManager />
        <ScrollProgress />
        <AmbientBackground />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="relative z-10 flex min-h-screen flex-col">
          <SiteHeader />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
