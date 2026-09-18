
export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
  supportingLine: string;
}

export interface WorkItem {
  slug: string;
  label: string;
  title: string;
  hook: string;
  description: string;
  tags: string[];
  route: string;
  role: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  label: string;
  overview: string;
  challenge: string;
  responsibility: string;
  approach: string[];
  outcome: string;
  lesson: string;
  confidentialityNote: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Capability {
  title: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  label: string;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  summary: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  relationship: string;
  linkedinUrl?: string;
}

export interface SocialLinkItem {
  label: string;
  href: string;
}

export const siteMetadata = {
  title: "Zeeshan Ahmad - Senior Full-Stack Engineer & Technical Lead",
  description:
    "Senior Full-Stack Engineer building scalable, API-driven business platforms with React, Next.js, TypeScript and Node.js.",
};

export const person = {
  name: "Zeeshan Ahmad",
  role: "Senior Full-Stack Engineer and Technical Lead",
  email: "zeeshnhmd.1@gmail.com",
  locationLabel: "Based in India",
  availabilityLabel: "Open to remote, contract and relocation opportunities",
};

export const socialLinks: SocialLinkItem[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/zeeshanahmad25/" },
  { label: "GitHub", href: "https://github.com/Zeeshnhmd" },
];

export const navigation: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "Senior Full-Stack Engineer · Technical Lead",
  headline: "I build the systems behind complex business operations.",
  body: "I design and deliver scalable, API-driven platforms where workflows, permissions, data, validation and business rules must work as one reliable product.",
  supportingLine:
    "5+ years building production software across compliance, operations, automation and customer-facing platforms.",
  primaryCta: { label: "View selected work", href: "/work" } as CtaLink,
  secondaryCta: { label: "Start a conversation", href: "/contact" } as CtaLink,
};

export const credibilityMetrics: Metric[] = [
  {
    value: "5+ years",
    label: "Building production software",
    supportingLine: "Across compliance, operations, automation and customer-facing platforms.",
  },
  {
    value: "5 engineers",
    label: "Led while remaining hands-on",
    supportingLine: "Architecture, code review and delivery, not just management.",
  },
  {
    value: "40+ modules",
    label: "Delivered across business-critical platforms",
    supportingLine: "Spanning order management, inventory, queues and automation.",
  },
  {
    value: "100+ APIs",
    label: "Designed, maintained or integrated",
    supportingLine: "Powering compliance, operations and workflow automation products.",
  },
  {
    value: "15+ countries",
    label: "Teams supported through EDEN",
    supportingLine: "Used by 50+ employees across a distributed organisation.",
  },
];

export const selectedWorkIntro = {
  eyebrow: "Selected work",
  heading: "Complex products, explained through the decisions behind them.",
  intro:
    "A selection of platforms where I owned architecture, delivery, integrations or technical leadership - not just the visible interface.",
};

export const workItems: WorkItem[] = [
  {
    slug: "verifix",
    label: "Compliance platform",
    title: "VerifiX",
    hook: "Compliance workflows without a fragmented user experience.",
    description:
      "I own frontend architecture and delivery for a platform covering KYC, KYB, AML, KYT, sanctions screening and Travel Rule workflows, with 100+ API integrations.",
    tags: ["Frontend ownership", "Complex validation", "Role-based access", "Production releases"],
    route: "/work/verifix",
    role: "Frontend architecture & delivery",
  },
  {
    slug: "eden",
    label: "Operations platform",
    title: "EDEN",
    hook: "One platform for complex global operations.",
    description:
      "I architected and helped deliver a React, Node.js and MySQL platform used by 50+ employees across 15+ countries, spanning 40+ production modules and 100+ REST APIs.",
    tags: ["Platform architecture", "Full-stack delivery", "Technical leadership", "Workflow systems"],
    route: "/work/eden",
    role: "Platform architecture & technical leadership",
  },
  {
    slug: "raven",
    label: "Workflow automation",
    title: "Raven",
    hook: "Turning repetitive sales operations into a controlled workflow.",
    description:
      "I built scheduled reporting and email automation handling 1,000+ emails per month and eliminating 18 hours of manual sales-operations work each week.",
    tags: ["Automation", "Scheduling", "Business rules", "Operational reliability"],
    route: "/work/raven",
    role: "Full-stack workflow engineering",
  },
];

