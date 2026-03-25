import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function IAVPage() {
  return (
    <main>
      {/* HERO */}
      <section
        className="h-[70vh] bg-cover bg-center relative text-white flex items-center"
        style={{ backgroundImage: "url('/images/IAVhero.png')" }}
      >
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              IAV Marketplace
            </h1>

            <p className="text-gray-300 mb-6">
              Product Design · Frontend Development · MVP · 2025
            </p>

            <p className="text-gray-400 mb-8">
              From a marketplace concept to a focused MVP: redesigning the
              purchase flow of custom playmats into a simpler online
              configurator.
            </p>

            <a
              href="https://iav-git-main-eduardoagusti-oss-projects.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-semibold hover:text-blue-400 transition"
            >
              View Live Demo
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
      <section className="pt-16 pb-24">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold mb-4">Context</h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              The project started as a broader e-commerce concept for custom
              playmats aimed at trading card game players. The initial vision
              combined a marketplace for artist-created products with an online
              configurator that allowed users to personalize their own playmats.
            </p>

            <p className="text-gray-600 leading-relaxed">
              As the concept evolved, it became clear that the marketplace,
              payment flow and order tracking introduced a significant level of
              operational and product complexity.
            </p>
          </div>
        </Container>
      </section>

      {/* INITIAL VISION */}
      <section className="py-24 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-semibold mb-6">Initial Concept</h2>

          <p className="text-gray-600 max-w-3xl mb-10">
            The original product was designed as a complete marketplace
            experience, where users could browse artist-made playmats, customize
            products, complete payment and follow the status of their orders in
            one platform.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <h3 className="font-semibold mb-2">Landing Page</h3>
              <p className="text-gray-600 text-sm">
                 Entry point to explain the product, showcase value and guide users into the experience.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2"> Marketplace</h3>
              <p className="text-gray-600 text-sm">
                Product discovery and browsing experience including artist content and customizable items.
                
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Payment Flow</h3>
              <p className="text-gray-600 text-sm">
                 A complete checkout experience with integrated payment and order
                confirmation.
              </p>
            </div>
          </div>

         {/* 🔥 3 imágenes */}
    <div className="grid md:grid-cols-3 gap-6">

      <div>
        <img
          src="/images/ecommerce-desktop-1.png"
          className="rounded-xl w-full mb-3"
          alt="Marketplace flow"
        />
      
      </div>

      <div>
        <img
          src="/images/ecommerce-desktop-1-1.png"
          className="rounded-xl w-full mb-3"
          alt="Order tracking"
        />
        
      </div>
      <div>
        <img
          src="/images/Desktop - 2.png"
          className="rounded-xl w-full mb-3"
          alt="Payment flow"
        />
        
      </div>

    </div>
        </Container>
      </section>

      {/* CHALLENGE */}
<section className="py-24">
  <Container>

    <h2 className="text-2xl font-semibold mb-6">
      Product Challenge
    </h2>

    <p className="text-gray-600 max-w-3xl mb-8">
      The broader concept solved many parts of the customer journey, but
      it also introduced complexity in business model, operations and
      development.
    </p>

    <ul className="list-disc pl-5 text-gray-600 space-y-2 max-w-3xl mb-12">
      <li>Too many moving parts for an initial release</li>
      <li>Marketplace + customization + logistics combined</li>
      <li>Heavy dependency on production and fulfillment</li>
      <li>Risk of overbuilding before validation</li>
    </ul>

    

  </Container>
</section>

      {/* PIVOT */}
      <section className="py-24 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-semibold mb-6">
            Simplifying the Concept
          </h2>

          <p className="text-gray-600 max-w-3xl mb-4">
            Instead of building the full marketplace, the concept was simplified
            into a focused MVP centered on the configurator itself.
          </p>

          <p className="text-gray-600 max-w-3xl mb-10">
            This decision made it possible to concentrate on the core problem:
            simplifying a process that is still unnecessarily manual and
            fragmented in the current market. The value of the product shifted
            from being a marketplace to being a clearer and faster way to create
            and order custom playmats online.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="/images/iavHome.png"
              className="rounded-xl"
              alt="Initial full concept"
            />
            <img
              src="/images/iavUpload.png"
              className="rounded-xl"
              alt="Simplified MVP configurator"
            />
          </div>
          <br></br>
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="/images/iavDatos.png"
              className="rounded-xl"
              alt="Initial full concept"
            />
            <img
              src="/images/iavMailCon.png"
              className="rounded-xl"
              alt="Simplified MVP configurator"
            />
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <Container>
          <h2 className="text-2xl font-semibold mb-6">Process</h2>

          <p className="text-gray-600 max-w-3xl mb-10">
            The project evolved through an iterative product design process,
            moving from a broad concept toward a more viable MVP by reducing
            scope and focusing on the most valuable interaction.
          </p>

          <div className="space-y-10 max-w-3xl">
            <div>
              <h3 className="font-semibold mb-3">Research & Opportunity</h3>
              <p className="text-gray-600">
                I reviewed the initial concept from both business and user
                perspectives, identifying where the experience delivered the most
                value and where complexity was creating unnecessary friction.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Marketplace Experience</h3>
              <p className="text-gray-600">
                Early design work explored product discovery, artist visibility,
                customization, checkout and order follow-up as one connected
                journey. This helped define the broader ecosystem before
                narrowing the scope.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">MVP Prioritization</h3>
              <p className="text-gray-600">
                I reduced the product to the configurator flow, identifying it
                as the clearest and most differentiating part of the experience.
                The goal was to validate the core value proposition before
                investing in a full marketplace.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">
                Service Integration Thinking
              </h3>
              <p className="text-gray-600">
                Instead of building every operational layer internally, the
                solution was designed around integrations: payment through an
                external API and production handled externally. This kept the
                product focused while reducing implementation and operational
                overhead.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* MVP */}
      <section className="py-24 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-semibold mb-8">
            MVP: Online Configurator
          </h2>

          <p className="text-gray-600 max-w-3xl mb-6">
            The final MVP focuses on a streamlined online configurator that
            simplifies the current process of ordering custom playmats. Instead
            of asking users to manage requests through fragmented channels, the
            product centralizes customization, payment and order submission in a
            single flow.
          </p>

          <p className="text-gray-600 max-w-3xl mb-6">
            The experience was designed to be visual, direct and lightweight,
            reducing cognitive load while keeping the customization process
            flexible enough for the user.
          </p>
          <p className="text-gray-600 max-w-3xl mb-10">
            Find below the orgininal Arquitecture and highlighted in purple the layers that were implemented in the MVP, focused on the configurator and externalizing payment and production.
          </p>

          <div className="grid md:grid-cols-1 gap-8">
            <img
              src="/images/Arquitectura de Información - IAV Marketplace.png"
              className="rounded-xl"
              alt="Configurator UI screen 1"
            />

          </div>
        </Container>
      </section>

      {/* PAYMENT + ORDER FLOW */}
      <section className="py-24">
        <Container>
          <h2 className="text-2xl font-semibold mb-6">
            Payment & Order Flow
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="font-semibold mb-3">Payment Integration</h3>
              <p className="text-gray-600">
                Rather than designing a complex custom payment system, the MVP
                uses an external payment API to resolve checkout reliably and
                keep the experience focused on confirmation and conversion.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Production Externalization</h3>
              <p className="text-gray-600">
                Production and fulfillment were intentionally externalized. This
                allowed the product to avoid operational overload and focus on
                what it does best: collecting the right configuration, validating
                the order, and passing it efficiently into the production
                workflow.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* DEVELOPMENT */}
      <section className="py-24 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-semibold mb-6">Development Layer</h2>

          <p className="text-gray-600 mb-10">
            The product has been developed as a modern web application using JavaScript with Next.js (App Router) as the core framework, enabling a hybrid architecture that combines server-side and client-side rendering. The user interface is built with React and styled using TailwindCSS, allowing for a fast and responsive design system. A key component of the platform is the custom product configurator, which leverages the browser’s Canvas API to handle real-time image manipulation, including scaling, positioning, overlay application, and high-resolution export suitable for printing.

