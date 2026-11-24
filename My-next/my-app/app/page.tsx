import Link from "next/link";

const journey = [
  { number: "01", title: "Frontend", detail: "HTML · CSS · JavaScript · React", icon: "⌘" },
  { number: "02", title: "Backend", detail: "Python · Django · APIs", icon: "⚙" },
  { number: "03", title: "Languages", detail: "English · Russian", icon: "文" },
  { number: "04", title: "Growth", detail: "Curiosity · Creativity · Practice", icon: "↗" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">
      <section className="soft-grid relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-36">
          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 mb-8">
                <span className="h-2 w-2 rounded-full bg-cyan-300 animate-pulse" /> Developer in progress
              </span>
              <p className="uppercase tracking-[.28em] text-xs font-semibold text-slate-400">Hello, welcome to my space</p>
              <h1 className="mt-5 text-5xl sm:text-6xl xl:text-7xl font-black leading-[1.08] tracking-tight">
                I'm <span className="gradient-text">Mirjalol</span><span className="text-cyan-300">.</span>
              </h1>
              <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-slate-200">Future Full-Stack Developer</h2>
              <p className="mt-6 max-w-xl text-base md:text-lg leading-8 text-slate-400">
                I enjoy turning ideas into useful digital experiences. I'm exploring web development,
                programming and languages while building the skills to create meaningful products.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/skills" className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 font-bold text-slate-950 shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 transition">
                  Explore my skills <span aria-hidden>↗</span>
                </Link>
                <Link href="/contact" className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white hover:bg-white/10 transition">
                  Get in touch
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-500">
                <span>⌁ Curious mind</span><span>⌘ Building projects</span><span>✦ Always learning</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-blue-600/15 blur-3xl" />
              <div className="glass-card relative rounded-3xl p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div className="flex gap-2"><i className="h-3 w-3 rounded-full bg-rose-400"/><i className="h-3 w-3 rounded-full bg-amber-300"/><i className="h-3 w-3 rounded-full bg-emerald-400"/></div>
                  <span className="font-mono text-xs text-slate-500">about-me.ts</span>
                </div>
                <pre className="overflow-x-auto py-7 text-sm sm:text-base leading-8 font-mono">
                  <code>
                    <span className="text-fuchsia-300">const</span> <span className="text-sky-300">developer</span> = {"{"}{"\n"}
                    {"  "}name: <span className="text-emerald-300">"Mirjalol"</span>,{"\n"}
                    {"  "}role: <span className="text-emerald-300">"Full-Stack Developer"</span>,{"\n"}
                    {"  "}interests: [{"\n"}
                    {"    "}<span className="text-amber-200">"Web Development"</span>,{"\n"}
                    {"    "}<span className="text-amber-200">"Python & Django"</span>,{"\n"}
                    {"    "}<span className="text-amber-200">"English & Russian"</span>{"\n"}
                    {"  "}],{"\n"}
                    {"  "}mindset: <span className="text-emerald-300">"Never stop learning"</span>{"\n"}
                    {"}"};
                  </code>
                </pre>
                <div className="flex items-center justify-between border-t border-white/10 pt-5 text-xs">
                  <span className="text-slate-500">~/portfolio</span><span className="text-emerald-300">● Ready to build</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-5 hidden sm:block rounded-2xl border border-cyan-300/20 bg-[#101d32] px-5 py-3 shadow-xl">
                <span className="text-xs text-slate-400">Current focus</span><p className="font-semibold text-cyan-200">Code. Learn. Repeat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 md:py-24">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div><p className="text-sm font-semibold uppercase tracking-[.25em] text-cyan-300">The roadmap</p><h2 className="mt-3 text-3xl md:text-4xl font-bold">My learning journey</h2></div>
          <p className="max-w-md text-sm leading-6 text-slate-400">A little progress every day adds up to something great.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {journey.map((item) => (
            <article key={item.number} className="glass-card rounded-2xl p-6 hover:-translate-y-1 hover:border-cyan-300/30 transition duration-300">
              <div className="flex items-center justify-between"><span className="text-xs font-mono text-cyan-300">{item.number}</span><span className="text-2xl text-sky-200">{item.icon}</span></div>
              <h3 className="mt-7 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
