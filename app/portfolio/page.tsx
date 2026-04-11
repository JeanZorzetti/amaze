import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaOrg";
import PortfolioGrid from "@/components/blocks/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfólio — Projetos de Infláveis Personalizados e Casos de Sucesso",
  description:
    "Conheça nosso portfólio de projetos de infláveis personalizados: réplicas gigantes de produtos, arcos com marca, mascotes e displays para eventos para as maiores marcas das Américas.",
  alternates: { canonical: "https://amazeballoons.com.br/portfolio" },
};

const PROJECTS = [
  {
    title: "Réplica Gigante de Produto — Feira São Paulo",
    client: "Marca de Bebidas Nacional",
    sector: "Feiras",
    href: "/portfolio/replica-gigante-feira-sp",
    description: "Réplica inflável de 10m que dominou o pavilhão da Expo Center Norte, gerando cobertura espontânea em 12 veículos de mídia.",
    tags: ["Inflável Gigante", "Réplica de Produto"],
    year: 2024,
    image: "/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg",
  },
  {
    title: "Arco de Corrida — Maratona de Florianópolis",
    client: "Marca de Equipamentos Esportivos",
    sector: "Esportes",
    href: "/portfolio/arco-corrida-maratona-florianopolis",
    description: "Arco de largada/chegada de 12m com marca completa, fotografado por mais de 8.000 corredores no evento.",
    tags: ["Arcos & Portais"],
    year: 2024,
    image: "/images/gallery/SaveClip.App_604055838_17878831959448342_7903443883004681535_n.jpg",
  },
  {
    title: "Totem Corporativo — Conferência Tech",
    client: "Empresa de Tecnologia B2B",
    sector: "Eventos Corporativos",
    href: "/portfolio/totem-corporativo-conferencia-tech",
    description: "Totem de 5m como âncora visual de conferência B2B de 3 dias com 2.000 participantes.",
    tags: ["Totens & Displays"],
    year: 2024,
    image: "/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg",
  },
  {
    title: "Mascote Inflável — Festival de Música",
    client: "Marca de Bebida Energética",
    sector: "Festas & Eventos",
    href: "/portfolio/mascote-inflavel-festival-musica",
    description: "Mascote inflável de 7m que se tornou o elemento mais fotografado do festival, com 5.000+ publicações orgânicas.",
    tags: ["Mascotes Infláveis"],
    year: 2023,
    image: "/images/gallery/SaveClip.App_604055838_17878831959448342_7903443883004681535_n.jpg",
  },
  {
    title: "Arco de Entrada — Inauguração de Loja",
    client: "Rede de Varejo de Moda",
    sector: "Marketing",
    href: "/portfolio/arco-entrada-inauguracao-loja",
    description: "Arco personalizado de 8m para inauguração de loja flagship com mais de 5.000 convidados.",
    tags: ["Arcos & Portais", "Varejo"],
    year: 2023,
    image: "/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg",
  },
  {
    title: "Balão de Ar Quente — Aeromarketing",
    client: "Incorporadora Imobiliária",
    sector: "Publicidade",
    href: "/portfolio/balao-ar-quente-aeromarketing",
    description: "Balão com marca sobrevoando bairros estratégicos — campanha de aeromarketing de 3 meses.",
    tags: ["Balonismo", "Aeromarketing"],
    year: 2023,
    image: "/images/gallery/SaveClip.App_604055838_17878831959448342_7903443883004681535_n.jpg",
  },
  {
    title: "Inflável Gigante — Estande ABMÁQUINAS",
    client: "Indústria de Equipamentos",
    sector: "Feiras",
    href: "/portfolio/inflavel-gigante-estande-abmaquinas",
    description: "Réplica de maquinário industrial de 8m elevando a visibilidade do estande acima de todos os concorrentes na feira.",
    tags: ["Inflável Gigante", "Industrial"],
    year: 2023,
    image: "/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg",
  },
  {
    title: "Portais com Marca — Circuito de Corridas",
    client: "Seguradora Nacional",
    sector: "Esportes",
    href: "/portfolio/portais-marca-circuito-corridas",
    description: "12 portais infláveis idênticos implantados em todos os postos de controle de um circuito de corridas de montanha.",
    tags: ["Arcos & Portais", "Esportes"],
    year: 2022,
    image: "/images/gallery/SaveClip.App_604055838_17878831959448342_7903443883004681535_n.jpg",
  },
  {
    title: "Mascote Natal — Campanha Sazonal",
    client: "Rede de Supermercados",
    sector: "Marketing",
    href: "/portfolio/mascote-natal-campanha-sazonal",
    description: "Papai Noel inflável de 6m personalizado com a identidade da marca, replicado em 40 lojas durante a campanha de Natal.",
    tags: ["Mascotes Infláveis", "Sazonal"],
    year: 2022,
    image: "/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg",
  },
];

const SECTORS = ["Todos", ...Array.from(new Set(PROJECTS.map((p) => p.sector)))];

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início",    url: "https://amazeballoons.com.br" },
          { name: "Portfólio", url: "https://amazeballoons.com.br/portfolio" },
        ]}
      />
      <Header />
      <main className="flex-1 pt-24">

        {/* ── HERO ── */}
        <section className="py-20 px-4 lg:px-8 bg-on-surface text-white">
          <div className="max-w-7xl mx-auto">
            <span className="section-label text-orange mb-4">Nosso Trabalho</span>
            <h1
              className="text-4xl lg:text-6xl font-black leading-tight mb-6 text-inverse-on-surface uppercase"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              500+ PROJETOS.<br />
              <span className="text-orange">UM PADRÃO: EXCEPCIONAL.</span>
            </h1>
            <p className="text-inverse-on-surface/60 text-xl max-w-2xl leading-relaxed mb-12">
              De gigantes em feiras a arcos em dias de corrida, cada projeto é um
              testemunho de 40+ anos de artesanato aplicado a infláveis de alta performance.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: "500+", label: "Projetos Entregues" },
                { value: "15+",  label: "Países Atendidos" },
                { value: "40+",  label: "Anos de Experiência" },
                { value: "100%", label: "Taxa de Entrega no Prazo" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5">
                  <span className="text-xl font-black text-orange" style={{ fontFamily: "var(--font-headline)" }}>{s.value}</span>
                  <span className="text-xs text-inverse-on-surface/50 font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FILTER + GRID ── */}
        <section className="py-16 px-4 lg:px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <PortfolioGrid projects={PROJECTS} sectors={SECTORS} />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-4 lg:px-8 bg-purple text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-primary/30 blur-3xl" />
          </div>
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="section-label text-orange mb-4">Próximo Projeto</span>
            <h2
              className="text-3xl lg:text-5xl font-black uppercase leading-tight mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              SUA MARCA,<br />A PRÓXIMA DA LISTA
            </h2>
            <p className="text-white/70 mb-10 max-w-lg mx-auto leading-relaxed">
              Orçamento gratuito em até 24 horas. Proposta técnica com aprovação 3D antes da produção.
            </p>
            <Link
              href="/orcamento"
              className="btn-hover-inflate inline-flex items-center justify-center h-14 px-10 rounded-full bg-orange text-white font-black text-sm uppercase tracking-wide"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Solicitar Orçamento Grátis →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
