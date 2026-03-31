import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { BreadcrumbSchema, FAQSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Experiência em Balonismo — Aeromarketing & Eventos com Balões",
  description:
    "Balões de ar quente gigantes para ativações de marca, campanhas de aeromarketing, eventos esportivos e experiências aéreas. Mais de 40 anos de expertise em balonismo em todo o continente americano.",
  alternates: { canonical: "https://amazeballoons.com/balonismo" },
};

const faqs = [
  {
    question: "O que é aeromarketing?",
    answer:
      "Aeromarketing é o uso de balões de ar quente com marca como mídia publicitária de alta visibilidade. Um balão gigante sobrevoando uma cidade gera cobertura de mídia espontânea, compartilhamentos nas redes sociais e lembrança de marca que nenhum outdoor consegue igualar.",
  },
  {
    question: "Em quais eventos os balões de ar quente são utilizados?",
    answer:
      "Balões de ar quente são ideais para eventos esportivos (festivais de balonismo, maratonas, corridas ao ar livre), ativações de marca, lançamentos imobiliários, eventos corporativos, festivais de música e campanhas de fotografia aérea.",
  },
  {
    question: "O balão pode ser personalizado com a nossa marca?",
    answer:
      "Com certeza. Cada balão é totalmente personalizado com as cores, logotipo e imagens da sua marca por meio de impressão por sublimação UV resistente em toda a superfície do envelope.",
  },
  {
    question: "Vocês cuidam das licenças de voo e da logística?",
    answer:
      "Sim. Gerenciamos todas as certificações aeronáuticas, licenças de voo e logística em conformidade com os requisitos da ANAC (Brasil) e da FAA (EUA). Nossos pilotos experientes cuidam de cada detalhe operacional.",
  },
  {
    question: "Qual é a duração mínima de uma campanha?",
    answer:
      "A maioria das campanhas de aeromarketing tem duração de 1 a 3 meses para máxima exposição da marca. Voos para evento único (corridas, festivais) também estão disponíveis.",
  },
];

const modalities = [
  {
    title: "Balonismo Promocional",
    subtitle: "Campanhas de Aeromarketing",
    description:
      "Um balão de ar quente com a sua marca sobrevoando seu mercado-alvo é um formato publicitário premium e impossível de ignorar. Gerando 10× mais atenção do que a mídia exterior tradicional, as campanhas de aeromarketing constroem reconhecimento de marca em escala urbana.",
    features: [
      "Personalização total com marca em todo o envelope",
      "Rotas de voo programadas sobre bairros estratégicos",
      "Geração de conteúdo para redes sociais e cobertura de imprensa",
      "Duração de campanha de 1 a 12 meses",
      "Pilotos e aeronaves certificados pela FAA e ANAC",
    ],
    icon: "📣",
    accent: "bg-primary text-on-primary",
  },
  {
    title: "Balonismo Esportivo",
    subtitle: "Eventos & Competições",
    description:
      "Festivais de balonismo, voos competitivos e exibições em corridas. Apoiamos tanto a participação quanto a experiência do público — de festivais completos de balonismo a voos de demonstração em eventos únicos em maratonas e triatlos.",
    features: [
      "Organização e coordenação de festivais de balonismo",
      "Demonstrações aéreas em corridas e maratonas",
      "Passeios de balão cativo para convidados",
      "Eventos night glow (balão iluminado ao entardecer)",
      "Pacotes de fotografia e videografia aérea",
    ],
    icon: "🏅",
    accent: "bg-secondary text-on-secondary",
  },
  {
    title: "Formas Especiais",
    subtitle: "Balões Gigantes com Personagens",
    description:
      "Além do formato clássico de envelope — fabricamos balões gigantes de Forma Especial em qualquer forma 3D: animais, produtos, personagens, logotipos, edificações. A ativação definitiva de parar multidões em festivais e eventos de marca.",
    features: [
      "Formas 3D personalizadas em qualquer formato ou personagem",
      "Réplicas gigantes de produtos como balões de ar quente",
      "Mascotes de marca em escala de festival",
      "Configurações de voo cativo ou livre",
      "Montagem, operação e transporte incluídos",
    ],
    icon: "⭐",
    accent: "bg-orange text-white",
  },
];

