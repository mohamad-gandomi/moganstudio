# Mogan Studio — Design System & UI Direction

## 1. Design goal

Build a credible, premium, conversion-focused website for **Mogan Studio**, a remote WordPress / WooCommerce development service presented through the professional identity **Gandomi, Developer**.

The visual system should feel:

- modern
- calm
- technically competent
- premium without feeling luxurious for its own sake
- direct and business-friendly
- spacious
- slightly editorial
- restrained rather than flashy

The website must **not** feel like a generic SaaS template, a loud creative agency, or an over-designed developer portfolio.

The core rule:

> Keep V1 credible, fast, clear, and easy to scan. Do not over-design it.

---

## 2. Overall visual direction

### Base
- Light overall website.
- Use selected **charcoal / near-black sections** for contrast.
- Most surfaces: white, off-white, light gray.
- Main dark section: **Why Work With Me + Process**.
- Final CTA can be light or lightly tinted, but should not compete with the dark credibility section.

### Color philosophy
Use a **mostly monochrome system**.

Suggested neutral tokens:

```css
--background: #f7f7f5;
--surface: #ffffff;
--surface-subtle: #f0f0ed;

--foreground: #111111;
--foreground-muted: #666666;
--foreground-soft: #8a8a8a;

--border: #deded9;
--border-strong: #c8c8c2;

--dark: #111111;
--dark-surface: #181818;
--dark-foreground: #f7f7f5;
--dark-muted: #b6b6b0;
```

Do **not** introduce a bright brand accent by default. If a small accent is eventually needed, keep it extremely restrained and use it only for details, never as the dominant visual language.

---

## 3. Typography

### Primary sans
**Manrope Variable**

Self-host the Fontsource package inside the application. Use the variable font so the interface can use a broad weight range without multiple font requests. Do not load fonts from a third-party CDN at runtime.

Use for:
- UI
- navigation
- body copy
- buttons
- labels
- most headings
- form fields

### Serif accent
**Newsreader Variable**

Self-host the normal and italic Fontsource files. Newsreader adds a warmer editorial voice while Manrope keeps navigation, UI, and body copy compact and highly legible.

Use selectively for:
- one or two words inside major headings
- editorial labels
- occasional display moments
- subtle contrast, never body text

Do not overuse the serif.

### Type personality
- Headings: strong, modern, confident.
- Body: clear and neutral.
- Labels: compact and understated.
- Avoid extremely tiny text.
- Avoid decorative all-caps everywhere.

### Suggested desktop scale

```text
Display / Hero: 48–56px, 1.0 line-height
H2: 34–42px, 1.0–1.1 line-height
H3: 26–32px, 1.1–1.2 line-height
Body large: 18–20px, 1.55
Body: 16–18px, 1.6
Small / labels: 13–14px
```

### Mobile
Scale fluidly using `clamp()` rather than hard breakpoints wherever sensible.

### Icon system

Use **Lucide** as the single interface icon library.

- use icons only where they improve scanning or clarify an action
- default size: 18–24px
- default stroke width: 1.5–1.75
- keep icons monochrome and aligned with surrounding text
- use accessible text labels for interactive icon-only controls
- do not mix icon libraries or use icons as decorative clutter

---

## 4. Spacing

The site should feel spacious but not empty.

Recommended system:

```text
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 120 / 144px
```

Typical section padding:
- Desktop: 96–144px vertical
- Tablet: 80–112px
- Mobile: 64–88px

Maximum content width:
- `1200–1280px`
- Keep readable text columns narrower, around `600–720px`

---

## 5. Corners, borders, shadows

### Border radius
Use slight rounding:
- cards / panels: **8–12px**
- buttons: 8–10px
- form controls: 8–10px
- screenshot frames: 10–12px

Avoid pill-shaped cards.

### Borders
Use thin, quiet neutral borders.

### Shadows
Very subtle or almost none.

