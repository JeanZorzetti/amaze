import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Confiabilidade — O Que Garante Que Tudo Aconteça Sem Risco | Amaze Balloons",
  description:
    "Garantia de 3 anos sem exclusões. Vida útil de 5 a 10 anos. Fluxo contínuo, ancoragem 300 kg/f e montagem em 15 minutos. A confiabilidade que transforma infláveis em CAPEX.",
  alternates: { canonical: "https://amazeballoons.com/tecnologia/confiabilidade" },
};

const warrantySpecs = [
  { label: "Duração da garantia", value: "3 anos" },
  { label: "Exclusões para vento", value: "Nenhuma" },
  { label: "Exclusões para chuva", value: "Nenhuma" },
  { label: "Cobertura", value: "Total de fabricação" },
  { label: "Vida útil estimada", value: "5–10 anos" },
  { label: "Amortização (CAPEX)", value: "Uso recorrente" },
  { label: "Montagem", value: "2 pessoas / 15 min" },
  { label: "Operação no evento", value: "100% disponível" },
];

const warrantyDetails = [
  {
    title: "3 Anos Sem Exclusões",
    body: "A garantia Amaze cobre defeitos de fabricação estrutural e de segurança projetados para uso em ambientes externos, sem nenhuma cláusula de exclusão para condições climáticas adversas. Concorrentes como a RVB oferecem apenas 1 ano e excluem danos causados por 'ventos fortes ou chuva' — exatamente as condições normais de uso externo.",
  },
  {
    title: "A Lógica por Trás da Cobertura Total",
    body: "Oferecer garantia sem exclusões para vento e chuva só é possível porque a Amaze confia na engenharia que produz. Motor embutido à prova d'água, ancoragem de 300 kg/f e poliéster com tratamento UV não são features de marketing — são os fundamentos que tornam essa garantia financeiramente sustentável para nós.",
  },
  {
    title: "Garantia Como Argumento de Compra",
    body: "Um inflável com garantia de 3 anos não é uma despesa de evento — é um ativo depreciável. Gestores financeiros que precisam aprovar orçamentos reconhecem a diferença entre CAPEX e OPEX. A garantia Amaze é o documento que transforma essa conversa.",
  },
];

const lifespanDetails = [
  {
    title: "5 a 10 Anos de Vida Útil",
    body: "A vida útil estimada de um inflável Amaze é de 5 a 10 anos em uso recorrente. Isso não é uma promessa de marketing — é a consequência direta do poliéster 300g/m² com tratamento antifungo e UV de série, da costura em fio de poliamida 40 e da ausência de pontos de falha externos.",
  },
  {
    title: "CAPEX, Não Despesa",
    body: "Uma estrutura com vida útil de 5 anos usada em 20 eventos por ano custa menos por ativação do que qualquer alternativa de mídia temporária comparável. O cálculo de custo por uso é o argumento definitivo para gestores que pensam em ROI de longo prazo, não em preço de compra.",
  },
  {
    title: "Depreciação Contábil Real",
    body: "Infláveis Amaze podem ser registrados como ativo imobilizado e depreciados contabilmente ao longo de 5 anos. Isso reduz o impacto fiscal da aquisição e muda radicalmente o modelo de aprovação interna — de despesa de marketing para investimento de capital.",
  },
];

const operationalDetails = [
  {
    icon: "◎",
    title: "Montagem: 2 Pessoas, 15 Minutos",
    body: "O design operacional Amaze elimina a dependência de equipes técnicas especializadas. A inflagem em ~2 minutos e os pontos de ancoragem pré-definidos permitem que qualquer equipe de promotores ou staff de evento monte a estrutura sem treinamento prévio — em qualquer local, a qualquer hora.",
  },
  {
    icon: "◉",
    title: "Fluxo Contínuo Sem Intervenção",
    body: "Durante o evento, o sistema de fluxo contínuo opera de forma autônoma — corrigindo micro-variações de pressão causadas por vento, impactos e variações de temperatura sem nenhuma intervenção manual. O inflável mantém forma e rigidez do início ao fim, independentemente das condições externas.",
  },
  {
    icon: "◈",
    title: "Sistemas Elétricos Protegidos",
    body: "O motor Sirocco HideVENT opera com carcaça à prova d'água e cabos completamente integrados à estrutura. Não há exposição elétrica, não há risco de curto por umidade e não há cabos externos que representem risco de tropeço para o público ou a equipe de evento.",
  },
];

