import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Instruções de Uso — Montagem, Manutenção e Armazenamento de Infláveis | Amaze Balloons",
  description:
    "Guia completo de instruções para montagem, operação, manutenção e armazenamento dos infláveis Amaze Balloons. Maximize a vida útil e a performance do seu inflável.",
  alternates: { canonical: "https://amazeballoons.com/instrucoes" },
};

const steps = [
  {
    num: "01",
    phase: "Antes do Evento",
    title: "Inspeção e Preparação",
    icon: "🔍",
    color: "bg-primary/8 border-primary/20",
    iconColor: "bg-primary/10",
    items: [
      "Inspecione o tecido em busca de rasgos, costuras abertas ou danos visíveis",
      "Verifique o motor: cabo elétrico, proteção impermeável e filtro de ar limpo",
      "Confirme os pontos de ancoragem: argolas, arames e fitas de reforço intactos",
      "Teste o inflável por 10 minutos antes do evento em ambiente controlado",
      "Verifique a previsão do tempo — ventos acima de 60 km/h exigem remoção",
    ],
  },
  {
    num: "02",
    phase: "Montagem",
    title: "Inflagem e Fixação",
    icon: "⚡",
    color: "bg-orange/5 border-orange/20",
    iconColor: "bg-orange/10",
    items: [
      "Escolha uma superfície plana e limpa, livre de objetos pontiagudos",
      "Desenrole o inflável completamente antes de ligar o motor",
      "Conecte o motor e aguarde a inflagem completa (~2 minutos para arenas)",
      "Aplique os pontos de ancoragem em sequência: primeiro os principais, depois os secundários",
      "Nunca use um único ponto de ancoragem — mínimo de 4 pontos por estrutura",
      "Mantenha o motor ligado durante todo o uso (sistema de fluxo contínuo)",
    ],
  },
  {
    num: "03",
    phase: "Durante o Evento",
    title: "Operação e Monitoramento",
    icon: "👁️",
    color: "bg-green/5 border-green/20",
    iconColor: "bg-green/10",
    items: [
      "Monitore a pressão visual a cada 30 minutos em eventos longos",
      "Em caso de deflação parcial, verifique o filtro do motor (pode estar obstruído)",
      "Nunca permita que crianças escalem ou se pendurem na estrutura",
      "Mantenha uma distância de segurança de 1m em volta da estrutura",
      "Monitore a velocidade do vento — desligue e esvazie se ultrapassar 60 km/h",
    ],
  },
  {
    num: "04",
    phase: "Desmontagem",
    title: "Deflação e Dobramento",
    icon: "📦",
    color: "bg-primary/8 border-primary/20",
    iconColor: "bg-primary/10",
    items: [
      "Remova todos os pontos de ancoragem antes de desligar o motor",
      "Desligue o motor e abra as válvulas de saída de ar",
      "Aguarde a deflação completa — nunca force a dobra com ar ainda dentro",
      "Dobre no sentido das costuras para evitar estresse no material",
      "Guarde o motor separadamente na bolsa protetora fornecida",
      "Armazene o inflável na bolsa de transporte original, em local seco",
    ],
  },
];

const maintenance = [
  {
    title: "Limpeza",
    icon: "🧹",
    freq: "Após cada uso",
    desc: "Limpe com pano úmido e sabão neutro. Nunca use solventes, álcool ou produtos abrasivos. Seque completamente antes de armazenar.",
  },
  {
    title: "Filtro do Motor",
    icon: "⚙️",
    freq: "A cada 10 usos",
    desc: "Remova e limpe o filtro de ar do motor com jato de ar comprimido. Filtro obstruído reduz a pressão interna e aumenta o consumo de energia.",
  },
  {
    title: "Inspeção de Costuras",
    icon: "🪡",
    freq: "Mensal",
    desc: "Verifique os pontos de costura nas áreas de maior tração (ancoragem, bordas e junções). Pequenos reparos preventivos evitam danos maiores.",
  },
  {
    title: "Armazenamento",
    icon: "📦",
    freq: "A cada uso",
    desc: "Armazene em local seco, longe de luz solar direta e fontes de calor. Temperatura ideal: 10°C a 35°C. Umidade máxima: 70%.",
  },
  {
    title: "Proteção UV",
    icon: "☀️",
    freq: "Semestral",
    desc: "Aplique protetor UV têxtil spray nas áreas de impressão expostas ao sol de forma contínua. Prolonga a fidelidade das cores em até 40%.",
  },
  {
    title: "Cabos e Conexões",
    icon: "🔌",
    freq: "A cada 3 meses",
    desc: "Inspecione o cabo elétrico e as conexões do motor. Qualquer dano no isolamento exige substituição imediata antes do próximo uso.",
  },
];

