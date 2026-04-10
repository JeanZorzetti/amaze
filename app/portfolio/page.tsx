import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Portfólio — Projetos de Infláveis Personalizados e Casos de Sucesso",
  description:
    "Conheça nosso portfólio de projetos de infláveis personalizados: réplicas gigantes de produtos, arcos com marca, mascotes e displays para eventos para as maiores marcas das Américas.",
  alternates: { canonical: "https://amazeballoons.com.br/portfolio" },
};

const PROJECTS = [
  {
    title: "Réplica Gigante de Produto — Feira NYC",
    client: "Marca CPG Fortune 500",
    sector: "Feiras",
    href: "/portfolio/giant-product-replica-nyc",
    description: "Uma réplica de produto de 10m que dominou o piso da feira e gerou conteúdo viral nas redes sociais.",
    tags: ["Inflável Gigante"],
    year: 2024,
  },
  {
    title: "Arco de Corrida com Marca — Maratona de Miami",
    client: "Marca de Equipamentos Esportivos",
    sector: "Esportes",
    href: "/portfolio/race-arch-miami-marathon",
    description: "Arco de linha de chegada com marca completa visto por mais de 25.000 corredores e espectadores.",
    tags: ["Arcos & Portais"],
    year: 2024,
  },
  {
    title: "Totem para Evento Corporativo — Austin",
    client: "Empresa de Tecnologia",
    sector: "Eventos Corporativos",
    href: "/portfolio/corporate-event-totem-austin",
    description: "Totem de 5m com marca como ancora visual de uma conferência B2B de 3 dias.",
    tags: ["Totens & Displays"],
    year: 2023,
  },
  {
    title: "Mascote de Marca Personalizado — Festival de Música",
    client: "Marca de Bebida Energética",
    sector: "Festas & Eventos",
    href: "/portfolio/brand-mascot-music-festival",
    description: "Mascote inflável de 7m que se tornou o elemento mais fotografado do festival.",
    tags: ["Mascotes Infláveis"],
    year: 2023,
  },
  {
    title: "Arco Inflável Gigante — Inauguração de Loja",
    client: "Rede de Varejo de Moda",
    sector: "Marketing",
    href: "/portfolio/giant-arch-retail-launch",
    description: "Arco de entrada personalizado para a inauguração de uma loja flagship com mais de 5.000 convidados.",
    tags: ["Arcos & Portais", "Personalizado"],
    year: 2023,
  },
  {
    title: "Balão de Ar Quente — Campanha de Aeromarketing",
    client: "Incorporadora Imobiliária",
    sector: "Publicidade",
    href: "/portfolio/hot-air-balloon-aeromarketing",
    description: "Balão de ar quente com marca sobrevoando bairros estratégicos — campanha de aeromarketing de 3 meses.",
    tags: ["Balonismo", "Aeromarketing"],
    year: 2022,
  },
];

const SECTORS = ["Todos", "Feiras", "Esportes", "Eventos Corporativos", "Festas & Eventos", "Marketing", "Publicidade"];

const arrowIcon = (
  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início",    url: "https://amazeballoons.com" },
          { name: "Portfólio", url: "https://amazeballoons.com.br/portfolio" },
        ]}
      />
      <Header />
      <main className="flex-1 pt-24">
        {/* Header */}
        <section className="py-20 px-4 lg:px-8 bg-gradient-to-b from-purple-dark to-purple text-white">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-light mb-4">
              Nosso Trabalho
            </p>
            <h1
              className="text-4xl lg:text-6xl font-black leading-tight mb-4"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              500+ Projetos.
              <br />
              <span className="text-orange">Um Padrão: Excepcional.</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              De gigantes em feiras a arcos em dias de corrida, cada projeto é um
              testemunho de 40+ anos de artesanato.
            </p>
          </div>
        </section>

        {/* Filter + Grid */}
        <section className="py-16 px-4 lg:px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            {/* Filter tabs (static — filtro dinâmico a ser adicionado na Sprint 3) */}
            <div className="flex flex-wrap gap-2 mb-10">
              {SECTORS.map((s) => (
                <button
                  key={s}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    s === "Todos"
                      ? "bg-purple text-white border-purple"
                      : "bg-white text-text border-border hover:border-purple/40 hover:text-purple"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((p) => (
                <ProjectCard key={p.href} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 lg:px-8 bg-purple-dark text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl lg:text-4xl font-black mb-4"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Sua Marca, a Próxima da Lista
            </h2>
            <p className="text-white/70 mb-8">
              Pronto para adicionar seu projeto ao nosso portfólio?
            </p>
            <Button href="/orcamento" variant="cta" size="lg" icon={arrowIcon}>
              Solicitar Orçamento Grátis
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