const durabilityDetails = [
  {
    title: "Resistência UV sem Degradação",
    body: "O tratamento UV de série no poliéster Amaze não é uma camada superficial — é aplicado nas fibras durante o processo de fabricação do tecido. A integridade molecular não se degrada com exposição solar contínua, preservando cor, resistência estrutural e aparência visual ao longo de anos de uso externo.",
  },
  {
    title: "Proteção Antifungo de Série",
    body: "Ambientes úmidos e o armazenamento de material após eventos externos são vetores de crescimento fúngico que degradam tecidos convencionais em meses. O revestimento antifungo aplicado de série no poliéster Amaze elimina esse vetor de degradação — o produto armazenado em condição adequada mantém integridade entre eventos.",
  },
  {
    title: "Costura de Alta Durabilidade",
    body: "Fio de poliamida 40 em padrão de 6 a 8 pontos por polegada com reforços em viés nas áreas de tração. Esta é a mesma especificação usada em equipamentos de proteção individual e lonas industriais — aplicada à fabricação de infláveis para garantir que as costuras não sejam o ponto de falha do sistema.",
  },
];

const techLinks = [
  {
    href: "/tecnologia/sirocco-hidevent",
    label: "Motor",
    title: "Sirocco HideVENT",
    desc: "100% embutido, à prova d'água, 330w. O motor que não falha.",
    color: "text-orange",
  },
  {
    href: "/tecnologia/poliester-300",
    label: "Material",
    title: "Poliéster 300g/m²",
    desc: "Alta tenacidade, UV de série, antifungo. O material que dura.",
    color: "text-primary",
  },
  {
    href: "/tecnologia/ancoragem-300",
    label: "Ancoragem",
    title: "Sistema 300 kg/f",
    desc: "Argola 38mm, arame soldado 4mm, lona KP1000. A fixação que segura.",
    color: "text-primary",
  },
];

