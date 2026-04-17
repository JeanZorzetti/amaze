import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaOrg";
import PortfolioGrid from "@/components/blocks/PortfolioGrid";

export const metadata: Metadata = {
  title: "Cases — Projetos de Infláveis Personalizados e Casos de Sucesso",
  description:
    "Conheça nosso portfólio de projetos de infláveis personalizados: réplicas gigantes de produtos, arcos com marca, mascotes e displays para eventos para as maiores marcas das Américas.",
  alternates: { canonical: "https://amazeballoons.com.br/portfolio" },
};

const GALLERY = [
  "/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg",
  "/images/gallery/SaveClip.App_604055838_17878831959448342_7903443883004681535_n.jpg",
  "/images/gallery/SaveClip.App_632153979_17885887683448342_7600628157039576746_n.jpg",
  "/images/gallery/SaveClip.App_598904006_17877354627448342_7377931598932079293_n.jpg",
  "/images/gallery/SaveClip.App_598989249_17877354600448342_7726145296482408610_n.jpg",
  "/images/gallery/SaveClip.App_598834557_17877354591448342_4532624735367015725_n.jpg",
  "/images/gallery/SaveClip.App_589648017_17876804814448342_8600020723861108054_n.jpg",
  "/images/gallery/SaveClip.App_598409687_17877354618448342_6209046712205705990_n.jpg",
  "/images/gallery/SaveClip.App_598635946_17877354609448342_3340277087935498923_n.jpg",
];

const PROJECTS = [
  {
    title: "Réplica Gigante de Produto — Feira São Paulo",
    client: "Marca de Bebidas Nacional",
    sector: "Feiras",
    href: "/portfolio/replica-gigante-feira-sp",
    description: "Réplica inflável de 10m que dominou o pavilhão da Expo Center Norte, gerando cobertura espontânea em 12 veículos de mídia.",
    tags: ["Inflável Gigante", "Réplica de Produto"],
    year: 2024,
    image: GALLERY[0],
  },
  {
    title: "Arco de Corrida — Maratona de Florianópolis",
    client: "Marca de Equipamentos Esportivos",
    sector: "Esportes",
    href: "/portfolio/arco-corrida-maratona-florianopolis",
    description: "Arco de largada/chegada de 12m com marca completa, fotografado por mais de 8.000 corredores no evento.",
    tags: ["Arcos & Portais"],
    year: 2024,
    image: GALLERY[1],
  },
  {
    title: "Totem Corporativo — Conferência Tech",
    client: "Empresa de Tecnologia B2B",
    sector: "Eventos Corporativos",
    href: "/portfolio/totem-corporativo-conferencia-tech",
    description: "Totem de 5m como âncora visual de conferência B2B de 3 dias com 2.000 participantes.",
    tags: ["Totens & Displays"],
    year: 2024,
    image: GALLERY[2],
  },
  {
    title: "Mascote Inflável — Festival de Música",
    client: "Marca de Bebida Energética",
    sector: "Festas & Eventos",
    href: "/portfolio/mascote-inflavel-festival-musica",
    description: "Mascote inflável de 7m que se tornou o elemento mais fotografado do festival, com 5.000+ publicações orgânicas.",
    tags: ["Mascotes Infláveis"],
    year: 2023,
    image: GALLERY[3],
  },
  {
    title: "Arco de Entrada — Inauguração de Loja",
    client: "Rede de Varejo de Moda",
    sector: "Marketing",
    href: "/portfolio/arco-entrada-inauguracao-loja",
    description: "Arco personalizado de 8m para inauguração de loja flagship com mais de 5.000 convidados.",
    tags: ["Arcos & Portais", "Varejo"],
    year: 2023,
    image: GALLERY[4],
  },
  {
    title: "Balão de Ar Quente — Aeromarketing",
    client: "Incorporadora Imobiliária",
    sector: "Publicidade",
    href: "/portfolio/balao-ar-quente-aeromarketing",
    description: "Balão com marca sobrevoando bairros estratégicos — campanha de aeromarketing de 3 meses.",
    tags: ["Balonismo", "Aeromarketing"],
    year: 2023,
    image: GALLERY[5],
  },
  {
    title: "Inflável Gigante — Estande ABMÁQUINAS",
    client: "Indústria de Equipamentos",
    sector: "Feiras",
    href: "/portfolio/inflavel-gigante-estande-abmaquinas",
    description: "Réplica de maquinário industrial de 8m elevando a visibilidade do estande acima de todos os concorrentes na feira.",
    tags: ["Inflável Gigante", "Industrial"],
    year: 2023,
    image: GALLERY[6],
  },
  {
    title: "Portais com Marca — Circuito de Corridas",
    client: "Seguradora Nacional",
    sector: "Esportes",
    href: "/portfolio/portais-marca-circuito-corridas",
    description: "12 portais infláveis idênticos implantados em todos os postos de controle de um circuito de corridas de montanha.",
    tags: ["Arcos & Portais", "Esportes"],
    year: 2022,
    image: GALLERY[7],
  },
  {
    title: "Mascote Natal — Campanha Sazonal",
    client: "Rede de Supermercados",
    sector: "Marketing",
    href: "/portfolio/mascote-natal-campanha-sazonal",
    description: "Papai Noel inflável de 6m personalizado com a identidade da marca, replicado em 40 lojas durante a campanha de Natal.",
    tags: ["Mascotes Infláveis", "Sazonal"],
    year: 2022,
    image: GALLERY[8],
  },
];

