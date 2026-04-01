import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Impacto Visual — O Que Captura. O Que Faz Lembrar. | Amaze Balloons",
  description:
    "Poliéster emborrachado 300g/m² com impressão fotográfica UV. Infláveis que dominam o espaço visual de 2m a 15m+. A estética que transforma ambientes em experiências.",
  alternates: { canonical: "https://amazeballoons.com/tecnologia/impacto-visual" },
};

const materialSpecs = [
  { label: "Gramatura", value: "300g/m²" },
  { label: "Composição", value: "Fios alta tenacidade" },
  { label: "Reforço", value: "Borracha anti-torção" },
  { label: "Acabamento", value: "Acetinado" },
  { label: "Impressão", value: "UV fotográfica" },
  { label: "Proteção solar", value: "Tratamento UV série" },
  { label: "Proteção biológica", value: "Antifungo de série" },
  { label: "Legibilidade", value: "2m a 15m+" },
];

const materialDetails = [
  {
    title: "Fios de Alta Tenacidade em Urdume",
    body: "A estrutura base do poliéster Amaze é construída com fios de alta tenacidade dispostos em padrão de urdume — a mesma técnica de engenharia têxtil usada em lonas técnicas industriais. Isso garante resistência à tração em múltiplos vetores sem comprometer a leveza do material.",
  },
  {
    title: "Camada de Borracha Anti-Torção",
    body: "Entre as camadas de poliéster, uma fina lâmina de borracha linear atua como estabilizador estrutural. Ela impede que o tecido torça, enrole ou desforme sob variações de pressão interna — preservando a geometria exata da impressão mesmo em uso intenso ao ar livre.",
  },
  {
    title: "Acabamento Acetinado para Impressão",
    body: "O acabamento acetinado não é estético — é técnico. Ele cria a superfície de alta adesão necessária para que a tinta UV penetre nas fibras com definição fotográfica. O resultado é uma impressão que não descasca, não desbota com UV e mantém fidelidade de cor ao longo de anos de uso externo.",
  },
];

const printDetails = [
  {
    title: "Resolução Fotográfica Real",
    body: "A impressão UV Amaze opera em resolução fotográfica — não gráfica. Isso significa que gradientes, meios-tons, logotipos com detalhes finos e fotografias de produto são reproduzidos com fidelidade que infláveis de banner comum simplesmente não conseguem entregar. Cores fiéis ao Pantone e ao padrão de marca.",
  },
  {
    title: "Tinta UV de Alta Tenacidade",
    body: "A tinta UV usada nos infláveis Amaze é formulada para aderência permanente em superfícies emborrachadas. A cura por ultravioleta cria ligações moleculares que resistem à exposição solar contínua, à umidade e ao dobramento repetido — sem rachaduras, descascamento ou perda de saturação.",
  },
  {
    title: "Fidelidade à Identidade de Marca",
    body: "Cada projeto passa por calibração de cor antes da impressão final. Para marcas que dependem de consistência visual — redes de varejo, franquias, lançamentos de produto — essa etapa garante que o inflável seja uma extensão fiel da identidade visual, não uma aproximação.",
  },
];

const scaleDetails = [
  {
    range: "2m – 5m",
    title: "PDV e Ambientes Fechados",
    body: "Escala ideal para pontos de venda, corredores de shopping e feiras internas. Domina o campo visual imediato sem obstruir a navegação do espaço.",
  },
  {
    range: "5m – 10m",
    title: "Eventos Externos e Fachadas",
    body: "A faixa de maior versatilidade — legível a distância, transportável em veículo convencional, instalável por 2 pessoas em 15 minutos. A escolha padrão para lançamentos e ativações de marca.",
  },
  {
    range: "10m – 15m+",
    title: "Monumentos e Marcos Visuais",
    body: "Estruturas que dominam o horizonte urbano. Visíveis de centenas de metros, criam marcos temporários que transformam a percepção do espaço e geram cobertura orgânica de mídia e redes sociais.",
  },
];

const positioningDetails = [
  {
    title: "Acima da Linha de Visão",
    body: "Infláveis posicionados acima da linha de visão dos consumidores dominam o espaço vertical que outras mídias ignoram. O céu urbano é gratuito, não disputado — e estruturas nessa faixa são percebidas pelo sistema visual periférico antes mesmo de o consumidor direcionar a atenção conscientemente.",
  },
  {
    title: "Quebra de Padrão Ambiental",
    body: "A eficácia de uma mensagem visual depende da capacidade de interromper o padrão visual do ambiente. Formas tridimensionais com volume próprio, cor saturada e escala inesperada criam ruptura perceptual imediata — o mecanismo neurológico que transforma uma exposição em memória de marca.",
  },
  {
    title: "Presença que Gera Presença",
    body: "Uma estrutura de 10 metros em um evento gera fotografias, vídeos e stories que o público produz espontaneamente. O inflável se torna mídia orgânica — multiplicando o alcance da ativação além do público físico presente, sem custo adicional de mídia.",
  },
];

