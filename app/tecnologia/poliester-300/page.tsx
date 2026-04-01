import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Poliéster Emborrachado 300g/m² — Material Base Amaze Balloons",
  description:
    "Fios de alta tenacidade, camada de borracha anti-torção e impressão fotográfica. O material que garante 3 anos de garantia e vida útil de 5 a 10 anos em uso externo.",
  alternates: { canonical: "https://amazeballoons.com/tecnologia/poliester-300" },
};

const layers = [
  {
    num: "01",
    title: "Fios de Poliéster de Alta Tenacidade",
    body: "Estrutura base em urdume com fios de alta tenacidade. Resistência à tração superior ao poliéster convencional. Mantém a forma dimensional mesmo sob pressão contínua e variações climáticas extremas.",
  },
  {
    num: "02",
    title: "Camada de Borracha Linear Anti-Torção",
    body: "Aplicada entre os fios, a camada de borracha impede a torção das fibras sob tensão. É ela que garante que o inflável não deforme com o tempo, mesmo em uso frequente e exposição solar prolongada.",
  },
  {
    num: "03",
    title: "Acabamento Acetinado",
    body: "O acabamento acetinado não é apenas estético. Ele cria uma superfície receptiva de alta fidelidade para tintas UV, permitindo impressão em resolução fotográfica — transformando o inflável em uma peça de comunicação visual de altíssima qualidade.",
  },
];

const lifeTimeline = [
  {
    period: "Ano 1",
    title: "Garantia total de fabricação",
    desc: "Cobertura completa de defeitos estruturais, de material e de acabamento, sem exclusões.",
  },
  {
    period: "Ano 3",
    title: "Fim da garantia, início do bônus",
    desc: "A estrutura molecular permanece íntegra. Qualquer uso a partir daqui é retorno puro sobre o investimento.",
  },
  {
    period: "Ano 5–10",
    title: "Vida útil típica em uso intenso",
    desc: "Infláveis Amaze seguem operacionais e com aparência profissional em uso regular de eventos externos.",
  },
];

const maintenance = [
  {
    icon: "🧼",
    title: "Limpeza",
    desc: "Água e sabão neutro com esponja macia. Proibido: produtos abrasivos, solventes, alvejantes e escovas de cerdas duras.",
  },
  {
    icon: "💨",
    title: "Secagem",
    desc: "Completamente seco antes de guardar. Umidade residual é o principal vetor de desenvolvimento de fungos no tecido.",
  },
  {
    icon: "📦",
    title: "Armazenamento",
    desc: "Bolsa de transporte Amaze, em local seco, limpo, ventilado e protegido da luz solar direta.",
  },
  {
    icon: "🔧",
    title: "Reparos",
    desc: "Kit Amaze de reparo rápido para pequenos furos. Danos estruturais: exclusivamente pela Amaze para não invalidar a garantia.",
  },
  {
    icon: "🔍",
    title: "Inspeções",
    desc: "A cada 6 meses ou após cada uso intenso. Verificar costuras, pontos de ancoragem e integridade da impressão.",
  },
];

const materialCards = [
  {
    label: "Poliéster Estrutural",
    title: "Poliéster Estrutural",
    desc: "Fios de alta tenacidade em urdume. Base que mantém forma dimensional.",
  },
  {
    label: "Borracha Linear Anti-Torção",
    title: "Borracha Linear Anti-Torção",
    desc: "Camada que impede torção das fibras. Garante durabilidade em uso contínuo.",
  },
  {
    label: "Impressão UV Fotográfica",
    title: "Impressão UV Fotográfica",
    desc: "Acabamento acetinado de alta fidelidade. Cores fiéis em resolução fotográfica.",
  },
  {
    label: "Revestimento Antifungo",
    title: "Revestimento Antifungo",
    desc: "Proteção biológica de série. Essencial para infláveis expostos a umidade.",
  },
];

