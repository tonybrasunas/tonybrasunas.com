export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | { type: "callout"; heading: string; paragraphs: string[] }
  | { type: "subsection"; title: string; paragraphs: string[] };

export type StorySection = {
  heading: string;
  blocks: ContentBlock[];
};

export type Story = {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  focusLabel: string;
  focusValue: string;
  sections: StorySection[];
  url?: string;
};

function p(text: string): ContentBlock {
  return { type: "paragraph", text };
}

function quote(text: string): ContentBlock {
  return { type: "quote", text };
}

function callout(heading: string, paragraphs: string[]): ContentBlock {
  return { type: "callout", heading, paragraphs };
}

function subsection(title: string, paragraphs: string[]): ContentBlock {
  return { type: "subsection", title, paragraphs };
}

export const stories: Story[] = [
  {
    slug: "shell-recharge",
    name: "Shell Recharge",
    shortName: "Shell Recharge",
    headline: "Building a Frontend Platform for Shell Recharge",
    role: "Lead Frontend Engineer",
    period: "2020–2026",
    location: "Los Angeles, California",
    summary:
      "Scaling frontend architecture across a growing ecosystem of EV products.",
    focusLabel: "Focus",
    focusValue:
      "Frontend Architecture • Angular • React • Technical Leadership • Product Development",
    sections: [
      {
        heading: "The Challenge",
        blocks: [
          p("As electric vehicle adoption accelerated, Shell Recharge expanded from individual charging experiences into a broader ecosystem supporting fleet operators, commercial customers, and everyday drivers."),
          p("The frontend needed to support multiple products serving different audiences while remaining consistent, performant, and maintainable as engineering teams and business priorities evolved."),
          p("The challenge wasn't simply delivering features. It was creating an architectural foundation that allowed products to grow independently while presenting a cohesive experience to customers."),
        ],
      },
      {
        heading: "My Role",
        blocks: [
          p("As Lead Frontend Engineer, I helped shape frontend architecture across several customer-facing products while remaining deeply involved in implementation."),
          p("My work spanned architectural planning, technical leadership, mentoring engineers, collaborating with product and design, and delivering major features used by both fleet managers and EV drivers."),
          p("Throughout the platform's evolution, I focused on creating systems that would support long-term product growth rather than solving only today's requirements."),
        ],
      },
      {
        heading: "Building the Platform",
        blocks: [
          p("Rather than thinking of each application as an isolated project, we treated the frontend as an evolving platform."),
          p("That meant balancing immediate product delivery with investments in architecture, shared components, and engineering practices that would continue paying dividends as the organization expanded."),
          p("As new products emerged, consistency became just as important as speed. Shared patterns reduced duplication, improved maintainability, and helped multiple engineering teams deliver cohesive user experiences."),
        ],
      },
      {
        heading: "Product Spotlight",
        blocks: [
          subsection("Fleet Manager", [
            "Fleet operators rely on software to monitor vehicles, manage charging infrastructure, and make operational decisions that directly affect business efficiency.",
            "The application needed to present large amounts of operational data while remaining approachable for users making decisions throughout the day.",
            "I helped develop and evolve the frontend architecture, working closely with product and design teams to create interfaces that balanced powerful functionality with clarity and usability.",
          ]),
          subsection("Driver Portal", [
            "The Driver Portal presented a very different set of challenges.",
            "Rather than managing fleets, drivers needed quick access to charging information, account management, and everyday tasks through an interface optimized for speed and simplicity.",
            "Building both products reinforced an important lesson: good frontend architecture isn't only about sharing code. It's about supporting different user needs while maintaining a consistent experience across an entire product ecosystem.",
          ]),
        ],
      },
      {
        heading: "Engineering Decisions",
        blocks: [
          p("Several architectural decisions shaped the long-term direction of the platform."),
          p("One of the most significant was adopting Module Federation to support independently deployable frontend applications while preserving a cohesive user experience."),
          p("This approach allowed engineering teams to work more autonomously, simplified deployment workflows, and created a foundation that could evolve alongside the business."),
          p("Equally important was establishing frontend patterns that emphasized maintainability, performance, accessibility, and developer experience as first-class concerns rather than afterthoughts."),
        ],
      },
      {
        heading: "Impact",
        blocks: [
          p("The resulting platform enabled multiple products to evolve more efficiently while delivering consistent experiences across different customer audiences."),
          p("Beyond shipping features, the architectural investments helped engineering teams move more confidently, reduce duplication, and support the continued growth of Shell Recharge's frontend ecosystem."),
        ],
      },
      {
        heading: "What I Learned",
        blocks: [
          p("Working on Shell Recharge reinforced that architecture is ultimately about enabling people."),
          p("The best technical decisions aren't necessarily the most sophisticated—they're the ones that help teams build better products over many years."),
          p("That perspective continues to shape how I approach frontend engineering today: create systems that simplify complexity, empower engineers, and allow products to evolve without sacrificing the customer experience."),
        ],
      },
    ],
    url: "https://www.shell.us/electric-vehicle-charging",
  },
  {
    slug: "sighten",
    name: "Sighten",
    shortName: "Sighten",
    headline: "Simplifying Residential Solar Through Better Software",
    role: "Senior Software Engineer",
    period: "2017–2019",
    location: "Oakland, California",
    summary:
      "Transforming complex residential solar sales workflows with beautiful, reliable, intuitive software.",
    focusLabel: "Technology",
    focusValue: "AngularJS, JavaScript, HTML/CSS, REST APIs",
    sections: [
      {
        heading: "The Challenge",
        blocks: [
          p("Residential solar projects involve a surprising amount of complexity."),
          p("Every installation requires balancing roof geometry, equipment constraints, electrical design, energy production estimates, local regulations, financing, and customer expectations. The professionals using the software weren't software experts—they were solar designers, sales consultants, and operations teams trying to make accurate decisions quickly."),
          p("The challenge wasn't simply building another business application. It was designing software that could make an inherently complicated process feel intuitive."),
        ],
      },
      {
        heading: "My Role",
        blocks: [
          p("As a Senior Software Engineer at Sighten, I was responsible for developing key customer-facing applications used throughout the residential solar workflow. I partnered closely with product managers, designers, and fellow engineers to translate complex business requirements into practical, approachable user experiences."),
          p("One of my primary areas of ownership was the solar design tool, along with broader SaaS functionality that supported the end-to-end customer journey."),
        ],
      },
      {
        heading: "Building the Solar Design Tool",
        blocks: [
          p("The solar design experience sat at the center of the platform."),
          p("Users needed to evaluate properties, configure solar layouts, estimate production, and generate accurate proposals—all while navigating a workflow with significant technical and regulatory complexity."),
          p("Rather than exposing that complexity directly, we focused on creating interfaces that guided users naturally through each step. Every interaction required balancing flexibility for experienced professionals with clarity for users who simply wanted to complete their work efficiently."),
          p("This meant thinking carefully about workflow design, validation, responsiveness, and how information was presented—not just implementing features."),
        ],
      },
      {
        heading: "Engineering Decisions",
        blocks: [
          p("The application was built using AngularJS during a period when rich single-page applications were becoming the standard for sophisticated business software."),
          p("Beyond implementing new functionality, a significant part of the work involved organizing increasingly complex frontend code into maintainable components, collaborating across teams, and ensuring the application remained responsive as new capabilities were added."),
          p("Working in a rapidly evolving product also required continual collaboration with product and design teams as customer feedback shaped the roadmap."),
        ],
      },
      {
        heading: "Impact",
        blocks: [
          p("The software helped streamline a traditionally manual and fragmented process, allowing solar professionals to move more efficiently from system design through proposal and project planning."),
          p("For me, the project reinforced an idea that has continued throughout my career:"),
          quote("The most valuable engineering often isn't about exposing complexity—it's about hiding it behind thoughtful design and reliable software."),
        ],
      },
      {
        heading: "What I Learned",
        blocks: [
          p("Working on Sighten fundamentally shaped how I think about frontend engineering."),
          p("I learned that the hardest problems are rarely technical in isolation. The real challenge is understanding a complicated business domain deeply enough to build software that feels straightforward to the people using it every day."),
          p("That philosophy has continued to guide my work across EV charging, fleet management, and other enterprise products: complex systems deserve simple experiences."),
        ],
      },
    ],
    url: "http://www.sighten.io",
  },
  {
    slug: "sungevity",
    name: "Sungevity",
    shortName: "Sungevity",
    headline: "Bringing Solar Sales Online Before It Was the Norm",
    role: "Software Engineer",
    period: "2011–2017",
    location: "Oakland, California",
    summary:
      "Building customer-facing platforms to deliver pioneering products through rapid growth and organizational change.",
    focusLabel: "Technology",
    focusValue: "CakePHP, AngularJS, Scala, JavaScript, HTML/CSS, REST APIs",
    sections: [
      {
        heading: "The Challenge",
        blocks: [
          p("For years, buying residential solar began with a home visit."),
          p("A salesperson would travel to the property, inspect the roof, gather measurements, estimate production, and return days later with a proposal. The process was expensive, time-consuming, and limited how many homeowners a company could serve."),
          p("Sungevity set out to change that."),
          p("The goal was ambitious: give homeowners an accurate, interactive solar proposal online—complete with rooftop visualization, system design, energy production estimates, and financial projections—without sending anyone to the home."),
          p("At the time, this represented a fundamentally different customer experience."),
          callout("Why this mattered", [
            "Before products like iQuote, homeowners typically needed an in-person site visit before receiving a detailed solar proposal.",
            "By moving much of that experience online, Sungevity helped demonstrate that sophisticated technical analysis and customer education could be delivered through software—accelerating both the customer journey and the company's ability to scale.",
          ]),
        ],
      },
      {
        heading: "My Role",
        blocks: [
          p("As a Software Engineer, I contributed to the development and evolution of **iQuote**, one of Sungevity's flagship products."),
          p("Over several years, I helped build two generations of the platform: the original implementation in CakePHP and a next-generation application built with AngularJS on a Scala backend."),
          p("Working across multiple iterations of the product gave me firsthand experience balancing new technology adoption with the realities of maintaining and evolving software used by real customers every day."),
        ],
      },
      {
        heading: "Building iQuote",
        blocks: [
          p("The application combined technical calculations, geographic visualization, financial modeling, and customer communication into a single experience."),
          p("Homeowners could review a proposed solar installation directly on their roof, explore projected energy production, understand long-term financial savings, and move confidently toward purchasing a system—all through a web application."),
          p("The challenge wasn't simply rendering data. It was presenting sophisticated engineering and financial information in a way that felt approachable and trustworthy."),
          p("Every design decision had to help customers understand a significant financial investment without overwhelming them."),
        ],
      },
      {
        heading: "Evolving the Platform",
        blocks: [
          p("As the product matured, so did its architecture."),
          p("The first generation of iQuote was built using CakePHP and a custom database architecture, providing the foundation for the company's early online experience."),
          p("As frontend applications became richer and customer expectations evolved, we participated in developing a second-generation platform using AngularJS with a Scala backend. The newer architecture supported a more dynamic user experience while creating a stronger separation between frontend and backend responsibilities."),
          p("Working through both generations reinforced an important lesson: successful software isn't rebuilt for technology's sake. The architecture should evolve because it enables better products and a better experience for customers."),
        ],
      },
      {
        heading: "Impact",
        blocks: [
          p("iQuote helped transform how residential solar could be sold."),
          p("Instead of waiting days for an on-site consultation, homeowners could begin evaluating solar from anywhere, exploring both the technical and financial aspects of a proposed installation through an interactive experience."),
          p("For the business, this reduced friction in the sales process and allowed the company to reach more customers more efficiently."),
          p("For customers, it made a complex purchase significantly easier to understand."),
        ],
      },
      {
        heading: "What I Learned",
        blocks: [
          p("Working on iQuote shaped many of the principles that continue to guide my work today."),
          p("Innovative software isn't just about introducing new technology. It's about identifying friction in an existing process and designing a better experience around it."),
          p("I also learned the importance of evolving architecture thoughtfully. Building both the original application and its successor showed me that long-lived products require continual investment—not just in features, but in maintainability, scalability, and developer experience."),
          p("Those lessons have carried through every major product I've worked on since."),
        ],
      },
    ],
    url: "http://www.sungevity.com",
  },
];

export function getStory(slug: string): Story | undefined {
  return stories.find((story) => story.slug === slug);
}