export default function ImpactoVisualPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "https://amazeballoons.com" },
          { name: "Tecnologia", url: "https://amazeballoons.com/tecnologia" },
          { name: "Impacto Visual", url: "https://amazeballoons.com/tecnologia/impacto-visual" },
        ]}
      />
      <Header />
      <main className="flex-1 pt-24">

        {/* ── HERO ── */}
        <section className="py-24 px-4 lg:px-8 bg-on-surface relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary opacity-10 blur-[120px] translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-orange opacity-5 blur-[120px] -translate-x-1/3 translate-y-1/3" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <p className="section-label text-orange mb-4">Impacto Visual</p>
            <h1
              className="text-4xl lg:text-6xl font-black text-inverse-on-surface leading-tight uppercase mb-4"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              O QUE CAPTURA.
              <br />
              <span className="text-orange">O QUE FAZ LEMBRAR.</span>
            </h1>
            <p className="text-xl font-bold text-inverse-on-surface/80 mb-6 uppercase tracking-wide">
              Material. Impressão. Escala. Posicionamento.
            </p>
            <p className="text-base text-inverse-on-surface/60 max-w-2xl leading-relaxed mb-10">
              Impacto visual não é tamanho — é a convergência de material certo, impressão fiel, escala calculada
              e posicionamento estratégico. A Amaze projeta cada uma dessas variáveis antes de produzir uma única
              costura.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Poliéster 300g/m²", "Impressão UV fotográfica", "2m a 15m+", "Acima da linha de visão"].map((pill) => (
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

        {/* ── MATERIAL ── */}
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="section-label text-orange mb-3">Base Estrutural</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                POLIÉSTER EMBORRACHADO
                <br />
                <span className="text-primary">300G/M²</span>
              </h2>
              <p className="text-muted text-base mt-4 max-w-2xl leading-relaxed">
                A escolha do material base não é uma decisão de custo — é uma decisão de performance. O poliéster
                emborrachado 300g/m² da Amaze é a fundação que torna possível tudo o que vem depois: a impressão,
                a forma, a durabilidade.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {materialDetails.map((item) => (
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

        {/* ── IMPRESSÃO ── */}
        <section className="py-24 px-4 lg:px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="section-label text-orange mb-3">Fidelidade de Marca</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                IMPRESSÃO FOTOGRÁFICA
                <br />
                <span className="text-primary">UV DE ALTA DEFINIÇÃO</span>
              </h2>
              <p className="text-muted text-base mt-4 max-w-2xl leading-relaxed">
                A impressão em infláveis convencionais opera como banner — limitada em resolução e fidelidade de
                cor. A Amaze usa tecnologia UV de alta tenacidade que transforma o inflável em uma mídia de alta
                definição, fiel à identidade de marca.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {printDetails.map((item) => (
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

        {/* ── ESCALA ── */}
        <section className="py-24 px-4 lg:px-8 bg-on-surface relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary opacity-8 blur-[140px]" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="section-label text-orange mb-3">Leitura à Distância</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-inverse-on-surface uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                ESCALA CALCULADA
                <br />
                <span className="text-orange">PARA CADA CONTEXTO</span>
              </h2>
              <p className="text-inverse-on-surface/60 text-base mt-4 max-w-2xl leading-relaxed">
                Cada metro de altura tem um propósito. A Amaze projeta a escala do inflável a partir da distância
                de leitura esperada — garantindo que a mensagem seja percebida, lida e memorizada dentro do
                contexto de uso.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {scaleDetails.map((item) => (
                <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-8">
                  <p
                    className="text-3xl font-black text-orange mb-2"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {item.range}
                  </p>
                  <h3
                    className="text-base font-black text-inverse-on-surface uppercase mb-3"
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

        {/* ── POSICIONAMENTO ── */}
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-14">
              <p className="section-label text-orange mb-3">Estratégia de Espaço</p>
              <h2
                className="text-3xl lg:text-5xl font-black text-text uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                POSICIONAMENTO ACIMA
                <br />
                <span className="text-primary">DA LINHA DE VISÃO</span>
              </h2>
              <p className="text-muted text-base mt-4 max-w-2xl leading-relaxed">
                A maioria das mídias de evento compete no mesmo plano visual — banners, stands, totens, telas.
                Estruturas aéreas operam em uma dimensão que não tem concorrência: o espaço vertical não disputado.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {positioningDetails.map((item) => (
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
                FICHA TÉCNICA DO MATERIAL
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {materialSpecs.map((s) => (
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

            {/* Link para detalhe do material */}
            <div className="mt-10">
              <p className="section-label text-orange mb-3">Ver Material em Detalhe</p>
              <Link
                href="/tecnologia/poliester-300"
                className="group inline-flex flex-col bg-white border border-border rounded-xl p-8 hover:border-primary/40 hover:shadow-md transition-all duration-200 max-w-sm"
              >
                <p className="text-[0.6rem] font-black uppercase tracking-widest text-primary mb-2">Material Base</p>
                <h3
                  className="text-xl font-black text-text uppercase mb-2 group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  Poliéster Emborrachado 300g/m²
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  Fios de alta tenacidade, borracha anti-torção, acabamento acetinado e tratamento UV de série.
                  Documentação técnica completa.
                </p>
                <p className="text-xs font-bold text-primary group-hover:translate-x-1 transition-transform inline-block">
                  Ver documentação técnica →
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-4 lg:px-8 bg-purple text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-secondary opacity-20 blur-[100px]" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="section-label text-orange mb-4 text-center">Veja o Impacto em Ação</p>
            <h2
              className="text-4xl lg:text-5xl font-black leading-tight uppercase mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              CONHEÇA NOSSOS
              <br />
              PROJETOS REALIZADOS
            </h2>
            <p className="text-white/70 mb-10">
              Material de 300g/m², impressão fotográfica e escala pensada para cada contexto. Veja como esses
              princípios se traduzem em projetos reais para as maiores marcas do Brasil.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/portfolio"
                className="btn-hover-inflate inline-flex items-center gap-3 h-14 px-10 bg-orange text-white rounded-full font-black text-base uppercase tracking-wide shadow-xl"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                VER NOSSOS PROJETOS →
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
