// src/components/About.tsx
import Container from "@/components/Container";

export default function About() {
  return (
    <section id="about" className="py-32 bg-white">

      <Container>
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              About
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              I’m a UX/UI designer with 4 years of experience designing digital products. I focus on creating simple, functional, and user-centered experiences.
            </p>

            <p className="text-gray-600 leading-relaxed">
              I’m particularly interested in designing and coordinating digital products. My range of work combines business, technology, and user experience in a clear and efficient way.
            </p>
          </div>

          {/* RIGHT (skills) */}
          <div className="grid grid-cols-2 gap-10">

            <div>
              <h4 className="font-semibold mb-4">UX</h4>
              <ul className="text-gray-500 space-y-2 text-sm">
                <li>User Research</li>
                <li>User Flows</li>
                <li>Wireframes</li>
                <li>Usability Testing</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">UI</h4>
              <ul className="text-gray-500 space-y-2 text-sm">
                <li>Design Systems</li>
                <li>Interaction Design</li>
                <li>Prototyping</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Tools</h4>
              <ul className="text-gray-500 space-y-2 text-sm">
                <li>Figma</li>
                <li>Maze</li>
                <li>Notion</li>
                <li>Hotjar</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Development</h4>
              <ul className="text-gray-500 space-y-2 text-sm">
                <li>Next.js (App Router)</li>
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>Component-based architecture</li>
                <li>API integrations (Stripe, Cloudinary)</li>
              </ul>
            </div>

          </div>

        </div>
        <a
          href="mailto:eduardoagusti@gmail.com?subject=Opportunity%20to%20work%20together&body=Hi%20Eduardo,%0D%0A%0D%0AI've%20seen%20your%20portfolio%20and%20I%20think%20we%20could%20work%20together.%0D%0A%0D%0ABest," className="inline-flex items-center gap-2 mt-6 font-semibold text-black hover:text-blue-600 transition"
        >
          Contact me!

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeWidth={2} d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
        <p className="text-sm text-gray-500 mt-2">
          Or reach me at eduardoagusti@gmail.com
        </p>
      </Container>

    </section>
  );
}