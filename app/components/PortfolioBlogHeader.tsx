import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/media-plan-template", label: "Toolkit" },
  { href: "/blog", label: "Blog" },
];

export default function PortfolioBlogHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-300/10 bg-[#050914]/88 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4"
      >
        <Link href="/" className="flex items-center gap-3">
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-emerald-300 text-[#050914] shadow-[0_0_24px_rgba(80,245,170,0.25)]">
            <span className="absolute left-2 h-3 w-3 skew-x-[-20deg] rounded-sm bg-[#050914]" />
            <span className="absolute right-2 h-3 w-3 skew-x-[-20deg] rounded-sm bg-[#050914]" />
          </span>
          <span>
            <span className="block text-sm font-black text-white">
              Ye Htet Aung
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-200/45">
              Performance Marketing
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-semibold text-white/62 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-emerald-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/book-call"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-black text-[#050914] shadow-[0_0_28px_rgba(80,245,170,0.18)] transition hover:bg-emerald-200"
        >
          Strategy Call
          <span aria-hidden="true">-&gt;</span>
        </Link>
      </nav>
    </header>
  );
}
