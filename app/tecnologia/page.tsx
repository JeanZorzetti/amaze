import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Tecnologia Amaze — Engenharia de Alta Performance em Infláveis",
  description:
    "Conheça a engenharia por trás dos infláveis Amaze: motor Sirocco HideVENT, poliéster 300g/m², ancoragem 300 kg/f e garantia de 3 anos. A tecnologia que nos separa do mercado.",
  alternates: { canonical: "https://amazeballoons.com.br/tecnologia" },
};

const pilares = [
  {
    href: "/tecnologia/engenharia-aplicada",
    label: "Pilar 1",
    title: "Engenharia Aplicada",
    desc: "Motor, ancoragem e fluxo contínuo — o que sustenta e não pode falhar.",
    labelColor: "text-orange",
    img: "/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg",
  },
  {
    href: "/tecnologia/impacto-visual",
    label: "Pilar 2",
    title: "Impacto Visual Estratégico",
    desc: "Escala, definição e domínio de atenção — o que captura e faz lembrar.",
    labelColor: "text-orange",
    img: "/images/gallery/SaveClip.App_604055838_17878831959448342_7903443883004681535_n.jpg",
  },
  {
    href: "/tecnologia/confiabilidade",
    label: "Pilar 3",
    title: "Confiabilidade Operacional",
    desc: "Garantia de 3 anos, vida útil de 5–10 anos — o que garante sem risco.",
    labelColor: "text-orange",
    img: "/images/gallery/SaveClip.App_632153979_17885887683448342_7600628157039576746_n.jpg",
  },
];

const deepDives = [
  {
    href: "/tecnologia/sirocco-hidevent",
    label: "Motor Exclusivo",
    title: "Sirocco HideVENT",
    desc: "330w, 100% embutido, à prova d'água. Zero mangueiras externas.",
    labelColor: "text-primary",
    badge: "Exclusivo",
    img: "/images/gallery/SaveClip.App_598904006_17877354627448342_7377931598932079293_n.jpg",
  },
  {
    href: "/tecnologia/poliester-300",
    label: "Material Base",
    title: "Poliéster 300g/m²",
    desc: "3 camadas, impressão fotográfica UV, tratamento antifungo de série.",
    labelColor: "text-primary",
    badge: null,
    img: "/images/gallery/SaveClip.App_598989249_17877354600448342_7726145296482408610_n.jpg",
  },
  {
    href: "/tecnologia/ancoragem-300",
    label: "Estrutura",
    title: "Ancoragem 300 kg/f",
    desc: "Argola 38mm aço galvanizado, 6 camadas de reforço, lona KP1000.",
    labelColor: "text-primary",
    badge: null,
    img: "/images/gallery/SaveClip.App_598834557_17877354591448342_4532624735367015725_n.jpg",
  },
];

const process = [
  {
    num: "01",
    icon: "🔬",
    title: "Análise de Fluxo",
    desc: "Antes da primeira costura, cada projeto passa por análise de distribuição de pressão, tensão e dinâmica de fluxo de ar. Identificamos e eliminamos 'zonas mortas' que causam deformações.",
  },
  {
    num: "02",
    icon: "🧪",
    title: "Seleção de Materiais",
    desc: "Escolha criteriosa do Poliéster 300g/m², fios de ancoragem, fita de reforço e componentes internos. Cada material é selecionado para o contexto específico do projeto.",
  },
  {
    num: "03",
    icon: "🏗️",
    title: "Fabricação & Reforço",
    desc: "Costura industrial com fio de poliamida 40, 6–8 pontos por polegada. Reforços em viés aplicados em todos os pontos de tração. Motor Sirocco HideVENT instalado e integrado.",
  },
  {
    num: "04",
    icon: "✅",
    title: "Testes Rigorosos",
    desc: "Cada produto é submetido a testes de estresse, carga de vento, UV e uso contínuo. Só sai da fábrica com a garantia de 3 anos emitida.",
  },
];

