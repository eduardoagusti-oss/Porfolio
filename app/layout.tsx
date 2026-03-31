// src/app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Eduardo Agustí | UX/UI Designer",
  description: "Portfolio de UX/UI Designer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HN6YPD66VP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HN6YPD66VP');
          `}
        </Script>
      </head>

      <body className="bg-white text-black">
        <Navbar />

        <main className="pt-16">
          {children}
        </main>

        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}