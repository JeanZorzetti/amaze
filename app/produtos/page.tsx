import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Nossos Produtos — Infláveis Personalizados, Gigantes, Arcos e Mascotes",
  description:
    "Linha completa de infláveis Amaze: personalizados, gigantes, arcos & portais, mascotes e totens. Todos fabricados com Poliéster 300g/m² e motor Sirocco HideVENT.",
  alternates: { canonical: "https://amazeballoons.com/produtos" },
};

const products = [
  {
    slug: "inflaveis-personalizados",
    icon: "🎨",
    title: "Infláveis Personalizados",
    desc: "Qualquer formato, cor ou tamanho. Construídos para corresponder à sua identidade de marca com precisão absoluta.",
    sizes: ["2m", "3m", "4m", "5m", "Personalizado"],
    badge: "Mais Popular",
    featured: true,
  },
  {
    slug: "inflaveis-gigantes",
    icon: "🏔️",
    title: "Infláveis Gigantes",
    desc: "Réplicas de produtos com até 15m de altura. Comparáveis a um prédio de 7 andares.",
    sizes: ["5m", "7m", "10m", "15m+"],
    featured: false,
  },
  {
    slug: "arcos-portais",
    icon: "🔷",
    title: "Arcos & Portais",
    desc: "Entradas para eventos, arcos de chegada para corridas e portais com marca.",
    sizes: ["3m", "5m", "7m", "10m"],
    featured: false,
  },
  {
    slug: "mascotes-inflaveis",
    icon: "🦁",
    title: "Mascotes Infláveis",
    desc: "Transforme o mascote da sua marca em um gigante que para multidões.",
    sizes: ["3m", "5m", "7m", "10m"],
    featured: false,
  },
  {
    slug: "totens-displays",
    icon: "📐",
    title: "Totens & Displays",
    desc: "Torres de marca em formato vertical: área mínima no chão, altura máxima.",
    sizes: ["2m", "3m", "4m", "5m"],
    featured: false,
  },
];

export default function ProdutosPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "https://amazeballoons.com" },
          { name: "Produtos", url: "https://amazeballoons.com/produtos" },
        ]}
      />
      <Header />
      <main className="flex-1 pt-24">

        {/* Hero */}
        <section className="bg-gradient-to-b from-purple-dark to-purple text-white py-20 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <span className="section-label text-orange mb-4 inline-block">
              Nossos Produtos
            </span>
            <h1
              className="text-4xl lg:text-6xl font-black leading-tight mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              INFLÁVEIS PARA{" "}
              <br />
              <span className="text-orange">CADA NECESSIDADE</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Cada estrutura é fabricada do zero com Poliéster 300g/m², motor Sirocco HideVENT
              e garantia de 3 anos. Sem templates, sem limites.
            </p>
          </div>
        </section>

        {/* Grid de produtos */}
        <section className="py-20 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) =>
                product.featured ? (
                  <div
                    key={product.slug}
                    className="sm:col-span-2 lg:col-span-1 relative bg-gradient-to-br from-primary to-purple text-white rounded-xl p-8 flex flex-col"
                  >
                    <div className="absolute top-4 right-4">
                      <span className="section-label text-orange text-[0.6rem]">
                        {product.badge}
                      </span>
                    </div>
                    <div className="text-5xl mb-5">{product.icon}</div>
                    <h2
                      className="text-xl font-black uppercase mb-3"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {product.title}
                    </h2>
                    <p className="text-white/80 text-sm leading-relaxed mb-5 flex-1">
                      {product.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.sizes.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full border border-white/30"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/produtos/${product.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-orange hover:text-orange/80 transition-colors"
                    >
                      Ver produto →
                    </Link>
                  </div>
                ) : (
                  <div
                    key={product.slug}
                    className="border border-border hover:border-primary/30 hover:shadow-lg rounded-xl p-8 flex flex-col transition-all duration-200"
                  >
                    <div className="text-5xl mb-5">{product.icon}</div>
                    <h2
                      className="text-xl font-black uppercase text-text mb-3"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {product.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed mb-5 flex-1">
                      {product.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {product.sizes.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1 bg-surface-container-low text-text text-xs font-medium rounded-full border border-border"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/produtos/${product.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      Ver produto →
                    </Link>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Por que Amaze */}
        <section className="bg-surface-container-low py-16 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2
              className="text-2xl lg:text-3xl font-black uppercase mb-8"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Por Que Amaze
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {["Poliéster 300g/m²", "Motor Sirocco HideVENT", "Garantia 3 Anos"].map(
                (pill) => (
                  <span
                    key={pill}
                    className="px-5 py-2 bg-white border border-border rounded-full text-sm font-semibold text-text"
                  >
                    {pill}
                  </span>
                )
              )}
            </div>
            <Link
              href="/tecnologia"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              Ver tecnologia completa →
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-on-surface py-16 px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl lg:text-4xl font-black uppercase text-inverse-on-surface mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              SOLICITE UM ORÇAMENTO PARA QUALQUER PRODUTO
            </h2>
            <Link
              href="/orcamento"
              className="btn-hover-inflate inline-flex items-center justify-center gap-2 h-14 px-8 text-base font-bold rounded-full bg-tertiary-fixed text-on-tertiary-fixed shadow-md"
            >
              Solicitar Orçamento Grátis
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
