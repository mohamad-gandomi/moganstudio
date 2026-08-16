# Mogan Studio — Complete Website Build Specification

## 0. Codex instruction

Build the website described in this file and in `design.md`.

Treat both Markdown files as the source of truth.

When a design or implementation choice is not specified:

1. prefer the simplest credible solution,
2. preserve performance,
3. preserve accessibility,
4. preserve the monochrome visual system,
5. do not introduce extra dependencies unless they clearly improve the result,
6. do not invent business facts.

Do not expand V1 into a blog, CMS, dashboard, login system, or multi-page marketing site.

---

# 1. Project

## Brand
**Mogan Studio**

## Public professional identity
**Victor Chinaski**

## Public presentation
Hybrid personal + brand presentation.

Use:
- **MOGAN STUDIO** as the primary brand
- **Victor Chinaski, Developer** as supporting identity
- first-person writing: “I build…”, “I help…”, not “we”

Do not lead with location.

Do not claim to be based somewhere that is not true.

## Primary domain
`moganstudio.com`

Status:
- user reports the domain is currently available
- domain still needs to be purchased / connected before production launch

## Public email
`hello@moganstudio.com`

Use this once the domain/email is configured.

---

# 2. Goal

Publish a sales-focused English website for remote / international WordPress and web-development clients.

Primary outcome:
**generate qualified project inquiries.**

The website should communicate:
- reliability
- technical competence
- simplicity
- maintainability
- direct developer communication

---

# 3. Positioning

## Primary offer
End-to-end WordPress development and technical support.

## Main specialization
- WordPress
- WooCommerce

## Secondary capability
Custom web development:
- Next.js
- NestJS
- Laravel

The custom stack is supporting capability, not the homepage identity.

Do not market “AI development” or Codex as the service.

AI/Codex is an internal delivery tool.

## Primary ideal client
Established small and medium businesses, including ecommerce businesses, that:
- need a professional WordPress / WooCommerce website
- need improvements to an existing site
- need ongoing development
- need bug fixes
- need performance improvements
- need technical support

## Secondary client channel
Agencies for repeat / white-label work.

## Positioning sentence
> I help small and medium businesses build, improve, and maintain fast, reliable WordPress and WooCommerce websites that support growth, leads, and sales.

## Main CTA
**Send Project Details**

---

# 4. Site architecture

V1 is a **single-page site with anchor navigation**.

Order:

1. Header
2. Hero
3. Services
4. Selected Work
5. Why Work With Me + Process — dark section
6. Contact
7. Final CTA
8. Footer

Do not create separate project pages in V1.

---

# 5. Technology

## Required
- Next.js
- TypeScript
- Tailwind CSS

Use current App Router conventions in the installed project version.

## Hosting
Vercel.

## Analytics
Use **Vercel Analytics**.

## Dependency philosophy
Keep dependencies minimal.

Prefer:
- native browser APIs
- React / Next capabilities
- CSS transitions
- lightweight utilities already in the project

Avoid introducing heavy animation libraries unless absolutely necessary.

If icons are needed, use a small, tree-shakeable icon package already present or choose one minimal package.

---

# 6. Recommended project structure

A simple structure is preferred:

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    site-header.tsx
    mobile-menu.tsx
    hero.tsx
    services.tsx
    case-study.tsx
    selected-work.tsx
    why-process.tsx
    contact-section.tsx
    project-form.tsx
    final-cta.tsx
    site-footer.tsx
    section-heading.tsx
  data/
    services.ts
    projects.ts
    social-links.ts
  lib/
    validation.ts
    mail.ts
public/
  images/
    hero/
    projects/
