import Image from "next/image";
import Link from "next/link";
import { stories } from "@/lib/experience";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6 sm:px-10">
      <section className="border-b border-line pt-1 pb-0">
        <div className="max-w-[540px]">
          <p className="mb-5 text-xs tracking-[0.14em] text-ink-quaternary">
            PRINCIPAL FRONTEND ENGINEER
          </p>
          <h1 className="text-[40px] font-medium leading-[1.18] tracking-[-0.02em] text-ink">
            Complex systems need
            <br />
            simple user experiences.
          </h1>
        </div>
        <div className="mt-7 flex justify-end">
          <p className="max-w-[300px] text-right text-[15px] leading-relaxed text-ink-secondary">
            I engineer technically complex products into beautiful, intuitive
            experiences through thoughtful architecture, technical
            leadership, and hands-on development.
          </p>
        </div>
        <div className="mt-4 leading-[0]">
          <Image
            src="/images/wave-hero-desat.png"
            alt="The Great Wave off Kanagawa, Hokusai"
            width={1300}
            height={757}
            className="h-auto w-[520px]"
            priority
          />
        </div>
      </section>

      <section className="flex flex-wrap items-center gap-7 border-b border-line py-[18px] text-xs tracking-[0.06em] text-ink-quaternary">
        {stories.map((story) => (
          <span key={story.slug}>{story.shortName.toUpperCase()}</span>
        ))}
      </section>

      <section className="pt-11 pb-2">
        <p className="mb-[22px] text-xs tracking-[0.1em] text-ink-quaternary">
          RECENT LEADERSHIP
        </p>
        <div className="border-b border-line">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/stories/${story.slug}`}
              className="group -mx-3 flex items-center justify-between gap-4 border-t border-line px-3 py-4 transition-colors duration-200 hover:bg-row-hover"
            >
              <div>
                <div className="text-[15px] font-medium text-ink">
                  {story.name}
                </div>
                <div className="mt-0.5 text-[13px] text-ink-tertiary">
                  {story.role}
                </div>
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap text-[13px] text-ink-quaternary">
                <span>{story.period}</span>
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
        </div>
      </section>

      <section className="border-b border-line py-12 text-center">
        <p className="mx-auto max-w-[440px] font-serif text-[21px] italic leading-[1.55] text-[#3c3835]">
          The work I enjoy most involves
          <br />
          solving difficult problems, mentoring teams, and building
          applications that are both beautiful and reliable.
        </p>
      </section>

      <section className="py-11">
        <p className="mb-3.5 text-xs tracking-[0.1em] text-ink-quaternary">
          AI-NATIVE ENGINEERING
        </p>
        <p className="max-w-[520px] text-[16px] leading-relaxed text-ink-secondary">
          I use AI throughout architecture, implementation, testing,
          debugging, and documentation&mdash;not as a shortcut, but as a
          force multiplier for delivering higher-quality software.
        </p>
      </section>
    </div>
  );
}
