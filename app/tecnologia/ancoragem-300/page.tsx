import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Ancoragem 300 kg/f — Sistema de Segurança Estrutural Amaze",
  description:
    "Alças com meia argola de 38mm, arame soldado 4mm, 6 camadas de reforço. Carga de ruptura de até 300 kg/f. O sistema de ancoragem que nenhum concorrente documenta.",
  alternates: { canonical: "https://amazeballoons.com/tecnologia/ancoragem-300" },
};

const components = [
  {
    num: "01",
    title: "Meia Argola de 38mm",
    body: "Aço galvanizado de alta resistência. Dimensão que garante distribuição adequada da carga de tensão em todos os ângulos. Não cede sob rajadas de vento.",
  },
  {
    num: "02",
    title: "Arame Soldado 4mm",
    body: "Conexão entre argola e lona. Soldagem garante que não há pontos de separação sob tensão dinâmica — especialmente crítica em condições de vento variável.",
  },
  {
    num: "03",
    title: "Base em Lona KP1000",
    body: "Área de força de 15×15cm. A lona KP1000 é o substrato que distribui a carga de tração para a superfície do inflável, evitando rasgos por concentração de força.",
  },
  {
    num: "04",
    title: "Tripla Costura Dupla (6 Camadas)",
    body: "Fita de poliéster com técnica de viés de reforço e dobras de tecido. Cria 6 camadas de proteção em cada ponto crítico. Padrão de costura: 6–8 pontos por polegada com fio de poliamida 40.",
  },
];

const steps = [
  {
    num: "01",
    title: "Inspeção Pré-Instalação",
    desc: "Inspeção visual completa do local de instalação. Verificar piso, obstáculos e condições climáticas. Adicionar lona de proteção extra quando necessário.",
    critical: false,
  },
  {
    num: "02",
    title: "Posicionamento Estratégico",
    desc: "Motoventilador posicionado com acesso livre à tomada de energia. Cabos de alimentação em ângulo ideal de 45° para evitar tensão desnecessária.",
    critical: false,
  },
  {
    num: "03",
    title: "Ancoragem Primária (Base)",
    desc: "Estacas de aço galvanizado mínimo 30cm OU pesos mínimo 50kg por ponto de ancoragem. NUNCA inflar sem todos os pontos de base completamente seguros.",
    critical: true,
  },
  {
    num: "04",
    title: "Conexão Elétrica Segura",
    desc: "Fonte de energia compatível 110v/220v conforme especificação do motor. Extensões com bitola mínima de 2,5mm para garantir amperagem adequada.",
    critical: false,
  },
  {
    num: "05",
    title: "Inflagem Controlada",
    desc: "Acompanhar o processo de inflagem integralmente. Garantir elevação uniforme sem torções na estrutura. Não deixar o inflável sem supervisão nesta etapa.",
    critical: false,
  },
  {
    num: "06",
    title: "Ancoragem Secundária (Superior)",
    desc: "Cabos superiores fixados em ângulo de 45° em relação ao solo. Este ângulo é matematicamente ótimo para resistência a forças laterais — crucial para segurança em ventos.",
    critical: true,
  },
  {
    num: "07",
    title: "Inspeção Pós-Instalação",
    desc: "Verificar todos os pontos de ancoragem, conexões elétricas e integridade estrutural. Liberação formal para uso somente após inspeção completa aprovada.",
    critical: false,
  },
];

const specs = [
  { label: "Carga de ruptura", value: "300 kg/f" },
  { label: "Argola", value: "Meia argola 38mm aço galvanizado" },
  { label: "Arame", value: "Soldado 4mm" },
  { label: "Área de força", value: "15×15cm lona KP1000" },
  { label: "Camadas", value: "6 (tripla costura dupla)" },
  { label: "Fio de costura", value: "Poliamida 40, 6–8 pts/pol" },
];

