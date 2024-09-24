import { cn } from "@/lib/utils";
import  {GeistSans}  from "geist/font/sans";
import  {GeistMono}  from "geist/font/mono";
import type { Metadata } from "next";
import "./globals.css";
import { Anek_Telugu } from "next/font/google";


const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
 });

export const metadata: Metadata = {
  title: "Chillan Eric . Développeur",
  description:
    "Generated for génerate a porfolio in React , Tailwind, Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          GeistSans.variable,
          GeistMono.variable,
          AnekTelugu.className,
          "font-sans h-full bg-background text-white"
        )}
      >
        {children}
      </body>
    </html>
  );
}
