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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "تميم | حكاية حب بدأت",
    template: "%s | تميم",
  },
  description:
    "أهلًا بتميم.. حكاية صغيرة مليئة بالحب، وذكريات يوم ميلاده، وعالمه الجميل. موقع خاص للاحتفال بأجمل هدية.",
  applicationName: "Tamim",
  keywords: [
    "تميم",
    "مولود جديد",
    "إعلان مولود",
    "Tamim",
    "Newborn Announcement",
    "Baby Boy",
  ],
  authors: [{ name: "Tamim's Family" }],
  openGraph: {
    title: "تميم | حكاية حب بدأت",
    description:
      "A little soul, a beautiful beginning, and a love beyond words.",
    siteName: "Tamim",
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "تميم | حكاية حب بدأت",
    description:
      "A little soul, a beautiful beginning, and a love beyond words.",
  },
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