const faq = [
  {
    q: "Posso usar o inflável sob chuva?",
    a: "Sim. O motor Sirocco HideVENT tem certificação à prova d'água. O tecido poliéster 300g/m² tem tratamento antifungo e repelência a água. Evite exposição prolongada a chuva forte com ventos acima de 60 km/h.",
  },
  {
    q: "O que fazer se o inflável perfurar durante um evento?",
    a: "O sistema de fluxo contínuo compensa micro-furos automaticamente. Para furos maiores, utilize o kit de reparo incluído: limpe a área, aplique o patch e aguarde 30 minutos antes de reinflação.",
  },
  {
    q: "Por quanto tempo posso deixar o inflável inflado continuamente?",
    a: "O motor é projetado para operação contínua de até 72 horas seguidas. Para eventos mais longos, recomendamos 1 hora de descanso a cada 24h de operação.",
  },
  {
    q: "Como transportar o inflável em voos internacionais?",
    a: "O inflável dobrado cabe em bagagem despachada padrão. Embale o motor separadamente em caixa protetora. Consulte nosso time de logística para projetos que envolvam transporte aéreo frequente.",
  },
  {
    q: "A garantia cobre danos por vento forte?",
    a: "Sim. Nossa garantia de 3 anos cobre defeitos estruturais sem exclusões para vento ou chuva — única no setor. Danos por uso inadequado (não seguir o protocolo de ancoragem) não são cobertos.",
  },
];