```

Do not fragment the code excessively.

---

# 7. Header

## Brand
Text wordmark:
**MOGAN STUDIO**

No symbol/logo mark in V1.

## Desktop
Sticky navigation.

Recommended anchors:
- Services
- Work
- Why Me
- Process
- Contact

Primary button:
**Send Project Details**

## Mobile
Hamburger menu.

Requirements:
- accessible dialog/menu semantics
- keyboard navigation
- Escape closes menu
- body scroll behavior handled correctly
- clicking an anchor closes the menu
- visible focus states

---

# 8. Hero

## Layout
Desktop:
- text left
- layered website / project screenshots right

Mobile:
- stack
- copy first
- visual second

## Headline
> Fast, Reliable WordPress & WooCommerce Development for Growing Businesses.

## Subheadline
> From new builds to ongoing improvements, I help businesses keep their WordPress and WooCommerce sites fast, reliable, and ready to grow.

## Primary CTA
**Send Project Details**

Anchor to contact.

## Secondary CTA
**View My Work**

Anchor to Selected Work.

## Visual
Layered website/project screenshots.

Since the final concept projects may not be fully built yet, V1 may initially use:
- clean screenshot placeholders
- simple browser frames
- local static mock images

Do not use fake client logos.

Make it easy to replace images later.

---

# 9. Services

Use 4 cards.

Each card:
- minimal line icon
- title
- one sentence
- 3 examples

## Service 1 — WordPress Development

Suggested copy:

> Simple, secure WordPress websites and custom features built to be fast, maintainable, and easy to manage.

Examples:
- Custom websites
- Theme & plugin customization
- Custom features & integrations

## Service 2 — WooCommerce

Suggested copy:

> Reliable ecommerce development focused on making your store easier to operate and better for customers.

Examples:
- Store development & customization
- Checkout, payment & shipping workflows
- Integrations & custom functionality

## Service 3 — Performance & Technical Support

Suggested copy:

> Improve speed, fix problems, strengthen security, and keep existing WordPress sites running reliably.

Examples:
- Speed optimization
- Bug fixing & troubleshooting
- Maintenance & ongoing improvements

## Service 4 — Custom Web Development

Suggested copy:

> For projects that need more flexibility than WordPress, I also build tailored web applications with modern frameworks.

Examples:
- Next.js applications
- NestJS backends & APIs
- Laravel applications

## Tone rule
Simple and outcome-focused for business owners, with enough technical specificity to show competence.

Core principles to reinforce:
- simplicity
- security
- reliability
- maintainability

---

# 10. Selected Work

Use 3 **large alternating case-study sections**.

Label every project:
**Concept Project**

Never imply that these are commissioned client projects.

Never invent:
- client names
- testimonials
- revenue
- traffic
- conversions
- customer numbers
- awards

Each case study structure:

```text
Concept Project
Project title
Short context

Problem
What I did
Result

