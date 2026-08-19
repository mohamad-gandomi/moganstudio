export type Service = {
  icon: "wordpress" | "commerce" | "performance" | "code";
  title: string;
  description: string;
  items: string[];
};

export const services: Service[] = [
  {
    icon: "wordpress",
    title: "WordPress Development",
    description: "Simple, secure WordPress websites and custom features built to be fast, maintainable, and easy to manage.",
    items: ["Custom websites", "Theme & plugin customization", "Custom features & integrations"],
  },
  {
    icon: "commerce",
    title: "WooCommerce",
    description: "Reliable ecommerce development focused on making your store easier to operate and better for customers.",
    items: ["Store development & customization", "Checkout, payment & shipping", "Integrations & custom functionality"],
  },
  {
    icon: "performance",
    title: "Performance & Technical Support",
    description: "Improve speed, fix problems, strengthen security, and keep existing WordPress sites running reliably.",
    items: ["Speed optimization", "Bug fixing & troubleshooting", "Maintenance & ongoing improvements"],
  },
  {
    icon: "code",
    title: "Custom Web Development",
    description: "For projects that need more flexibility than WordPress, I build tailored applications with modern frameworks.",
    items: ["Next.js applications", "Custom integrations", "Laravel applications"],
  },
];