export const workPage = {
  heading: "Selected work",
  intro:
    "A closer look at the product problems, architectural decisions and delivery responsibilities behind my work.",
};

export const caseStudies: Record<string, CaseStudy> = {
  verifix: {
    slug: "verifix",
    title: "VerifiX",
    label: "Compliance platform",
    overview:
      "VerifiX is a compliance platform bringing KYC, KYB, AML, KYT, sanctions screening, Travel Rule and related workflows into one product.",
    challenge:
      "The frontend must support validation-heavy journeys, multiple user roles, complex forms and a large integration surface without becoming inconsistent or difficult to maintain.",
    responsibility:
      "I own frontend architecture and delivery end to end, including reusable components, form and validation architecture, application state, role-based access, API integration, deployments and production releases.",
    approach: [
      "Create reusable patterns for complex forms and shared workflows.",
      "Keep permissions and role-based behaviour consistent across modules.",
      "Standardise API, loading, empty, error and validation states.",
      "Design the architecture to remain maintainable as workflows expand.",
    ],
    outcome:
      "A reusable frontend foundation supporting 100+ API integrations and a growing set of compliance workflows, with ownership extending through deployment and production delivery.",
    lesson:
      "In compliance products, clarity and predictable failure handling are part of correctness - not visual polish added at the end.",
    confidentialityNote:
      "Client names, real screenshots and proprietary workflow specifics are withheld due to confidentiality. The details above describe my role, architecture decisions and outcomes only.",
  },
  eden: {
    slug: "eden",
    title: "EDEN",
    label: "Operations platform",
    overview:
      "EDEN is a React, Node.js, Express and MySQL operations platform used by 50+ employees across 15+ countries.",
    challenge:
      "A growing set of operational workflows needed to work as one maintainable platform rather than disconnected modules with inconsistent patterns.",
    responsibility:
      "I architected and delivered core platform capabilities, built and led delivery of 40+ production modules, designed and maintained 100+ REST APIs, and later led a five-engineer team while remaining hands-on.",
    approach: [
      "Migrate and standardise the frontend around reusable components and shared hooks.",
      "Create consistent state-management and API-integration patterns.",
      "Model operational workflows across order management, inventory, queues, automation and data extraction.",
      "Combine architecture decisions, code reviews, mentoring, sprint delivery and releases.",
    ],
    outcome:
      "A business-critical platform supporting distributed teams, 40+ production modules and over 100 REST APIs through a more consistent modular architecture.",
    lesson:
      "Internal software becomes a product when reliability, consistency and maintainability receive the same attention as feature delivery.",
    confidentialityNote:
      "This was an internal operations platform. Company-specific data, real screenshots and proprietary workflow details are withheld due to confidentiality.",
  },
  raven: {
    slug: "raven",
    title: "Raven",
    label: "Workflow automation",
    overview:
      "Raven is a scheduled reporting and email-automation workflow built to reduce repetitive sales operations while preserving control over recipients, business rules and delivery.",
    challenge:
      "The workflow had to coordinate supplier selection, contacts, brands, batching, scheduling, email content and failure states without creating duplicate or unsafe sends.",
    responsibility:
      "I designed and built the workflow across frontend and backend concerns, including selection rules, review and send flows, scheduling behaviour, reusable email handling and production safeguards.",
    approach: [
      "Separate BOM setup, supplier setup, review and sending into clear stages.",
      "Enforce supplier, contact, brand and batch rules before scheduling.",
      "Preserve per-recipient content while supporting controlled wording changes.",
      "Design durable statuses, retries, idempotency and clear failure feedback.",
    ],
    outcome:
      "Automation handling 1,000+ emails per month and eliminating 18 hours of manual sales-operations work each week.",
    lesson:
      "Automation is valuable only when operators can understand, verify and recover from what the system is doing.",
    confidentialityNote:
      "Recipient, supplier and business-specific details are withheld due to confidentiality. The details above describe the workflow architecture and outcome only.",
  },
};

export const processIntro = {
  eyebrow: "How I work",
  heading: "Engineering the whole workflow - not only the happy path.",
  intro:
    "I move from business context to architecture, delivery and production ownership. Each stage reduces ambiguity before it becomes expensive.",
};