Capabilities / stack
Large screenshot or mockup
```

“Result” means demonstrated design/technical result, not invented business metrics.

---

# 11. Project 1 — Luxury Furniture WooCommerce Store

## Type
Concept Project

## Scenario
A premium furniture ecommerce brand needs a storefront that feels refined while making a large catalog easy to browse and purchase from.

## Problem
Complex products and a premium catalog can become difficult to browse if filtering, product information, variants, and checkout flows are not organized clearly.

## What I did
Demonstrate:
- premium WooCommerce storefront
- responsive product archive
- filtering
- strong product-detail hierarchy
- variants/options
- cart
- checkout
- payment/shipping-ready structure
- performance-aware implementation

## Result
Suggested truthful wording:

> Created a polished responsive storefront with easier product discovery, flexible product presentation, and a streamlined purchase flow.

## Capabilities
- WordPress
- WooCommerce
- responsive development
- ecommerce UX
- performance
- checkout workflows

---

# 12. Project 2 — Architecture / Construction Company WordPress Site

## Type
Concept Project

## Scenario
An architecture / construction company needs a clear corporate site for projects, services, expertise, and editorial content.

## Problem
Company sites often become difficult to maintain when every project or service requires rebuilding layouts manually.

## What I did
Demonstrate:
- reusable WordPress content structures
- project portfolio
- service pages/sections
- editorial content
- responsive layouts
- performance
- security fundamentals
- maintainable admin experience

## Result
Suggested truthful wording:

> Built a clear, maintainable content system that lets a team manage services, projects, and editorial content without rebuilding layouts.

## Capabilities
- WordPress
- CMS architecture
- reusable components
- performance
- security
- maintainability

---

# 13. Project 3 — SaaS Project Management Dashboard

## Type
Concept Project

## Scenario
A small SaaS product needs an authenticated workspace for teams to manage projects and tasks.

## Problem
A dashboard must keep navigation, tasks, project status, API data, and account state understandable without overwhelming users.

## What I did
Demonstrate:
- authentication UI
- dashboard navigation
- projects
- tasks
- status
- filtering/search if useful
- API-backed data structure
- responsive application shell

## Stack
Prefer one:
- Next.js + NestJS
or
- Next.js + Laravel

The marketing website does not need to implement this backend; the concept screenshot/case study only needs to describe the demonstrated capability truthfully.

## Result
Suggested truthful wording:

> Implemented an authenticated dashboard concept with structured project and task workflows and API-backed data handling.

---

# 14. Why Work With Me

This lives inside the main dark section.

Lead with these four principles:

## 1. Simple solutions
> I avoid unnecessary complexity and choose solutions that solve the actual business problem.

## 2. Security & reliability
> Security, stability, and dependable behavior are treated as fundamentals rather than afterthoughts.

## 3. Direct communication
> You communicate directly with the developer doing the work.

## 4. Maintainability
> The work is built to be understandable, maintainable, and easier to improve over time.

Experience can be mentioned as supporting proof, but do not make the section primarily about years-of-experience counters.

Suggested summary:

> I focus on building solutions that stay simple, secure, reliable, and maintainable—not unnecessary complexity. You communicate directly with the developer doing the work, and the result is built to be easy to operate and improve over time.

---

# 15. Process

Present in the same dark section.

## Step 1
**Send project details**

Client sends:
- goals
- current site
- problems
- requirements

## Step 2
**Scope & estimate**

Clarify:
- scope
- dependencies
- price/range
- delivery expectations

## Step 3
**Build / improve**

Implementation with clear written updates.

## Step 4
**Review & launch**

Review, fixes, QA, launch.

## Step 5
**Optional ongoing support**

Maintenance, improvements, new features.

## Remote working copy
Suggested:

> Remote projects are handled asynchronously when possible, with clear scope, milestones, written updates, and scheduled calls when useful.

---

# 16. Contact section

## Layout
Two columns.

Left:
- heading
- short copy
- public email
- reassurance about response / process if useful

Right:
- inquiry form

## Heading
Can use:
**Tell me about your project.**

or:
**Send your project details.**

Prefer direct language.

## Core fields
Required unless noted:

1. Name
2. Email
3. Company / website
4. What do you need help with?

## Optional fields
5. Existing website URL
6. Budget range
7. Preferred timeline

## Budget
Options:
- Under $500
- $500–$1,000
- $1,000–$2,000
- $2,000–$4,000
- $4,000+
- Not sure yet

## Timeline
Options:
- ASAP
- 1–2 weeks
- 2–4 weeks
- 1–2 months
- Flexible

## Submit
**Send Project Details**

## Submission behavior
V1:
- send by email only
- no submissions database

Use a server-side endpoint / server action.

Do not expose mail credentials client-side.

Add:
- validation
- honeypot or similarly lightweight spam protection
- clear success state
- clear error state
- disabled/loading state while submitting

Public target email:
`hello@moganstudio.com`

During local development, support an environment variable override.

Example environment contract:

```env
CONTACT_TO_EMAIL=hello@moganstudio.com
CONTACT_FROM_EMAIL=
MAIL_API_KEY=
```

The exact provider can be chosen during implementation.

Do not commit secrets.

---

# 17. Final CTA

Place after contact and before footer.

Heading:
**Have a project in mind?**

Supporting copy:
A short line inviting the visitor to send details.

CTA:
**Send Project Details**

Anchor to contact form.

---

# 18. Footer

## Identity
**MOGAN STUDIO**

Supporting:
**Victor Chinaski, Developer**

## Socials
Include:
- GitHub
- LinkedIn
- Instagram

Actual URLs are not yet specified.

Use a data file with placeholders:

```ts
export const socialLinks = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];
```

Mark TODO comments so URLs are replaced before production.

## Do not include
- personal portrait
- fake address
- fake office
- fake phone
- fake legal company information

---

# 19. Visual system

See `design.md`.

Summary:
- light overall
- one major near-black section
- monochrome
- Geist
- Instrument Serif accents
- 8–12px radius
- very subtle/no shadows
- minimal line icons
- subtle motion
- spacious layout
- strong typography
- restrained editorial feel

---

# 20. SEO

Implement V1 fundamentals.

## Metadata
Suggested title:

> Mogan Studio — WordPress & WooCommerce Development

Suggested description:

> WordPress and WooCommerce development, performance improvements, technical support, and custom web development for growing businesses.

## Also include
- canonical when production domain is connected
- Open Graph metadata
- Twitter card metadata
- favicon / app icon based on simple wordmark or initials until final icon exists
- proper heading hierarchy
- semantic sections
- descriptive alt text
- `robots` defaults appropriate for production

Do not add keyword-stuffed copy.

---

# 21. Performance

Important because performance is part of the service promise.

Targets:
- excellent Core Web Vitals
- no unnecessary JS
- optimize images
- use `next/image`
- avoid huge client components
- keep most page sections server-rendered where practical
- client components only for interaction
- lazy-load non-critical visuals
- avoid layout shift
- load fonts efficiently
- avoid animation libraries if CSS is sufficient

---

# 22. Analytics

Use **Vercel Analytics**.

Keep analytics minimal.

Do not add extra tracking platforms for V1 unless later requested.

---

# 23. Accessibility

Required:
- semantic landmarks
- keyboard navigation
- skip link
- visible focus states
- accessible mobile menu
- form labels
- field error associations
- accessible success/error feedback
- contrast compliant
- `prefers-reduced-motion`
- alt text
- no hover-only essential information

---

# 24. Content rules

## Voice
First person.

Use:
- “I help…”
- “I build…”
- “I work…”
- “Send me your project details…”

Do not use:
- “Our team…”
- “We are a global agency…”
- invented team language

## Tone
- clear
- calm
- precise
- confident
- not arrogant
- low jargon
- business outcome first
- technical detail second

## Location
Do not lead with location.

Do not make a false location claim.

## Currency
USD / request-a-quote language.

---

# 25. Truthfulness rules

Important.

Portfolio items are concept projects.

Use the label:
**Concept Project**

Never fabricate:
- clients
- client logos
- testimonials
- awards
- revenue
- sales increases
- traffic
- conversion rates
- user counts

Do not imply a concept was paid client work.

---

# 26. No personal portrait

V1 intentionally does not use a portrait.

Trust should come from:
- clear positioning
- quality work
- professional name
- good copy
- process
- technical presentation

---

# 27. Icons

Services use small minimal line icons.

Keep icons:
- same stroke weight
- simple
- monochrome
- decorative or semantically labeled appropriately

Do not use colorful illustrations.

---

# 28. Motion

Allowed:
- subtle reveal
- smooth anchor scroll
- small hover movement
- small screenshot hover
- simple menu motion

Avoid:
- page transition spectacle
- parallax
- scroll hijacking
- excessive Framer Motion usage

If no animation package exists, prefer CSS.

---

# 29. State / data strategy

The marketing page should be mostly static.

Use local typed data arrays for:
- services
- case studies
- social links
- process steps

Avoid unnecessary CMS/database integration in V1.

---

# 30. Suggested TypeScript models

```ts
export type Service = {
  title: string;
  description: string;
  items: string[];
  icon: React.ComponentType<{ className?: string }>;
};

