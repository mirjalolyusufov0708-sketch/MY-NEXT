const contacts = [
  { name: "Telegram", username: "@example_username", description: "Let's connect and share ideas.", icon: "✈️", link: "https://t.me/example_username", color: "hover:border-sky-400/40" },
  { name: "Instagram", username: "@example_username", description: "Follow my learning and creative journey.", icon: "◎", link: "https://instagram.com/example_username", color: "hover:border-pink-400/40" },
  { name: "Gmail", username: "example@gmail.com", description: "Send a message by email.", icon: "✉", link: "mailto:example@gmail.com", color: "hover:border-rose-400/40" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-20 md:py-24 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[.25em] text-cyan-300">Say hello</p>
          <h1 className="mt-4 text-4xl md:text-6xl font-black">Let's <span className="gradient-text">connect.</span></h1>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">Have an idea, question or project in mind? Choose a platform and get in touch.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {contacts.map((contact) => (
            <a key={contact.name} href={contact.link} target={contact.name === "Gmail" ? undefined : "_blank"} rel={contact.name === "Gmail" ? undefined : "noopener noreferrer"}
              className={`glass-card rounded-3xl p-8 transition duration-300 hover:-translate-y-2 ${contact.color}`}>
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/5 text-3xl">{contact.icon}</span>
              <h2 className="mt-7 text-2xl font-bold">{contact.name}</h2>
              <p className="mt-2 break-all text-cyan-200">{contact.username}</p>
              <p className="mt-5 text-slate-400">{contact.description}</p>
              <p className="mt-8 text-sm font-semibold text-white">Open platform <span className="text-cyan-300">↗</span></p>
            </a>
          ))}
        </div>
        <div className="glass-card mt-10 rounded-3xl p-9 md:p-12 text-center">
          <div className="text-4xl">⌘</div>
          <h2 className="mt-4 text-2xl font-bold">Ideas become reality through action.</h2>
          <p className="mt-3 text-slate-400">Learning, building and sharing — one project at a time.</p>
          <p className="mt-7 font-semibold"><span className="gradient-text">Mirjalol</span> <span className="text-slate-500">| Future Full-Stack Developer</span></p>
        </div>
      </div>
    </main>
  );
}