export const processSteps: ProcessStep[] = [
  {
    title: "Understand the workflow",
    description:
      "Start with users, operations, permissions, dependencies, edge cases and business constraints.",
  },
  {
    title: "Design the system",
    description:
      "Create clear component boundaries, predictable state, reusable patterns, validation architecture and consistent API integration.",
  },
  {
    title: "Deliver safely",
    description:
      "Plan loading, empty, error, permission, retry and failure states before they become production incidents.",
  },
  {
    title: "Own the outcome",
    description:
      "Stay involved through implementation, review, deployment, release, production support and iteration.",
  },
];

export const expertiseIntro = {
  eyebrow: "Expertise",
  heading: "Frontend depth with full-stack delivery context.",
};

export const capabilities: Capability[] = [
  {
    title: "Product Frontend Engineering",
    description:
      "React, Next.js, TypeScript, complex forms, data-heavy interfaces, responsive systems, accessibility, performance and production states.",
    tags: ["React", "Next.js", "TypeScript", "Accessibility"],
  },
  {
    title: "Frontend Architecture",
    description:
      "Reusable component systems, state management, API integration standards, modular applications, permission-aware UI, Storybook and design-system thinking.",
    tags: ["Component systems", "State management", "API standards", "Storybook"],
  },
  {
    title: "Full-Stack Delivery",
    description:
      "Node.js, Express, REST API design, MySQL, Sequelize, MongoDB, authentication, role-based access, scheduled jobs and workflow automation.",
    tags: ["Node.js", "REST APIs", "MySQL", "Automation"],
  },
  {
    title: "Technical Leadership",
    description:
      "Architecture decisions, code reviews, sprint delivery, mentoring, releases, stakeholder communication and production support.",
    tags: ["Code reviews", "Mentoring", "Releases", "Stakeholder communication"],
  },
];

export const skillsIntro = {
  eyebrow: "Core stack",
  heading: "The tools I use to turn product requirements into production software.",
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    description: "Interfaces, state and interaction layers users work in directly.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "SCSS",
      "Tailwind CSS",
      "Ant Design",
      "Redux",
      "React Query",
      "AG Grid",
      "Storybook",
    ],
  },
  {
    label: "Backend and data",
    description: "APIs and data layers that power the products behind the interface.",
    skills: ["Node.js", "Express", "REST API Design", "MySQL", "Sequelize", "MongoDB", "Database Design"],
  },
  {
    label: "Architecture and engineering",
    description: "Patterns that keep growing, multi-role platforms consistent and maintainable.",
    skills: [
      "Frontend Architecture",
      "Reusable Component Systems",
      "State Management",
      "Form Validation",
      "API Integration",
      "Modular Application Architecture",
      "Authentication",
      "Role-Based Access Control",
      "Scheduled Jobs",
      "Workflow Automation",
    ],
  },
  {
    label: "Tools",
    description: "The workflow around writing, reviewing and shipping the code.",
    skills: ["Git", "GitHub", "Jira", "Postman", "Jest", "WordPress"],
  },
];

export const engineeringPerspective = {
  heading: "The interface is only the visible layer.",
  copy: "Most business software is not difficult because of the screen. It is difficult because dozens of APIs, permissions, workflows, validation rules and edge cases must behave like one coherent product. That is the kind of engineering work I enjoy.",
  supportingCopy:
    "I work best where thoughtful architecture can make complicated operational work feel straightforward.",
};

export interface SystemLayer {
  label: string;
  description: string;
}

export const systemLayers: SystemLayer[] = [
  {
    label: "Interface",
    description: "What people see and act on - the thinnest layer, and the one everyone judges first.",
  },
  {
    label: "Workflows",
    description: "The sequences of steps and business rules a product has to get right, not just show.",
  },
  {
    label: "Permissions",
    description: "Who can see or do what, enforced consistently across every screen and role.",
  },
  {
    label: "APIs",
    description: "The integration surface connecting the interface to the systems doing the real work.",
  },
  {
    label: "Data",
    description: "The source of truth every other layer ultimately depends on.",
  },
];

export const experienceIntro = {
  eyebrow: "Experience",
  heading: "From frontend delivery to product ownership and technical leadership.",
  supportingSentence:
    "My progression has moved from frontend implementation to full-stack product ownership, architecture and technical leadership.",
};

