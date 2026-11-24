const languages = [
  {
    flag: "🇬🇧",
    name: "English",
    native: "English",
    level: "Learning",
    description: "I'm improving my English to communicate confidently, explore international opportunities and understand programming resources from around the world.",
    focus: ["Speaking", "Grammar", "Vocabulary", "Listening"],
    accent: "from-sky-500/20 to-blue-500/5",
    border: "hover:border-sky-400/40",
  },
  {
    flag: "🇷🇺",
    name: "Russian",
    native: "Русский язык",
    level: "Learning",
    description: "I'm learning Russian to communicate with more people, understand useful educational content and become comfortable using the language in everyday situations.",
    focus: ["Speaking", "Reading", "Grammar", "Vocabulary"],
    accent: "from-red-500/15 to-blue-500/5",
    border: "hover:border-red-300/40",
  },
];

export default function LanguagesPage() {
  return (
    <main className="min-h-screen px-6 py-20 md:py-24 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-[.25em] text-cyan-300">Beyond code</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight">Language <span className="gradient-text">learning.</span></h1>
          <p className="mt-5 text-slate-400 leading-7">Every language opens a new way to connect with people, ideas and cultures.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-7">
          {languages.map((language, index) => (
            <article key={language.name} className={`glass-card rounded-3xl p-8 md:p-10 transition duration-300 hover:-translate-y-1 ${language.border}`}>
              <div className={`rounded-2xl bg-gradient-to-br ${language.accent} border border-white/5 p-6 flex items-center justify-between`}>
                <span className="text-6xl">{language.flag}</span>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">{language.level}</span>
              </div>
              <h2 className="mt-8 text-3xl font-bold">{language.name}</h2>
              <p className="mt-2 text-cyan-200">{language.native}</p>
              <p className="mt-5 leading-7 text-slate-400">{language.description}</p>
              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-slate-500">Learning focus</h3>
                <div className="flex flex-wrap gap-2">
                  {language.focus.map((item) => <span key={item} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">{item}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-3xl border border-cyan-400/15 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 p-8 md:p-10">
          <p className="text-2xl font-bold">One step at a time. <span className="gradient-text">One language at a time.</span></p>
          <p className="mt-3 text-slate-400">Consistency matters more than speed.</p>
        </div>
      </div>
    </main>
  );
}
