import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Footer } from "@/components/layouts/Footer";
import { Demo } from "@/components/Demo";
import Navbar from "@/components/Navbar";

// Setting up Geist fonts
const fontSans = GeistSans;


// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Featurely.ai - Get User Insights Faster",
  description:
    "Featurely simulates users that think and behave like your actual customers, giving you actionable insights in minutes, not weeks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontSans.className}>
      <body className="font-sans antialiased">
        <nav>
          <Navbar />
        </nav>
        {children}
        <Demo />
        <Footer />
      </body>
    </html>
  );
}
