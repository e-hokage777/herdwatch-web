import type { Metadata } from "next";
import { Lexend_Deca, Ubuntu, Platypi } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import { Toaster } from "sonner";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: "400",
});

const platypi = Platypi({
  variable: "--font-platypi",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aurok",
  description: "Cattle monitoring system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` $ ${ubuntu.variable} ${platypi.variable} antialiased`}>
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