If used:
```css
box-shadow: 0 8px 30px rgba(0,0,0,0.05);
```

Avoid dramatic floating cards.

---

## 6. Motion

Use only **subtle, fast, functional motion**.

Allowed:
- gentle fade-up / fade-in on section entrance
- short translateY reveals
- hover border changes
- small arrow movement
- slight screenshot lift or scale
- smooth anchor scrolling
- restrained mobile menu transitions

Avoid:
- parallax
- long cinematic intro
- heavy scroll-jacking
- oversized cursor effects
- 3D spins
- decorative particle systems
- animations that delay reading

Target animation durations:
- hover: 120–180ms
- reveal: 300–500ms

Respect `prefers-reduced-motion`.

---

## 7. Header

### Brand
Use text wordmark only:

**MOGAN STUDIO**

No separate icon / symbol in V1.

### Desktop
Sticky header.

Suggested structure:

```text
[MOGAN STUDIO]   Services   Work   Why Me   Process   Contact   [Send Project Details]
```

The number of nav links can be reduced if it feels crowded.

Header behavior:
- transparent / light at top
- subtle background blur or solid surface after scrolling
- thin bottom border may appear on scroll
- keep height compact

### Mobile
Use hamburger menu.

Mobile menu should:
- open cleanly
- appear as a focused, inset navigation panel over a quiet backdrop
- show numbered section links with restrained directional icons
- show the primary CTA in a distinct footer area
- close after anchor selection
- close when the backdrop is selected
- trap focus correctly
- support Escape key

---

## 8. Hero

### Layout
Split layout on desktop:
- left: copy + CTAs
- right: layered website / project screenshots

Stack vertically on mobile.

### Hero hierarchy
1. Small supporting eyebrow if useful
2. Main headline
3. Supporting paragraph
4. Primary + secondary CTA
5. Optional tiny credibility line

### Hero copy
Headline:

> Fast, Reliable WordPress & WooCommerce Development for Growing Businesses.

Subheadline:

> From new builds to ongoing improvements, I help businesses keep their WordPress and WooCommerce sites fast, reliable, and ready to grow.

Primary CTA:
**Send Project Details**

Secondary CTA:
**View My Work**

### Hero imagery
Use a layered stack of project / website screenshots.

V1 uses original, locally stored generated concept imagery for all three portfolio examples. Keep these visuals clearly presented as concept work; do not imply real clients, results, endorsements, or metrics.

Visual rules:
- real browser-like frames, not generic floating blobs
- slight overlap
- limited rotation, if any
- clean borders
- minimal shadow
- responsive cropping
- no fake client logos

---

## 9. Services

Four service cards:

1. WordPress Development
2. WooCommerce
3. Performance & Technical Support
4. Custom Web Development

### Card style
- small minimal line icon
- service title
- one-sentence description
- three example services
- quiet border
- white/light surface
- subtle hover treatment

Avoid:
- large colorful illustrations
- 3D icons
- oversized gradients

Suggested grid:
- desktop: 2x2
- mobile: 1 column

---

## 10. Portfolio / Selected Work

Use **large alternating case-study sections**, not a card grid.

Each case study:
- label: **Concept Project**
- project name
- short scenario
- Problem
- What I did
- Result
- tech / capabilities
- large visual

Alternate image/text position on desktop.

Keep full case studies on the one-page site for V1.

### Project concepts

#### 1. Luxury furniture WooCommerce store
Show:
- premium product presentation
- filters
- product pages
- cart / checkout
- responsive experience

#### 2. Architecture / construction WordPress site
Show:
- clean company presentation
- flexible CMS
- performance
- security
- easy content management

#### 3. SaaS project-management dashboard
Show:
- authentication
- dashboard UX
- tasks / projects
- structured data flows
- API-backed functionality
- Next.js + NestJS or Laravel

Do not imply these are real clients.

Do not invent:
- revenue numbers
- traffic numbers
- testimonials
- client names
- conversion gains

