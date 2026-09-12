import Link from "next/link";
import Pipeline from "./components/Pipeline";
export default function Home() {


  return (
    <main className="min-h-screen bg-[#111111] text-[#f5f2e8]">
      <div className="mx-auto max-w-7xl px-8 py-10">

        {/* Header */}
        <div className="mb-20">
          <div className="mb-10 flex items-center justify-between">
            <span className="text-sm font-medium tracking-tight">
              JAT
            </span>

            <span className="text-xs uppercase tracking-[0.2em] text-[#77746c]">
              Career OS
            </span>
          </div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-lime-400">
            Career Command Center
          </p>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="text-5xl font-semibold tracking-tight">
              Your Career Pipeline
            </h1>

            <Link
              href="/add" className="rounded-sm bg-lime-400 px-5 py-3 text-sm font-medium text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:bg-lime-300">
              + Add application
            </Link>
          </div>

          <p className="mt-3 max-w-lg text-[#a7a49b]">
            Track every opportunity. Stay organized. Keep moving.
          </p>
        </div>

        {/* Pipeline */}
        <section>
          <Pipeline />
        </section>

      </div>
    </main>
  );
}