export default function Ancoragem300Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "https://amazeballoons.com" },
          { name: "Tecnologia", url: "https://amazeballoons.com/tecnologia" },
          { name: "Ancoragem 300 kg/f", url: "https://amazeballoons.com/tecnologia/ancoragem-300" },
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
            <p className="section-label text-orange mb-4">Segurança Estrutural</p>
            <h1
              className="text-4xl lg:text-6xl font-black text-inverse-on-surface leading-tight uppercase mb-4"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              SISTEMA DE ANCORAGEM
              <br />
              <span className="text-orange">300 kg/f</span>
            </h1>
            <p className="text-xl font-bold text-inverse-on-surface/80 mb-6 uppercase tracking-wide">
              A espinha dorsal da segurança.
            </p>
            <p className="text-base text-inverse-on-surface/60 max-w-2xl leading-relaxed mb-10">
              A ancoragem é o componente mais crítico de qualquer inflável em ambiente externo. É o que separa
              um evento sem incidentes de um desastre de marca. A maioria dos fabricantes não documenta suas
              especificações de ancoragem porque não há muito a documentar. A Amaze documenta tudo.
            </p>
            <div className="flex flex-wrap gap-3">
              {["300 kg/f de ruptura", "Argola 38mm", "Arame soldado 4mm", "6 camadas de reforço"].map((pill) => (
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

        {/* ── ANCORAGEM DOCUMENTADA ── */}
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg" alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <p className="section-label text-orange mb-3">Especificação Aberta</p>
                <h2
                  className="text-3xl lg:text-5xl font-black text-text uppercase mb-6"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  ANCORAGEM DOCUMENTADA
                </h2>
                <p className="text-base text-muted leading-relaxed">
                  Cada ponto de fixação de um inflável Amaze é dimensionado para suportar 300 kg/f de carga de
                  ruptura. Publicamos os componentes, os materiais e as especificações — nenhum concorrente faz
                  isso porque nenhum concorrente tem esta ancoragem.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ANATOMIA DO SISTEMA ── */}
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="section-label text-orange mb-3">Componentes</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                CADA PONTO. CADA CAMADA.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {components.map((comp) => (
                <div key={comp.num} className="relative bg-surface-container-low border border-border rounded-xl overflow-hidden">
                  <div className="w-full aspect-square overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg" alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-8">
                    <div
                      className="absolute top-2 right-4 text-[5rem] font-black leading-none text-primary/5 select-none"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {comp.num}
                    </div>
                    <p
                      className="text-4xl font-black text-primary/20 mb-4 relative z-10"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {comp.num}
                    </p>
                    <h3
                      className="text-base font-black text-text uppercase mb-3 relative z-10"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {comp.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed relative z-10">{comp.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROTOCOLO DE INSTALAÇÃO ── */}
        <section className="py-24 px-4 lg:px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="section-label text-orange mb-3">Guia Oficial</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                7 PASSOS PARA INSTALAÇÃO SEGURA
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className={`relative rounded-xl p-7 overflow-hidden ${
                    step.critical
                      ? "bg-white border-2 border-orange"
                      : "bg-white border border-border"
                  }`}
                >
                  {step.critical && (
                    <span className="absolute top-4 right-4 text-[0.55rem] font-black uppercase tracking-widest text-orange bg-orange/10 px-2 py-1 rounded-full">
                      Crítico
                    </span>
                  )}
                  <div
                    className="absolute bottom-2 right-4 text-[5rem] font-black leading-none text-primary/5 select-none"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {step.num}
                  </div>
                  <p
                    className={`text-3xl font-black mb-3 relative z-10 ${step.critical ? "text-orange/30" : "text-primary/20"}`}
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {step.num}
                  </p>
                  <h3
                    className="text-sm font-black text-text uppercase mb-3 relative z-10"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed relative z-10">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── POR QUE OS CONCORRENTES NÃO DOCUMENTAM ── */}
        <section className="py-24 px-4 lg:px-8 bg-on-surface relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary opacity-8 blur-[140px]" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="section-label text-orange mb-3">Transparência Total</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-inverse-on-surface uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                A PERGUNTA QUE VOCÊ DEVE FAZER
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-inverse-on-surface/70 leading-relaxed mb-6">
                  Ao avaliar qualquer fornecedor de infláveis, faça esta pergunta: "Qual é a carga de ruptura
                  dos seus sistemas de ancoragem?" Se a resposta for um número vago ou inexistente, você está
                  comprando sem saber o que está comprando.
                </p>
                <p className="text-inverse-on-surface/70 leading-relaxed mb-8">
                  A Amaze responde: 300 kg/f de carga de ruptura, documentada. Alças com meia argola de 38mm,
                  arame soldado 4mm, lona KP1000 com área de força de 15×15cm e 6 camadas de reforço. É a
                  diferença entre uma especificação e um argumento de vendas vazio.
                </p>
                {/* Blockquote */}
                <div className="relative bg-white/5 border border-white/10 rounded-xl p-8">
                  <div
                    className="absolute -top-4 left-6 text-[4rem] font-black leading-none text-orange/30 select-none"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    "
                  </div>
                  <p className="text-inverse-on-surface/90 text-base font-semibold leading-relaxed italic pt-4">
                    Nenhum concorrente publica estas especificações porque não as possui.
                  </p>
                </div>
              </div>
              {/* Garantia card */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="size-12 rounded-lg bg-orange/20 flex items-center justify-center text-2xl mb-6">
                  🛡️
                </div>
                <h3
                  className="text-xl font-black text-inverse-on-surface uppercase mb-4"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  Garantia de 3 Anos
                </h3>
                <p className="text-inverse-on-surface/70 text-sm leading-relaxed">
                  Nossa ancoragem é tão confiável que a garantia de 3 anos cobre defeitos estruturais sem
                  exclusões para vento ou chuva. Outros fabricantes excluem exatamente as condições que o
                  seu inflável vai enfrentar na realidade. Nós cobrimos o real porque confiamos no que
                  fabricamos. Essa é a prova de confiança.
                </p>
                <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[0.6rem] font-black uppercase tracking-widest text-inverse-on-surface/40 mb-1">Duração</p>
                    <p className="text-base font-black text-inverse-on-surface" style={{ fontFamily: "var(--font-headline)" }}>3 anos</p>
                  </div>
                  <div>
                    <p className="text-[0.6rem] font-black uppercase tracking-widest text-inverse-on-surface/40 mb-1">Exclusões</p>
                    <p className="text-base font-black text-orange" style={{ fontFamily: "var(--font-headline)" }}>Nenhuma</p>
                  </div>
                </div>
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
                <div key={s.label} className="bg-surface-container-low border border-border rounded-lg px-10 py-5">
                  <p className="text-[0.6rem] font-black uppercase tracking-widest text-muted mb-1.5">{s.label}</p>
                  <p
                    className="text-lg font-black text-text leading-tight"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROTOCOLO DE INSTALAÇÃO (VÍDEO) ── */}
        <section className="py-24 px-4 lg:px-8 bg-on-surface relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary opacity-10 blur-[120px] translate-x-1/3 -translate-y-1/3" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="section-label text-orange mb-3">Demonstração</p>
            <h2
              className="text-3xl lg:text-5xl font-black text-inverse-on-surface uppercase mb-10"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              PROTOCOLO DE INSTALAÇÃO
            </h2>
            <div className="w-full aspect-video bg-on-surface border-2 border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center gap-4 text-inverse-on-surface/40">
              <svg className="size-14 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>
              <span className="text-sm font-bold uppercase tracking-widest opacity-50">Vídeo do processo — em breve</span>
            </div>
            <p className="text-inverse-on-surface/50 text-sm mt-6">
              Em breve: vídeo do protocolo completo de instalação e ancoragem
            </p>
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
              SEGURANÇA QUE
              <br />
              VOCÊ PODE MEDIR
            </h2>
            <p className="text-white/70 mb-10">
              300 kg/f documentados. Garantia de 3 anos sem exclusões. Especificações que nenhum concorrente publica. Solicite um orçamento e receba a ficha técnica completa.
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
