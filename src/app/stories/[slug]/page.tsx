import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStory, stories } from "@/lib/experience";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};
  return {
    title: story.headline,
    description: story.summary,
  };
}

function renderInline(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index} className="font-medium text-ink">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 sm:px-10">
      <section className="border-b border-line pt-1 pb-11">
        <Link
          href="/stories"
          className="mb-8 inline-flex items-center gap-1.5 text-[13px] text-ink-tertiary transition-colors duration-200 hover:text-ink"
        >
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
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Engineering Stories
        </Link>
        <p className="mb-5 text-xs tracking-[0.14em] text-ink-quaternary">
          {story.name.toUpperCase()}
          {" · "}
          ENGINEERING STORY
        </p>
        <h1 className="max-w-[600px] text-[34px] font-medium leading-[1.2] tracking-[-0.02em] text-ink">
          {story.headline}
        </h1>
        <p className="mt-4 max-w-[560px] text-[17px] leading-relaxed text-ink-secondary">
          {story.summary}
        </p>

        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          <div>
            <dt className="text-xs tracking-[0.1em] text-ink-quaternary">
              ROLE
            </dt>
            <dd className="mt-1.5 max-w-[420px] text-[14px] text-ink-secondary">
              {story.role}
            </dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.1em] text-ink-quaternary">
              TIMELINE
            </dt>
            <dd className="mt-1.5 max-w-[420px] text-[14px] text-ink-secondary">
              {story.period}
            </dd>
          </div>
          <div>
            <dt className="text-xs tracking-[0.1em] text-ink-quaternary">
              {story.focusLabel.toUpperCase()}
            </dt>
            <dd className="mt-1.5 max-w-[420px] text-[14px] text-ink-secondary">
              {story.focusValue}
            </dd>
          </div>
        </dl>
      </section>

      {story.sections.map((section) => (
        <section key={section.heading} className="border-b border-line py-10">
          <p className="mb-3.5 text-xs tracking-[0.1em] text-ink-quaternary">
            {section.heading.toUpperCase()}
          </p>
          <div className="max-w-[600px] space-y-4">
            {section.blocks.map((block, index) => {
              if (block.type === "quote") {
                return (
                  <blockquote
                    key={index}
                    className="border-l-2 border-line py-1 pl-5 font-serif text-[19px] italic leading-[1.55] text-ink"
                  >
                    {block.text}
                  </blockquote>
                );
              }
              if (block.type === "subsection") {
                return (
                  <div key={index} className="pt-2 first:pt-0">
                    <p className="mb-2 text-[15px] font-medium text-ink">
                      {block.title}
                    </p>
                    <div className="space-y-4">
                      {block.paragraphs.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="text-[16px] leading-relaxed text-ink-secondary"
                        >
                          {renderInline(paragraph)}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              }
              if (block.type === "callout") {
                return (
                  <div
                    key={index}
                    className="rounded-lg border border-line bg-row-hover px-5 py-5"
                  >
                    <p className="mb-2.5 text-xs tracking-[0.1em] text-ink-quaternary">
                      {block.heading.toUpperCase()}
                    </p>
                    <div className="space-y-3">
                      {block.paragraphs.map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="text-[15px] leading-relaxed text-ink-secondary"
                        >
                          {renderInline(paragraph)}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <p
                  key={index}
                  className="text-[16px] leading-relaxed text-ink-secondary"
                >
                  {renderInline(block.text)}
                </p>
              );
            })}
          </div>
        </section>
      ))}

      {story.url ? (
        <section className="py-10">
          <a
            href={story.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] text-ink-tertiary transition-colors duration-200 hover:text-ink"
          >
            Visit {story.name}
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </section>
      ) : null}
    </div>
  );
}
