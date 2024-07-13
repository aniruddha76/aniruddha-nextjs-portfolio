import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aniruddha Thakur | Portfolio | Frontend Developer | Web Designer",
  description: "A vibrant display of my tech adventures!",
  openGraph: {
    images: '/preview.png'
  },
  metadataBase: new URL("https://aniruddha-nextjs-portfolio.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title></title>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
