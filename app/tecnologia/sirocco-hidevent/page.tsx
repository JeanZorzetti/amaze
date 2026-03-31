import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Motor Sirocco HideVENT — Tecnologia de Inflagem Exclusiva Amaze",
  description:
    "O motor 100% embutido que elimina mangueiras externas. 330w, inflagem em 2 minutos, à prova d'água. A inovação de inflagem que nenhum concorrente possui.",
  alternates: { canonical: "https://amazeballoons.com/tecnologia/sirocco-hidevent" },
};

const specs = [
  { label: "Potência", value: "330w" },
  { label: "Voltagem", value: "110v / 220v" },
  { label: "Tempo de inflagem", value: "~2 minutos" },
  { label: "Proteção", value: "À prova d'água" },
  { label: "Ruído", value: "Operação silenciosa" },
  { label: "Instalação", value: "100% embutido" },
];

const anatomy = [
  {
    title: "Carcaça Plástica de Alta Resistência",
    body: "Protege contra umidade, impactos e variações de temperatura. Permite instalação em qualquer orientação sem comprometer a integridade do motor ou do inflável.",
  },
  {
    title: "Sistema de Fluxo Contínuo",
    body: "Permanece ligado full-time durante todo o evento. Compensa micro-vazamentos e pressões externas instantaneamente — a estrutura nunca perde rigidez, mesmo sob vento e uso intenso.",
  },
  {
    title: "Integração Estrutural Total",
    body: "Instalado antes da última costura do inflável. Faz parte da estrutura, não um acessório externo. Remove todos os pontos de falha externos e garante acabamento visual impecável.",
  },
];

const compare = [
  {
    spec: "Visibilidade",
    market: "Mangueiras aparentes comprometem estética",
    amaze: "Motor invisível, acabamento limpo",
  },
  {
    spec: "Segurança",
    market: "Cabo exposto = risco de tropeço e acidentes",
    amaze: "Sem cabos externos, sem riscos",
  },
  {
    spec: "Manutenção",
    market: "Mangueira pode desconectar durante evento",
    amaze: "Sistema integrado, sem pontos de desconexão",
  },
  {
    spec: "Velocidade",
    market: "Inflagem manual, processo lento",
    amaze: "~2 minutos para arenas inteiras",
  },
  {
    spec: "Ruído",
    market: "Motor externo gera ruído significativo",
    amaze: "Operação silenciosa",
  },
  {
    spec: "Resistência a água",
    market: "Motor desprotegido em eventos externos",
    amaze: "Certificação à prova d'água",
  },
];

const metrics = [
  { value: "+35%", label: "sell-out no período" },
  { value: "50", label: "PDVs simultâneos" },
  { value: "3 dias", label: "para amortizar o custo" },
];

