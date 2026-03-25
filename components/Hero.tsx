import Container from "@/components/Container";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url('/images/HeroPortadaPorolio.png')` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* layout */}
      <div className="relative h-full flex items-center">
        <Container>
          <div className="max-w-2xl">
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              UX/UI Designer
            </h1>

            <p className="text-lg md:text-xl mb-10 text-gray-200">
              I design digital products that are clear, useful, and user-centered.
            </p>

            <Link
  href="/work"
  className="inline-flex items-center gap-2 mt-8 px-5 py-3 bg-black text-white font-semibold rounded-full transition-all duration-300 hover:bg-blue-600 hover:scale-105 active:scale-95"
>
  View Projects

  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 transition-transform group-hover:translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeWidth={2} d="M5 12h14M13 5l7 7-7 7" />
  </svg>
</Link>

          </div>
        </Container>
      </div>
    </section>
  );
}