// src/app/work/page.tsx
import Container from "@/components/Container";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";


export default function WorkPage() {
  return (
    <main>
      <section className="py-24">
        
        <Container>

          {/* header */}
          <div className="mb-16 max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Selected Work
            </h1>
            <p className="text-gray-600 leading-relaxed">
              A selection of projects where I have worked on product design, user experience, and interface development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
  {projects.map((p) => (
    <ProjectCard key={p.slug} project={p} />
  ))}
</div>

        </Container>

      </section>
    </main>
  );
}