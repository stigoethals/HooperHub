import Link from "next/link";

export default function DocsPage() {
  return (
    <main className="min-h-screen w-full max-w-3xl mx-auto py-24 px-6">
      <h1 className="text-3xl font-semibold mb-4">Documentation</h1>

      <p className="text-lg text-zinc-700 mb-6">
        Welcome to the HooperHub documentation. This page contains starter notes to help users get
        started, configure the app, and find common answers.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">Getting Started</h2>
        <p className="text-zinc-600">
          Install and open the app by clicking <Link href="/app">Open App</Link> in the header. For
          local development run <code>npm run dev</code> and visit <code>http://localhost:3000</code>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">Usage</h2>
        <p className="text-zinc-600">
          HooperHub helps you manage scoring. This section will describe the main workflows, how to
          create matches, and how to record scores.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">Configuration</h2>
        <p className="text-zinc-600">
          Describe configuration options here (env vars, app settings, integrations). Add examples
          and recommended defaults.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">FAQ</h2>
        <p className="text-zinc-600">Add frequently asked questions and troubleshooting tips here.</p>
      </section>

      <div className="mt-6">
        <Link href="/" className="text-sm text-zinc-700 hover:underline">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}