export default function Poliester300Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "https://amazeballoons.com" },
          { name: "Tecnologia", url: "https://amazeballoons.com/tecnologia" },
          { name: "Poliéster 300g/m²", url: "https://amazeballoons.com/tecnologia/poliester-300" },
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
            <p className="section-label text-orange mb-4">Material Base</p>
            <h1
              className="text-4xl lg:text-6xl font-black text-inverse-on-surface leading-tight uppercase mb-4"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              POLIÉSTER EMBORRACHADO
              <br />
              <span className="text-orange">300g/m²</span>
            </h1>
            <p className="text-xl font-bold text-inverse-on-surface/80 mb-6 uppercase tracking-wide">
              A obra-prima têxtil que sustenta tudo.
            </p>
            <p className="text-base text-inverse-on-surface/60 max-w-2xl leading-relaxed mb-10">
              Quando um concorrente diz "poliéster de alta resistência", você não sabe o que está comprando.
              Quando a Amaze diz Poliéster Emborrachado 300g/m², você sabe exatamente o que está contratando —
              e por que é superior.
            </p>
            <div className="flex flex-wrap gap-3">
              {["300g/m² de gramatura", "Tratamento UV", "Antifungo", "Impressão fotográfica"].map((pill) => (
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

        {/* ── OS MATERIAIS EM DETALHE ── */}
        <section className="py-24 px-4 lg:px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="section-label text-orange mb-3">Composição</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                OS MATERIAIS EM DETALHE
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {materialCards.map((card) => (
                <div key={card.label} className="bg-white border border-border rounded-xl overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                  <div className="w-full aspect-[4/3] bg-surface-container-low border-b-2 border-dashed border-border flex flex-col items-center justify-center gap-3 text-muted">
                    <svg className="size-10 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-50">Foto do produto</span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-black uppercase tracking-widest text-orange mb-2">{card.label}</p>
                    <h3
                      className="text-base font-black text-text uppercase mb-2"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPOSIÇÃO ── */}
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="section-label text-orange mb-3">Anatomia do Material</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                3 CAMADAS. UMA PERFORMANCE.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {layers.map((layer) => (
                <div key={layer.num} className="relative bg-surface-container-low border border-border rounded-xl overflow-hidden">
                  <div className="w-full aspect-[16/9] bg-surface-container-low border-b-2 border-dashed border-border flex flex-col items-center justify-center gap-3 text-muted">
                    <svg className="size-10 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-50">Foto do produto</span>
                  </div>
                  <div className="p-8">
                    <div
                      className="absolute top-3 right-5 text-[6rem] font-black leading-none text-primary/5 select-none"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {layer.num}
                    </div>
                    <p
                      className="text-5xl font-black text-primary/20 mb-4 relative z-10"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {layer.num}
                    </p>
                    <h3
                      className="text-lg font-black text-text uppercase mb-3 relative z-10"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {layer.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed relative z-10">{layer.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROTEÇÕES ── */}
        <section className="py-24 px-4 lg:px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="section-label text-orange mb-3">Proteção de Série</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                TRATAMENTO UV E ANTIFUNGO
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* UV */}
              <div className="bg-white border border-border rounded-xl p-8">
                <div className="size-12 rounded-lg bg-orange/10 flex items-center justify-center text-2xl mb-6">
                  ☀️
                </div>
                <h3
                  className="text-xl font-black text-text uppercase mb-4"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  Tratamento UV de Alta Tenacidade
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  A integridade molecular do tecido não se degrada com o sol. A maioria dos infláveis perde cor
                  e resistência após 1–2 temporadas de exposição solar. O tratamento UV Amaze é de alta tenacidade
                  — aplicado nas fibras, não apenas na superfície — garantindo que a estrutura molecular permaneça
                  íntegra. É por isso que a RVB exclui "exposição solar prolongada" da garantia e a Amaze não
                  precisa.
                </p>
              </div>
              {/* Antifungo */}
              <div className="bg-white border border-border rounded-xl p-8">
                <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-6">
                  🛡️
                </div>
                <h3
                  className="text-xl font-black text-text uppercase mb-4"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  Revestimento Antifungo
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Eventos acontecem em todos os climas. Chuva, umidade, condensação noturna — são realidades de
                  uso externo. O revestimento antifungo impede o desenvolvimento de mofo e fungos que degradam o
                  tecido e comprometem a higiene. Essencial para infláveis que são dobrados e armazenados após uso
                  em condições úmidas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── VIDA ÚTIL ── */}
        <section className="py-24 px-4 lg:px-8 bg-on-surface relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary opacity-10 blur-[100px] translate-x-1/3 -translate-y-1/2" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="section-label text-orange mb-3">Longevidade</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-inverse-on-surface uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                5 A 10 ANOS DE VIDA ÚTIL
              </h2>
            </div>
            <p className="text-inverse-on-surface/70 max-w-2xl leading-relaxed mb-4">
              Um inflável Amaze deve ser tratado como CAPEX — um ativo de longa duração, não uma despesa de
              evento. O custo por ativação de um inflável Amaze é drasticamente menor que qualquer alternativa.
            </p>
            <p className="text-inverse-on-surface/70 max-w-2xl leading-relaxed mb-14">
              Um inflável entregue em 2024 com o Poliéster 300g/m² ainda estará em operação em 2034 — gerando
              valor a cada evento.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {lifeTimeline.map((item, i) => (
                <div key={item.period} className="relative bg-white/5 border border-white/10 rounded-xl p-8">
                  {i < lifeTimeline.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-px bg-white/20" />
                  )}
                  <p
                    className="text-orange font-black text-sm uppercase tracking-widest mb-3"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {item.period}
                  </p>
                  <h3
                    className="text-base font-black text-inverse-on-surface uppercase mb-3"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-inverse-on-surface/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MANUTENÇÃO ── */}
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="section-label text-orange mb-3">Para Durar Décadas</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                PROTOCOLO DE CONSERVAÇÃO
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {maintenance.map((item) => (
                <div key={item.title} className="bg-surface-container-low border border-border rounded-xl p-7">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3
                    className="text-base font-black text-text uppercase mb-2"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESSO DE PRODUÇÃO (VÍDEO) ── */}
        <section className="py-24 px-4 lg:px-8 bg-on-surface relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary opacity-10 blur-[120px] translate-x-1/3 -translate-y-1/3" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="section-label text-orange mb-3">Fabricação</p>
            <h2
              className="text-3xl lg:text-5xl font-black text-inverse-on-surface uppercase mb-10"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              PROCESSO DE PRODUÇÃO
            </h2>
            <div className="w-full aspect-video bg-on-surface border-2 border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center gap-4 text-inverse-on-surface/40">
              <svg className="size-14 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>
              <span className="text-sm font-bold uppercase tracking-widest opacity-50">Vídeo do processo — em breve</span>
            </div>
            <p className="text-inverse-on-surface/50 text-sm mt-6">
              Em breve: vídeo do processo de fabricação e aplicação dos materiais
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
              UM MATERIAL SUPERIOR
              <br />
              PARA UMA MARCA SUPERIOR
            </h2>
            <p className="text-white/70 mb-10">
              O Poliéster 300g/m² é o ponto de partida de cada projeto Amaze. Solicite um orçamento com especificação completa de materiais.
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
