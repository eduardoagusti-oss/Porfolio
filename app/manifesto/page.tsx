import Container from "@/components/Container";

export default function ManifestoPage() {
  return (
    <main className="pt-16">

      <section className="py-24">
        <Container>

          <div className="max-w-3xl">

            {/* TITLE */}
            <h1 className="text-3xl md:text-4xl font-semibold mb-6">
              My UX Manifesto
            </h1>

            {/* INTRO */}
            <p className="text-gray-600 leading-relaxed mb-6">
              I design from observed behavior, not from declared opinions.
            </p>

            <p className="text-gray-600 leading-relaxed mb-12">
              Users are experts in their problems, but not in the solutions. 
              Instead of asking what they want, I focus on understanding what they do, 
              where they struggle, and how they behave in real contexts.
            </p>

            {/* PRINCIPLES */}
            <h2 className="text-xl font-semibold mb-4">
              Principles
            </h2>

            <ul className="space-y-3 text-gray-600 mb-12">
              <li>• I observe behavior, not opinions</li>
              <li>• Real actions matter more than declared intentions</li>
              <li>• Every interaction is data</li>
              <li>• Friction is measured, not reported</li>
              <li>• The goal is not to be right, but to be less wrong over time</li>
            </ul>

            {/* RESEARCH CRITIQUE */}
            <h2 className="text-xl font-semibold mb-4">
              Rethinking Traditional Research
            </h2>

            <p className="text-gray-600 mb-6">
              Traditional methods like interviews, surveys or focus groups can be useful, 
              but they often capture rationalized answers rather than real behavior.
            </p>

            <ul className="space-y-2 text-gray-600 mb-12">
              <li>• Memory bias and reconstructed explanations</li>
              <li>• Social desirability in responses</li>
              <li>• Group influence in collective sessions</li>
            </ul>

            <p className="text-gray-600 mb-12 italic">
              People explain decisions that are often made unconsciously.
            </p>

            {/* METHODOLOGY */}
<h2 className="text-xl font-semibold mb-4">
  How I Work
</h2>

<div className="space-y-10 text-gray-600 mb-12">

  {/* Contextual Research */}
  <div>
    <p className="font-medium mb-2">Contextual Research</p>
    <ul className="space-y-1 text-sm">
      <li>• Understanding users in real environments</li>
      <li>• Identifying workflows and constraints</li>
      <li>• Observing decision-making in context</li>
    </ul>
  </div>

  {/* Behavior */}
  <div>
    <p className="font-medium mb-2">Behavior Analysis</p>
    <ul className="space-y-1 text-sm">
      <li>• Navigation flows</li>
      <li>• Scroll depth</li>
      <li>• Click patterns & rage clicks</li>
    </ul>
  </div>

  {/* Funnel */}
  <div>
    <p className="font-medium mb-2">Funnel Analysis</p>
    <ul className="space-y-1 text-sm">
      <li>• Drop-offs per step</li>
      <li>• Friction points</li>
      <li>• Micro vs macro conversions</li>
    </ul>
  </div>

  {/* Metrics */}
  <div>
    <p className="font-medium mb-2">Actionable Metrics</p>
    <ul className="space-y-1 text-sm">
      <li>• Conversion rate by segment</li>
      <li>• Time to complete tasks</li>
      <li>• Error rate & retention</li>
    </ul>
  </div>

</div>

            {/* DIFFERENTIATOR */}
            <p className="text-gray-600 mb-12">
              I don’t focus on vanity metrics, but on metrics that explain behavior.
            </p>

            {/* EXPERIMENTATION */}
            <h2 className="text-xl font-semibold mb-4">
              Continuous Experimentation
            </h2>

            <p className="text-gray-600 mb-6">
              My process is based on iteration: hypothesis → test → learning → refinement. 
              I don’t aim to design the perfect solution, but the next testable one.
            </p>

            <p className="text-gray-600 mb-12 italic">
              I’m not trying to be right, I’m trying to be less wrong with every iteration.
            </p>

            {/* TOOLS */}
            <h2 className="text-xl font-semibold mb-4">
              Tools
            </h2>

            <ul className="space-y-2 text-gray-600 mb-12">
              <li>• Hotjar (heatmaps, recordings)</li>
              <li>• Google Analytics / GA4</li>
              <li>• A/B testing</li>
            </ul>

            {/* FINAL NOTE */}
            <p className="text-gray-600">
              I don’t reject qualitative research, but I use it strategically. 
              I prioritize behavioral evidence in real contexts over opinions in artificial ones.
            </p>

          </div>

        </Container>
      </section>
      

    </main>
  );
}