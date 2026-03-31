import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Setores que Atendemos — Infláveis para Eventos, Feiras, Esportes e Marketing",
  description:
    "Infláveis personalizados para todos os setores: feiras, eventos corporativos, esportes, festas e marketing. Conheça como a Amaze atende cada mercado.",
  alternates: { canonical: "https://amazeballoons.com/setores" },
};

const sectors = [
  {
    slug: "eventos-corporativos",
    title: "Eventos Corporativos",
    icon: "🏢",
    description:
      "Infláveis gigantes para lançamentos de produtos, ativações de marca, conferências anuais e cúpulas B2B.",
    tags: ["Lançamentos", "Ativações", "Conferências"],
  },
  {
    slug: "feiras-exposicoes",
    title: "Feiras & Exposições",
    icon: "🎪",
    description:
      "Destaque-se em qualquer exposição com infláveis e réplicas que atraem visitantes de todo o piso.",
    tags: ["Estandes", "Réplicas", "Displays"],
  },
  {
    slug: "esportes-corridas",
    title: "Esportes & Corridas",
    icon: "🏃",
    description:
      "Arcos, totens de patrocinadores e displays gigantes para maratonas, corridas e competições.",
    tags: ["Arcos", "Patrocinadores", "Mascotes"],
  },
  {
    slug: "festas-celebracoes",
    title: "Festas & Celebrações",
    icon: "🎉",
    description:
      "Infláveis personalizados para festivais de música, aniversários e celebrações públicas.",
    tags: ["Festivais", "Temáticos", "Sazonais"],
  },
  {
    slug: "marketing-publicidade",
    title: "Marketing & Publicidade",
    icon: "📣",
    description:
      "Infláveis publicitários comprovados para gerar 10× mais engajamento que mídia exterior convencional.",
    tags: ["Exterior", "Varejo", "Guerrilha"],
  },
];

export default function SetoresPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "https://amazeballoons.com" },
          { name: "Setores", url: "https://amazeballoons.com/setores" },
        ]}
      />
      <Header />
      <main className="flex-1 pt-24">

        {/* Hero */}
        <section className="py-20 px-4 lg:px-8 bg-gradient-to-b from-purple-dark to-purple text-white">
          <div className="max-w-7xl mx-auto">
            <p className="section-label text-orange mb-4">Indústrias que Atendemos</p>
            <h1
              className="text-4xl lg:text-6xl font-black leading-tight mb-6 uppercase"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              INFLÁVEIS PARA
              <br />
              <span className="text-orange">CADA SETOR</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              De pisos de feiras a palcos de festivais — fabricamos infláveis
              projetados para cada ambiente, público e objetivo de marca.
            </p>
          </div>
        </section>

        {/* Sectors grid */}
        <section className="py-20 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((s, i) => {
              const isFeatured = s.slug === "eventos-corporativos";
              return (
                <Link
                  key={s.slug}
                  href={`/setores/${s.slug}`}
                  className={[
                    "group flex flex-col gap-4 p-8 rounded-2xl border transition-all",
                    isFeatured
                      ? "bg-gradient-to-br from-primary to-purple text-white border-transparent sm:col-span-2 lg:col-span-1"
                      : "bg-white border-border hover:border-primary/30 hover:shadow-lg",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "size-14 rounded-2xl flex items-center justify-center text-3xl",
                      isFeatured ? "bg-white/15" : "bg-primary/8",
                    ].join(" ")}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <h2
                      className={[
                        "text-xl font-black mb-2 transition-colors uppercase",
                        isFeatured
                          ? "text-white"
                          : "text-text group-hover:text-primary",
                      ].join(" ")}
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {s.title}
                    </h2>
                    <p
                      className={[
                        "text-sm leading-relaxed",
                        isFeatured ? "text-white/80" : "text-muted",
                      ].join(" ")}
                    >
                      {s.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className={[
                          "px-2.5 py-1 text-xs font-medium rounded-full",
                          isFeatured
                            ? "bg-white/15 text-white"
                            : "bg-surface-container text-on-surface-variant",
                        ].join(" ")}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span
                    className={[
                      "text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all group-hover:gap-3",
                      isFeatured ? "text-white/90" : "text-primary",
                    ].join(" ")}
                  >
                    Explorar setor →
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 lg:px-8 bg-on-surface text-inverse-on-surface text-center">
          <div className="max-w-2xl mx-auto">
            <p className="section-label text-orange mb-4 text-center">
              Não encontrou seu setor?
            </p>
            <h2
              className="text-3xl lg:text-4xl font-black mb-4 uppercase"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              FABRICAMOS PARA QUALQUER SETOR
            </h2>
            <p className="text-inverse-on-surface/60 mb-8">
              Conte-nos sobre seu projeto e criaremos o inflável perfeito para o seu setor.
            </p>
            <Link
              href="/orcamento"
              className="btn-hover-inflate inline-flex items-center gap-3 h-14 px-10 bg-orange text-white rounded-full font-black text-base uppercase tracking-wide shadow-xl"
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
