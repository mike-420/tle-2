import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";
import { Metadata } from "next";

const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "The Loft Exchange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={libre.className}>
        <GoogleTagManager gtmId="GTM-5T54LP6N" />
        <Navbar />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
