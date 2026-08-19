export type CaseStudy = {
  title: string;
  context: string;
  problem: string;
  solution: string;
  result: string;
  capabilities: string[];
  visual: "furniture" | "architecture" | "dashboard";
  imagePresentation?: "browser" | "showcase";
  image: { src: string; alt: string };
  demoUrl?: string;
};

export const projects: CaseStudy[] = [
  {
    title: "Luxury Furniture WooCommerce",
    context: "A premium furniture ecommerce experience designed to make a large catalog feel refined and easy to shop.",
    problem: "Complex products become difficult to browse when filters, variants, product information, and checkout are not organized clearly.",
    solution: "A responsive storefront with focused product discovery, structured detail pages, clear variants, and a streamlined purchase flow.",
    result: "A polished ecommerce experience with flexible product presentation and a performance-aware WooCommerce foundation.",
    capabilities: ["WordPress", "WooCommerce", "Ecommerce UX", "Performance"],
    visual: "furniture",
    imagePresentation: "showcase",
    image: {
      src: "/images/projects/luxury-furniture-storefront-showcase-v3.png",
      alt: "Luxury furniture storefront displayed across laptop, tablet, and mobile devices",
    },
    demoUrl: "https://luxury-furniture-storefront.vercel.app/",
  },
  {
    title: "Architecture Company WordPress Site",
    context: "A clear corporate publishing platform for projects, services, expertise, and editorial content.",
    problem: "Company sites become difficult to maintain when each project or service requires its layout to be rebuilt manually.",
    solution: "Reusable content structures and responsive components that keep publishing consistent without limiting the team.",
    result: "A maintainable content system for managing services, projects, and editorial content without rebuilding layouts.",
    capabilities: ["WordPress", "CMS Architecture", "Security", "Maintainability"],
    visual: "architecture",
    imagePresentation: "showcase",
    image: {
      src: "/images/projects/architecture-company-showcase.png",
      alt: "Architecture company website displayed across laptop, tablet, and mobile devices",
    },
    demoUrl: "https://architecture-company-one.vercel.app/",
  },
  {
    title: "SaaS Project Management Dashboard",
    context: "An authenticated workspace for small teams to coordinate projects and tasks.",
    problem: "Dashboards must make navigation, status, tasks, and account state clear without overwhelming users.",
    solution: "A responsive application shell with focused project views, searchable tasks, and structured data flows.",
    result: "An authenticated dashboard with understandable project and task workflows across screen sizes.",
    capabilities: ["Next.js", "Dashboard UX", "Structured workflows"],
    visual: "dashboard",
    imagePresentation: "showcase",
    image: {
      src: "/images/projects/rove-project-management-showcase-v4.png",
      alt: "Rove project management dashboard displayed across laptop, tablet, and mobile devices",
    },
    demoUrl: "https://saas-project-management-tawny.vercel.app/",
  },
];
