import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://lakshenclave.com"),
  title: "Laksh Enclave | 150 Luxury Villa Plots on Bengaluru-Chennai Expressway (NE7)",
  description: "A tranquil gated community of 150 luxury villa plots. Featuring a grand 2-storey brick clubhouse, resort swimming pool, and 800+ palms in Greater Whitefield / Hoskote-Malur corridor. Pricing on Request.",
  keywords: [
    "Laksh Enclave",
    "Bengaluru Chennai Expressway villa plots",
    "NE7 luxury plots",
    "villa plots Hoskote",
    "luxury gated community Greater Whitefield",
    "Kondarahalli plots",
    "BCE Hedaginabele Toll Plaza real estate",
  ],
  alternates: {
    canonical: "https://lakshenclave.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    siteName: "Laksh Enclave",
    locale: "en_IN",
    type: "website",
    url: "https://lakshenclave.com",
    title: "Laksh Enclave | 150 Luxury Villa Plots",
    description: "Clear-title freehold villa plots on the 10-lane Bengaluru-Chennai Expressway (NE7). 25 minutes from Whitefield. Pricing on Request.",
    images: [
      {
        url: "/images/6061957682878419879.jpg",
        width: 1200,
        height: 630,
        alt: "Laksh Enclave Luxury Villa Plots",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laksh Enclave | 150 Luxury Villa Plots",
    description: "Clear-title freehold villa plots on the 10-lane Bengaluru-Chennai Expressway (NE7). 25 minutes from Whitefield.",
    images: ["/images/6061957682878419879.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#FAF5EB] text-[#1A211D] antialiased selection:bg-[#14382C] selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
