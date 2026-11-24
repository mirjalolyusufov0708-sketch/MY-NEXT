const skillGroups = [
  { title: "Frontend Development", icon: "✦", description: "Creating clean, responsive and engaging user interfaces.", skills: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS"] },
  { title: "Backend Development", icon: "⌘", description: "Exploring server-side development and application logic.", skills: ["Python", "Django (Learning Goal)", "REST API (Learning Goal)"] },
  { title: "Tools & Workflow", icon: "⚙", description: "Tools that support my everyday development workflow.", skills: ["VS Code", "Git", "GitHub", "Git Bash", "Terminal"] },
  { title: "Personal Skills", icon: "↗", description: "Habits and thinking skills that help me keep improving.", skills: ["Problem Solving", "Logical Thinking", "Self Learning", "Creativity", "Research"] },
];
const goals = ["Master JavaScript", "Grow with React & TypeScript", "Learn Python & Django", "Build useful full-stack projects"];

export default function SkillsPage() {
  return (
    <main className="min-h-screen px-6 py-20 md:py-24 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[.25em] text-cyan-300">What I'm working with</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight">Skills & <span className="gradient-text">technology.</span></h1>
          <p className="mt-5 leading-7 text-slate-400">The tools, technologies and abilities I'm developing on my journey toward full-stack development.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <article key={group.title} className="glass-card rounded-3xl p-8 transition hover:-translate-y-1 hover:border-cyan-300/25">
              <div className="flex items-center gap-4 mb-5">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-200">{group.icon}</span>
                <div><p className="text-xs text-slate-500">0{index + 1} / CATEGORY</p><h2 className="text-xl md:text-2xl font-bold">{group.title}</h2></div>
              </div>
              <p className="mb-7 text-slate-400">{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => <span key={skill} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
        <section className="mt-14 rounded-3xl border border-blue-400/15 bg-gradient-to-br from-blue-600/15 via-indigo-500/10 to-violet-500/10 p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[.25em] text-cyan-300">Next milestones</p>
          <h2 className="mt-3 text-3xl font-bold">The next chapter <span className="gradient-text">starts now.</span></h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {goals.map((goal, i) => <div key={goal} className="rounded-2xl border border-white/10 bg-[#0b1427]/70 p-5"><span className="text-sm font-mono text-cyan-300">0{i + 1}</span><p className="mt-3 font-semibold text-slate-200">{goal}</p></div>)}
          </div>
        </section>
      </div>
    </main>
  );
}
