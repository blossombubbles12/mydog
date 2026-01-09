import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "My Dog and I | Nigeria's Largest Dog Lovers Community",
    template: "%s | My Dog and I"
  },
  description: "Experience the joy of dog ownership with Nigeria's most vibrant community. Join 50,000+ dog lovers for events, the Lagos Dog Carnival, and our Guinness World Record attempt.",
  keywords: ["Dog community Lagos", "Lagos Dog Carnival", "Dog events Nigeria", "Pet owners Nigeria", "Dog lovers Lagos", "Guinness World Record dog gathering", "My Dog and I"],
  authors: [{ name: "My Dog and I Team" }],
  creator: "My Dog and I",
  publisher: "My Dog and I",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased flex flex-col",
          outfit.variable
        )}
      >
        <Navigation />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
