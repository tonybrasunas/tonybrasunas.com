import type { Metadata } from "next";
import Link from "next/link";
import { stories } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Engineering Stories",
  description:
    "Case studies from two decades of leading frontend engineering at Shell Recharge, Sighten, and Sungevity.",
};

export default function StoriesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 sm:px-10">
      <section className="border-b border-line pt-1 pb-11">
        <p className="mb-5 text-xs tracking-[0.14em] text-ink-quaternary">
          ENGINEERING STORIES
        </p>
        <h1 className="max-w-[520px] text-[34px] font-medium leading-[1.2] tracking-[-0.02em] text-ink">
          Case studies from two decades of shipping frontend systems.
        </h1>
      </section>

      <section className="py-4">
        {stories.map((story, index) => (
          <Link
            key={story.slug}
            href={`/stories/${story.slug}`}
            className={`group -mx-3 block rounded-md px-3 py-8 transition-colors duration-200 hover:bg-row-hover ${
              index !== 0 ? "border-t border-line" : ""
            }`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-medium text-ink">{story.name}</h2>
              <span className="text-[13px] text-ink-quaternary">
                {story.role} &middot; {story.period}
              </span>
            </div>
            <p className="mt-3 max-w-[560px] text-[15px] leading-relaxed text-ink-secondary">
              {story.summary}
            </p>
            <div className="mt-4 flex items-center gap-2 text-[13px] font-medium text-ink-tertiary">
              <span>Read the story</span>
              <svg
                width="15"
                height="15"
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
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
