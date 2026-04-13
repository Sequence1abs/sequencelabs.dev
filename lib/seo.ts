import type { Metadata } from "next";

export const SITE_URL = "https://sequencelabs.dev";

/** Merged in root layout — global defaults from docs/sequencelabs-seo-metadata.md */
export const globalSeoDefaults: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sequence Labs | Digital Design and Development Agency",
  description:
    "Sequence Labs is a digital agency specialising in web design, brand identity and custom software for businesses ready to grow. We build digital products that work as hard as the businesses behind them.",
  openGraph: {
    siteName: "Sequence Labs",
    type: "website",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const ogImage = (path: string) => ({
  url: path,
  width: 1200,
  height: 630,
});

export const homeMetadata: Metadata = {
  title: "Sequence Labs | Digital Design and Development Agency",
  description:
    "Sequence Labs is a digital agency specialising in web design, brand identity and custom software for businesses ready to grow. We build digital products that work as hard as the businesses behind them.",
  keywords: [
    "digital agency",
    "web design",
    "brand identity",
    "custom software",
    "digital agency Sri Lanka",
  ],
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: "Sequence Labs | Digital Design and Development Agency",
    description:
      "Web design, brand identity and custom software for ambitious businesses. We build digital products that perform.",
    url: `${SITE_URL}/`,
    images: [ogImage("/og/home.jpg")],
  },
  twitter: {
    title: "Sequence Labs | Digital Design and Development Agency",
    description:
      "Web design, brand identity and custom software for ambitious businesses. We build digital products that perform.",
    images: [`${SITE_URL}/og/home.jpg`],
  },
};

export const aboutMetadata: Metadata = {
  title: "About Us | Sequence Labs Digital Agency",
  description:
    "Sequence Labs is a digital agency that partners with ambitious clients to design, build and grow their digital presence. From websites and brand identities to custom-built software, we drive real outcomes.",
  keywords: [
    "about Sequence Labs",
    "digital agency",
    "design and development team",
    "web design agency Sri Lanka",
  ],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Sequence Labs | Strategy Made Visible",
    description:
      "Every engagement begins with listening. We design with purpose, build with precision, and deliver work our clients are proud to put their name on.",
    url: `${SITE_URL}/about`,
    images: [ogImage("/og/about.jpg")],
  },
  twitter: {
    title: "About Sequence Labs | Strategy Made Visible",
    description:
      "Every engagement begins with listening. We design with purpose, build with precision, and deliver work our clients are proud to put their name on.",
    images: [`${SITE_URL}/og/about.jpg`],
  },
};

export const workMetadata: Metadata = {
  title: "Our Work | Sequence Labs Digital Agency",
  description:
    "Explore Sequence Labs' portfolio of web design, brand identity and custom digital product projects. Built for startups and established businesses across Sri Lanka and beyond.",
  keywords: [
    "digital agency portfolio",
    "web design work",
    "brand identity projects",
    "custom software portfolio",
  ],
  alternates: { canonical: `${SITE_URL}/work` },
  openGraph: {
    title: "Our Work | Sequence Labs Portfolio",
    description:
      "Real projects. Real results. See how we help businesses grow through purposeful design and thoughtful development.",
    url: `${SITE_URL}/work`,
    images: [ogImage("/og/work.jpg")],
  },
  twitter: {
    title: "Our Work | Sequence Labs Portfolio",
    description:
      "Real projects. Real results. See how we help businesses grow through purposeful design and thoughtful development.",
    images: [`${SITE_URL}/og/work.jpg`],
  },
};

export const servicesMetadata: Metadata = {
  title: "Services | Sequence Labs Digital Agency",
  description:
    "From brand identity and web design to fully custom-built software, Sequence Labs delivers end-to-end design and development for businesses ready to compete and grow online.",
  keywords: [
    "web design services",
    "brand identity",
    "custom software",
    "digital agency services",
    "design and development",
  ],
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "What We Do | Sequence Labs",
    description:
      "Brand identity, web design and custom-built digital products. From startups to established operators, we build digital that performs.",
    url: `${SITE_URL}/services`,
    images: [ogImage("/og/services.jpg")],
  },
  twitter: {
    title: "What We Do | Sequence Labs",
    description:
      "Brand identity, web design and custom-built digital products. From startups to established operators, we build digital that performs.",
    images: [`${SITE_URL}/og/services.jpg`],
  },
};

export const contactMetadata: Metadata = {
  title: "Contact Sequence Labs | Start Your Project",
  description:
    "Ready to build something great? Whether you need a website, a brand identity or a custom-built digital product, get in touch with Sequence Labs and let us know what you are working on.",
  keywords: [
    "contact Sequence Labs",
    "start a project",
    "digital agency contact",
    "hire designers and developers",
  ],
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Let's Work Together | Sequence Labs",
    description:
      "Website, brand identity or custom software, tell us what you are building and we will help you get there.",
    url: `${SITE_URL}/contact`,
    images: [ogImage("/og/contact.jpg")],
  },
  twitter: {
    title: "Let's Work Together | Sequence Labs",
    description:
      "Website, brand identity or custom software, tell us what you are building and we will help you get there.",
    images: [`${SITE_URL}/og/contact.jpg`],
  },
};

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sequence Labs",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: "Digital agency specialising in web design, brand identity and custom software",
  address: {
    "@type": "PostalAddress",
    addressCountry: "LK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@sequencelabs.dev",
    telephone: "+94767273827",
  },
  sameAs: [] as string[],
};

export const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Sequence Labs",
  url: `${SITE_URL}/about`,
  description: "Digital agency specialising in web design, brand identity and custom software",
  publisher: {
    "@type": "Organization",
    name: "Sequence Labs",
  },
};

export const workJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Our Work | Sequence Labs",
  url: `${SITE_URL}/work`,
  description: "Portfolio of web design, brand identity and custom software projects",
};

export const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Digital Design and Development Services",
  provider: {
    "@type": "Organization",
    name: "Sequence Labs",
  },
  serviceType: [
    "Web Design",
    "Brand Identity",
    "Custom Software Development",
    "Digital Transformation",
  ],
  areaServed: "LK",
};

export const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Sequence Labs",
  url: `${SITE_URL}/contact`,
  publisher: {
    "@type": "Organization",
    name: "Sequence Labs",
    email: "hello@sequencelabs.dev",
    telephone: "+94767273827",
  },
};
