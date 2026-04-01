import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Tecnologia Amaze — Engenharia de Alta Performance em Infláveis",
  description:
    "Conheça a engenharia por trás dos infláveis Amaze: motor Sirocco HideVENT, poliéster 300g/m², ancoragem 300 kg/f e garantia de 3 anos. A tecnologia que nos separa do mercado.",
  alternates: { canonical: "https://amazeballoons.com/tecnologia" },
};

const pillars = [
  {
    id: "sirocco",
    badge: "Exclusivo Amaze",
    badgeColor: "text-orange",
    icon: "⚡",
    title: "Motor Sirocco HideVENT",
    headline: "100% embutido. Zero mangueiras externas.",
    body: "O motor Sirocco HideVENT é 100% integrado à estrutura — elimina mangueiras externas que criam riscos de acidente e comprometem a estética. À prova d'água, opera com 330w de potência e infla arenas inteiras em aproximadamente 2 minutos. Silencioso, invisível e implacável.",
    specs: [
      { label: "Potência", value: "330w" },
      { label: "Inflagem", value: "~2 min (arena)" },
      { label: "Proteção", value: "À prova d'água" },
      { label: "Instalação", value: "100% embutido" },
    ],
    dark: true,
  },
  {
    id: "material",
    badge: "Material Base",
    badgeColor: "text-primary",
    icon: "🧵",
    title: "Poliéster Emborrachado 300g/m²",
    headline: "Impressão fotográfica. Resistência estrutural.",
    body: "Nosso material base é uma obra-prima têxtil: fios de poliéster de alta tenacidade em urdume, com camada de borracha linear anti-torção. O acabamento acetinado permite impressão em resolução fotográfica. Tratamento UV de alta tenacidade e revestimento antifungo de série — a integridade molecular do tecido não se degrada com o sol.",
    specs: [
      { label: "Gramatura", value: "300g/m²" },
      { label: "Proteção solar", value: "Tratamento UV" },
      { label: "Proteção biológica", value: "Antifungo" },
      { label: "Impressão", value: "Fotográfica" },
    ],
    dark: false,
  },
  {
    id: "ancoragem",
    badge: "Estrutura",
    badgeColor: "text-primary",
    icon: "⚓",
    title: "Sistema de Ancoragem 300 kg/f",
    headline: "A espinha dorsal da segurança.",
    body: "A ancoragem define se um inflável permanece no ar ou vira um incidente. Utilizamos alças superiores com meia argola de 38mm e arame soldado de 4mm, capazes de suportar ruptura de até 300 kg/f. Cada ponto possui área de força de 15×15cm em lona KP1000, com fita de poliéster de tripla costura dupla — 6 camadas de proteção nas áreas críticas.",
    specs: [
      { label: "Carga de ruptura", value: "300 kg/f" },
      { label: "Argola", value: "38mm meia argola" },
      { label: "Arame", value: "Soldado 4mm" },
      { label: "Reforço", value: "6 camadas" },
    ],
    dark: false,
  },
  {
    id: "fluxo",
    badge: "Zero Risco de Evento",
    badgeColor: "text-orange",
    icon: "🔄",
    title: "Sistema de Fluxo Contínuo",
    headline: "A Amaze não trabalha com infláveis selados.",
    body: "Infláveis selados são vulneráveis a variações de temperatura e a furos acidentais — inutilizam o produto no meio de um evento sem solução imediata. O sistema de fluxo contínuo da Amaze compensa micro-vazamentos e pressões externas instantaneamente, mantendo a estrutura rígida e imponente durante todo o evento. 100% de disponibilidade, garantida.",
    specs: [
      { label: "Operação", value: "Full-time contínuo" },
      { label: "Infláveis selados", value: "Recusados" },
      { label: "Disponibilidade", value: "100% no evento" },
      { label: "Resposta a furos", value: "Instantânea" },
    ],
    dark: false,
  },
  {
    id: "costura",
    badge: "Fabricação",
    badgeColor: "text-primary",
    icon: "🪡",
    title: "Costura & Reforço Estrutural",
    headline: "6–8 pontos por polegada. 4 camadas nas áreas críticas.",
    body: "Utilizamos fio de poliamida 40 em máquinas retas industriais com padrão de 6 a 8 pontos por polegada. Reforços estratégicos são aplicados em todos os pontos de tração com técnicas de viés de reforço e dobras de tecido que criam até 4 camadas de proteção. Detalhe técnico ausente em qualquer concorrente do mercado.",
    specs: [
      { label: "Fio", value: "Poliamida 40" },
      { label: "Densidade", value: "6–8 pts/polegada" },
      { label: "Camadas", value: "Até 4 em áreas críticas" },
      { label: "Técnica", value: "Viés de reforço" },
    ],
    dark: false,
  },
  {
    id: "garantia",
    badge: "Única no Setor",
    badgeColor: "text-orange",
    icon: "🛡️",
    title: "Garantia de 3 Anos",
    headline: "Sem exclusões para vento ou chuva.",
    body: "Nossa garantia de 3 anos de construção é um manifesto de confiança na engenharia Amaze. Cobre defeitos de fabricação estrutural e de segurança, projetada para uso em ambientes externos. A RVB oferece apenas 1 ano e exclui danos causados por 'ventos fortes ou chuva'. Nós cobrimos o real — porque confiamos no que fabricamos.",
    specs: [
      { label: "Duração", value: "3 anos" },
      { label: "Cobertura", value: "Total de fabricação" },
      { label: "Exclusões", value: "Nenhuma" },
      { label: "Mercado", value: "Única nessa cobertura" },
    ],
    dark: false,
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
    desc: "Escolha criteriosa do Poliéster 300g/m², fios de ancoragem, fita de reforço e componentes internos. Cada material é selecionado para o contexto específico do projeto: vento, sol, uso contínuo.",
  },
  {
    num: "03",
    icon: "🏗️",
    title: "Fabricação & Reforço",
    desc: "Costura industrial com fio de poliamida 40, 6–8 pontos por polegada. Reforços em viés aplicados em todos os pontos de tração. Motor Sirocco HideVENT instalado e integrado estruturalmente.",
  },
  {
    num: "04",
    icon: "✅",
    title: "Testes Rigorosos",
    desc: "Cada protótipo e produto final é submetido a testes de estresse, carga de vento, UV e uso contínuo. Só sai da fábrica com a garantia de 3 anos emitida.",
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
          { name: "Tecnologia", url: "https://amazeballoons.com/tecnologia" },
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

        {/* ── PILARES DE TECNOLOGIA ── */}
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="section-label text-orange mb-3">6 Pilares</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                O DNA DA AMAZE
              </h2>
            </div>

            <div className="space-y-6">
              {pillars.map((p, idx) => (
                <div
                  key={p.id}
                  id={p.id}
                  className={`rounded-xl p-8 lg:p-10 ${p.dark ? "bg-on-surface" : "bg-surface-container-low border border-border"}`}
                >
                  <div className="grid lg:grid-cols-2 gap-10 items-start">

                    {/* Left */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`size-12 rounded-lg flex items-center justify-center text-2xl ${p.dark ? "bg-white/10" : "bg-primary/8"}`}>
                          {p.icon}
                        </div>
                        <span className={`text-[0.6rem] font-black uppercase tracking-[0.25em] ${p.badgeColor}`}>{p.badge}</span>
                      </div>
                      <h3
                        className={`text-2xl lg:text-3xl font-black uppercase mb-2 ${p.dark ? "text-inverse-on-surface" : "text-text"}`}
                        style={{ fontFamily: "var(--font-headline)" }}
                      >
                        {p.title}
                      </h3>
                      <p className={`text-sm font-bold mb-4 ${p.dark ? "text-orange" : "text-primary"}`}>
                        {p.headline}
                      </p>
                      <p className={`text-sm leading-relaxed ${p.dark ? "text-inverse-on-surface/60" : "text-muted"}`}>
                        {p.body}
                      </p>
                    </div>

                    {/* Right: specs */}
                    <div className="grid grid-cols-2 gap-3">
                      {p.specs.map((s) => (
                        <div
                          key={s.label}
                          className={`rounded-lg p-4 ${p.dark ? "bg-white/5 border border-white/10" : "bg-white border border-border"}`}
                        >
                          <p className={`text-[0.6rem] font-black uppercase tracking-widest mb-1 ${p.dark ? "text-inverse-on-surface/40" : "text-muted"}`}>
                            {s.label}
                          </p>
                          <p
                            className={`text-lg font-black ${p.dark ? "text-inverse-on-surface" : "text-text"}`}
                            style={{ fontFamily: "var(--font-headline)" }}
                          >
                            {s.value}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESSO ── */}
        <section className="py-24 px-4 lg:px-8 bg-on-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="section-label text-orange mb-3">Do Conceito ao Evento</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-inverse-on-surface uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                PROCESSO DE FABRICAÇÃO
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {process.map((step) => (
                <div key={step.num} className="relative bg-white/5 rounded-xl p-8 border border-white/10">
                  <div
                    className="text-[5rem] font-black leading-none text-white/5 select-none absolute top-2 right-4"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {step.num}
                  </div>
                  <div className="size-12 rounded-full bg-orange/20 flex items-center justify-center text-2xl mb-6">
                    {step.icon}
                  </div>
                  <h3
                    className="font-black text-inverse-on-surface text-lg uppercase mb-3"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-inverse-on-surface/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARATIVO ── */}
        <section className="py-24 px-4 lg:px-8 bg-white">
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

            <div className="rounded-xl overflow-hidden border border-border">
              {/* Header */}
              <div className="grid grid-cols-3 bg-on-surface text-inverse-on-surface text-xs font-black uppercase tracking-widest">
                <div className="col-span-1 p-4">Especificação</div>
                <div className="p-4 text-center text-orange">Amaze</div>
                <div className="p-4 text-center text-inverse-on-surface/40">Mercado</div>
              </div>
              {/* Rows */}
              {compare.map((row, i) => (
                <div
                  key={row.spec}
                  className={`grid grid-cols-3 text-sm border-t border-border ${i % 2 === 0 ? "bg-white" : "bg-surface-container-low"}`}
                >
                  <div className="col-span-1 p-4 font-semibold text-text">{row.spec}</div>
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
