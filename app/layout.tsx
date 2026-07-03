import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SuSiddha Agro Products | Premium Unpolished Sona Masuri Rice",

  description:
    "SuSiddha Agro Products offers premium unpolished Sona Masuri rice sourced from trusted farms. Healthy, nutritious and naturally processed.",

  keywords: [
    "Sona Masuri Rice",
    "Unpolished Rice",
    "Healthy Rice",
    "Premium Rice",
    "SuSiddha",
    "Agro Products",
  ],

  authors: [{ name: "SuSiddha Agro Products" }],

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
