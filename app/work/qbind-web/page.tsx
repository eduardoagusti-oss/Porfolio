import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function QbindPage() {
  return (
    <main>

      {/* HERO */}
      <section
        className="h-[50vh] bg-cover bg-center relative text-white flex items-center"
        style={{ backgroundImage: "url('/images/QbindPageHero.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <Container>
          <div className="relative max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              QBind Webpage
            </h1>
            <p className="text-lg text-gray-200">
              UX/UI Design · Web Design · Figma · SEO
            </p>
          </div>
        </Container>
      </section>

      {/* OVERVIEW + PROBLEM */}
      <section className="pt-16 pb-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-16">

            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Redesign and modernization of the QBind website to improve clarity,
                modernize the interface, and optimize SEO.
              </p>

              <ul className="text-sm text-gray-500 space-y-2">
                <li><strong>Role:</strong> UX/UI Designer</li>
                <li><strong>Duration:</strong> 3 months</li>
                <li><strong>Tools:</strong> Figma, Hotjar, Trello</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Problem</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The existing website had issues related to structure, clarity, and SEO,
                making it difficult for users to navigate and understand the product.
              </p>

              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Outdated visual design</li>
                <li>Poor SEO structure</li>
                <li>Weak mobile experience</li>
              </ul>
            </div>

          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-gray-50">
        <Container>

          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Design Process
            </h2>

            <p className="text-gray-600 leading-relaxed">
              The project followed an iterative process with continuous stakeholder
              feedback. Wireframes, prototypes, and UI were refined progressively
              to align business goals with user needs.
            </p>
          </div>

          <img
            src="/images/QbindPageBacklog.webp"
            className="w-full rounded-xl"
          />

        </Container>
      </section>

      {/* ARCHITECTURE */}
      <section className="py-24">
        <Container>

          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Architecture
            </h2>

            <p className="text-gray-600 leading-relaxed">
              The information architecture was reorganized to improve clarity,
              navigation flow, and SEO structure.
            </p>
          </div>

          <img
            src="/images/QbindPageArchitecture.webp"
            className="w-full rounded-xl"
          />

        </Container>
      </section>

      {/* WIREFRAMES */}
      <section className="py-24 bg-gray-50">
        <Container>

          <h2 className="text-2xl font-semibold mb-8">
            Wireframes
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <img src="/images/w1.webp" className="rounded-xl" />
            <img src="/images/w2.webp" className="rounded-xl" />
            <img src="/images/w3.webp" className="rounded-xl" />
            <img src="/images/w4.webp" className="rounded-xl" />
          </div>

        </Container>
      </section>

      {/* DESIGN SYSTEM */}
      <section className="py-24">
        <Container>

          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Design System
            </h2>

            <p className="text-gray-600 leading-relaxed">
              A component-based system was created to ensure consistency and
              scalability across the product.
            </p>
          </div>

          <img
            src="/images/DesignSystem.webp"
            className="w-full rounded-xl"
          />

        </Container>
      </section>

      {/* UI */}
      <section className="py-24 bg-gray-50">
        <Container>

          <h2 className="text-2xl font-semibold mb-8">
            UI Design
          </h2>

          <div className="space-y-10">
            <img src="/images/About.webp" className="rounded-xl" />
            <img src="/images/Clients.webp" className="rounded-xl" />
          </div>

        </Container>
      </section>

      {/* RESPONSIVE */}
      <section className="py-24">
        <Container>

          <h2 className="text-2xl font-semibold mb-8">
            Responsive Design
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <img src="/images/responsive-1.webp" className="rounded-xl" />
            <img src="/images/ResponsiveFonts.webp" className="rounded-xl" />
          </div>

        </Container>
      </section>

      {/* SEO */}
      <section className="py-24 bg-gray-50">
        <Container>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">
              SEO Strategy
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Clear content hierarchy (H1, H2, H3)</li>
              <li>Keyword-oriented structure</li>
              <li>SEO-friendly URLs</li>
              <li>Improved internal linking</li>
              <li>Mobile-first optimization</li>
            </ul>

          </div>

        </Container>
      </section>

      {/* RESULTS */}
      <section className="py-24">
        <Container>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">
              Results & Learnings
            </h2>

            <p className="text-gray-600 leading-relaxed">
              The redesign improved clarity, scalability, and SEO performance.
              The project reinforced the importance of combining UX thinking,
              business goals, and technical constraints.
            </p>
          </div>

        </Container>
      </section>

      {/* MORE PROJECTS */}
      <section className="py-24 bg-gray-50">
        <Container>

          <h2 className="text-2xl font-semibold mb-8">
            More Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {projects
              .filter((p) => p.slug !== "qbind-web")
              .slice(0, 2)
              .map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
          </div>

        </Container>
      </section>

    </main>
  );
}