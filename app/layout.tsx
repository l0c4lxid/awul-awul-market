import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://awul-awul-market.vercel.app";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Awul Awul Market | Thrift Berkualitas",
  description:
    "Awul Awul Market adalah toko thrift modern di Bantul dengan koleksi berkualitas, harga bersahabat, dan layanan pesan antar.",
  applicationName: "Awul Awul Market",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Awul Awul Market",
    "thrift Bantul",
    "toko pakaian bekas",
    "thrift Yogyakarta",
    "katalog thrift",
    "pakaian vintage",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Awul Awul Market | Thrift Berkualitas",
    description:
      "Kurasi pakaian thrift modern di Bantul. Chat WhatsApp untuk cek koleksi terbaru.",
    type: "website",
    locale: "id_ID",
    siteName: "Awul Awul Market",
    images: [
      {
        url: "/images/hero-01.svg",
        width: 1200,
        height: 800,
        alt: "Awul Awul Market hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Awul Awul Market | Thrift Berkualitas",
    description:
      "Kurasi pakaian thrift modern di Bantul. Chat WhatsApp untuk cek koleksi terbaru.",
    images: ["/images/hero-01.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${plusJakarta.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
