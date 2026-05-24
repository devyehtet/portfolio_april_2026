"use client";

import Image from "next/image";

const navItems = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Work", id: "work" },
  { label: "Template", id: "template" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export default function NavBar() {
  const scrollTo = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <button
          onClick={() => scrollTo("top")}
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <Image
            src="/logo.png"
            alt="Ye Htet Aung Logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="hidden text-sm text-slate-100 sm:inline">
            Ye Htet Aung
          </span>
        </button>

        <nav className="hidden gap-5 text-xs md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="rounded-full px-3 py-1 text-slate-300 hover:bg-slate-800/70 hover:text-sky-300 transition"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => scrollTo("contact")}
          className="rounded-full bg-sky-500 px-4 py-1 text-xs font-semibold text-slate-900 hover:bg-sky-400 transition"
        >
          Contact
        </button>
      </div>
    </header>
  );
}
