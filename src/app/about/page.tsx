import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tony Brasunas is a Principal Frontend Engineer who has spent more than two decades helping teams turn technically complex products into software people actually enjoy using.",
};

const aiWorkflow = [
  "architectural exploration",
  "implementation and prototyping",
  "debugging",
  "test generation",
  "documentation",
  "code review",
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 sm:px-10">
      <section className="border-b border-line pt-1 pb-11">
        <p className="mb-5 text-xs tracking-[0.14em] text-ink-quaternary">
          ABOUT
        </p>
        <h1 className="max-w-[560px] text-[34px] font-medium leading-[1.2] tracking-[-0.02em] text-ink">
          Building software people actually enjoy using.
        </h1>
        <p className="mt-5 max-w-[560px] text-[17px] leading-relaxed text-ink-secondary">
          I&rsquo;ve spent more than two decades helping teams transform
          technically complex ideas into products that feel approachable,
          intuitive, and reliable.
        </p>
        <div className="mt-4 flow-root">
          <Image
            src="/images/tony-brasunas.jpg"
            alt="Tony Brasunas"
            width={700}
            height={610}
            className="float-right ml-8 mb-3 h-auto w-[40%] rounded-md border border-line"
          />
          <div className="space-y-4 text-[17px] leading-relaxed text-ink-secondary">
            <p>
              My career has taken me through clean energy, residential solar,
              electric vehicle charging, fleet management, and financial
              technology. While the industries have changed, the challenge
              has remained remarkably consistent: helping people accomplish
              complicated tasks without requiring them to understand the
              complexity behind the scenes.
            </p>
            <p>That&rsquo;s the work I enjoy most.</p>
            <p>
              Whether designing a customer-facing solar proposal, building
              tools for EV fleet operators, or shaping frontend architecture
              across multiple products, I&rsquo;ve found that great software
              succeeds when engineering, product thinking, and user
              experience work together.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-10">
        <p className="mb-3.5 text-xs tracking-[0.1em] text-ink-quaternary">
          EDUCATION
        </p>
        <div className="space-y-6">
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-[15px] font-medium text-ink">
                Amherst College
              </p>
              <p className="text-[13px] text-ink-quaternary">BA, 1996</p>
            </div>
            <p className="mt-1 max-w-[560px] text-[15px] leading-relaxed text-ink-secondary">
              Computer Science, with additional study in Chinese, music,
              political science, and creative writing.
            </p>
          </div>
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-[15px] font-medium text-ink">
                Princeton in Asia
              </p>
              <p className="text-[13px] text-ink-quaternary">1996&ndash;97</p>
            </div>
            <p className="mt-1 max-w-[560px] text-[15px] leading-relaxed text-ink-secondary">
              Fellowship teaching English in Guangzhou, China &mdash; the
              start of a lasting relationship with Mandarin and Chinese
              culture.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-10">
        <p className="mb-3.5 text-xs tracking-[0.1em] text-ink-quaternary">
          MY APPROACH
        </p>
        <div className="max-w-[600px] space-y-4">
          <p className="text-[16px] leading-relaxed text-ink-secondary">
            I believe frontend engineering is about much more than building
            interfaces.
          </p>
          <p className="text-[16px] leading-relaxed text-ink-secondary">
            The best frontend systems create clarity&mdash;for users, for
            designers, and for the engineers who maintain them. That means
            thinking beyond individual features to consider architecture,
            performance, maintainability, accessibility, and the long-term
            evolution of a product.
          </p>
          <p className="text-[16px] leading-relaxed text-ink-secondary">
            Throughout my career I&rsquo;ve enjoyed operating at the
            intersection of technical leadership and hands-on development:
            mentoring engineers, partnering closely with product and design
            teams, and helping organizations make architectural decisions
            that enable products to grow gracefully over time.
          </p>
        </div>
      </section>

      <section className="border-b border-line py-10">
        <p className="mb-3.5 text-xs tracking-[0.1em] text-ink-quaternary">
          AI AS AN ENGINEERING MULTIPLIER
        </p>
        <div className="max-w-[600px] space-y-4">
          <p className="text-[16px] leading-relaxed text-ink-secondary">
            One of the biggest changes in software development over the past
            few years has been the arrival of modern AI tools.
          </p>
          <p className="text-[16px] leading-relaxed text-ink-secondary">
            I use AI throughout the engineering process&mdash;not as a
            replacement for experience or judgment, but as a force
            multiplier.
          </p>
          <p className="text-[16px] leading-relaxed text-ink-secondary">
            Today my workflow regularly incorporates AI for:
          </p>
          <ul className="space-y-2 pl-0.5">
            {aiWorkflow.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[16px] leading-relaxed text-ink-secondary"
              >
                <span
                  className="mt-[11px] h-1 w-1 shrink-0 rounded-full bg-ink-quaternary"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[16px] leading-relaxed text-ink-secondary">
            The goal isn&rsquo;t simply writing code faster. It&rsquo;s
            creating more space to focus on the decisions that matter most:
            understanding users, evaluating tradeoffs, and designing better
            systems.
          </p>
        </div>
      </section>

      <section className="border-b border-line py-10">
        <p className="mb-3.5 text-xs tracking-[0.1em] text-ink-quaternary">
          BEYOND ENGINEERING
        </p>
        <div className="max-w-[600px] space-y-4">
          <p className="text-[16px] leading-relaxed text-ink-secondary">
            Outside of software, I enjoy exploring ideas through writing.
          </p>
          <p className="text-[16px] leading-relaxed text-ink-secondary">
            I&rsquo;m the author of <em>Double Happiness</em> and{" "}
            <em>Red, White and Blind</em>, books that reflect my longstanding
            interest in travel, history, resilience, and personal growth.
          </p>
          <p className="text-[16px] leading-relaxed text-ink-secondary">
            Writing has made me a better engineer. Both disciplines require
            empathy, clarity, and the ability to organize complex ideas into
            something people can easily understand.
          </p>
        </div>
      </section>

      <section className="pt-11 pb-2">
        <h2 className="max-w-[520px] text-[24px] font-medium leading-[1.3] tracking-[-0.01em] text-ink">
          Let&rsquo;s build something meaningful.
        </h2>
        <div className="mt-4 max-w-[560px] space-y-4 text-[16px] leading-relaxed text-ink-secondary">
          <p>
            I&rsquo;m always interested in conversations about products,
            engineering leadership, frontend architecture, and teams that
            care deeply about creating exceptional user experiences.
          </p>
          <p>
            If you&rsquo;re working on difficult problems and believe
            thoughtful engineering can make them simpler, I&rsquo;d love to
            connect.
          </p>
        </div>
      </section>
    </div>
  );
}
