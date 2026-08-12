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

import { ClerkProvider } from '@clerk/nextjs';
import { ProProvider } from '@/context/ProContext';

export const metadata: Metadata = {
  title: "Alpinist SAT Platform",
  description: "Digital SAT Preparation Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body>
          <ProProvider>
            {children}
          </ProProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