export default function ConfiabilidadePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "https://amazeballoons.com" },
          { name: "Tecnologia", url: "https://amazeballoons.com/tecnologia" },
          { name: "Confiabilidade", url: "https://amazeballoons.com/tecnologia/confiabilidade" },
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
            <p className="section-label text-orange mb-4">Confiabilidade</p>
            <h1
              className="text-4xl lg:text-6xl font-black text-inverse-on-surface leading-tight uppercase mb-4"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              O QUE GARANTE QUE
              <br />
              <span className="text-orange">TUDO ISSO ACONTEÇA SEM RISCO.</span>
            </h1>
            <p className="text-xl font-bold text-inverse-on-surface/80 mb-6 uppercase tracking-wide">
              3 anos de garantia. 5–10 anos de vida útil. Zero exclusões.
            </p>
            <p className="text-base text-inverse-on-surface/60 max-w-2xl leading-relaxed mb-10">
              Motor embutido, material de alta durabilidade e ancoragem estrutural são os fundamentos. Mas
              confiabilidade real é a soma de tudo isso — a certeza de que o inflável vai performar no evento,
              e em todos os eventos que vierem depois.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Garantia 3 anos", "Sem exclusões climáticas", "5–10 anos vida útil", "Montagem 15 min"].map((pill) => (
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

        {/* ── GARANTIA ── */}
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="section-label text-orange mb-3">Única no Setor</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                GARANTIA DE 3 ANOS
                <br />
                <span className="text-primary">SEM EXCLUSÕES</span>
              </h2>
              <p className="text-muted text-base mt-4 max-w-2xl leading-relaxed">
                A Amaze é a única fabricante do setor que oferece garantia de 3 anos sem excluir danos por vento
                ou chuva — as condições mais comuns de uso externo. Isso não é generosidade. É a consequência
                lógica de confiar no que se fabrica.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {warrantyDetails.map((item) => (
                <div key={item.title} className="bg-surface-container-low border border-border rounded-xl p-8">
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

            {/* Comparativo de garantia */}
            <div className="mt-10 rounded-md overflow-hidden border border-border max-w-2xl">
              <div className="grid grid-cols-3 bg-on-surface text-inverse-on-surface text-xs font-black uppercase tracking-widest">
                <div className="col-span-1 px-6 py-4">Critério</div>
                <div className="p-4 text-center text-orange">Amaze</div>
                <div className="p-4 text-center text-inverse-on-surface/40">Concorrente (RVB)</div>
              </div>
              {[
                { spec: "Duração da garantia", amaze: "3 anos", market: "1 ano" },
                { spec: "Cobre danos por vento", amaze: "Sim", market: "Não — excluído" },
                { spec: "Cobre danos por chuva", amaze: "Sim", market: "Não — excluído" },
                { spec: "Cobertura estrutural", amaze: "Total", market: "Parcial" },
              ].map((row, i) => (
                <div
                  key={row.spec}
                  className={`grid grid-cols-3 text-sm border-t border-border ${i % 2 === 0 ? "bg-white" : "bg-surface-container-low"}`}
                >
                  <div className="col-span-1 px-6 py-4 font-semibold text-text">{row.spec}</div>
                  <div className="p-4 text-center text-primary font-bold text-xs">{row.amaze}</div>
                  <div className="p-4 text-center text-muted text-xs">{row.market}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VIDA ÚTIL / CAPEX ── */}
        <section className="py-24 px-4 lg:px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="section-label text-orange mb-3">Inteligência Financeira</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                VIDA ÚTIL DE 5–10 ANOS
                <br />
                <span className="text-primary">TRATE COMO CAPEX</span>
              </h2>
              <p className="text-muted text-base mt-4 max-w-2xl leading-relaxed">
                Infláveis convencionais são comprados como despesa de evento — usados uma ou duas vezes e
                descartados. Infláveis Amaze são ativos com vida útil documentada. A diferença muda o modelo de
                aprovação, a contabilidade e o custo real por ativação.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {lifespanDetails.map((item) => (
                <div key={item.title} className="bg-white border border-border rounded-xl p-8">
                  <div className="size-10 rounded-lg bg-orange/10 flex items-center justify-center mb-6">
                    <div className="size-3 rounded-full bg-orange" />
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

        {/* ── CONFIABILIDADE OPERACIONAL ── */}
        <section className="py-24 px-4 lg:px-8 bg-on-surface relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary opacity-8 blur-[120px] translate-x-1/3 -translate-y-1/2" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="section-label text-orange mb-3">Zero Imprevistos</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-inverse-on-surface uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                CONFIABILIDADE
                <br />
                <span className="text-orange">OPERACIONAL</span>
              </h2>
              <p className="text-inverse-on-surface/60 text-base mt-4 max-w-2xl leading-relaxed">
                Confiabilidade no dia do evento é a soma de decisões de projeto tomadas meses antes. A Amaze
                projeta cada sistema para que a montagem seja rápida, a operação seja autônoma e os riscos
                elétricos e estruturais sejam eliminados na raiz.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {operationalDetails.map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-8">
                  <div className="size-12 rounded-full bg-orange/20 flex items-center justify-center text-orange font-black text-xl mb-6">
                    {item.icon}
                  </div>
                  <h3
                    className="text-lg font-black text-inverse-on-surface uppercase mb-3"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-inverse-on-surface/60 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DURABILIDADE MATERIAL ── */}
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="section-label text-orange mb-3">Resistência ao Longo do Tempo</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                DURABILIDADE
                <br />
                <span className="text-primary">PARA USO RECORRENTE</span>
              </h2>
              <p className="text-muted text-base mt-4 max-w-2xl leading-relaxed">
                Um inflável usado em 15 eventos por ano precisa resistir a 15 montagens, 15 desmontagens, 15
                períodos de armazenamento e 15 exposições ao sol, vento e umidade. A durabilidade Amaze é
                projetada para esse ciclo — não para uso único.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {durabilityDetails.map((item) => (
                <div key={item.title} className="bg-surface-container-low border border-border rounded-xl p-8">
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

        {/* ── FICHA TÉCNICA ── */}
        <section className="py-24 px-4 lg:px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="section-label text-orange mb-3">Especificações</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                RESUMO TÉCNICO
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {warrantySpecs.map((s) => (
                <div key={s.label} className="bg-white border border-border rounded-lg px-6 py-5">
                  <p className="text-[0.6rem] font-black uppercase tracking-widest text-muted mb-1.5">{s.label}</p>
                  <p
                    className="text-lg font-black text-text"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECNOLOGIAS QUE GARANTEM ── */}
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="section-label text-orange mb-3">Os Fundamentos</p>
              <h2
                className="text-3xl lg:text-4xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                AS TECNOLOGIAS QUE GARANTEM ISSO
              </h2>
              <p className="text-muted text-sm mt-3 max-w-xl">
                A confiabilidade Amaze não é uma promessa isolada — é o resultado de três sistemas de engenharia
                trabalhando em conjunto. Explore cada um:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
              {techLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group bg-surface-container-low border border-border rounded-xl p-8 hover:border-primary/40 hover:shadow-md transition-all duration-200"
                >
                  <p className={`text-[0.6rem] font-black uppercase tracking-widest mb-2 ${link.color}`}>
                    {link.label}
                  </p>
                  <h3
                    className="text-xl font-black text-text uppercase mb-2 group-hover:text-primary transition-colors"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">{link.desc}</p>
                  <p className="text-xs font-bold text-primary group-hover:translate-x-1 transition-transform inline-block">
                    Ver documentação técnica →
                  </p>
                </Link>
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
            <p className="section-label text-orange mb-4 text-center">Confiabilidade Documentada</p>
            <h2
              className="text-4xl lg:text-5xl font-black leading-tight uppercase mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              SOLICITAR ORÇAMENTO
              <br />
              COM JUSTIFICATIVA TÉCNICA
            </h2>
            <p className="text-white/70 mb-10">
              Cada proposta Amaze inclui garantia, especificações de material, sistema de ancoragem e vida útil
              estimada documentados por escrito. A justificativa técnica que viabiliza a aprovação interna como CAPEX.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/orcamento"
                className="btn-hover-inflate inline-flex items-center gap-3 h-14 px-10 bg-orange text-white rounded-full font-black text-base uppercase tracking-wide shadow-xl"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                SOLICITAR ORÇAMENTO →
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
