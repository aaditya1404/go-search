import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Google Clone",
  description: "Open source google search clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="relative min-h-screen"
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
