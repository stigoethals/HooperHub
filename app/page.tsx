import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-3xl mx-auto flex items-center justify-between py-4 px-16">
          <a href="/" className="text-lg font-bold text-black">HooperHub</a>
          <div className="flex items-center gap-3">
            <a href="/docs" className="text-sm font-medium text-zinc-950 hover:underline">Docs</a>
            <a
              className="flex h-8 items-center justify-center gap-2 rounded-full bg-foreground px-3 text-sm text-background transition-colors hover:bg-[#383838]"
              href="/app"
            >
              Open App
            </a>
          </div>
        </div>
      </header>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black">
            HooperHub, an online scoring tool.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600">
            Looking for a starting point or more instructions? Head over to the{" "}
            <a
              href="/docs"
              className="font-medium text-zinc-950"
            >
              Documentation.
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
