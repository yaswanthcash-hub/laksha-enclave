import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
});

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
  openGraph: {
    title: "Laksh Enclave | 150 Luxury Villa Plots",
    description: "Clear-title freehold villa plots on the 10-lane Bengaluru-Chennai Expressway (NE7). 25 minutes from Whitefield. Pricing on Request.",
    images: ["/images/6061957682878419879.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} scroll-smooth`}>
      <body className="bg-[#FAF5EB] text-[#1A211D] antialiased selection:bg-[#14382C] selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
