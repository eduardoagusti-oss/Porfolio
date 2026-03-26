// src/app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

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
      <body className="bg-white text-black">

        {/* Navbar global */}
        <Navbar />

        {/* Contenido de cada página */}
        <main className="pt-16">
          {children}
        </main>

        {/* Footer global */}
        <Footer />

        {/* Vercel Web Analytics */}
        <Analytics />

      </body>
    </html>
  );
}