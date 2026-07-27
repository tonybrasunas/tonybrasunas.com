import Link from "next/link";

const links = [
  { href: "/stories", label: "Engineering Stories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-3xl px-6 py-8 sm:px-10">
        <nav className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-ink-secondary sm:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-[15px] text-ink">Open to Principal / Staff Frontend roles</p>
          <div className="flex items-center gap-3.5">
            <a
              href="mailto:tonybrasunas@gmail.com"
              className="text-[13px] text-ink-tertiary transition-colors duration-200 hover:text-ink"
            >
              tonybrasunas@gmail.com
            </a>
            <Link
              href="/contact"
              className="inline-block rounded-md bg-ink px-4.5 py-2.5 text-[13px] font-medium text-page transition-colors duration-200 hover:bg-cta-hover"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
