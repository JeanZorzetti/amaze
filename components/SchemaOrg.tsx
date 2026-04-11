// JSON-LD Schema Markup components for SEO

const BASE_URL = "https://amazeballoons.com.br";

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  telephone?: string;
  email?: string;
  sameAs?: string[];
}

export function OrganizationSchema({
  name = "Amaze Balloons",
  url = BASE_URL,
  logo = `${BASE_URL}/logos/2026_AmazeBalloons_B_black.png`,
  description = "Fabricante de infláveis personalizados, balões publicitários gigantes, arcos, mascotes e displays de alta performance. Mais de 40 anos de experiência atendendo as principais marcas nas Américas.",
  telephone = "+554892061259",
  email = "contato@amazeballoons.com.br",
  sameAs = [
    "https://instagram.com/amazeballoons",
    "https://linkedin.com/company/amazeballoons",
    "https://facebook.com/amazeballoons",
  ],
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo: {
      "@type": "ImageObject",
      url: logo,
    },
    description,
    telephone,
    email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Florianópolis",
      addressRegion: "SC",
      addressCountry: "BR",
    },
    sameAs,
    areaServed: ["BR", "US", "CA", "MX", "AR", "CL", "CO"],
    knowsAbout: [
      "Infláveis Personalizados",
      "Infláveis Publicitários",
      "Infláveis Gigantes",
      "Balonismo",
      "Marketing de Eventos",
      "Aeromarketing",
    ],
    foundingDate: "1984",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ProductSchemaProps {
  name: string;
  description: string;
  url: string;
  image?: string;
  category?: string;
}

export function ProductSchema({
  name,
  description,
  url,
  image,
  category = "Infláveis Personalizados",
}: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    image,
    category,
    brand: {
      "@type": "Brand",
      name: "Amaze Balloons",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "BRL",
      url: `${BASE_URL}/orcamento`,
      seller: {
        "@type": "Organization",
        name: "Amaze Balloons",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}

export function ArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName = "Thiago Marques · Amaze Balloons",
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    image,
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "pt-BR",
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Amaze Balloons",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logos/2026_AmazeBalloons_B_black.png`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
