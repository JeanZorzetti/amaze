import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Sobre a Amaze Balloons — 40+ Anos Fabricando Infláveis Personalizados",
  description:
    "Herança familiar. O primeiro fabricante de infláveis personalizados e balões de ar quente do Brasil, atendendo hoje as maiores marcas das Américas. Liderado por Thiago Marques.",
  alternates: { canonical: "https://amazeballoons.com/about" },
};

const arrowIcon = (
  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "https://amazeballoons.com" },
          { name: "Sobre", url: "https://amazeballoons.com/about" },
        ]}
      />
      <Header />
      <main className="flex-1 pt-24">
        {/* Hero */}
        <section className="py-24 px-4 lg:px-8 bg-gradient-to-b from-purple-dark to-purple text-white">
          <div className="max-w-7xl mx-auto max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-light mb-4">
              Nossa História
            </p>
            <h1
              className="text-4xl lg:text-6xl font-black leading-tight mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              O Legado do
              <span className="text-orange"> Primeiro Fabricante</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Mais de 40 anos de experiência passados de pai para filho. A Amaze Balloons
              nasceu do legado do primeiro fabricante de infláveis personalizados e balões
              de ar quente do Brasil — atendendo hoje as maiores marcas das Américas.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 px-4 lg:px-8 bg-surface">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2
                className="text-3xl lg:text-4xl font-black text-text"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Uma Empresa Familiar Construída sobre Expertise
              </h2>
              <p className="text-muted leading-relaxed">
                O conhecimento de 40+ anos é transmitido de pai para filhos e
                continua sendo aprimorado na Amaze Balloons por Thiago Marques, que
                traz inovações técnicas e artísticas a cada construção —
                seguindo os rigorosos padrões de engenharia que atendem aos
                requisitos aeronáuticos da ANAC (Agência Nacional de Aviação Civil do Brasil).
              </p>
              <p className="text-muted leading-relaxed">
                Hoje, a Amaze Balloons atende marcas em toda a América do Norte, Central
                e do Sul — entregando infláveis publicitários personalizados, réplicas
                gigantes de produtos, arcos para eventos, mascotes e balões de ar quente
                que capturam atenção em grande escala.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { value: "40+", label: "Anos de experiência" },
                  { value: "500+", label: "Projetos entregues" },
                  { value: "15+", label: "Países atendidos" },
                  { value: "100%", label: "Empresa familiar" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-lg border border-border bg-surface-card"
                  >
                    <div
                      className="text-2xl font-black text-purple"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-dark to-purple-soft rounded-xl aspect-square flex items-center justify-center">
              <div className="text-center text-white/40 p-8">
                <div className="text-8xl mb-4">🎈</div>
                <p className="text-sm">Foto: Thiago Marques & equipe</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-4 lg:px-8 bg-purple-dark text-white">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-3xl lg:text-4xl font-black mb-12"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              O Que Nos Guia
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🎨", title: "Artesanato", desc: "Cada inflável é fabricado artesanalmente com precisão, utilizando materiais premium e técnicas consagradas pelo tempo." },
                { icon: "🔬", title: "Engenharia", desc: "Inovações técnicas fundamentadas em padrões aeronáuticos — segurança e qualidade são inegociáveis." },
                { icon: "🤝", title: "Parceria", desc: "Atuamos como uma extensão da sua equipe, colaborando em cada etapa desde o conceito até a entrega." },
                { icon: "🌎", title: "Alcance Global", desc: "Operações e logística em todo o continente americano, com suporte de instalação no local em qualquer venue." },
                { icon: "♻️", title: "Durabilidade", desc: "Nossos infláveis duram de 5 a 10 anos com os cuidados adequados — construídos para serem reutilizados em múltiplas campanhas." },
                { icon: "⚡", title: "Confiabilidade", desc: "Datas de eventos são sagradas. Planejamos os prazos de produção para garantir a entrega quando mais importa." },
              ].map((v) => (
                <div
                  key={v.title}
                  className="p-6 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="text-3xl mb-3">{v.icon}</div>
                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4 lg:px-8 bg-surface text-center">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl lg:text-4xl font-black text-text mb-4"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Pronto para Trabalharmos Juntos?
            </h2>
            <p className="text-muted mb-8">
              Conte-nos sobre seu projeto e receba um orçamento gratuito em 24 horas.
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
