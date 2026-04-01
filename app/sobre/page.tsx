import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Sobre a Amaze Balloons — 40+ Anos, o Legado do Primeiro Fabricante do Brasil",
  description:
    "Conheça a história da Amaze Balloons: 40+ anos de legado familiar, o primeiro fabricante de balões e infláveis do Brasil, liderado por Thiago Marques. Tecnologia aeronáutica aplicada a infláveis de alta performance.",
  alternates: { canonical: "https://amazeballoons.com/sobre" },
};

export default function SobrePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "https://amazeballoons.com" },
          { name: "Sobre", url: "https://amazeballoons.com/sobre" },
        ]}
      />
      <Header />
      <main className="flex-1 pt-24">

        {/* ── 1. HERO ── */}
        <section className="bg-on-surface py-24 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <span className="section-label text-orange mb-4">Nossa História</span>
            <h1
              className="text-4xl lg:text-6xl font-black uppercase leading-tight mb-6 text-inverse-on-surface"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              O LEGADO DO PRIMEIRO<br />
              <span className="text-orange">FABRICANTE DO BRASIL</span>
            </h1>
            <p className="text-inverse-on-surface/60 max-w-2xl text-lg leading-relaxed mb-12">
              Mais de 40 anos de conhecimento passado de pai para filho. A Amaze Balloons nasceu do
              legado do primeiro construtor de balões de ar quente do Brasil — e hoje lidera o mercado
              de infláveis de alta performance nas Américas.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { value: "40+", label: "Anos de Experiência" },
                { value: "500+", label: "Projetos Entregues" },
                { value: "15+", label: "Países Atendidos" },
                { value: "1º", label: "Fabricante do Brasil" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5"
                >
                  <span
                    className="text-xl font-black text-orange"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs text-inverse-on-surface/60 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2. ORIGEM ── */}
        <section className="bg-white py-24 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <span className="section-label text-primary mb-4">A Origem</span>
            <h2
              className="text-3xl lg:text-5xl font-black uppercase leading-tight mb-16 text-on-surface"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              DO BERÇO DA AVIAÇÃO<br />
              <span className="text-primary">AO MERCADO DAS AMÉRICAS</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-16">
              {/* Coluna esquerda — texto */}
              <div className="space-y-6 text-muted leading-relaxed">
                <p>
                  O balonismo foi um dos mais importantes movimentos científicos e culturais desde o
                  século XVIII — a origem da aeronáutica moderna. É desse universo que nasce o DNA
                  da Amaze Balloons.
                </p>
                <p>
                  O fundador da família Marques foi o <strong className="text-on-surface">primeiro construtor de balões de ar quente
                  do Brasil</strong>, seguindo as rigorosas normas de engenharia aeronáutica exigidas pela
                  ANAC (Agência Nacional de Aviação Civil). Esse conhecimento técnico é único — e é
                  exatamente o que separa os infláveis Amaze de todo o mercado.
                </p>
                <p>
                  <strong className="text-on-surface">Thiago Marques</strong>, filho mais novo, herdou e aprimorou esse legado. Trouxe
                  inovações técnicas e artísticas que elevam o padrão de cada construção — do motor
                  Sirocco HideVENT ao Poliéster 300g/m² — mantendo a filosofia familiar:{" "}
                  <strong className="text-on-surface">nunca entregar menos do que o excepcional</strong>.
                </p>
              </div>

              {/* Coluna direita — timeline */}
              <div className="bg-surface-container-low rounded-xl p-8 border border-border">
                <p
                  className="text-xs font-black uppercase tracking-widest text-muted mb-8"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  A LINHA DO TEMPO
                </p>
                <div className="space-y-0">
                  {[
                    {
                      year: "Séc. XVIII",
                      text: "O balonismo nasce na Europa. A aeronáutica moderna tem início.",
                    },
                    {
                      year: "Anos 1980",
                      text: "O fundador da família Marques torna-se o primeiro construtor de balões de ar quente do Brasil.",
                    },
                    {
                      year: "Anos 2000",
                      text: "Expansão para infláveis publicitários. A tecnologia aeronáutica aplicada ao marketing.",
                    },
                    {
                      year: "Hoje",
                      text: "Thiago Marques lidera a Amaze Balloons. 15+ países. O padrão de alta performance nas Américas.",
                    },
                  ].map((item, i, arr) => (
                    <div key={item.year} className="flex gap-4">
                      {/* linha vertical + ponto */}
                      <div className="flex flex-col items-center">
                        <div className="size-3 rounded-full bg-orange flex-shrink-0 mt-1" />
                        {i < arr.length - 1 && (
                          <div className="w-px flex-1 bg-border my-1" style={{ minHeight: "2.5rem" }} />
                        )}
                      </div>
                      {/* conteúdo */}
                      <div className={i < arr.length - 1 ? "pb-8" : ""}>
                        <p
                          className="text-xs font-black text-on-surface uppercase tracking-wide mb-1"
                          style={{ fontFamily: "var(--font-headline)" }}
                        >
                          {item.year}
                        </p>
                        <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. FUNDADOR ── */}
        <section className="bg-surface-container-low py-24 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <span className="section-label text-primary mb-4">Liderança</span>
            <h2
              className="text-3xl lg:text-5xl font-black uppercase leading-tight mb-16 text-on-surface"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              THIAGO MARQUES
            </h2>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Foto placeholder */}
              <div className="bg-gradient-to-br from-primary to-purple rounded-xl aspect-square flex flex-col items-center justify-center gap-4">
                <span className="text-8xl">🧑‍🏭</span>
                <p className="text-white/60 text-sm font-medium">Thiago Marques — Diretor</p>
              </div>

              {/* Bio */}
              <div className="space-y-6">
                <span className="section-label text-orange">Diretor &amp; Fundador</span>
                <h3
                  className="text-2xl font-black uppercase text-on-surface"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  O ENGENHEIRO DE INFLÁVEIS
                </h3>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>
                    Thiago Marques não é apenas o diretor da Amaze Balloons — é o guardião de um
                    conhecimento que levou décadas para ser construído e que não existe em nenhum
                    manual do mercado.
                  </p>
                  <p>
                    Formado na escola do pai, Thiago aprofundou o conhecimento técnico com inovações
                    próprias: foi ele quem introduziu o motor Sirocco HideVENT nas estruturas Amaze,
                    quem definiu o padrão de ancoragem de 300 kg/f e quem estabeleceu a garantia de
                    3 anos como compromisso da empresa — enquanto o mercado ainda oferecia garantias
                    de 1 ano com dezenas de exclusões.
                  </p>
                  <p>
                    Atua pessoalmente em cada projeto de alta complexidade. Para a Amaze, cada inflável
                    que sai da fábrica é uma assinatura.
                  </p>
                </div>

                {/* Contatos */}
                <div className="flex flex-col gap-3 pt-2">
                  <a
                    href="mailto:thiago@amazeballoons.com.br"
                    className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors"
                  >
                    <svg className="size-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    thiago@amazeballoons.com.br
                  </a>
                  <a
                    href="tel:+554892061259"
                    className="flex items-center gap-3 text-sm text-muted hover:text-primary transition-colors"
                  >
                    <svg className="size-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +55 48 9.9206.1259
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. DIFERENCIAIS TÉCNICOS ── */}
        <section className="bg-on-surface py-24 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <span className="section-label text-orange mb-4">Engenharia de Alta Performance</span>
            <h2
              className="text-3xl lg:text-5xl font-black uppercase leading-tight mb-4 text-inverse-on-surface"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              A TECNOLOGIA QUE NOS SEPARA
            </h2>
            <p className="text-inverse-on-surface/60 max-w-2xl leading-relaxed mb-12">
              O know-how aeronáutico da família Marques não é metáfora — é a base literal de cada
              decisão técnica que tomamos.
            </p>

            <div className="grid lg:grid-cols-3 gap-4">
              {[
                {
                  icon: "⚡",
                  title: "MOTOR SIROCCO HIDEVENT",
                  desc: "100% embutido, 330w, inflagem em 2 minutos. Exclusivo Amaze.",
                  link: "/tecnologia/sirocco-hidevent",
                  linkLabel: "Ver tecnologia →",
                },
                {
                  icon: "🧵",
                  title: "POLIÉSTER 300g/m²",
                  desc: "Fios de alta tenacidade, impressão fotográfica, UV + antifungo.",
                  link: "/tecnologia/poliester-300",
                  linkLabel: "Ver tecnologia →",
                },
                {
                  icon: "⚓",
                  title: "ANCORAGEM 300 kg/f",
                  desc: "6 camadas de reforço. Nenhum concorrente documenta. Nós documentamos.",
                  link: "/tecnologia/ancoragem-300",
                  linkLabel: "Ver tecnologia →",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col gap-4"
                >
                  <div className="size-12 bg-white/10 rounded-lg flex items-center justify-center text-2xl">
                    {card.icon}
                  </div>
                  <h3
                    className="text-base font-black uppercase text-inverse-on-surface"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm text-inverse-on-surface/60 leading-relaxed flex-1">
                    {card.desc}
                  </p>
                  <Link
                    href={card.link}
                    className="text-orange text-sm font-bold hover:underline self-start"
                  >
                    {card.linkLabel}
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/tecnologia"
                className="text-orange font-bold text-sm hover:underline"
              >
                Ver toda a tecnologia →
              </Link>
            </div>
          </div>
        </section>

        {/* ── 5. VALORES ── */}
        <section className="bg-white py-24 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <span className="section-label text-primary mb-4">O Que Nos Guia</span>
            <h2
              className="text-3xl lg:text-5xl font-black uppercase leading-tight mb-16 text-on-surface"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              NOSSOS VALORES
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🎨",
                  title: "ARTESANATO",
                  desc: "Cada inflável é fabricado com a atenção ao detalhe de quem sabe que o cliente vai olhar de perto — e de longe.",
                },
                {
                  icon: "🔬",
                  title: "ENGENHARIA",
                  desc: "Inovações técnicas fundamentadas em padrões aeronáuticos. Segurança e qualidade são inegociáveis em cada projeto.",
                },
                {
                  icon: "🤝",
                  title: "PARCERIA",
                  desc: "Não somos fornecedores. Somos parceiros de projeto — do briefing ao evento, do conceito à entrega no local.",
                },
                {
                  icon: "🌎",
                  title: "ALCANCE GLOBAL",
                  desc: "Fabricação no Brasil. Logística e suporte de instalação em toda a América do Norte, Central e do Sul.",
                },
                {
                  icon: "♻️",
                  title: "DURABILIDADE",
                  desc: "Infláveis construídos para durar 5 a 10 anos. Um ativo de marketing, não uma despesa descartável.",
                },
                {
                  icon: "⚡",
                  title: "CONFIABILIDADE",
                  desc: "Datas de eventos são sagradas. Nossa garantia de prazo é emitida por escrito antes do início da produção.",
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="bg-surface-container-low border border-border rounded-xl p-8"
                >
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3
                    className="text-sm font-black uppercase text-on-surface mb-3"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6. PROCESSO ── */}
        <section className="bg-surface-container-low py-24 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <span className="section-label text-primary mb-4">Como Trabalhamos</span>
            <h2
              className="text-3xl lg:text-5xl font-black uppercase leading-tight mb-4 text-on-surface"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              O PROCESSO AMAZE
            </h2>
            <p className="text-muted leading-relaxed mb-12 max-w-xl">
              Não somos tiradores de pedidos. Somos parceiros de projeto.
            </p>

            <div className="grid md:grid-cols-5 gap-4">
              {[
                {
                  num: "01",
                  title: "ENTENDIMENTO",
                  desc: "Mergulhamos no branding do cliente. Pantone exatos, hierarquia de logos, tom de voz.",
                },
                {
                  num: "02",
                  title: "DIAGNÓSTICO",
                  desc: "Avaliamos o local de instalação. Há vento? Há energia? Qual o fluxo de pessoas?",
                },
                {
                  num: "03",
                  title: "PROPOSTA",
                  desc: "Apresentamos uma solução técnica com justificativa de impacto — não apenas um preço.",
                },
                {
                  num: "04",
                  title: "VALIDAÇÃO",
                  desc: "O cliente visualiza o projeto em 3D antes da primeira costura.",
                },
                {
                  num: "05",
                  title: "EXECUÇÃO",
                  desc: "Entrega com manual, bolsa de transporte e suporte técnico incluso.",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="bg-white rounded-xl p-6 border border-border flex flex-col gap-3"
                >
                  <div className="size-12 bg-primary/8 rounded-lg flex items-center justify-center">
                    <span
                      className="text-3xl font-black text-primary leading-none"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <h3
                    className="text-xs font-black uppercase text-on-surface"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. CTA ── */}
        <section className="bg-purple py-24 px-4 lg:px-8 text-white text-center relative overflow-hidden">
          {/* Glow decorativo */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-primary/30 blur-3xl" />
          </div>

          <div className="max-w-3xl mx-auto relative z-10">
            <span className="section-label text-orange mb-4">Pronto para Trabalharmos Juntos?</span>
            <h2
              className="text-4xl lg:text-5xl font-black uppercase leading-tight mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              VAMOS CRIAR ALGO<br />
              INESQUECÍVEL
            </h2>
            <p className="text-white/70 leading-relaxed mb-10 max-w-xl mx-auto">
              Orçamento gratuito em até 24 horas. Proposta técnica com especificação completa e
              aprovação 3D antes da produção.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/orcamento"
                className="btn-hover-inflate inline-flex items-center justify-center h-14 px-10 rounded-full bg-orange text-white font-black text-sm uppercase tracking-wide"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Solicitar Orçamento Grátis
              </Link>
              <Link
                href="/tecnologia"
                className="text-white/60 hover:text-white text-sm font-medium transition-colors"
              >
                Conheça nossa tecnologia →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