const arrowIcon = (
  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function BalonismoPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início",     url: "https://amazeballoons.com" },
          { name: "Balonismo", url: "https://amazeballoons.com/balonismo" },
        ]}
      />
      <FAQSchema items={faqs} />
      <Header />

      <main className="flex-1 pt-24">

        {/* ── Hero ── */}
        <section className="relative py-28 px-4 lg:px-8 bg-gradient-to-br from-purple-dark via-primary to-primary-container text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-secondary-container opacity-20 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary-container opacity-25 blur-[80px]" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <p className="section-label text-orange mb-5">Balonismo</p>
            <h1
              className="text-4xl lg:text-6xl xl:text-7xl font-black leading-tight uppercase mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              SUA MARCA.
              <br />
              <span className="text-orange">NO CÉU.</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
              Balões de ar quente gigantes para campanhas de aeromarketing, eventos
              esportivos e ativações aéreas de marca. Mais de 40 anos de expertise
              em balonismo — dos primeiros fabricantes do Brasil até as Américas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/orcamento" variant="cta" size="lg" icon={arrowIcon}>
                Solicitar Orçamento para Balão
              </Button>
              <a
                href="#modalities"
                className="btn-hover-inflate flex items-center gap-2 h-14 px-8 border-2 border-white/30 text-white rounded-full font-bold text-base hover:bg-white/10 transition-colors"
              >
                Explorar Modalidades
              </a>
            </div>
          </div>
        </section>

        {/* ── Why Balloons ── */}
        <section className="py-20 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label text-orange mb-4">Por Que Balões de Ar Quente?</p>
              <h2
                className="text-3xl lg:text-4xl font-black text-text leading-tight uppercase mb-6"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                O FORMATO PUBLICITÁRIO
                <br />MAIS IMPOSSÍVEL DE IGNORAR
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                Um balão gigante com marca visível a quilômetros de distância cria
                instantaneamente um ponto de referência. Ao contrário dos anúncios
                digitais que podem ser ignorados, um balão de ar quente comanda a
                atenção de todos em sua rota de voo —
                gerando conteúdo orgânico nas redes sociais, cobertura da imprensa e
                lembrança de marca que perdurem muito após o voo.
              </p>
              <div className="space-y-4">
                {[
                  { stat: "10×",   label: "Mais atenção do que a mídia exterior tradicional" },
                  { stat: "100%",  label: "Personalização de marca em todo o envelope" },
                  { stat: "40+",   label: "Anos de expertise em balonismo" },
                  { stat: "ANAC",  label: "& FAA — pilotos e aeronaves certificados" },
                ].map(({ stat, label }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-16 shrink-0 text-2xl font-black text-primary" style={{ fontFamily: "var(--font-headline)" }}>
                      {stat}
                    </div>
                    <p className="text-sm text-muted">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Visibilidade da Marca",   value: "Toda a Cidade",  cls: "bg-primary text-on-primary" },
                { label: "Compartilhamentos",        value: "Viral",          cls: "bg-orange text-white" },
                { label: "Duração do Voo",           value: "1–3 h",          cls: "bg-primary-container text-on-primary-container" },
                { label: "Altura do Envelope",       value: "Até 25m",        cls: "bg-on-surface text-inverse-on-surface" },
              ].map(({ label, value, cls }) => (
                <div key={label} className={`${cls} rounded-2xl p-8 aspect-square flex flex-col justify-end`}>
                  <div className="text-3xl font-black" style={{ fontFamily: "var(--font-headline)" }}>{value}</div>
                  <div className="text-[0.65rem] font-bold uppercase tracking-widest opacity-70 mt-2">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Modalities ── */}
        <section id="modalities" className="py-20 px-4 lg:px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="section-label text-orange mb-3">Nossas Modalidades</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text leading-tight uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                TRÊS FORMAS DE VOAR COM SUA MARCA
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {modalities.map((m) => (
                <div key={m.title} className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm flex flex-col">
                  <div className={`${m.accent} p-8`}>
                    <div className="text-4xl mb-4">{m.icon}</div>
                    <p className="text-[0.65rem] font-black uppercase tracking-widest opacity-70 mb-1">{m.subtitle}</p>
                    <h3 className="text-2xl font-black uppercase" style={{ fontFamily: "var(--font-headline)" }}>
                      {m.title}
                    </h3>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <p className="text-muted text-sm leading-relaxed mb-6">{m.description}</p>
                    <ul className="space-y-2.5 mt-auto">
                      {m.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-text">
                          <span className="text-green font-black mt-0.5 shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="py-20 px-4 lg:px-8 bg-on-surface">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="section-label text-orange mb-3">Como Funciona</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-inverse-on-surface leading-tight uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                DO BRIEFING AO VOO
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { num: "01", title: "BRIEFING & ORÇAMENTO",  desc: "Compartilhe os objetivos da sua campanha e propomos a modalidade, o plano de voo e o orçamento ideal." },
                { num: "02", title: "DESIGN & FABRICAÇÃO",   desc: "Nossa equipe projeta e fabrica seu envelope personalizado com identidade visual em cores completas." },
                { num: "03", title: "CERTIFICAÇÃO & PLANEJ.", desc: "Cuidamos de todas as licenças de voo, certificações ANAC/FAA e planejamento de rotas." },
                { num: "04", title: "LANÇAMENTO & RELATÓRIO", desc: "Executamos a campanha e entregamos um relatório pós-voo com dados de alcance e mídia." },
              ].map((step) => (
                <div key={step.num} className="relative bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div
                    className="text-[4rem] font-black leading-none text-white/5 select-none absolute top-2 right-3"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {step.num}
                  </div>
                  <div className="text-orange font-black text-xs uppercase tracking-widest mb-3">{step.num}</div>
                  <h3 className="font-black text-inverse-on-surface text-lg uppercase mb-2" style={{ fontFamily: "var(--font-headline)" }}>
                    {step.title}
                  </h3>
                  <p className="text-inverse-on-surface/55 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 px-4 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl font-black text-text mb-10 uppercase"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Perguntas Frequentes
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-border pb-6">
                  <h3 className="font-black text-text mb-2" style={{ fontFamily: "var(--font-headline)" }}>
                    {faq.question}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-4 lg:px-8 bg-purple text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-secondary opacity-20 blur-[100px]" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="section-label text-orange mb-4 text-center">Pronto para Voar?</p>
            <h2
              className="text-3xl lg:text-5xl font-black leading-tight uppercase mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              VAMOS COLOCAR SUA MARCA
              <br />NO CÉU
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Receba uma proposta gratuita para sua campanha de aeromarketing ou evento com balão em até 24 horas.
            </p>
            <Button href="/orcamento" variant="cta" size="lg" icon={arrowIcon}>
              Solicitar Orçamento para Balão
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
