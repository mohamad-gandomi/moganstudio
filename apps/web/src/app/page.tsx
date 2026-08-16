import { ContactSection } from "@/components/contact-section";
import { FinalCta } from "@/components/final-cta";
import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/selected-work";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhyProcess } from "@/components/why-process";
import { siteUrl } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "Mogan Studio", url: siteUrl },
    { "@type": "Person", "@id": `${siteUrl}/#gandomi`, name: "Gandomi", jobTitle: "Developer", worksFor: { "@id": `${siteUrl}/#organization` } },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Mogan Studio", publisher: { "@id": `${siteUrl}/#organization` } },
    { "@type": "Service", "@id": `${siteUrl}/#service`, name: "WordPress and WooCommerce development", provider: { "@id": `${siteUrl}/#organization` }, areaServed: "Worldwide", serviceType: ["WordPress development", "WooCommerce development", "Website performance optimization", "Technical support", "Custom web development"] },
  ],
};

export default function Home() {
  return (
    <>
      <a href="#main-content" className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-md bg-ink px-4 py-3 text-sm font-semibold text-white focus:translate-y-0">Skip to content</a>
      <SiteHeader />
      <main id="main-content"><Hero /><Services /><SelectedWork /><WhyProcess /><ContactSection /><FinalCta /></main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </>
  );
}