Use wording that describes the **demonstrated outcome**, not fake business results.

---

## 11. Dark credibility section

Combine:
- Why Work With Me
- Process

This is the main dark section of the site.

### Why Work With Me
Four principles:

1. Simple solutions without unnecessary complexity
2. Security and reliability built in
3. Direct communication with the developer doing the work
4. Maintainable work that can evolve over time

Experience can appear as supporting proof, but should not dominate the section.

### Process
Use a clear 5-step flow:

1. Send project details
2. Scope & estimate
3. Build / improve
4. Review & launch
5. Optional ongoing support

Visually:
- dark background
- light text
- muted gray supporting copy
- thin dividers
- numbered steps
- no glowing neon treatments

---

## 12. Contact

Two-column layout:
- left: supporting copy / CTA / email
- right: form

Desktop: 40/60 or 45/55 split.
Mobile: stack.

### Core fields
- Name
- Email
- Company / website
- What do you need help with?

### Optional fields
- Existing website URL
- Budget range
- Preferred timeline

### Budget options
- Under $500
- $500–$1,000
- $1,000–$2,000
- $2,000–$4,000
- $4,000+
- Not sure yet

### Timeline options
- ASAP
- 1–2 weeks
- 2–4 weeks
- 1–2 months
- Flexible

Submit:
**Send Project Details**

Public email once domain is secured:
`hello@moganstudio.com`

Form V1:
- email delivery only
- no separate submissions database required

---

## 13. Final CTA

Before footer, add a dedicated CTA section.

Suggested direction:

### Heading
**Have a project in mind?**

### Supporting copy
Short, calm, direct.

### CTA
**Send Project Details**

This section should feel like a strong final invitation, not a marketing banner.

---

## 14. Footer

Identity:

**MOGAN STUDIO**<br>
**Gandomi, Developer**

Include:
- GitHub
- LinkedIn
- Instagram

Use placeholder href values until actual profile URLs are supplied.

Also include:
- copyright
- optional short service statement
- optional email

Do not include a portrait.

---

## 15. Responsive behavior

### Mobile-first requirements
- no horizontal overflow
- clear 44px+ touch targets
- hamburger navigation
- hero screenshots stack cleanly
- service cards become single-column
- case studies stack with visual first or copy first depending on readability
- contact becomes one column
- process steps remain easy to follow
- typography scales with `clamp()`

### Breakpoint philosophy
Use Tailwind breakpoints sparingly and prefer fluid layouts.

---

## 16. Accessibility

Required:
- semantic HTML landmarks
- visible focus states
- keyboard-usable navigation
- accessible mobile dialog/menu
- form labels, not placeholder-only fields
- sufficient contrast
- reduced-motion support
- meaningful alt text
- no text embedded in images where avoidable
- `aria-live` for form success/error messages where appropriate

---

## 17. Visual anti-patterns

Do not use:
- excessive gradients
- neon colors
- glassmorphism everywhere
- large blob backgrounds
- fake testimonial logos
- fake review badges
- floating tech-logo clouds
- progress bars for skills
- generic “10+ years / 100+ projects” counters unless factual data is explicitly supplied
- developer-terminal gimmicks
- code rain
- giant WordPress logo in the hero
- stock photos of teams or offices
- a personal portrait in V1
- full-page dark mode
- loud animated backgrounds

---

## 18. Design acceptance checklist

The design is ready when:

- [ ] It looks credible for an international business client.
- [ ] The offer is understandable within a few seconds.
- [ ] The primary CTA is obvious.
- [ ] The design feels custom but not over-designed.
- [ ] Light/dark contrast is deliberate.
- [ ] The serif font is used sparingly.
- [ ] Mobile layout works without compromises.
- [ ] Portfolio projects are clearly labeled as concept work.
- [ ] No fake client evidence is shown.
- [ ] Contact flow feels easy.
- [ ] Motion is subtle and optional.
- [ ] Performance is not sacrificed for visual effects.