export const experience: ExperienceItem[] = [
  {
    company: "ITSEC",
    role: "Full Stack Developer / Software Engineer",
    dates: "Mar 2026 - Present",
    summary:
      "Own frontend architecture and delivery for VerifiX, including 100+ API integrations, deployments and production releases. Built core compliance workflows and major Nexus modules.",
  },
  {
    company: "Supreme Components International",
    role: "Web Solution Engineer · Frontend Engineer",
    dates: "Jan 2023 - Mar 2026",
    summary:
      "Led a five-engineer team while remaining hands-on. Architected and delivered EDEN, workflow automation and 40+ production modules across a React, Node.js and MySQL platform.",
  },
  {
    company: "Spark Eighteen",
    role: "Frontend Engineer",
    dates: "Jan 2022 - Jan 2023",
    summary:
      "Built React and Next.js product features, reusable Storybook components and responsive API-integrated interfaces across multiple client products.",
  },
  {
    company: "K.S DIGIPOUCH · Harley-Davidson client",
    role: "Frontend Engineer",
    dates: "Nov 2020 - Dec 2021",
    summary:
      "Built responsive React interfaces from Figma designs and delivered reusable production pages, components, enhancements and defect fixes.",
  },
];

export const resumeLinkCta: CtaLink = { label: "View full résumé", href: "/resume" };

export interface Principle {
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    title: "Architecture",
    description: "Reusable systems, predictable state and permission-aware interfaces.",
  },
  {
    title: "Delivery",
    description: "Full-stack execution from APIs and workflows to production releases.",
  },
  {
    title: "Leadership",
    description: "Code reviews, mentoring, planning and calm production ownership.",
  },
];

export const aboutPreview = {
  eyebrow: "About",
  heading: "I bring structure to products with a lot happening beneath the surface.",
  paragraphs: [
    "I started in frontend engineering, translating product ideas into responsive interfaces. Over time, the work expanded into architecture, API design, workflow automation, production releases and leading engineers.",
    "Today I work across the stack, with the frontend as my strongest layer. I enjoy products where the interface sits on top of complex permissions, business rules and operational workflows - and where thoughtful engineering can make that complexity feel straightforward.",
  ],
  pullQuote:
    "Good software is a little like good biryani: the layers matter, every ingredient has a role, and adding more does not automatically make it better.",
  cta: { label: "More about me", href: "/about" } as CtaLink,
};

export const aboutPage = {
  heading: "Engineering complex products with calm, practical ownership.",
  extraParagraphs: [
    "I have worked across customer-facing products, internal operations, compliance technology, workflow automation and data-heavy business applications. My strongest contribution is usually at the point where product requirements, frontend architecture, APIs and operational reality meet.",
    "I remain hands-on with implementation while contributing to technical decisions, code quality, mentoring, delivery planning and production support.",
  ],
  education:
    "Bachelor of Technology in Electronics and Communication Engineering - Chaibasa Engineering College, 2017-2021",
};

export const testimonialsSection = {
  heading: "What people say about working with me",
  intro:
    "Perspectives from people who have worked with me across engineering, delivery and product operations.",
  testimonials: [] as Testimonial[],
};

export const contactSection = {
  eyebrow: "Contact",
  heading: "Have a complex product or workflow to untangle?",
  body: "I'm open to senior engineering roles, contract work and conversations about frontend architecture, full-stack platforms and product delivery.",
  emailCta: { label: "Email me", email: person.email },
  secondaryCta: {
    label: "Connect on LinkedIn",
    href: socialLinks.find((link) => link.label === "LinkedIn")?.href ?? "",
  } as CtaLink,
  form: {
    fields: {
      name: "Name",
      email: "Work email",
      company: "Company (optional)",
      project: "What are you building?",
      message: "Message",
    },
    submit: "Send message",
  },
};

export const resumePage = {
  eyebrow: "Résumé",
  heading: "Experience, capabilities and production work.",
  intro:
    "A concise overview of my professional experience, technical capabilities and engineering ownership.",

  pdfPath: "/resume/zeeshan-ahmad-resume.pdf",
  pdfAvailable: false,
};

export const notFoundPage = {
  heading: "This route does not exist.",
  body: "The page may have moved, or the address may be incorrect.",
};
