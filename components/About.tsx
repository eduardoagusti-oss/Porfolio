// src/components/About.tsx
import Container from "@/components/Container";

export default function About() {
  const email = "eduardoagusti@gmail.com";
  const linkedin = "https://www.linkedin.com/in/eagustiblasi/";

  return (
    <section id="about" className="py-32 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold mb-6">About</h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              I’m a Product Designer focused on building digital products end-to-end.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              I work across UX, development and product to design and ship solutions that balance user needs, business goals and technical constraints.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              I adapt easily to different environments and enjoy learning new things. This has helped me develop a broad set of skills and move comfortably across different parts of the product.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              I see design as an iterative process, grounded in real user behavior and continuous improvement.
            </p>

            {/* CTA */}
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${email}?subject=Opportunity%20to%20work%20together&body=Hi%20Eduardo,%0D%0A%0D%0AI've%20seen%20your%20portfolio%20and%20I%20think%20we%20could%20work%20together.%0D%0A%0D%0ABest,`}
                aria-label="Send email to Eduardo Agustí"
                className="group inline-flex items-center gap-2 font-semibold text-black hover:text-blue-600 transition"
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

              <p className="text-sm text-gray-500">
                Or reach me at {email}
              </p>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition"
              >
                Connect on LinkedIn

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.22 8h4.54v14H.22V8zm7.98 0h4.35v1.92h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 6.99V22h-4.54v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V22H8.2V8z" />
                </svg>
              </a>
            </div>
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
      </Container>
    </section>
  );
}