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
                  icon: "📋",
                },
                {
                  num: "02",
                  title: "DESIGN & APROVAÇÃO",
                  desc: "Nossa equipe cria uma maquete 3D colorida. Você revisa e aprova cada detalhe antes do início da produção.",
                  icon: "✏️",
                },
                {
                  num: "03",
                  title: "PRODUÇÃO & ENTREGA",
                  desc: "Fabricamos seu inflável com engenharia de precisão e entregamos no local — pontualmente, sempre.",
                  icon: "🚚",
                },
              ].map((step) => (
                <div key={step.num} className="relative bg-white/5 rounded-xl p-8 border border-white/10">
                  <div
                    className="text-[5rem] font-black leading-none text-white/5 select-none absolute top-2 right-4"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {step.num}
                  </div>
                  <div className="size-14 rounded-full bg-orange/20 flex items-center justify-center text-2xl mb-6">
                    {step.icon}
                  </div>
                  <h3
                    className="font-black text-inverse-on-surface text-xl uppercase mb-3"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-inverse-on-surface/60 text-sm leading-relaxed">{step.desc}</p>
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

        {/* ── 9. EXPERT CTA — full-width, phone + quote button ── */}
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
