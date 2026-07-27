"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/stories", label: "Engineering Stories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-6 sm:px-10">
        <Link href="/" className="text-[15px] font-medium text-ink">
          Tony Brasunas
        </Link>
        <nav className="flex items-center gap-5 text-[13px]">
          <div className="hidden items-center gap-5 sm:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 hover:text-ink ${
                  isActive(pathname, link.href) ? "text-ink" : "text-ink-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <a
            href="/resume.pdf"
            download="Tony_Brasunas_RESUME.pdf"
            className="inline-flex items-center gap-1.5 rounded-md bg-ink px-3.5 py-1.5 font-medium text-page transition-colors duration-200 hover:bg-cta-hover"
          >
            Resume
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3v12" />
              <path d="M7 10l5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