const compare = [
  { spec: "Motor embutido (sem mangueiras)", amaze: true,  market: false },
  { spec: "Poliéster 300g/m²",              amaze: true,  market: false },
  { spec: "Ancoragem 300 kg/f documentada", amaze: true,  market: false },
  { spec: "Fluxo contínuo (sem selados)",   amaze: true,  market: false },
  { spec: "Garantia 3 anos sem exclusões",  amaze: true,  market: false },
  { spec: "Análise de fluxo pré-costura",   amaze: true,  market: false },
  { spec: "Especificações técnicas públicas", amaze: true, market: false },
];


export default function TecnologiaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início",     url: "https://amazeballoons.com" },
          { name: "Tecnologia", url: "https://amazeballoons.com.br/tecnologia" },
        ]}
      />
      <Header />
      <main className="flex-1 pt-24">

        {/* ── HERO ── */}
        <section className="py-24 px-4 lg:px-8 bg-on-surface relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary opacity-10 blur-[120px] translate-x-1/3 -translate-y-1/3" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <p className="section-label text-orange mb-4">Engenharia de Alta Performance</p>
            <h1
              className="text-4xl lg:text-6xl font-black text-inverse-on-surface leading-tight uppercase mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              A TECNOLOGIA QUE
              <br />
              <span className="text-orange">NOS SEPARA</span>
            </h1>
            <p className="text-xl text-inverse-on-surface/60 max-w-2xl leading-relaxed">
              Enquanto o mercado entrega formas, a Amaze desenvolve estruturas de alta performance — com especificações que a concorrência não publica porque simplesmente não possui.
            </p>
          </div>
        </section>

        {/* ── GRID DE PILARES — estilo Michelin ── */}
        <section className="py-20 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="section-label text-orange mb-3">Os 3 Pilares</p>
              <h2
                className="text-3xl lg:text-4xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                NOSSA FILOSOFIA DE ENGENHARIA
              </h2>
              <p className="text-muted mt-3 max-w-xl">Cada pilar é uma promessa que sustenta o produto inteiro.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {pilares.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="group flex flex-col rounded-xl overflow-hidden border border-border hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  <div className="w-full aspect-[4/3] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className={`text-[0.6rem] font-black uppercase tracking-widest mb-2 ${p.labelColor}`}>{p.label}</span>
                    <h3
                      className="text-lg font-black text-text uppercase mb-2 group-hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed flex-1">{p.desc}</p>
                    <div className="flex items-center gap-1.5 mt-4 text-xs font-black text-primary uppercase tracking-widest">
                      Ver mais
                      <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── GRID DE TECNOLOGIAS TÉCNICAS — estilo Michelin ── */}
        <section className="py-20 px-4 lg:px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="section-label text-orange mb-3">Especificações Técnicas</p>
              <h2
                className="text-3xl lg:text-4xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                AS TECNOLOGIAS EM DETALHE
              </h2>
              <p className="text-muted mt-3 max-w-xl">Cada componente documentado. Cada especificação publicada.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {deepDives.map((d) => (
                <Link
                  key={d.href}
                  href={d.href}
                  className="group flex flex-col rounded-xl overflow-hidden border border-border bg-white hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  <div className="relative">
                    <div className="w-full aspect-[4/3] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={d.img} alt={d.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    {d.badge && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-orange text-white text-[0.6rem] font-black uppercase tracking-widest rounded-full">
                        {d.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className={`text-[0.6rem] font-black uppercase tracking-widest mb-2 ${d.labelColor}`}>{d.label}</span>
                    <h3
                      className="text-lg font-black text-text uppercase mb-2 group-hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {d.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed flex-1">{d.desc}</p>
                    <div className="flex items-center gap-1.5 mt-4 text-xs font-black text-primary uppercase tracking-widest">
                      Ver especificações
                      <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── VÍDEO PLACEHOLDER ── */}
        <section className="py-24 px-4 lg:px-8 bg-on-surface">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="section-label text-orange mb-4">Processo de Fabricação</p>
                <h2
                  className="text-3xl lg:text-5xl font-black text-inverse-on-surface uppercase leading-tight mb-6"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  VEJA A ENGENHARIA<br />
                  <span className="text-orange">EM AÇÃO</span>
                </h2>
                <p className="text-inverse-on-surface/60 leading-relaxed mb-8">
                  Do corte do tecido à instalação do motor Sirocco HideVENT — cada etapa do nosso processo de fabricação segue os padrões mais rigorosos do setor. Em breve, o vídeo completo do nosso processo produtivo.
                </p>
                <div className="flex flex-col gap-3">
                  {["Corte e seleção de tecido", "Costura estrutural 6–8 pts/pol", "Instalação do motor embutido", "Testes de pressão e carga"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-inverse-on-surface/70">
                      <span className="size-5 rounded-full bg-orange/20 flex items-center justify-center text-orange font-black text-[0.6rem]">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full aspect-video bg-white/5 border-2 border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center gap-4 text-inverse-on-surface/40">
                <svg className="size-14 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
                <span className="text-sm font-bold uppercase tracking-widest opacity-50">Vídeo do processo — em breve</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESSO DE FABRICAÇÃO ── */}
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="section-label text-orange mb-3">Do Conceito ao Evento</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                PROCESSO DE FABRICAÇÃO
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {process.map((step) => (
                <div key={step.num} className="relative bg-surface-container-low rounded-xl p-8 border border-border">
                  <div
                    className="text-[5rem] font-black leading-none text-primary/5 select-none absolute top-2 right-4"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {step.num}
                  </div>
                  <div className="size-12 rounded-full bg-orange/10 flex items-center justify-center text-2xl mb-6">
                    {step.icon}
                  </div>
                  <h3
                    className="font-black text-text text-lg uppercase mb-3"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARATIVO ── */}
        <section className="py-24 px-4 lg:px-8 bg-orange-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label text-orange mb-3">Transparência Total</p>
              <h2
                className="text-3xl lg:text-4xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                AMAZE VS. MERCADO
              </h2>
              <p className="text-muted text-sm mt-4">
                Pedimos que você compare. Nenhum outro fabricante publica estas especificações porque não as possui.
              </p>
            </div>

            <div className="rounded-md overflow-hidden border border-border">
              <div className="grid grid-cols-3 bg-on-surface text-inverse-on-surface text-xs font-black uppercase tracking-widest">
                <div className="col-span-1 px-6 py-4">Especificação</div>
                <div className="p-4 text-center text-orange">Amaze</div>
                <div className="p-4 text-center text-inverse-on-surface/40">Mercado</div>
              </div>
              {compare.map((row, i) => (
                <div
                  key={row.spec}
                  className={`grid grid-cols-3 text-sm border-t border-border ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                >
                  <div className="col-span-1 px-6 py-4 font-semibold text-text">{row.spec}</div>
                  <div className="p-4 flex items-center justify-center">
                    <span className="size-6 rounded-full bg-green/15 flex items-center justify-center text-green font-black text-xs">✓</span>
                  </div>
                  <div className="p-4 flex items-center justify-center">
                    <span className="size-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 font-black text-xs">✕</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-4 lg:px-8 bg-purple text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-secondary opacity-20 blur-[100px]" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="section-label text-orange mb-4 text-center">Pronto para a Alta Performance?</p>
            <h2
              className="text-4xl lg:text-5xl font-black leading-tight uppercase mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              SOLICITE UM PROJETO
              <br />
              COM ESPECIFICAÇÃO REAL
            </h2>
            <p className="text-white/70 mb-10">
              Cada orçamento Amaze vem com justificativa técnica — materiais, motor, ancoragem e prazo documentados por escrito.
            </p>
            <Link
              href="/orcamento"
              className="btn-hover-inflate inline-flex items-center gap-3 h-16 px-12 bg-orange text-white rounded-full font-black text-lg uppercase tracking-wide shadow-xl"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              SOLICITAR ORÇAMENTO GRÁTIS →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
