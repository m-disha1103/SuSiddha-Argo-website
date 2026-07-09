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
  themeColor: "#1F5132",

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
      url: "/images/og-banner.png",
      width: 1200,
      height: 630,
      alt: "SuSiddha Agro Products - Premium Unpolished Sona Masuri Rice",
    },
  ],
},

  twitter: {
    card: "summary_large_image",

    title: "SuSiddha Agro Products",

    description:
      "Premium naturally processed unpolished Sona Masuri rice.",

    images: ["/images/og-banner.png"],
  },

  alternates: {
    canonical: "/",
  },
};
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://su-siddha-argo-website.vercel.app/#organization",
      name: "SuSiddha Agro Products",
      url: "https://su-siddha-argo-website.vercel.app",
      logo: {
        "@type": "ImageObject",
        url: "https://su-siddha-argo-website.vercel.app/images/logo.png",
      },
      image: "https://su-siddha-argo-website.vercel.app/images/logo.png",
      email: "mailto:susiddhaagro@gmail.com",
      telephone: "+91-8953565330",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Plot No.16, Mini Industrial Area, Mathuranagar, Anandnagar",
        addressLocality: "Maharajganj",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },

    {
      "@type": "WebSite",
      "@id": "https://su-siddha-argo-website.vercel.app/#website",
      url: "https://su-siddha-argo-website.vercel.app",
      name: "SuSiddha Agro Products",
      publisher: {
        "@id":
          "https://su-siddha-argo-website.vercel.app/#organization",
      },
      inLanguage: "en-IN",
    },

    {
      "@type": "WebPage",
      "@id": "https://su-siddha-argo-website.vercel.app/#webpage",
      url: "https://su-siddha-argo-website.vercel.app",
      name: "Premium Unpolished Sona Masuri Rice",
      isPartOf: {
        "@id":
          "https://su-siddha-argo-website.vercel.app/#website",
      },
      about: {
        "@id":
          "https://su-siddha-argo-website.vercel.app/#organization",
      },
    },

    {
      "@type": "Product",
      name: "Premium Unpolished Sona Masuri Rice",
      brand: {
        "@type": "Brand",
        name: "SuSiddha",
      },
      category: "Rice",
      countryOfOrigin: "India",
      description:
        "Premium naturally processed unpolished Sona Masuri rice rich in nutrition, fiber and authentic taste.",
      manufacturer: {
        "@id":
          "https://su-siddha-argo-website.vercel.app/#organization",
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
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