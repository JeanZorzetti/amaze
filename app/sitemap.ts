import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";

const BASE_URL = "https://amazeballoons.com.br";

const products = [
  "inflaveis-personalizados",
  "inflaveis-gigantes",
  "arcos-portais",
  "mascotes-inflaveis",
  "totens-displays",
];

const sectors = [
  "eventos-corporativos",
  "festas-celebracoes",
  "marketing-publicidade",
  "esportes-corridas",
  "feiras-exposicoes",
];

const tecnologias = [
  "sirocco-hidevent",
  "poliester-300",
  "ancoragem-300",
  "engenharia-aplicada",
  "impacto-visual",
  "confiabilidade",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                          priority: 1.0,  changeFrequency: "weekly",  lastModified: now },
    { url: `${BASE_URL}/orcamento`,           priority: 0.95, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE_URL}/produtos`,            priority: 0.9,  changeFrequency: "weekly",  lastModified: now },
    { url: `${BASE_URL}/portfolio`,           priority: 0.85, changeFrequency: "weekly",  lastModified: now },
    { url: `${BASE_URL}/blog`,                priority: 0.85, changeFrequency: "daily",   lastModified: now },
    { url: `${BASE_URL}/setores`,             priority: 0.8,  changeFrequency: "monthly", lastModified: now },
    { url: `${BASE_URL}/tecnologia`,          priority: 0.8,  changeFrequency: "monthly", lastModified: now },
    { url: `${BASE_URL}/faq`,                 priority: 0.75, changeFrequency: "monthly", lastModified: now },
    { url: `${BASE_URL}/sobre`,               priority: 0.7,  changeFrequency: "monthly", lastModified: now },
    { url: `${BASE_URL}/contato`,             priority: 0.7,  changeFrequency: "monthly", lastModified: now },
    { url: `${BASE_URL}/balonismo`,           priority: 0.7,  changeFrequency: "monthly", lastModified: now },
    { url: `${BASE_URL}/instrucoes`,          priority: 0.5,  changeFrequency: "yearly",  lastModified: now },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((slug) => ({
    url: `${BASE_URL}/produtos/${slug}`,
    priority: 0.85,
    changeFrequency: "monthly",
    lastModified: now,
  }));

  const sectorPages: MetadataRoute.Sitemap = sectors.map((slug) => ({
    url: `${BASE_URL}/setores/${slug}`,
    priority: 0.75,
    changeFrequency: "monthly",
    lastModified: now,
  }));

  const tecnologiaPages: MetadataRoute.Sitemap = tecnologias.map((slug) => ({
    url: `${BASE_URL}/tecnologia/${slug}`,
    priority: 0.65,
    changeFrequency: "monthly",
    lastModified: now,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
    lastModified: new Date(post.date),
  }));

  return [
    ...staticPages,
    ...productPages,
    ...sectorPages,
    ...tecnologiaPages,
    ...blogPages,
  ];
}
