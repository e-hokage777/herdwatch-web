import type { Metadata } from "next";
import { Lexend_Deca, Ubuntu, Platypi } from "next/font/google";
import "./globals.css";

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
  title: "Herdwatch",
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
      </body>
    </html>
  );
}
