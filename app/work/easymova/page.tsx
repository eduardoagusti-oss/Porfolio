import Container from "@/components/Container";

export default function EasymovaPage() {
  return (
    <main>

      {/* HERO */}
      <section
        className="h-[70vh] bg-cover bg-top relative text-white flex items-center"
        style={{ backgroundImage: "url('/images/easymova-hero-image.webp')" }}
      >
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">
              Easymova - From Manual Service to Scalable Digital Product
            </h1>

            <p className="text-gray-300 mb-6">
              Product Design · Customer Journey Map · Frontend · SEO · MVP · 2026
            </p>

            <p className="text-gray-400">
              Transforming a manual service into a scalable digital product
              through structured user flows and product thinking.
            </p>
            <a
              href="https://easymova.vercel.app/"
              target="_blank"
              className="inline-flex items-center gap-2 font-semibold hover:text-blue-400 transition"
            >
              View Live Product →

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </Container>
      </section>


      {/* CONTEXT */}
      <section className="py-24">
  <Container>
    <div className="max-w-5xl">

      {/* CONTEXT */}
      <h2 className="text-2xl font-semibold mb-6">Context</h2>

      <p className="text-gray-600 mb-4">
        Easymova is an early-stage startup focused on helping immigrants in Spain 
        navigate complex administrative processes such as NIE or empadronamiento.
      </p>

      <p className="text-gray-600 mb-4">
        The initial product was a static web platform built with HTML and CSS, 
        primarily designed as an informational landing page.
      </p>

      <p className="text-gray-600 mb-16">
        The goal was to evolve this initial setup into a more structured digital product 
        that could improve conversion and increase the visibility of the business.
      </p>

      {/* TWO COLUMNS */}
      <div className="grid md:grid-cols-2 gap-12">

        {/* STARTING POINT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Starting Point
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li>• No clear user journey</li>
            <li>• No entry point or guidance</li>
            <li>• No segmentation</li>
            <li>• Conversion depended on manual conversations</li>
            <li>• Low perceived value</li>
          </ul>
        </div>

        {/* PRODUCT INSIGHT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Product Insight
          </h3>

          <p className="text-gray-600 text-lg">
            The problem wasn’t access to information, it was lack of guidance.
          </p>

          {/* opcional: segunda línea */}
          <p className="text-gray-500 mt-4">
            Users didn’t need more content, but a structured path to complete their goals.
          </p>
        </div>

      </div>

    </div>
  </Container>
</section>
{/* Customer Journey Map */}
<section className="py-24 bg-gray-50">
  <Container>
    <div className="max-w-4xl">

      <h2 className="text-2xl font-semibold mb-6">
        Defining the User Journey
      </h2>

      <p className="text-gray-600 mb-6">
        Based on the insight, the focus shifted from providing information 
        to guiding users through a structured experience.
      </p>

      <p className="text-gray-600 mb-10">
        The goal was to define a clear journey that reduces uncertainty, 
        helps users make decisions and increases conversion.
      </p>

      <ul className="space-y-4 text-gray-600 mb-12">
        <li>• Define a clear entry point for users</li>
        <li>• Guide users step by step through the process</li>
        <li>• Introduce segmentation based on user needs</li>
        <li>• Reduce dependency on manual interactions</li>
        <li>• Structure the experience around decision-making moments</li>
      </ul>

      {/* 🔥 USER JOURNEY IMAGE */}
      <div className="mt-12">
        <img
          src="/images/easymova/journey.png"
          alt="User journey"
          className="w-full rounded-xl border border-gray-200"
        />
      </div>

      {/* caption opcional */}
      <p className="text-sm text-gray-500 mt-4">
        Simplified user journey focused on guidance and decision-making.
      </p>

    </div>
  </Container>
</section>

      {/* APPROACH */}
      <section className="py-24 bg-gray-50">
        <Container>

          <h2 className="text-2xl font-semibold mb-6">
            Product Approach
          </h2>

          <ul className="space-y-3 text-gray-600 max-w-3xl">
            <li>• Transform the service into a guided experience</li>
            <li>• Introduce onboarding as the core interaction</li>
            <li>• Reduce dependency on WhatsApp</li>
            <li>• Create SEO-driven entry points</li>
          </ul>

        </Container>
      </section>

      {/* MVP */}
      <section className="py-24">
        <Container>

          <h2 className="text-2xl font-semibold mb-6">MVP</h2>

          <p className="text-gray-600 max-w-3xl mb-10">
            I built a lightweight MVP to validate whether a guided onboarding experience
            improves conversion compared to a manual flow.
          </p>

          {/* IMAGE */}
          <img
            src="/images/easymova/landing.png"
            className="rounded-xl w-full"
            alt="Landing page"
          />

        </Container>
      </section>

      {/* PRODUCT DESIGN */}
      <section className="py-24 bg-gray-50">
        <Container>

          <h2 className="text-2xl font-semibold mb-6">
            Product Design
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12 text-gray-600">

            <div>
              <h3 className="font-semibold mb-3">Before</h3>
              <ul className="space-y-2">
                <li>• Passive browsing</li>
                <li>• High confusion</li>
                <li>• No clear next step</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">After</h3>
              <ul className="space-y-2">
                <li>• Guided experience</li>
                <li>• Clear decisions</li>
                <li>• Reduced cognitive load</li>
              </ul>
            </div>

          </div>

          <img
            src="/images/easymova/onboarding.png"
            className="rounded-xl w-full"
            alt="Onboarding flow"
          />

        </Container>
      </section>

      {/* SEO */}
      <section className="py-24">
        <Container>

          <h2 className="text-2xl font-semibold mb-6">
            Growth Strategy
          </h2>

          <p className="text-gray-600 max-w-3xl mb-10">
            The acquisition strategy focuses on high-intent SEO pages that guide users
            into the onboarding flow.
          </p>

          <img
            src="/images/easymova/seo.png"
            className="rounded-xl w-full"
            alt="SEO pages"
          />

        </Container>
      </section>

      {/* FUTURE */}
      <section className="py-24 bg-gray-50">
        <Container>

          <h2 className="text-2xl font-semibold mb-6">
            Future Iterations
          </h2>

          <ul className="space-y-3 text-gray-600 max-w-3xl">
            <li>• Funnel tracking and analytics</li>
            <li>• CRM and database integration</li>
            <li>• Tiered pricing model</li>
            <li>• Automation (WhatsApp & email)</li>
            <li>• User dashboard</li>
            <li>• Programmatic SEO</li>
          </ul>

        </Container>
      </section>

      {/* LEARNINGS */}
      <section className="py-24">
        <Container>

          <h2 className="text-2xl font-semibold mb-6">
            Learnings
          </h2>

          <div className="space-y-4 text-gray-600 max-w-3xl">

            <p>
              Many product problems are not solved by adding features, but by structuring the user journey.
            </p>

            <p>
              Onboarding is not just UX — it is a conversion and segmentation tool.
            </p>

            <p>
              SEO is not about traffic, but about acquiring users with intent.
            </p>

          </div>

        </Container>
      </section>

    </main>
  );
}