For state management and initial persistence, localStorage is used to simulate a shopping cart in this MVP stage. On the backend side, Next.js API Routes handle order processing and business logic. Image handling and storage are managed through the Cloudinary API, enabling efficient upload, storage, and delivery of user-generated assets. For transactional workflows, the system integrates Stripe to process payments securely, along with webhooks to confirm successful transactions and trigger post-payment actions such as order handling. Additionally, services like Resend are used to send order notifications via email.

Overall, the application combines an interactive frontend, client-side graphics processing, and a lightweight but scalable backend architecture, designed to validate the business model while remaining ready for future expansion.
          </p>

            <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-semibold mb-3">Frontend</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Component-based architecture</li>
                <li>Interactive configurator flow</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Backend / Product Logic</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Order and configuration handling</li>
                <li>Payment API integration</li>
                <li>MVP-oriented architecture</li>
                <li>Connection to external production workflow</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* LEARNINGS */}
      <section className="py-24">
        <Container>
          <h2 className="text-2xl font-semibold mb-6">
            Learnings
          </h2>

          <div className="space-y-6 text-gray-600">

  <p>
    This project reinforced the importance of reducing product scope to focus on the core value proposition. 
    Instead of building a complete marketplace, simplifying the concept into a configurator made it possible 
    to validate the idea faster and with less operational complexity.
  </p>

  <p>
    From a product perspective, one of the key learnings was understanding how different layers 
    (marketplace, payments, logistics, data management) quickly compound into a complex system. 
    Designing a product is not only about user experience, but also about defining what should be 
    built and what should be delegated to external services.
  </p>

  <p>
    On the technical side, building the configurator using the Canvas API highlighted the challenges 
    of working with real-time graphics in the browser, especially in terms of performance, state synchronization 
    and exporting high-resolution assets. This required balancing user experience with technical constraints.
  </p>

  <p>
    The integration of external services such as Stripe and Cloudinary demonstrated the value of relying on 
    existing infrastructure instead of reinventing complex systems. This approach allowed the product to remain 
    lightweight while still supporting key functionalities like payments and asset management.
  </p>

  <p>
    Another key takeaway was the importance of designing systems that can evolve. Even though the MVP uses 
    simple solutions like localStorage for state persistence, the architecture is structured in a way that 
    allows future migration to more robust backend solutions without major redesign.
  </p>

  <p>
    Overall, the project emphasized a shift from designing interfaces to designing systems: understanding how 
    frontend interactions, backend logic, third-party services and business operations connect to form a cohesive product.
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
              .filter((p) => p.slug !== "iav")
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