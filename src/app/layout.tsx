import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skorler",
  description: "Where academic research meets the digital era",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/Logo-icon.svg" type="image/x-icon" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
