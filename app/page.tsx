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
        <section className="py-20 px-4 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <p className="section-label text-muted mb-3 text-center">Veja em Ação</p>
            <h2
              className="font-black text-3xl lg:text-5xl uppercase text-center text-text mb-10 leading-tight"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              INFLÁVEIS QUE<br />
              <span className="text-primary">PARAM O MUNDO</span>
            </h2>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-xl bg-black">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
                src="/amaze-video.mp4"
              />
            </div>
          </div>
        </section>

        {/* ── 4. SECTORS ── */}
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
                {
                  slug: "corporate-events",
                  title: "Eventos Corporativos",
                  description: "Infláveis gigantes para lançamentos de produtos, ativações de marca, conferências anuais e cúpulas B2B.",
                  icon: "🏢",
                  tags: ["Lançamentos", "Ativações", "Conferências"],
                  large: true,
                },
                {
                  slug: "trade-shows",
                  title: "Feiras & Exposições",
                  description: "Destaque-se em qualquer exposição com infláveis e réplicas que atraem visitantes de todo o piso.",
                  icon: "🎪",
                  tags: ["Estandes", "Réplicas", "Displays"],
                  large: false,
                },
                {
                  slug: "sports",
                  title: "Esportes & Corridas",
                  description: "Arcos, totens de patrocinadores e displays gigantes para maratonas, corridas e competições.",
                  icon: "🏃",
                  tags: ["Arcos", "Patrocinadores", "Mascotes"],
                  large: false,
                },
                {
                  slug: "parties",
                  title: "Festas & Celebrações",
                  description: "Infláveis personalizados para festivais de música, aniversários e celebrações públicas.",
                  icon: "🎉",
                  tags: ["Festivais", "Temáticos", "Sazonais"],
                  large: false,
                },
                {
                  slug: "marketing-advertising",
                  title: "Marketing & Publicidade",
                  description: "Infláveis publicitários comprovadamente capazes de gerar 10× mais engajamento que a mídia exterior convencional.",
                  icon: "📣",
                  tags: ["Exterior", "Varejo", "Guerrilha"],
                  large: false,
                },
              ].map((s, idx) => (
                <Link
                  key={s.slug}
                  href={`/setores/${s.slug}`}
                  className={`group flex flex-col gap-4 p-8 rounded-xl border border-border bg-white hover:border-primary/30 hover:shadow-lg transition-all ${
                    idx === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2 bg-gradient-to-br from-primary to-purple text-white border-transparent" : ""
                  }`}
                >
                  <div className={`size-14 rounded-xl flex items-center justify-center text-3xl ${idx === 0 ? "bg-white/15" : "bg-primary/8"}`}>
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-black mb-2 uppercase ${idx === 0 ? "text-white" : "text-text group-hover:text-primary transition-colors"}`}
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {s.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${idx === 0 ? "text-white/70" : "text-muted"}`}>{s.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 text-xs font-medium rounded-full ${idx === 0 ? "bg-white/15 text-white" : "bg-surface-container text-on-surface-variant"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className={`text-xs font-black uppercase tracking-widest flex items-center gap-2 ${idx === 0 ? "text-orange" : "text-primary"}`}>
                    Explorar setor
                    <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
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
              <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary to-purple rounded-xl p-8 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-lg bg-white/15 flex items-center justify-center text-2xl shrink-0">⚡</div>
                  <div>
                    <p className="text-[0.6rem] font-black uppercase tracking-[0.25em] text-orange mb-1">Exclusivo Amaze</p>
                    <h3
                      className="font-black text-white text-xl lg:text-2xl uppercase"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
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

              {/* Garantia 3 anos */}
              <div className="bg-orange rounded-xl p-8 flex flex-col gap-4">
                <div className="size-12 rounded-lg bg-white/20 flex items-center justify-center text-2xl">🛡️</div>
                <div>
                  <p className="text-[0.6rem] font-black uppercase tracking-[0.25em] text-white/60 mb-1">Única no Setor</p>
                  <h3
                    className="font-black text-white text-xl uppercase"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    Garantia de 3 Anos
                  </h3>
                </div>
                <p className="text-white/80 text-sm leading-relaxed flex-1">
                  Cobertura total de fabricação — sem exclusões para vento ou chuva. A RVB cobre apenas 1 ano e exclui "ventos fortes". Nós cobrimos o real.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {/* Poliéster 300g/m² */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col gap-4">
                <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-2xl">🧵</div>
                <div>
                  <p className="text-[0.6rem] font-black uppercase tracking-[0.25em] text-orange mb-1">Material Base</p>
                  <h3
                    className="font-black text-inverse-on-surface text-lg uppercase"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    Poliéster 300g/m²
                  </h3>
                </div>
                <p className="text-inverse-on-surface/60 text-sm leading-relaxed flex-1">
                  Fios de alta tenacidade com camada de borracha anti-torção e acabamento acetinado. Permite impressão em resolução fotográfica. Tratamento UV e antifungo de série.
                </p>
              </div>

              {/* Ancoragem 300 kg/f */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col gap-4">
                <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-2xl">⚓</div>
                <div>
                  <p className="text-[0.6rem] font-black uppercase tracking-[0.25em] text-orange mb-1">Estrutura</p>
                  <h3
                    className="font-black text-inverse-on-surface text-lg uppercase"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    Ancoragem 300 kg/f
                  </h3>
                </div>
                <p className="text-inverse-on-surface/60 text-sm leading-relaxed flex-1">
                  Alças com meia argola de 38mm e arame soldado 4mm. Tripla costura dupla em 6 camadas de reforço nas áreas críticas. Suporta até 300 kg/f de ruptura.
                </p>
              </div>

              {/* Fluxo Contínuo */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col gap-4">
                <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-2xl">🔄</div>
                <div>
                  <p className="text-[0.6rem] font-black uppercase tracking-[0.25em] text-orange mb-1">Zero Risco de Evento</p>
                  <h3
                    className="font-black text-inverse-on-surface text-lg uppercase"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    Fluxo Contínuo
                  </h3>
                </div>
                <p className="text-inverse-on-surface/60 text-sm leading-relaxed flex-1">
                  A Amaze não trabalha com infláveis selados. Micro-vazamentos e pressões externas são compensados instantaneamente — a estrutura permanece rígida e imponente durante todo o evento.
                </p>
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
                  {/* Image placeholder */}
                  <div className="aspect-[4/3] bg-white/5 border-b-2 border-dashed border-white/20 flex flex-col items-center justify-center gap-3">
                    <svg className="size-10 text-white/20" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                    </svg>
                    <span className="text-xs text-white/30 uppercase tracking-wider">Foto do passo {step.num}</span>
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

        {/* ── GALLERY BREAK — simple parallax mosaic ── */}
        <section className="relative w-full h-[600px] overflow-hidden">
          {/* Fixed background image grid */}
          <div
            className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-1"
            style={{ backgroundAttachment: "fixed" }}
          >
            {[
              "SaveClip.App_588050369_17875356303448342_4763558584539654616_n.jpg",
              "SaveClip.App_589642225_17876804805448342_7097452702531659399_n.jpg",
              "SaveClip.App_589648017_17876804814448342_8600020723861108054_n.jpg",
              "SaveClip.App_598409687_17877354618448342_6209046712205705990_n.jpg",
              "SaveClip.App_598635946_17877354609448342_3340277087935498923_n.jpg",
              "SaveClip.App_598834557_17877354591448342_4532624735367015725_n.jpg",
              "SaveClip.App_598904006_17877354627448342_7377931598932079293_n.jpg",
              "SaveClip.App_598989249_17877354600448342_7726145296482408610_n.jpg",
              "SaveClip.App_604055838_17878831959448342_7903443883004681535_n.jpg",
              "SaveClip.App_606337516_17878831950448342_3141222151768433182_n.jpg",
              "SaveClip.App_632153979_17885887683448342_7600628157039576746_n.jpg",
              "SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg",
            ].map((file, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={`/images/gallery/${file}`}
                alt={`Projeto Amaze ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ))}
          </div>
          {/* Dark overlay for depth */}
          <div className="absolute inset-0 bg-on-surface/40" />
        </section>

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
                { title: "Réplica Gigante de Produto — Feira NYC", tag: "Feiras", year: "2024", gradient: "from-primary-container via-primary to-secondary-container" },
                { title: "Arco de Corrida com Marca — Maratona de Miami",     tag: "Esportes",      year: "2024", gradient: "from-secondary via-primary-container to-secondary-container" },
                { title: "Mascote Personalizado — Festival de Música",   tag: "Eventos",      year: "2023", gradient: "from-primary via-secondary to-primary-container" },
              ].map((p) => (
                <Link
                  key={p.title}
                  href="/portfolio"
                  className={`group relative h-80 rounded-xl overflow-hidden bg-gradient-to-br ${p.gradient} cursor-pointer`}
                >
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
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">

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

        {/* ── 9. ESPECIALISTA — Floatie Kings style ── */}
        <section className="py-24 px-4 lg:px-8 bg-surface-container-low">
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

                {/* Foto placeholder */}
                <div className="relative bg-surface-container-low border-b lg:border-b-0 lg:border-r border-border flex flex-col items-center justify-center min-h-72 lg:min-h-0">
                  <div className="w-full h-full min-h-72 flex flex-col items-center justify-center gap-3 text-muted p-8">
                    <svg className="size-14 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-40 text-center">Foto do especialista</span>
                  </div>
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
