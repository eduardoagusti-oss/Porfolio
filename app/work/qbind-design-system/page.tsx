import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function DesignSystemPage() {
  return (
    <main className="pt-16">

      {/* HERO */}
      <section
        className="h-[70vh] bg-cover bg-center relative text-white flex items-center"
        style={{ backgroundImage: "url('/images/Cover2.webp')" }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <Container>
          <div className="relative max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              QBind Design System
            </h1>
            <p className="text-gray-200">
              Product Design · Design System · Figma · 2025
            </p>
          </div>
        </Container>
      </section>

      {/* CONTEXT + PROBLEM */}
      <section className="pt-16 pb-24">
        <Container>

          <div className="grid md:grid-cols-2 gap-16">

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Context
              </h2>

              <p className="text-gray-600 leading-relaxed">
                As the CRM evolved, the interface became increasingly complex,
                with multiple modules and patterns developed independently.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Problem
              </h2>

              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Inconsistent UI across modules</li>
                <li>Hard to scale new features</li>
                <li>Slow design & development workflows</li>
              </ul>
            </div>

          </div>

        </Container>
      </section>

      {/* GOAL */}
      <section className="py-24 bg-gray-50">
        <Container>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">
              Goal
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Establish a unified system to standardize UI components,
              improve usability, and enable scalability across the platform.
            </p>

          </div>

        </Container>
      </section>

      {/* FOUNDATIONS */}
      <section className="py-24">
        <Container>

          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Foundations
            </h2>

            <p className="text-gray-600">
              The system was built on core foundations such as color,
              typography, spacing and iconography.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <img src="/images/DesignSystemColors.webp" className="rounded-xl" />
            <img src="/images/DesignSystemTypography.webp" className="rounded-xl" />
            <img src="/images/DesignSystemIcons.webp" className="rounded-xl" />
            <img src="/images/DesignSystemShadows.webp" className="rounded-xl" />
          </div>

        </Container>
      </section>

      {/* COMPONENTS */}
      <section className="py-24 bg-gray-50">
        <Container>

          <h2 className="text-2xl font-semibold mb-8">
            Components
          </h2>

          <div className="grid md:grid-cols-2 gap-16">

            <div>
              <h3 className="font-semibold mb-3">Core Components</h3>
              <p className="text-gray-600">
                Buttons, inputs, labels and selectors defined the base
                for consistency across the platform.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Complex Components</h3>
              <p className="text-gray-600">
                Components were combined into tables, workflows and
                navigation systems to support complex use cases.
              </p>
            </div>

          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <img src="/images/DesignSystemButtons.webp" className="rounded-xl" />
            <img src="/images/DesignSystemForm.webp" className="rounded-xl" />
          </div>

        </Container>
      </section>

      {/* DATA */}
      <section className="py-24">
        <Container>

          <h2 className="text-2xl font-semibold mb-8">
            Data Visualization
          </h2>

          <p className="text-gray-600 max-w-3xl mb-10">
            Special attention was given to presenting complex data in a clear,
            structured and actionable way.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <img src="/images/DesignSystemTables.webp" className="rounded-xl" />
            <img src="/images/DesignSystemTootips.webp" className="rounded-xl" />
          </div>

        </Container>
      </section>

      {/* SYSTEM IN PRODUCT */}
      <section className="py-24 bg-gray-50">
        <Container>

          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              System in Product
            </h2>

            <p className="text-gray-600">
              The system was applied across dashboards, forms and data tables,
              ensuring consistency and enabling faster feature development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <img src="/images/DesignData.webp" className="rounded-xl" />
            <img src="/images/Data Analysis.webp" className="rounded-xl" />
          </div>

        </Container>
      </section>

      {/* RESULTS */}
      <section className="py-24">
        <Container>

          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-6">
              Impact & Learnings
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              The system improved consistency, scalability and collaboration
              between design and development.
            </p>

            <p className="text-gray-600">
              It reinforced the importance of system thinking in complex,
              modular SaaS products.
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
  .filter((p) => p.slug !== "qbind-design-system")
  .sort(() => 0.5 - Math.random())
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