import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Engenharia Aplicada — O Que Sustenta. O Que Não Pode Falhar. | Amaze Balloons",
  description:
    "Motor Sirocco HideVENT 330w 100% embutido, sistema de fluxo contínuo e ancoragem 300 kg/f. A engenharia que garante performance sem falhas em qualquer evento.",
  alternates: { canonical: "https://amazeballoons.com.br/tecnologia/engenharia-aplicada" },
};

const specs = [
  { label: "Potência do motor", value: "330w" },
  { label: "Tempo de inflagem", value: "~2 minutos" },
  { label: "Instalação", value: "100% embutido" },
  { label: "Proteção climática", value: "À prova d'água" },
  { label: "Carga de ancoragem", value: "300 kg/f" },
  { label: "Argola de aço", value: "38mm galvanizado" },
  { label: "Arame soldado", value: "4mm estrutural" },
  { label: "Área de força", value: "15 × 15 cm lona KP1000" },
];

const motorDetails = [
  {
    title: "Carcaça Totalmente Embutida",
    body: "O Sirocco HideVENT é instalado antes da última costura do inflável. Faz parte da estrutura, não um acessório. Isso elimina todos os cabos externos, mangueiras visíveis e pontos de desconexão que comprometem tanto a estética quanto a segurança em campo.",
  },
  {
    title: "330w de Potência Real",
    body: "Com 330 watts de potência efetiva, o motor pressuriza arenas inteiras em aproximadamente 2 minutos. A velocidade de inflagem elimina a necessidade de equipes técnicas especializadas — qualquer promotor de PDV pode operar sem treinamento prévio.",
  },
  {
    title: "Operação Silenciosa",
    body: "A geometria interna da carcaça atenua o ruído gerado pelo fluxo de ar. O resultado é um motor que opera em segundo plano — imperceptível para o público e sem interferência com a comunicação de eventos e apresentações ao vivo.",
  },
];

const flowDetails = [
  {
    title: "Por Que Não Selamos",
    body: "Infláveis selados são vulneráveis a dois vetores de falha: variações de temperatura — que alteram o volume de ar interno — e furos acidentais, que deflam irreversivelmente o produto no meio de um evento. A Amaze recusou esse modelo desde o início.",
  },
  {
    title: "Compensação Automática de Pressão",
    body: "Com o motor em operação contínua durante todo o evento, qualquer micro-vazamento ou variação de pressão causada por impactos externos é corrigida instantaneamente. A estrutura mantém rigidez e forma sem intervenção manual — o inflável parece rígido porque está, de fato, sendo sustentado em tempo real.",
  },
  {
    title: "100% de Disponibilidade no Evento",
    body: "Um furo em um inflável Amaze não é um incidente. É uma variação de pressão que o sistema compensa em frações de segundo. A peça permanece operacional, imponente e visualmente intacta durante toda a duração do evento.",
  },
];

const anchorDetails = [
  {
    icon: "◉",
    title: "Meia Argola 38mm Aço Galvanizado",
    body: "A argola principal é fabricada em aço galvanizado de 38mm — dimensionada para cargas estáticas e dinâmicas de uso em campo aberto, suportando tração axial, lateral e rotacional sem deformação plástica.",
  },
  {
    icon: "◈",
    title: "Arame Soldado 4mm Estrutural",
    body: "Cada ponto de ancoragem é reforçado por arame soldado de 4mm que distribui a carga ao longo da estrutura da lona, prevenindo concentração de tensão que levaria ao rasgo em produtos convencionais.",
  },
  {
    icon: "◼",
    title: "Área de Força 15 × 15 cm Lona KP1000",
    body: "A lona KP1000 de 15 × 15 cm absorve e distribui a carga de ruptura de 300 kg/f pela área estrutural do inflável. Esse sistema torna virtualmente impossível o arrancamento do ponto de fixação sob condições normais de uso externo.",
  },
];

const techLinks = [
  {
    href: "/tecnologia/sirocco-hidevent",
    label: "Motor",
    title: "Sirocco HideVENT",
    desc: "100% embutido. Zero mangueiras. 330w de potência real.",
    color: "text-orange",
  },
  {
    href: "/tecnologia/ancoragem-300",
    label: "Ancoragem",
    title: "Sistema 300 kg/f",
    desc: "Argola 38mm, arame soldado 4mm e lona KP1000 em cada ponto.",
    color: "text-primary",
  },
];

