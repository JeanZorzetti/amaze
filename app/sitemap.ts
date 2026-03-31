import type { MetadataRoute } from "next";

const BASE_URL = "https://amazeballoons.com";

const products = [
  "custom-inflatables",
  "giant-inflatables",
  "arches-portals",
  "inflatable-mascots",
  "totems-displays",
];

const sectors = [
  "corporate-events",
  "parties",
  "marketing-advertising",
  "sports",
  "trade-shows",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/produtos`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/portfolio`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/blog`, priority: 0.8, changeFrequency: "daily" as const },
    { url: `${BASE_URL}/sobre`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/orcamento`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const productPages = products.map((slug) => ({
    url: `${BASE_URL}/produtos/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const sectorPages = sectors.map((slug) => ({
    url: `${BASE_URL}/setores/${slug}`,
    priority: 0.75,
    changeFrequency: "monthly" as const,
  }));

  return [
    ...staticPages,
    ...productPages,
    ...sectorPages,
  ].map((page) => ({
    ...page,
    lastModified: new Date(),
  }));
}
