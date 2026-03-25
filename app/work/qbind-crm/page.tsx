import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function CRMPage() {
  return (
    <main>

      {/* HERO */}
      <section
        className="h-[50vh] bg-cover bg-center relative text-white flex items-center"
        style={{ backgroundImage: "url('/images/QbindCRMHero.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <Container>
          <div className="relative max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              QBind CRM
            </h1>
            <p className="text-gray-200">
              Product Design · B2B SaaS · Design System · 2025
            </p>
          </div>
        </Container>
      </section>

      {/* OVERVIEW */}
      <section className="pt-16 pb-24">
        <Container>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">
              Overview
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              QBind CRM is a B2B SaaS platform designed for insurance brokers
              and MGAs, enabling companies to manage clients, policies,
              operations, and workflows through a modular system.
            </p>

            <p className="text-gray-600 leading-relaxed">
              The product is used by multiple companies with different
              configurations, making scalability, consistency and usability
              key challenges.
            </p>
          </div>

        </Container>
      </section>

      {/* PROBLEM */}
      <section className="py-24 bg-gray-50">
        <Container>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">
              Problem
            </h2>

            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Interface complexity due to multiple modules</li>
              <li>Inconsistencies across screens and workflows</li>
              <li>Hard to scale for different clients</li>
              <li>Low usability in data-heavy interfaces</li>
            </ul>

          </div>

        </Container>
      </section>

      {/* ROLE */}
      <section className="py-24">
        <Container>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">
              My Role
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              I worked primarily as a Product Designer, focusing on improving
              usability, consistency, and scalability of the CRM.
            </p>

            <p className="text-gray-600 leading-relaxed">
              I also contributed to product decisions and delivery processes,
              collaborating closely with stakeholders and development teams.
            </p>

          </div>

        </Container>
      </section>

      {/* DESIGN WORK */}
      <section className="py-24 bg-gray-50">
        <Container>

          <h2 className="text-2xl font-semibold mb-8">
            Design Work
          </h2>

          <div className="space-y-12 max-w-3xl">

            <p className="text-gray-600 leading-relaxed">
              I designed new modules, dashboards, tables and workflows,
              focusing on clarity and usability in complex data environments.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Special attention was given to improving data tables,
              filtering systems and navigation patterns to reduce cognitive load.
            </p>

          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <img src="/images/CRMDashboard.png" className="rounded-xl" />
            <img src="/images/PoliciesScreen.png" className="rounded-xl" />
          </div>

        </Container>
      </section>

      {/* DESIGN SYSTEM */}
      <section className="py-24">
        <Container>

          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              System Thinking
            </h2>

            <p className="text-gray-600 leading-relaxed">
              A scalable design system was developed to unify UI components
              and ensure consistency across the platform.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              This system evolved into a dedicated design system to support scalability
              across the product.
            </p>

            <a
              href="/work/qbind-design-system"
              className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-black hover:text-blue-600 transition group"
            >
              View Design System case study

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <img
            src="/images/Cover.png"
            className="rounded-xl w-full"
          />

        </Container>
      </section>

      {/* IMPACT */}
      <section className="py-24 bg-gray-50">
        <Container>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">
              Impact & Learnings
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              The work improved UI consistency, scalability and usability
              across the CRM platform.
            </p>

            <p className="text-gray-600 leading-relaxed">
              The project reinforced the importance of system thinking,
              collaboration and designing for complex, evolving products.
            </p>

          </div>

        </Container>
      </section>

      {/* MORE PROJECTS */}
      <section className="py-24">
        <Container>

          <h2 className="text-2xl font-semibold mb-8">
            More Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {projects
              .filter((p) => p.slug !== "qbind-crm")
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