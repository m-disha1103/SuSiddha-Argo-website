import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import CursorGlow from "./components/CursorGlow";

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
  metadataBase: new URL("https://su-siddha-argo-website.vercel.app"), // Change after deployment if needed

  title: {
    default: "SuSiddha Agro Products | Premium Unpolished Sona Masuri Rice",
    template: "%s | SuSiddha Agro Products",
  },

  description:
    "Experience the purity of SuSiddha Agro Products. Premium unpolished Sona Masuri rice, naturally processed to preserve nutrition, authentic aroma and traditional taste.",

  keywords: [
    "SuSiddha",
    "SuSiddha Agro Products",
    "Sona Masuri Rice",
    "Premium Rice",
    "Unpolished Rice",
    "Healthy Rice",
    "Natural Rice",
    "Indian Rice",
    "Rice Manufacturer",
    "Rice Supplier",
    "Rice Exporter",
    "Fiber Rich Rice",
    "Traditional Rice",
  ],

  authors: [
    {
      name: "SuSiddha Agro Products",
    },
  ],

  creator: "SuSiddha Agro Products",

  publisher: "SuSiddha Agro Products",

  applicationName: "SuSiddha Agro Products",

  category: "Food",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",

    url: "https://su-siddha-argo-website.vercel.app",

    siteName: "SuSiddha Agro Products",

    title: "SuSiddha Agro Products | Premium Unpolished Sona Masuri Rice",

    description:
      "Premium naturally processed unpolished Sona Masuri rice with authentic taste, rich nutrition and farm-fresh quality.",

    images: [
      {
        url: "/images/hero-rice.png",
        width: 1200,
        height: 630,
        alt: "SuSiddha Premium Unpolished Sona Masuri Rice",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "SuSiddha Agro Products",

    description:
      "Premium naturally processed unpolished Sona Masuri rice.",

    images: ["/images/hero-rice.png"],
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden bg-[#FFFDF8] font-sans text-[#1F5132] selection:bg-[#D4AF37] selection:text-white">
        <CursorGlow />

        <main className="relative isolate">
          {children}
        </main>

        <GoogleAnalytics gaId="G-Z7Z9VQZ628" />
      </body>
    </html>
  );
}
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFFDF8",
  colorScheme: "light",
};