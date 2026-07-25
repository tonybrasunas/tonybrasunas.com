import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Tony Brasunas.",
};

const links = [
  {
    label: "Resume",
    value: "Download PDF",
    href: "/resume.pdf",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tonybrasunas",
    href: "https://www.linkedin.com/in/tonybrasunas/",
    external: true,
  },
  {
    label: "Email",
    value: "tonybrasunas@gmail.com",
    href: "mailto:tonybrasunas@gmail.com",
    external: false,
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 sm:px-10">
      <section className="border-b border-line pt-1 pb-11">
        <p className="mb-5 text-xs tracking-[0.14em] text-ink-quaternary">
          CONTACT
        </p>
        <h1 className="max-w-[480px] text-[34px] font-medium leading-[1.2] tracking-[-0.02em] text-ink">
          Let&rsquo;s talk.
        </h1>
        <p className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-ink-secondary">
          I&rsquo;m open to Principal and Staff Frontend Engineer roles.
          Reach me directly, or connect on LinkedIn.
        </p>
      </section>

      <section className="py-4">
        <div className="border-b border-line">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              download={link.label === "Resume" ? true : undefined}
              className={`group -mx-3 flex items-center justify-between gap-4 px-3 py-5 transition-colors duration-200 hover:bg-row-hover ${
                index !== 0 ? "border-t border-line" : ""
              }`}
            >
              <span className="text-[15px] font-medium text-ink">
                {link.label}
              </span>
              <span className="flex items-center gap-2 text-[13px] text-ink-tertiary">
                {link.value}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="-translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-70"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
