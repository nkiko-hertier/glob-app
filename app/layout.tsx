import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yoom - Meetings",
  description: "Your Meeting Assistant Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/icons/yoom-logo.svg" type="image/x-icon" />
      <ClerkProvider
      appearance={{
        layout: {
          logoImageUrl: '/icons/yoom-logo.svg',
        },
        variables: {
          colorText: "#fff",
          colorBackground: "#1C1F2E",
          colorPrimary: "#0E78F9",
          colorTextSecondary: "#94a3b8",
          colorInputBackground: "#252a41",
          colorBorder: "#3b4256",
          colorInputText: "#fff",
          fontFamily: "var(--font-geist-sans)",
        }
      }}
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg1 dark`}
        >
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
