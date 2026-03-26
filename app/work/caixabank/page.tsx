import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
export default function CaixaBankCase() {
  return (
    <main>

      {/* HERO */}
      <section
        className="h-[70vh] bg-cover bg-center relative text-white flex items-center"
        style={{ backgroundImage: "url('/images/caixabankcoverblue.webp')" }}
      >
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">
              Caixabank - Payment Splitting Experience
            </h1>

            <p className="text-gray-300 mb-6">
              UX Research · Product Design · 2026
            </p>

            <p className="text-gray-400">
              Redesigning a low-adoption financial feature by focusing on behavioral data 
              and user trust instead of assumptions.
            </p>
          </div>
        </Container>
      </section>

      {/* CONTEXT */}
      <section className="py-24">
        <Container>
          <div className="max-w-3xl">

            <h2 className="text-2xl font-semibold mb-4">Context</h2>

            <p className="text-gray-600 mb-4">
              CaixaBank offers a feature that allows users to split payments into installments. 
              Despite its potential value, adoption was significantly low.
            </p>

            <p className="text-gray-600">
              The goal was to understand why users were not using the feature and identify 
              opportunities to improve adoption through design.
            </p>

          </div>
        </Container>
      </section>

      {/* PROBLEM */}
      <section className="py-24 bg-gray-50">
        <Container>

          <h2 className="text-2xl font-semibold mb-6">
            Problem
          </h2>

          <p className="text-gray-600 max-w-3xl mb-6">
            The low adoption of the feature was not only a usability issue, 
            but also impacted product usage and potential revenue from financing.
          </p>

          <p className="text-gray-600 max-w-3xl">
            Initial hypothesis pointed to two key factors: lack of clarity around 
            the total cost and lack of trust in the financial conditions.
          </p>

        </Container>
      </section>

      {/* RESEARCH */}
      <section className="py-24">
        <Container>

          <h2 className="text-2xl font-semibold mb-6">
            Research Approach
          </h2>

          <p className="text-gray-600 max-w-3xl mb-10">
            Due to the sensitive nature of financial decisions, the research focused on 
            behavioral data and existing product interactions instead of relying solely 
            on declared user feedback.
          </p>

          <div className="space-y-10 max-w-3xl text-gray-600">

            <div>
              <h3 className="font-semibold mb-2">Behavioral Analysis</h3>
              <p>
                Analysis of user interaction within the product to identify friction points 
                and real usage patterns.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Funnel Analysis</h3>
              <p>
                Step-by-step analysis of the flow to detect where users dropped off.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Benchmark</h3>
              <p>
                Review of fintech and digital banking products to identify best practices 
                in transparency and communication.
              </p>
            </div>

          </div>

        </Container>
      </section>

      {/* INSIGHTS */}
      <section className="py-24 bg-gray-50">
        <Container>

          <h2 className="text-2xl font-semibold mb-6">
            Key Insights
          </h2>

          <ul className="space-y-4 text-gray-600 max-w-3xl">
            <li>
              Users do not clearly understand the total cost of splitting payments.
            </li>
            <li>
              There is a lack of trust due to unclear financial conditions.
            </li>
            <li>
              The highest drop-off occurs at the conditions review step.
            </li>
          </ul>

        </Container>
      </section>

      {/* KEY MOMENT */}
<section className="py-24">
  <Container>

    <h2 className="text-2xl font-semibold mb-6">
      Critical Friction Point
    </h2>

    <p className="text-gray-600 max-w-3xl mb-6">
      The funnel analysis revealed a critical drop-off at the conditions review step. 
      While users showed initial interest in splitting a payment, a large percentage 
      abandoned the process when facing financial information.
    </p>

    <p className="text-gray-600 max-w-3xl mb-10">
      To better understand this behavior, I mapped the full funnel and identified 
      specific friction points at each step of the experience.
    </p>

    {/* 🔥 TABLA */}
    <div className="overflow-x-auto">
  <table className="w-full border border-gray-200 rounded-xl overflow-hidden">
    
    <thead className="bg-gray-50 text-left text-sm text-gray-500">
      <tr>
        <th className="px-6 py-4 font-medium">Funnel Step</th>
        <th className="px-6 py-4 font-medium">Users Reached</th>
        <th className="px-6 py-4 font-medium">Drop-off</th>
      </tr>
    </thead>

    <tbody className="text-sm text-gray-700">
      
      <tr className="border-t">
        <td className="px-6 py-4 font-medium">Purchase Details</td>
        <td className="px-6 py-4">214,783</td>
        <td className="px-6 py-4 text-gray-500">128,366 (59.7%)</td>
      </tr>

      <tr className="border-t bg-gray-50/50">
        <td className="px-6 py-4 font-medium">Split Payment</td>
        <td className="px-6 py-4">86,417</td>
        <td className="px-6 py-4 text-gray-500">42,859 (49.59%)</td>
      </tr>

      <tr className="border-t">
        <td className="px-6 py-4 font-medium">
          Conditions Review
        </td>
        <td className="px-6 py-4">43,558</td>
        <td className="px-6 py-4 text-red-500 font-medium">
          32,821 (75.4%)
        </td>
      </tr>

      <tr className="border-t bg-gray-50/50">
        <td className="px-6 py-4 font-medium">
          Operation Confirmation
        </td>
        <td className="px-6 py-4">13,424</td>
        <td className="px-6 py-4 text-gray-400">—</td>
      </tr>

    </tbody>
  </table>
</div>

  </Container>
</section>

      {/* REFRAME */}
<section className="py-24 bg-gray-50">
  <Container>

    <h2 className="text-2xl font-semibold mb-6">
      User Problem Reframed
    </h2>

    <p className="text-gray-600 max-w-3xl mb-6">
      The problem was not just about usability, but about how the experience was structured. 
      The existing flow introduced friction at key decision moments, especially when users 
      needed clarity and reassurance.
    </p>

    <p className="text-gray-600 max-w-3xl mb-6">
      A new funnel was defined to simplify the experience and make decision-making easier. 
      This new structure focused on reducing cognitive load, surfacing key information earlier, 
      and identifying potential pain points across the journey.
    </p>
{/* 🔥 New Funnel */}
    <img
      src="/images/caixabankfunnelnew.webp"
      className="rounded-xl w-full"
      alt="New User Funnel"
    />
    <br />
    <p className="text-gray-600 max-w-3xl">
      Each step of the new funnel was designed with a clear objective: improve understanding, 
      increase trust, and reduce drop-offs.
    </p>

  </Container>
</section>

     {/* DESIGN */}
<section className="py-24">
  <Container>

    <h2 className="text-2xl font-semibold mb-6">
      Design Direction
    </h2>

    <p className="text-gray-600 max-w-3xl mb-6">
      Based on the insights, the design focused on improving clarity, transparency 
      and user control throughout the flow.
    </p>

    <ul className="space-y-4 text-gray-600 max-w-3xl mb-12">
      <li>• Show total cost and monthly payment together</li>
      <li>• Break down financial information clearly</li>
      <li>• Allow users to simulate different scenarios</li>
      <li>• Surface key information before confirmation</li>
    </ul>

    {/* WIREFRAMES */}
    <p className="text-gray-600 max-w-3xl mb-6">
      The process started by defining wireframes for the main funnel, focusing on structure, 
      hierarchy and clarity of information. These wireframes allowed quick validation of 
      key decisions before moving into visual design.
    </p>

    <img
      src="/images/caixabankwireframes.webp"
      className="rounded-xl w-full mb-12"
      alt="Wireframes"
    />

    {/* UI */}
    <p className="text-gray-600 max-w-3xl mb-6">
      Once the wireframes were validated, the interface was designed following the 
      bank’s visual identity, ensuring consistency with the existing product while 
      improving readability and trust in financial information.
    </p>

    <img
      src="/images/caixabankui.webp"
      className="rounded-xl w-full"
      alt="Final UI"
    />

  </Container>
</section>

      {/* LEARNINGS */}
      <section className="py-24 bg-gray-50">
        <Container>

          <h2 className="text-2xl font-semibold mb-6">
            Learnings
          </h2>

          <div className="space-y-4 text-gray-600 max-w-3xl">

            <p>
              Behavioral data is more reliable than declared user feedback 
              when dealing with sensitive topics like finance.
            </p>

            <p>
              The biggest UX problems are often not interaction issues, 
              but trust and comprehension problems.
            </p>

            <p>
              Research methods must adapt to context. Not all methods 
              are suitable for all products.
            </p>

            <p>
              Good design decisions come from understanding where users struggle, 
              not just what they say.
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