export default function SiroccoHideventPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "https://amazeballoons.com" },
          { name: "Tecnologia", url: "https://amazeballoons.com/tecnologia" },
          { name: "Motor Sirocco HideVENT", url: "https://amazeballoons.com/tecnologia/sirocco-hidevent" },
        ]}
      />
      <Header />
      <main className="flex-1 pt-24">

        {/* ── HERO ── */}
        <section className="py-24 px-4 lg:px-8 bg-on-surface relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary opacity-10 blur-[120px] translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-orange opacity-5 blur-[100px] -translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <p className="section-label text-orange mb-4">Exclusivo Amaze</p>
            <h1
              className="text-4xl lg:text-6xl font-black text-inverse-on-surface leading-tight uppercase mb-4"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              MOTOR SIROCCO
              <br />
              <span className="text-orange">HIDEVENT</span>
            </h1>
            <p className="text-xl font-bold text-inverse-on-surface/80 mb-6 uppercase tracking-wide">
              100% embutido. Zero mangueiras. Zero risco.
            </p>
            <p className="text-base text-inverse-on-surface/60 max-w-2xl leading-relaxed mb-10">
              A maioria dos infláveis do mercado usa motoventiladores externos conectados por mangueiras visíveis.
              A Amaze tomou uma decisão diferente: o Sirocco HideVENT é integrado estruturalmente ao inflável —
              invisível, seguro e implacável.
            </p>
            <div className="flex flex-wrap gap-3">
              {["330w de potência", "Inflagem ~2 min", "À prova d'água", "100% embutido"].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center h-9 px-5 rounded-full bg-white/10 border border-white/20 text-inverse-on-surface text-xs font-bold uppercase tracking-wide"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── ANATOMIA DO MOTOR ── */}
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="section-label text-orange mb-3">Como Funciona</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                A ENGENHARIA POR TRÁS DO MOTOR
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {anatomy.map((item) => (
                <div key={item.title} className="bg-surface-container-low border border-border rounded-2xl p-8">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <div className="size-3 rounded-full bg-primary" />
                  </div>
                  <h3
                    className="text-lg font-black text-text uppercase mb-3"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARATIVO ── */}
        <section className="py-24 px-4 lg:px-8 bg-surface-container-low">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <p className="section-label text-orange mb-3">O Contraste</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                MANGUEIRA EXTERNA VS. HIDEVENT
              </h2>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border">
              {/* Header */}
              <div className="grid grid-cols-3 bg-on-surface text-inverse-on-surface text-xs font-black uppercase tracking-widest">
                <div className="col-span-1 p-4">Critério</div>
                <div className="p-4 text-center text-inverse-on-surface/50">Mangueira Externa (Mercado)</div>
                <div className="p-4 text-center text-orange">Sirocco HideVENT (Amaze)</div>
              </div>
              {compare.map((row, i) => (
                <div
                  key={row.spec}
                  className={`grid grid-cols-3 text-sm border-t border-border ${i % 2 === 0 ? "bg-white" : "bg-surface-container-low"}`}
                >
                  <div className="col-span-1 p-4 font-bold text-text">{row.spec}</div>
                  <div className="p-4 text-muted text-xs leading-relaxed">{row.market}</div>
                  <div className="p-4 text-primary text-xs font-semibold leading-relaxed">{row.amaze}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASO REAL ── */}
        <section className="py-24 px-4 lg:px-8 bg-on-surface relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary opacity-8 blur-[140px]" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="section-label text-orange mb-3">Case de Sucesso</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-inverse-on-surface uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                A LATA MONUMENTAL
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-inverse-on-surface/70 leading-relaxed mb-6">
                  Uma marca global de refrigerantes precisava de visibilidade em 50 pontos de venda simultâneos
                  em um único final de semana. A logística parecia impossível — como garantir montadores
                  especializados em 50 locais ao mesmo tempo?
                </p>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <p className="text-orange text-xs font-black uppercase tracking-widest mb-3">A Solução Amaze</p>
                  <p className="text-inverse-on-surface/80 text-sm leading-relaxed">
                    Réplicas de 4 metros com Sirocco HideVENT. A inflagem em 2 minutos permitiu que a própria
                    equipe de promotores instalasse as estruturas sem treinamento especializado — eliminando
                    completamente o custo de equipes técnicas externas.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {metrics.map((m) => (
                  <div key={m.label} className="bg-orange/10 border border-orange/20 rounded-2xl p-6 text-center">
                    <p
                      className="text-3xl font-black text-orange mb-2"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {m.value}
                    </p>
                    <p className="text-inverse-on-surface/60 text-xs leading-tight">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SPECS TÉCNICAS ── */}
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="section-label text-orange mb-3">Especificações</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                FICHA TÉCNICA
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {specs.map((s) => (
                <div key={s.label} className="bg-surface-container-low border border-border rounded-2xl p-6">
                  <p className="text-[0.6rem] font-black uppercase tracking-widest text-muted mb-2">{s.label}</p>
                  <p
                    className="text-xl font-black text-text"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {s.value}
                  </p>
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
            <h2
              className="text-4xl lg:text-5xl font-black leading-tight uppercase mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              SOLICITE UM PROJETO
              <br />
              COM SIROCCO HIDEVENT
            </h2>
            <p className="text-white/70 mb-10">
              Cada orçamento Amaze vem com justificativa técnica completa — motor, material, ancoragem e prazo documentados por escrito.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/orcamento"
                className="btn-hover-inflate inline-flex items-center gap-3 h-14 px-10 bg-orange text-white rounded-full font-black text-base uppercase tracking-wide shadow-xl"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                SOLICITAR ORÇAMENTO GRÁTIS →
              </Link>
              <Link
                href="/tecnologia"
                className="text-sm font-bold text-white/60 hover:text-white transition-colors"
              >
                ← Ver toda a tecnologia
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