export type CaseStudy = {
  label: "Concept Project";
  title: string;
  context: string;
  problem: string;
  solution: string;
  result: string;
  capabilities: string[];
  image: {
    src: string;
    alt: string;
  };
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};
```

---

# 31. Form validation

Recommended:
- name: required
- email: required + valid email
- company/website: required based on current product decision; if implementation UX suggests separating “company” and “website,” do not do so without a clear reason
- need/help text: required with reasonable minimum length
- URL fields validate only when populated
- budget/timeline optional

Protect against:
- empty spam
- malformed values
- oversized submissions
- HTML/script injection in downstream rendering

Return generic server errors without leaking secrets.

---

# 32. Mobile requirements

The mobile version must be treated as first-class.

Check:
- 320px width
- 375px
- 390px / 393px
- 768px
- desktop

Requirements:
- no overflow
- no unreadably small labels
- no layered hero imagery covering copy
- 44px touch targets
- menu easy to close
- form controls full width
- adequate textarea size
- CTA buttons stack when needed

---

# 33. Production checklist

Before launch:

- [ ] Purchase `moganstudio.com`
- [ ] Attach domain to Vercel
- [ ] Configure DNS
- [ ] Configure `hello@moganstudio.com`
- [ ] Configure mail provider
- [ ] Add production email environment variables
- [ ] Add Vercel Analytics
- [ ] Replace placeholder project visuals
- [ ] Replace GitHub URL
- [ ] Replace LinkedIn URL
- [ ] Replace Instagram URL
- [ ] Add favicon
- [ ] Add OG image
- [ ] Test all anchor links
- [ ] Test mobile menu
- [ ] Test contact form success
- [ ] Test contact form failure
- [ ] Test spam protection
- [ ] Test keyboard navigation
- [ ] Test reduced motion
- [ ] Run Lighthouse
- [ ] Check metadata
- [ ] Check mobile layout
- [ ] Check 404 behavior
- [ ] Ensure no Iran-specific public positioning unless intentionally added
- [ ] Ensure no false location claims
- [ ] Ensure concept projects are visibly labeled

---

# 34. Definition of done

The Mogan Studio V1 website is done when:

- [ ] publicly accessible
- [ ] mobile version works well
- [ ] `moganstudio.com` is connected
- [ ] contact CTA works
- [ ] contact form delivers email
- [ ] at least 3 project examples are visible
- [ ] every concept project is honestly labeled
- [ ] services are clear
- [ ] Why/Process dark section is complete
- [ ] GitHub / LinkedIn / Instagram links are present
- [ ] Vercel Analytics is enabled
- [ ] performance is strong
- [ ] accessibility basics pass
- [ ] no unnecessary location-specific positioning appears
- [ ] no fabricated evidence appears

---

# 35. Build priority

Codex should implement in this order:

1. scaffold / verify Next.js + TypeScript + Tailwind
2. global design tokens, fonts, base styles
3. page shell + sticky header + mobile menu
4. hero
5. services
6. selected work structure with temporary local visuals if needed
7. dark Why/Process section
8. contact layout + form UI
9. form server submission
10. final CTA + footer
11. Vercel Analytics
12. accessibility pass
13. responsive pass
14. performance pass
15. SEO metadata
16. final QA

Do not block implementation waiting for perfect project screenshots. Build the reusable layout first and make visual assets replaceable.
