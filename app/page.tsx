// Homepage — Structure: Michelin Inflatables / Design: Floatie Kings
// 1. Hero        — full-bleed, edge-to-edge, bold ALL-CAPS headline
// 2. Ticker      — scrolling product categories marquee
// 3. Video       — local .mp4 showcase
// 4. Sectors     — 5 sector cards grid
// 5. Why Amaze   — icon features + stat grid
// 6. How It Works — 3 numbered steps on dark bg
// 7. Portfolio   — 3 portfolio cards
// 8. Expert CTA  — full-width purple + phone CTA

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import { FAQSchema } from "@/components/SchemaOrg";
import FloatieKingsGallery from "@/components/blocks/FloatieKingsGallery";
import VideoCarousel from "@/components/blocks/VideoCarousel";


const homeFaqs = [
  { question: "Quanto tempo leva para produzir um inflável personalizado?", answer: "A maioria dos projetos leva de 3 a 6 semanas, dependendo da complexidade. Fornecemos um prazo de entrega garantido antes do início da produção." },
  { question: "Quais tamanhos estão disponíveis?", answer: "Produzimos infláveis de 2m a 15m ou mais de altura. Qualquer tamanho é possível — cada peça é projetada sob medida." },
  { question: "Os infláveis podem ser reutilizados?", answer: "Sim. Nossos infláveis são construídos para uso repetido — deflam, são guardados em uma bolsa de transporte e reinflam em minutos. A vida útil é tipicamente de 5 a 10 anos." },
  { question: "Vocês fazem entrega e instalação?", answer: "Sim. Cuidamos da logística e do suporte de instalação no local em toda a América do Norte, Central e do Sul." },
];

const tickerItems = [
  "Infláveis Personalizados",
  "Réplicas Gigantes de Produtos",
  "Arcos com Marca",
  "Mascotes Infláveis",
  "Linhas de Chegada",
  "Feiras e Exposições",
  "Ativações de Marca",
  "Totens para Eventos",
];