export default function EngenhariaAplicadaPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "https://amazeballoons.com" },
          { name: "Tecnologia", url: "https://amazeballoons.com.br/tecnologia" },
          { name: "Engenharia Aplicada", url: "https://amazeballoons.com.br/tecnologia/engenharia-aplicada" },
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
            <p className="section-label text-orange mb-4">Engenharia Aplicada</p>
            <h1
              className="text-4xl lg:text-6xl font-black text-inverse-on-surface leading-tight uppercase mb-4"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              O QUE SUSTENTA.
              <br />
              <span className="text-orange">O QUE NÃO PODE FALHAR.</span>
            </h1>
            <p className="text-xl font-bold text-inverse-on-surface/80 mb-6 uppercase tracking-wide">
              Motor embutido. Fluxo contínuo. Ancoragem de 300 kg/f.
            </p>
            <p className="text-base text-inverse-on-surface/60 max-w-2xl leading-relaxed mb-10">
              Cada inflável Amaze é o resultado de decisões de engenharia deliberadas — feitas para eliminar os
              pontos de falha que o mercado simplesmente aceita. Aqui estão as três estruturas que tornam isso
              possível.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Motor Sirocco HideVENT", "Fluxo Contínuo", "Ancoragem 300 kg/f", "40+ anos de fabricação"].map((pill) => (
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

        {/* ── MOTOR SIROCCO ── */}
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="section-label text-orange mb-3">Sistema de Inflagem</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                MOTOR SIROCCO
                <br />
                <span className="text-orange">HIDEVENT</span>
              </h2>
              <p className="text-muted text-base mt-4 max-w-2xl leading-relaxed">
                O mercado conecta motoventiladores externos por mangueiras visíveis. A Amaze fez uma escolha
                diferente: o Sirocco HideVENT é parte da estrutura, não um acessório. Isso muda tudo — da
                estética ao risco operacional.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {motorDetails.map((item) => (
                <div key={item.title} className="bg-surface-container-low border border-border rounded-xl p-8">
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

        {/* ── FLUXO CONTÍNUO ── */}
        <section className="py-24 px-4 lg:px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="section-label text-orange mb-3">Sistema de Pressão</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                FLUXO CONTÍNUO
                <br />
                <span className="text-primary">NÃO SELADO</span>
              </h2>
              <p className="text-muted text-base mt-4 max-w-2xl leading-relaxed">
                A decisão de não fabricar infláveis selados é uma decisão de engenharia — não de custo. Sistemas
                selados criam vulnerabilidades que comprometem eventos inteiros. O fluxo contínuo elimina essa
                categoria de risco na raiz.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {flowDetails.map((item) => (
                <div key={item.title} className="bg-white border border-border rounded-xl p-8">
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

        {/* ── ANCORAGEM ── */}
        <section className="py-24 px-4 lg:px-8 bg-on-surface relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-primary opacity-8 blur-[120px] translate-x-1/3 -translate-y-1/2" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="section-label text-orange mb-3">Fixação Estrutural</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-inverse-on-surface uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                ANCORAGEM
                <br />
                <span className="text-orange">300 KG/F</span>
              </h2>
              <p className="text-inverse-on-surface/60 text-base mt-4 max-w-2xl leading-relaxed">
                A ancoragem define se o inflável permanece no ar ou se torna um incidente. Os pontos de fixação
                Amaze são projetados para resistir ao pior cenário — rajadas de vento, uso contínuo, eventos em
                campo aberto. Cada componente tem uma função estrutural específica.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {anchorDetails.map((item) => (
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

            {/* Destaque 300 kg/f */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              {[
                { value: "300", unit: "kg/f", label: "Carga de ruptura" },
                { value: "38mm", unit: "", label: "Argola de aço galvanizado" },
                { value: "4mm", unit: "", label: "Arame soldado estrutural" },
              ].map((m) => (
                <div key={m.label} className="bg-orange/10 border border-orange/20 rounded-xl p-6 text-center">
                  <p
                    className="text-2xl font-black text-orange mb-1 leading-none"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {m.value}
                    {m.unit && <span className="text-sm ml-0.5">{m.unit}</span>}
                  </p>
                  <p className="text-inverse-on-surface/60 text-[0.65rem] leading-tight mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FICHA TÉCNICA ── */}
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
              <p className="text-muted text-sm mt-3 max-w-xl">
                Números que a Amaze publica porque pode comprovar. Números que o mercado não publica porque não possui.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {specs.map((s) => (
                <div key={s.label} className="bg-surface-container-low border border-border rounded-lg px-6 py-5">
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

        {/* ── VER TECNOLOGIA EM DETALHE ── */}
        <section className="py-24 px-4 lg:px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <p className="section-label text-orange mb-3">Aprofunde-se</p>
              <h2
                className="text-3xl lg:text-4xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                VER TECNOLOGIA EM DETALHE
              </h2>
              <p className="text-muted text-sm mt-3 max-w-xl">
                Cada sistema tem sua própria documentação técnica. Escolha o que deseja explorar:
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
              {techLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group bg-white border border-border rounded-xl p-8 hover:border-primary/40 hover:shadow-md transition-all duration-200"
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
                  <p className="text-sm text-muted leading-relaxed">{link.desc}</p>
                  <p className="text-xs font-bold text-primary mt-4 group-hover:translate-x-1 transition-transform inline-block">
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
            <p className="section-label text-orange mb-4 text-center">Alta Performance Garantida</p>
            <h2
              className="text-4xl lg:text-5xl font-black leading-tight uppercase mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              SOLICITAR ORÇAMENTO
              <br />
              COM JUSTIFICATIVA TÉCNICA
            </h2>
            <p className="text-white/70 mb-10">
              Motor, material, ancoragem e prazo documentados por escrito em cada proposta. Nenhum outro fabricante faz isso — porque nenhum outro tem o que documentar.
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
