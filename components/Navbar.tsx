"use client";

import Container from "@/components/Container";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `transition ${
      pathname === path
        ? "text-blue-600 font-semibold"
        : "hover:text-blue-600"
    }`;

  return (
    <header className="fixed top-0 w-full bg-white border-b z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* logo */}
          <Link href="/" className="font-semibold text-lg leading-none">
            Eduardo Agustí
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/manifesto" className={linkClass("/manifesto")}>
              My UX Manifesto
            </Link>

            <Link href="/work" className={linkClass("/work")}>
              Work
            </Link>

            <Link href="/about" className={linkClass("/about")}>
              About
            </Link>

            <a
              href="/EduardoAgusti_UXPM_2026.pdf"
              download
              className="group flex items-center gap-2 font-semibold hover:text-blue-600 transition"
            >
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transition group-hover:translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeWidth={2} d="M12 16V4m0 12l-4-4m4 4l4-4M4 20h16" />
              </svg>
            </a>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </Container>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <Container>
            <nav className="flex flex-col gap-6 py-6 text-lg">
              <Link
                href="/manifesto"
                onClick={() => setOpen(false)}
                className={linkClass("/manifesto")}
              >
                My UX Manifesto
              </Link>

              <Link
                href="/work"
                onClick={() => setOpen(false)}
                className={linkClass("/work")}
              >
                Work
              </Link>

              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className={linkClass("/about")}
              >
                About
              </Link>

              <a
                href="/EduardoAgusti_UXPM_2026.pdf"
                download
                className="font-semibold text-blue-600"
              >
                Download CV
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}