export default function Home() {
  return (
    <>
      <FAQSchema items={homeFaqs} />
      <Header />

      <main className="flex-1">

        {/* ── 1. HERO — Floatie Kings auto-play slideshow ── */}
        <HeroSlider />

        {/* ── 2. TICKER ── */}
        <div className="bg-primary overflow-hidden py-3.5 border-y border-on-primary/10">
          <div className="ticker-track flex items-center gap-0 whitespace-nowrap w-max">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="flex items-center">
                <span className="text-[0.65rem] font-black uppercase tracking-[0.25em] text-on-primary/70 px-6">{item}</span>
                <span className="text-orange text-xs">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── 3. VIDEO ── */}
        <section className="bg-on-surface">
          {/* Header da seção — com padding */}
          <div className="pt-16 pb-8 px-4 lg:px-8 text-center">
            <p className="section-label text-orange/70 mb-3">Veja em Ação</p>
            <h2
              className="font-black text-3xl lg:text-5xl uppercase text-inverse-on-surface leading-tight"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              INFLÁVEIS QUE<br />
              <span className="text-orange">PARAM O MUNDO</span>
            </h2>
          </div>
          {/* Player full-bleed */}
          <VideoCarousel />
        </section>

        {/* ── 4. SPLIT CTA — 2 universos ── */}
        <section className="py-16 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "INFLÁVEIS CORPORATIVOS",
                desc: "Feiras, lançamentos, ativações e conferências.",
                href: "/setores/eventos-corporativos",
                img: "/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg",
                cta: "Ver projetos →",
                ctaStyle: "bg-on-surface text-white",
              },
              {
                title: "EVENTOS & CELEBRAÇÕES",
                desc: "Festivais, esportes, festas e campanhas de marca.",
                href: "/setores/festas-celebracoes",
                img: "/images/gallery/SaveClip.App_598989249_17877354600448342_7726145296482408610_n.jpg",
                cta: "Ver projetos →",
                ctaStyle: "bg-orange text-white",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-5">
                <Link href={item.href} className="group block relative rounded-2xl overflow-hidden aspect-[16/10]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                </Link>
                <div className="flex items-end justify-between gap-4 px-1">
                  <div>
                    <h3
                      className="text-lg font-black uppercase text-text leading-tight"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted mt-1">{item.desc}</p>
                  </div>
                  <Link
                    href={item.href}
                    className={`shrink-0 inline-flex items-center h-11 px-6 rounded-full font-black text-xs uppercase tracking-widest transition-opacity hover:opacity-90 ${item.ctaStyle}`}
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {item.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. SECTORS ── */}
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p className="section-label text-orange mb-3">Setores que Atendemos</p>
                <h2
                  className="text-4xl lg:text-5xl font-black text-text leading-[1.05] uppercase"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  INFLÁVEIS PARA
                  <br />
                  CADA SETOR
                </h2>
              </div>
              <Link
                href="/setores"
                className="text-[0.7rem] font-black text-primary hover:underline uppercase tracking-[0.2em] shrink-0"
              >
                VER TODOS OS SETORES →
              </Link>
            </div>

            {/* 5-card grid: first card spans 2 rows on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
              {[
                { slug: "corporate-events",      title: "Eventos Corporativos",   tags: ["Lançamentos", "Ativações", "Conferências"], large: true  },
                { slug: "trade-shows",            title: "Feiras & Exposições",    tags: ["Estandes", "Réplicas", "Displays"],         large: false },
                { slug: "sports",                 title: "Esportes & Corridas",    tags: ["Arcos", "Patrocinadores", "Mascotes"],      large: false },
                { slug: "parties",                title: "Festas & Celebrações",   tags: ["Festivais", "Temáticos", "Sazonais"],       large: false },
                { slug: "marketing-advertising",  title: "Marketing & Publicidade",tags: ["Exterior", "Varejo", "Guerrilha"],          large: false },
              ].map((s, idx) => (
                <Link
                  key={s.slug}
                  href={`/setores/${s.slug}`}
                  className={`group relative overflow-hidden rounded-xl flex flex-col justify-end min-h-[220px] ${
                    idx === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2 min-h-[460px]" : ""
                  }`}
                >
                  {/* Background image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg"
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                  {/* Content */}
                  <div className="relative z-10 p-6 flex flex-col gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {s.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/15 text-white backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-black text-white uppercase" style={{ fontFamily: "var(--font-headline)" }}>
                      {s.title}
                    </h3>
                    <span className="text-xs font-black uppercase tracking-widest text-orange flex items-center gap-2">
                      Explorar setor
                      <svg className="size-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. INOVAÇÕES ── */}
        <section className="py-24 px-4 lg:px-8 bg-on-surface">
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p className="section-label text-orange mb-3">Engenharia de Alta Performance</p>
                <h2
                  className="text-4xl lg:text-5xl font-black text-inverse-on-surface leading-[1.05] uppercase"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  A TECNOLOGIA QUE
                  <br />
                  <span className="text-orange">NOS SEPARA</span>
                </h2>
              </div>
              <p className="text-inverse-on-surface/50 text-sm max-w-xs leading-relaxed">
                Enquanto o mercado entrega formas, a Amaze entrega estruturas de alta performance — com especificações que a concorrência não publica porque não possui.
              </p>
            </div>

            {/* Innovation cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">

              {/* Card destaque — Sirocco HideVENT */}
              <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary to-purple rounded-xl overflow-hidden flex flex-col gap-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gallery/SaveClip.App_604055838_17878831959448342_7903443883004681535_n.jpg" alt="" className="w-full h-40 object-cover opacity-60" />
                <div className="p-8 flex flex-col gap-6 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-lg bg-white/15 flex items-center justify-center text-2xl shrink-0">⚡</div>
                    <div>
                      <p className="text-[0.6rem] font-black uppercase tracking-[0.25em] text-orange mb-1">Exclusivo Amaze</p>
                      <h3 className="font-black text-white text-xl lg:text-2xl uppercase" style={{ fontFamily: "var(--font-headline)" }}>
                        Motor Sirocco HideVENT
                      </h3>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    100% embutido na estrutura — sem mangueiras externas, sem riscos de acidentes. À prova d'água, opera com <strong className="text-white">330w de potência</strong> e infla arenas inteiras em aproximadamente 2 minutos. Silencioso. Invisível. Implacável.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {["330w de potência", "À prova d'água", "Inflagem em ~2 min", "100% embutido"].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/10 text-white text-xs font-bold rounded-full border border-white/15">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Garantia 3 anos */}
              <div className="bg-orange rounded-xl overflow-hidden flex flex-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gallery/SaveClip.App_604055838_17878831959448342_7903443883004681535_n.jpg" alt="" className="w-full h-40 object-cover opacity-50" />
                <div className="p-8 flex flex-col gap-4 flex-1">
                  <div className="size-12 rounded-lg bg-white/20 flex items-center justify-center text-2xl">🛡️</div>
                  <div>
                    <p className="text-[0.6rem] font-black uppercase tracking-[0.25em] text-white/60 mb-1">Única no Setor</p>
                    <h3 className="font-black text-white text-xl uppercase" style={{ fontFamily: "var(--font-headline)" }}>
                      Garantia de 3 Anos
                    </h3>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed flex-1">
                    Cobertura total de fabricação — sem exclusões para vento ou chuva. A RVB cobre apenas 1 ano e exclui "ventos fortes". Nós cobrimos o real.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {/* Poliéster 300g/m² */}
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gallery/SaveClip.App_604055838_17878831959448342_7903443883004681535_n.jpg" alt="" className="w-full h-36 object-cover opacity-40" />
                <div className="p-8 flex flex-col gap-4 flex-1">
                  <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-2xl">🧵</div>
                  <div>
                    <p className="text-[0.6rem] font-black uppercase tracking-[0.25em] text-orange mb-1">Material Base</p>
                    <h3 className="font-black text-inverse-on-surface text-lg uppercase" style={{ fontFamily: "var(--font-headline)" }}>
                      Poliéster 300g/m²
                    </h3>
                  </div>
                  <p className="text-inverse-on-surface/60 text-sm leading-relaxed flex-1">
                    Fios de alta tenacidade com camada de borracha anti-torção e acabamento acetinado. Permite impressão em resolução fotográfica. Tratamento UV e antifungo de série.
                  </p>
                </div>
              </div>

              {/* Ancoragem 300 kg/f */}
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gallery/SaveClip.App_604055838_17878831959448342_7903443883004681535_n.jpg" alt="" className="w-full h-36 object-cover opacity-40" />
                <div className="p-8 flex flex-col gap-4 flex-1">
                  <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-2xl">⚓</div>
                  <div>
                    <p className="text-[0.6rem] font-black uppercase tracking-[0.25em] text-orange mb-1">Estrutura</p>
                    <h3 className="font-black text-inverse-on-surface text-lg uppercase" style={{ fontFamily: "var(--font-headline)" }}>
                      Ancoragem 300 kg/f
                    </h3>
                  </div>
                  <p className="text-inverse-on-surface/60 text-sm leading-relaxed flex-1">
                    Alças com meia argola de 38mm e arame soldado 4mm. Tripla costura dupla em 6 camadas de reforço nas áreas críticas. Suporta até 300 kg/f de ruptura.
                  </p>
                </div>
              </div>

              {/* Fluxo Contínuo */}
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden flex flex-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gallery/SaveClip.App_604055838_17878831959448342_7903443883004681535_n.jpg" alt="" className="w-full h-36 object-cover opacity-40" />
                <div className="p-8 flex flex-col gap-4 flex-1">
                  <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-2xl">🔄</div>
                  <div>
                    <p className="text-[0.6rem] font-black uppercase tracking-[0.25em] text-orange mb-1">Zero Risco de Evento</p>
                    <h3 className="font-black text-inverse-on-surface text-lg uppercase" style={{ fontFamily: "var(--font-headline)" }}>
                      Fluxo Contínuo
                    </h3>
                  </div>
                  <p className="text-inverse-on-surface/60 text-sm leading-relaxed flex-1">
                    A Amaze não trabalha com infláveis selados. Micro-vazamentos e pressões externas são compensados instantaneamente — a estrutura permanece rígida e imponente durante todo o evento.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 6. HOW IT WORKS — dark bg, 3 numbered steps ── */}
        <section className="py-24 px-4 lg:px-8 bg-on-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="section-label text-orange mb-3">Como Funciona</p>
              <h2
                className="text-4xl lg:text-6xl font-black text-inverse-on-surface leading-tight uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                PRONTO EM 3 PASSOS SIMPLES
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  num: "01",
                  title: "SOLICITE UM ORÇAMENTO",
                  desc: "Conte-nos sobre seu projeto pelo nosso formulário. Respondemos com uma proposta personalizada em até 24 horas.",
                },
                {
                  num: "02",
                  title: "DESIGN & APROVAÇÃO",
                  desc: "Nossa equipe cria uma maquete 3D colorida. Você revisa e aprova cada detalhe antes do início da produção.",
                },
                {
                  num: "03",
                  title: "PRODUÇÃO & ENTREGA",
                  desc: "Fabricamos seu inflável com engenharia de precisão e entregamos no local — pontualmente, sempre.",
                },
              ].map((step) => (
                <div key={step.num} className="relative bg-white/5 rounded-xl overflow-hidden border border-white/10">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  {/* Content */}
                  <div className="relative p-8">
                    <div
                      className="text-[5rem] font-black leading-none text-white/5 select-none absolute top-2 right-4"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {step.num}
                    </div>
                    <h3
                      className="font-black text-inverse-on-surface text-xl uppercase mb-3"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-inverse-on-surface/60 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-14">
              <Link
                href="/orcamento"
                className="btn-hover-inflate inline-flex items-center gap-3 h-16 px-12 bg-orange text-white rounded-full font-black text-lg uppercase tracking-wide shadow-xl"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                INICIE SEU PROJETO →
              </Link>
            </div>
          </div>
        </section>

        {/* ── WHAT MAKES US SPECIAL ── */}
        <section className="py-24 px-4 lg:px-8 bg-on-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="section-label text-orange mb-3">Por Que Escolher a Amaze</p>
              <h2 className="text-4xl lg:text-6xl font-black text-inverse-on-surface leading-tight uppercase"
                style={{ fontFamily: "var(--font-headline)" }}>
                O QUE NOS TORNA ESPECIAIS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Card esquerdo — diferenciais */}
              <div className="bg-surface-container-low rounded-2xl p-10 flex flex-col gap-8">
                {[
                  {
                    title: "SEM PEDIDO MÍNIMO",
                    desc: "Seja 1 inflável ou 100 unidades, atendemos com o mesmo padrão premium.",
                    icon: (
                      <svg className="size-10 text-orange" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                      </svg>
                    ),
                  },
                  {
                    title: "ENTREGA RÁPIDA",
                    desc: "Orçamento em 24h, produção ágil e opções de envio expresso para todo o Brasil e América.",
                    icon: (
                      <svg className="size-10 text-orange" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                      </svg>
                    ),
                  },
                  {
                    title: "ENVIO PARA TODO O MUNDO",
                    desc: "Entregamos para qualquer lugar das Américas. Logística especializada em grandes volumes.",
                    icon: (
                      <svg className="size-10 text-orange" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 0 1 .284-2.253" />
                      </svg>
                    ),
                  },
                  {
                    title: "GARANTIA DE QUALIDADE",
                    desc: "Materiais premium e controle de qualidade rigoroso em cada peça produzida.",
                    icon: (
                      <svg className="size-10 text-orange" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-5">
                    <div className="shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-black text-text uppercase text-base mb-1"
                        style={{ fontFamily: "var(--font-headline)" }}>
                        {item.title}
                      </h3>
                      <p className="text-text/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card direito — all-in pricing */}
              <div className="bg-surface-container-low rounded-2xl p-10 flex flex-col">
                <p className="text-orange font-black text-sm uppercase tracking-widest mb-1">Preço Completo</p>
                <h3 className="text-3xl font-black text-text uppercase mb-8"
                  style={{ fontFamily: "var(--font-headline)" }}>
                  O QUE ESTÁ INCLUÍDO
                </h3>

                <ul className="flex flex-col gap-4 mb-10 flex-1">
                  {[
                    "Maquete 3D gratuita",
                    "Orçamento em 24 horas",
                    "Sem taxas de setup",
                    "Atendimento especializado",
                    "Garantia de 100% de satisfação",
                    "Suporte pós-entrega",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-text/80 text-sm">
                      <svg className="size-5 text-orange shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/orcamento"
                  className="btn-hover-inflate inline-flex items-center justify-center h-14 px-8 bg-orange text-white rounded-full font-black uppercase tracking-wide text-sm shadow-lg"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  SOLICITE SUA MAQUETE GRÁTIS →
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ── GALLERY BREAK — masonry ── */}
        <FloatieKingsGallery />

        {/* ── 7. PORTFOLIO HIGHLIGHTS ── */}
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p className="section-label text-orange mb-3">Nosso Trabalho</p>
                <h2
                  className="text-4xl lg:text-5xl font-black text-text leading-tight uppercase"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  500+ PROJETOS.
                  <br />
                  UM PADRÃO: EXCEPCIONAL.
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="text-[0.7rem] font-black text-primary hover:underline uppercase tracking-[0.2em] shrink-0"
              >
                VER TODOS OS PROJETOS →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Réplica Gigante de Produto — Feira", tag: "Feiras", year: "2024", img: "/images/gallery/SaveClip.App_598904006_17877354627448342_7377931598932079293_n.jpg" },
                { title: "Arco de Corrida com Marca — Maratona", tag: "Esportes", year: "2024", img: "/images/gallery/SaveClip.App_598989249_17877354600448342_7726145296482408610_n.jpg" },
                { title: "Mascote Personalizado — Festival de Música", tag: "Eventos", year: "2023", img: "/images/gallery/SaveClip.App_589648017_17876804814448342_8600020723861108054_n.jpg" },
              ].map((p) => (
                <Link
                  key={p.title}
                  href="/portfolio"
                  className="group relative h-80 rounded-xl overflow-hidden cursor-pointer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/15 backdrop-blur-sm text-white text-[0.65rem] font-black uppercase tracking-widest rounded-full border border-white/20">
                      {p.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 group-hover:-translate-y-1">
                    <p className="text-white/50 text-[0.65rem] font-black uppercase tracking-widest mb-2">{p.year}</p>
                    <h3
                      className="font-black text-white text-xl leading-tight"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. POR QUE A AMAZE — Michelin-style numbered reasons ── */}
        <section className="py-24 px-4 lg:px-8 relative overflow-hidden bg-slate-50">
          {/* Background photo — very low opacity */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-[0.07] pointer-events-none select-none"
          />
          <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">

            {/* Left — sticky title */}
            <div className="lg:sticky lg:top-32">
              <p className="section-label text-orange mb-4">Nossa Filosofia</p>
              <h2
                className="text-4xl lg:text-5xl font-black leading-tight uppercase text-text"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                POR QUE A AMAZE<br />
                <span className="text-primary">É DIFERENTE?</span>
              </h2>
            </div>

            {/* Right — numbered items */}
            <div className="divide-y divide-border">
              {[
                {
                  num: "1",
                  title: "Infláveis são ativos, não despesas",
                  body: "Um inflável Amaze deve ser tratado como CAPEX — um investimento de longa duração. Com vida útil de 5 a 10 anos e garantia de 3 anos, o custo por ativação se torna drasticamente menor que qualquer outra mídia física de grande formato. É um ativo que se paga no primeiro grande evento e continua gerando valor por anos.",
                },
                {
                  num: "2",
                  title: "Engenharia aeronáutica, não artesanato",
                  body: "Poliéster emborrachado 300g/m², motor Sirocco HideVENT 100% embutido, ancoragem 300 kg/f documentada. Cada decisão de material e estrutura segue o mesmo rigor das aplicações aeronáuticas — porque infláveis que falham em eventos não têm segundo chance.",
                },
                {
                  num: "3",
                  title: "40+ anos de know-how passado de pai para filho",
                  body: "A Amaze carrega o conhecimento acumulado de mais de 40 anos, consolidado de geração em geração. Esse legado se traduz em padrões técnicos que nenhum concorrente consegue replicar — e em especificações que publicamos abertamente porque somos os únicos que as possuem.",
                },
                {
                  num: "4",
                  title: "Dominar o espaço é dominar a percepção",
                  body: "Infláveis gigantes operam acima da linha de visão, onde nenhum banner, stand ou display convencional chega. Quem ocupa o espaço vertical domina o ambiente — e molda a percepção de autoridade e escala da marca nos próximos 30 segundos de atenção do público.",
                },
              ].map((item) => (
                <div key={item.num} className="grid grid-cols-[3rem_1fr] gap-6 py-8">
                  <div
                    className="size-10 bg-primary flex items-center justify-center text-on-primary font-black text-sm shrink-0"
                  >
                    {item.num}
                  </div>
                  <div>
                    <h3
                      className="text-lg font-black text-text mb-2"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 9. LOGOS TICKER — marcas atendidas ── */}
        <div className="bg-white py-10 border-y border-border overflow-hidden">
          <p className="text-center text-[0.65rem] font-black uppercase tracking-[0.25em] text-muted mb-7">
            Marcas que confiam na Amaze
          </p>
          <div className="ticker-track-slow flex items-center gap-0 whitespace-nowrap w-max">
            {[
              "Coca-Cola", "Nike", "Adidas", "Red Bull", "Heineken",
              "Ambev", "Itaú", "Bradesco", "Magazine Luiza", "Mercado Livre",
              "Coca-Cola", "Nike", "Adidas", "Red Bull", "Heineken",
              "Ambev", "Itaú", "Bradesco", "Magazine Luiza", "Mercado Livre",
            ].map((brand, i) => (
              <span key={i} className="flex items-center">
                <span className="px-10 text-sm font-black uppercase tracking-widest text-text/30 hover:text-text/60 transition-colors cursor-default select-none">
                  {brand}
                </span>
                <span className="text-orange/40 text-xs">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ── 10. GOOGLE REVIEWS ── */}
        <section className="py-20 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">

            {/* Header */}
            <div className="text-center mb-12">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-muted mb-3">A prova está nos nossos clientes</p>
              <h2
                className="text-3xl lg:text-5xl font-black uppercase text-text"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                CENTENAS DE AVALIAÇÕES
                <br />
                <span className="text-orange">5 ESTRELAS</span>
              </h2>
              {/* Google rating summary */}
              <div className="inline-flex items-center gap-3 mt-6 px-5 py-3 rounded-xl border border-border bg-surface-container-low">
                <svg className="size-5" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-black text-text">4.9</span>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map((s) => (
                        <svg key={s} className="size-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-[0.65rem] text-muted">no Google · Amaze Balloons</p>
                </div>
              </div>
            </div>

            {/* Review cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  name: "Ricardo A.",
                  handle: "2 meses atrás",
                  initial: "R",
                  color: "bg-blue-500",
                  text: "Inflável entregue antes do prazo, instalação em minutos. Na feira, o estande ficou visível do outro lado do pavilhão. Retorno em leads foi imediato. Recomendo sem hesitar.",
                },
                {
                  name: "Fernanda C.",
                  handle: "3 meses atrás",
                  initial: "F",
                  color: "bg-green-500",
                  text: "Equipe super atenciosa, fizeram ajustes no design até ficar perfeito. O arco inflável no evento esportivo gerou mais de 5 mil fotos no Instagram só no dia da largada.",
                },
                {
                  name: "Marcos L.",
                  handle: "1 mês atrás",
                  initial: "M",
                  color: "bg-orange-500",
                  text: "Trabalho de altíssima qualidade. A réplica do nosso produto em 7m de altura foi o destaque absoluto da feira. Clientes vinham tirar foto e depois nos procuravam no estande.",
                },
                {
                  name: "Ana B.",
                  handle: "4 meses atrás",
                  initial: "A",
                  color: "bg-purple-500",
                  text: "Profissionalismo em cada etapa. Da aprovação do 3D à entrega, tudo documentado e dentro do prazo. O inflável ainda está perfeito depois de 8 eventos em 4 meses.",
                },
              ].map((r) => (
                <div key={r.name} className="flex flex-col gap-4 bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`size-9 rounded-full ${r.color} flex items-center justify-center text-white text-sm font-black shrink-0`}>
                        {r.initial}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-text leading-tight">{r.name}</p>
                        <p className="text-[0.65rem] text-muted">{r.handle}</p>
                      </div>
                    </div>
                    {/* Google G */}
                    <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => (
                      <svg key={s} className="size-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {/* Text */}
                  <p className="text-sm text-muted leading-relaxed flex-1">{r.text}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 11. ESPECIALISTA — Floatie Kings style ── */}
        <section className="py-24 px-4 lg:px-8 bg-orange-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label text-orange mb-3">Atendimento Especializado</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                A MELHOR EXPERIÊNCIA COMEÇA
                <br />
                <span className="text-primary">COM PESSOAS REAIS</span>
              </h2>
            </div>

            <div className="bg-white rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] items-stretch">

                {/* Foto */}
                <div className="relative border-b lg:border-b-0 lg:border-r border-border overflow-hidden min-h-72 lg:min-h-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg" alt="" className="w-full h-full object-cover absolute inset-0" />
                </div>

                {/* Conteúdo */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3
                    className="text-2xl lg:text-3xl font-black text-text uppercase leading-tight mb-3"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    UM ESPECIALISTA AMAZE
                    <br />
                    ESTÁ PRONTO PARA TE ATENDER
                  </h3>
                  <p className="text-muted mb-8 leading-relaxed">
                    Suporte personalizado de alguém que entende de infláveis de verdade —
                    do briefing à entrega, do conceito à especificação técnica.
                  </p>

                  <p className="text-xs font-black uppercase tracking-widest text-orange mb-5">Como podemos ajudar</p>
                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {[
                      { icon: "🎨", label: "Escolha do produto ideal" },
                      { icon: "📐", label: "Assistência de design" },
                      { icon: "💬", label: "Orçamento em 24h" },
                      { icon: "📦", label: "Suporte de pedido" },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-3 text-sm text-text">
                        <span className="text-xl">{item.icon}</span>
                        {item.label}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://wa.me/5548920612591"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-hover-inflate inline-flex items-center justify-center gap-2 h-12 px-8 bg-orange text-white rounded-full font-black text-sm uppercase tracking-wide"
                    >
                      <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.556 4.122 1.528 5.855L0 24l6.296-1.507A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.651-.51-5.17-1.402l-.371-.22-3.838.92.97-3.72-.242-.386A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                      </svg>
                      FALAR NO WHATSAPP
                    </a>
                    <a
                      href="tel:+5548920612591"
                      className="inline-flex items-center justify-center gap-2 h-12 px-8 bg-white border-2 border-border text-text rounded-full font-black text-sm uppercase tracking-wide hover:border-primary/40 transition-colors"
                    >
                      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
                      </svg>
                      +55 48 9206-1259
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── 10. EXPERT CTA — full-width, phone + quote button ── */}
        <section className="py-32 px-4 lg:px-8 bg-purple text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-secondary opacity-20 blur-[100px]" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="section-label text-orange mb-4 text-center">Pronto para Ir ao Gigante?</p>
            <h2
              className="text-4xl lg:text-6xl font-black leading-tight uppercase mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              VAMOS TORNAR SUA
              <br />
              MARCA INESQUECÍVEL
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Receba um orçamento gratuito em 24 horas — sem compromisso, apenas uma conversa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/orcamento"
                className="btn-hover-inflate flex items-center gap-3 h-16 px-12 bg-orange text-white rounded-full font-black text-lg uppercase tracking-wide shadow-xl"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                SOLICITAR ORÇAMENTO GRÁTIS →
              </Link>
              <a
                href="tel:+15550000000"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-bold text-lg"
              >
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (555) 000-0000
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