export default function InstrucoesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "https://amazeballoons.com" },
          { name: "Instruções de Uso", url: "https://amazeballoons.com/instrucoes" },
        ]}
      />
      <Header />
      <main className="flex-1 pt-24">

        {/* ── HERO ── */}
        <section className="py-24 px-4 lg:px-8 bg-on-surface relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary opacity-10 blur-[120px] translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-orange opacity-5 blur-[100px] -translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label text-orange mb-4">Manual Técnico</p>
              <h1
                className="text-4xl lg:text-6xl font-black text-inverse-on-surface leading-tight uppercase mb-6"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                INSTRUÇÕES
                <br />
                <span className="text-orange">DE USO</span>
              </h1>
              <p className="text-xl text-inverse-on-surface/60 leading-relaxed mb-8">
                Montagem correta, operação segura e manutenção preventiva —
                o guia completo para maximizar a performance e a vida útil do seu inflável Amaze.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Montagem", "Operação", "Manutenção", "Armazenamento", "FAQ"].map((pill) => (
                  <span
                    key={pill}
                    className="px-3 py-1.5 bg-white/10 border border-white/20 text-inverse-on-surface text-xs font-bold uppercase tracking-widest rounded-full"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            {/* PDF placeholder */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center text-center gap-6">
              <div className="size-20 rounded-xl bg-orange/20 flex items-center justify-center text-4xl">
                📄
              </div>
              <div>
                <h3 className="text-xl font-black text-inverse-on-surface uppercase mb-2"
                  style={{ fontFamily: "var(--font-headline)" }}>
                  MANUAL COMPLETO PDF
                </h3>
                <p className="text-inverse-on-surface/50 text-sm leading-relaxed mb-6">
                  Versão impressa com todos os protocolos, diagramas e especificações técnicas para uso em campo.
                </p>
              </div>
              <div className="w-full border-2 border-dashed border-white/20 rounded-lg py-6 flex flex-col items-center gap-3 text-inverse-on-surface/30">
                <svg className="size-8 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span className="text-xs font-bold uppercase tracking-widest opacity-50">PDF disponível em breve</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROTOCOLO PASSO A PASSO ── */}
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="section-label text-orange mb-3">Protocolo Completo</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                4 FASES DE OPERAÇÃO
              </h2>
              <p className="text-muted mt-4 max-w-xl mx-auto">
                Siga cada fase na sequência correta para garantir segurança, performance e durabilidade máxima.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {steps.map((step) => (
                <div key={step.num} className={`rounded-xl p-8 border ${step.color}`}>
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`size-12 rounded-xl ${step.iconColor} flex items-center justify-center text-2xl shrink-0`}>
                      {step.icon}
                    </div>
                    <div>
                      <p className="text-[0.6rem] font-black uppercase tracking-widest text-muted mb-1">{step.phase}</p>
                      <h3
                        className="text-xl font-black text-text uppercase"
                        style={{ fontFamily: "var(--font-headline)" }}
                      >
                        <span className="text-primary/30 mr-2">{step.num}</span>
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                        <span className="size-5 rounded-full bg-primary/10 text-primary flex items-center justify-center font-black text-[0.6rem] shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VÍDEO PLACEHOLDER ── */}
        <section className="py-24 px-4 lg:px-8 bg-on-surface">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="section-label text-orange mb-4">Demonstração Visual</p>
                <h2
                  className="text-3xl lg:text-5xl font-black text-inverse-on-surface uppercase leading-tight mb-6"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  VEJA A MONTAGEM
                  <br />
                  <span className="text-orange">EM AÇÃO</span>
                </h2>
                <p className="text-inverse-on-surface/60 leading-relaxed mb-8">
                  Em breve: vídeo completo do protocolo de montagem, ancoragem e desmontagem — do início ao fim em menos de 15 minutos com 2 pessoas.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    "Montagem completa em menos de 15 min",
                    "Apenas 2 pessoas necessárias",
                    "Sem ferramentas especiais",
                    "Desmontagem rápida para transporte",
                  ].map((item) => (
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
                <span className="text-sm font-bold uppercase tracking-widest opacity-50">Vídeo de montagem — em breve</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── MANUTENÇÃO ── */}
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="section-label text-orange mb-3">Durabilidade 5–10 Anos</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                GUIA DE MANUTENÇÃO
              </h2>
              <p className="text-muted mt-4 max-w-xl mx-auto">
                Manutenção preventiva correta é o que diferencia 3 anos de vida útil de 10 anos.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {maintenance.map((item) => (
                <div key={item.title} className="bg-surface-container-low border border-border rounded-xl p-7">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-3xl">{item.icon}</span>
                    <div>
                      <h3
                        className="font-black text-text uppercase text-base"
                        style={{ fontFamily: "var(--font-headline)" }}
                      >
                        {item.title}
                      </h3>
                      <span className="text-[0.6rem] font-black uppercase tracking-widest text-orange">{item.freq}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 px-4 lg:px-8 bg-surface-container-low">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="section-label text-orange mb-3">Dúvidas Frequentes</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                PERGUNTAS TÉCNICAS
              </h2>
            </div>
            <div className="divide-y divide-border">
              {faq.map((item) => (
                <div key={item.q} className="py-7">
                  <h3
                    className="font-black text-text text-base uppercase mb-3"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {item.q}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{item.a}</p>
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
            <p className="section-label text-orange mb-4 text-center">Precisa de Ajuda?</p>
            <h2
              className="text-4xl lg:text-5xl font-black leading-tight uppercase mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              FALE COM UM
              <br />
              ESPECIALISTA AMAZE
            </h2>
            <p className="text-white/70 mb-10 leading-relaxed">
              Dúvidas técnicas, reparos ou situações de campo — nosso time está disponível para suporte direto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5548920612591"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hover-inflate inline-flex items-center justify-center gap-2 h-14 px-10 bg-orange text-white rounded-full font-black text-base uppercase tracking-wide shadow-xl"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                FALAR NO WHATSAPP →
              </a>
              <Link
                href="/orcamento"
                className="inline-flex items-center justify-center h-14 px-10 border-2 border-white/30 text-white rounded-full font-black text-base uppercase tracking-wide hover:bg-white/10 transition-colors"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                SOLICITAR SUPORTE TÉCNICO
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
