import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";



export const metadata = {
  title: "Google Clone",
  description: "Open source google search clone",
};

{/* <meta name="google-site-verification" content="fMKcn7IOkwXMG5UuFI0e41yhaQrdpU9xz1fn-EUu7TM" /> */}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="relative min-h-screen"
      >
        {/* <meta name="google-site-verification" content="fMKcn7IOkwXMG5UuFI0e41yhaQrdpU9xz1fn-EUu7TM" /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
