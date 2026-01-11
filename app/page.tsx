import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <Header />
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