const SECTORS = ["Todos", ...Array.from(new Set(PROJECTS.map((p) => p.sector)))];

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "https://amazeballoons.com.br" },
          { name: "Cases",  url: "https://amazeballoons.com.br/portfolio" },
        ]}
      />
      <Header />
      <main className="flex-1 pt-24">

        {/* ── HERO — clean, estilo Marity ── */}
        <section className="pt-20 pb-10 px-4 lg:px-8 bg-white border-b border-border">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <p className="text-[0.65rem] font-black uppercase tracking-[0.25em] text-muted mb-4">
                Nosso Trabalho
              </p>
              <h1
                className="text-5xl lg:text-7xl font-black leading-[0.95] uppercase text-text"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                500+<br />
                <span className="text-orange">PROJETOS.</span>
              </h1>
            </div>

            <div className="flex flex-col gap-6 lg:text-right lg:max-w-sm">
              <p className="text-muted text-base leading-relaxed">
                De gigantes em feiras a arcos em dias de corrida — 40+ anos de engenharia aplicada a infláveis de alta performance para as maiores marcas das Américas.
              </p>
              <div className="flex flex-wrap lg:justify-end gap-5">
                {[
                  { value: "500+", label: "Projetos" },
                  { value: "15+",  label: "Países" },
                  { value: "40+",  label: "Anos" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span className="text-3xl font-black text-text leading-none" style={{ fontFamily: "var(--font-headline)" }}>
                      {s.value}
                    </span>
                    <span className="text-xs text-muted uppercase tracking-widest mt-0.5">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── GRID — fundo branco, masonry, estilo Marity ── */}
        <section className="py-16 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <PortfolioGrid projects={PROJECTS} sectors={SECTORS} />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-4 lg:px-8 bg-on-surface text-white">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-[0.65rem] font-black uppercase tracking-[0.25em] text-orange mb-4">Próximo Projeto</p>
              <h2
                className="text-4xl lg:text-5xl font-black uppercase leading-tight text-white"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                SUA MARCA,<br />A PRÓXIMA DA LISTA
              </h2>
            </div>
            <div className="shrink-0">
              <Link
                href="/orcamento"
                className="btn-hover-inflate inline-flex items-center justify-center h-14 px-10 rounded-full bg-orange text-white font-black text-sm uppercase tracking-wide"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Solicitar Orçamento Grátis →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
