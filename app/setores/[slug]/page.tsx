import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

type SectorData = {
  title: string;
  h1: string;
  description: string;
  heroText: string;
  stats: Array<{ number: string; label: string; color: string }>;
  useCases: Array<{ icon: string; title: string; desc: string; img?: string }>;
  caseStudy: {
    title: string;
    challenge: string;
    solution: string;
    result: string;
    metrics: Array<{ value: string; label: string }>;
    img?: string;
  } | null;
  products: Array<{ title: string; href: string; desc: string }>;
};

const SECTORS_DATA: Record<string, SectorData> = {
  "eventos-corporativos": {
    title: "Infláveis para Eventos Corporativos — Ativações de Marca e Lançamentos",
    h1: "EVENTOS CORPORATIVOS",
    description:
      "Infláveis gigantes para lançamentos de produtos, ativações de marca e conferências anuais. Presença inesquecível para públicos B2B e B2C nas Américas.",
    heroText:
      "Eventos corporativos exigem uma presença visual à altura da escala da sua marca. Infláveis gigantes comandam atenção, geram conteúdo orgânico e posicionam sua empresa como líder — antes mesmo de qualquer apresentação começar.",
    stats: [
      { number: "500+", label: "Eventos Realizados", color: "bg-primary text-on-primary" },
      { number: "200%", label: "Mais Engajamento vs Estande Padrão", color: "bg-orange text-white" },
      { number: "3 anos", label: "Garantia de Fabricação", color: "bg-on-surface text-inverse-on-surface" },
    ],
    useCases: [
      {
        icon: "🚀",
        title: "Lançamentos de Produtos",
        desc: "O momento do lançamento é único — e precisa de uma presença visual que materialize a grandiosidade do novo produto. Réplicas gigantes de até 15m criam uma revelação inesquecível. A escala do inflável comunica o tamanho da inovação antes de qualquer word-of-mouth.",
        img: "/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg",
      },
      {
        icon: "🏢",
        title: "Ativações de Marca",
        desc: "Transforme qualquer espaço corporativo em um ambiente de marca imersivo. Arenas infláveis personalizadas, totens e displays criam uma experiência que o público associa diretamente à sua identidade — muito além de banners e painéis.",
        img: "/images/gallery/SaveClip.App_604055838_17878831959448342_7903443883004681535_n.jpg",
      },
      {
        icon: "🎤",
        title: "Conferências e Cúpulas",
        desc: "Portais de entrada com identidade visual, totens de patrocinadores e mascotes gigantes transformam conferências em experiências memoráveis. Cada ponto de contato reforça a mensagem da marca.",
        img: "/images/gallery/SaveClip.App_632153979_17885887683448342_7600628157039576746_n.jpg",
      },
      {
        icon: "📊",
        title: "Estandes em Feiras B2B",
        desc: "Em eventos de networking, quem domina o espaço lidera a conversa. Infláveis gigantes tornam seu estande o ponto de referência do evento — garantindo visibilidade mesmo antes de o visitante chegar ao seu corredor.",
        img: "/images/gallery/SaveClip.App_598904006_17877354627448342_7377931598932079293_n.jpg",
      },
    ],
    caseStudy: {
      title: "Arena Interativa — Empresa de Tecnologia",
      challenge:
        "Uma empresa de tecnologia precisava de um espaço imersivo e seguro para demonstrações de produtos em uma feira com alto fluxo de visitantes. O desafio: criar um ambiente que isolasse as demonstrações do ruído do evento, mas que continuasse atraindo visitantes.",
      solution:
        "Arena Inflável de 6×6 metros com redes de proteção removíveis a laser, permitindo instalação de telas interativas e projeções internas. Sistema de fluxo contínuo Amaze garantiu estabilidade mesmo com entrada e saída constante de pessoas.",
      result:
        "A Arena tornou-se o ponto focal do evento, superando todos os estandes tradicionais do pavilhão.",
      metrics: [
        { value: "200%", label: "Mais engajamento vs estandes padrão" },
        { value: "50%", label: "Aumento na coleta de leads qualificados" },
        { value: "6×6m", label: "Arena personalizada com proteção interna" },
      ],
      img: "/images/gallery/SaveClip.App_598635946_17877354609448342_3340277087935498923_n.jpg",
    },
    products: [
      {
        title: "Infláveis Personalizados",
        href: "/produtos/inflaveis-personalizados",
        desc: "Qualquer formato, cor ou tamanho. Identidade visual da marca em escala monumental.",
      },
      {
        title: "Infláveis Gigantes",
        href: "/produtos/inflaveis-gigantes",
        desc: "Réplicas de produtos com até 15m de altura. Presença que domina qualquer espaço.",
      },
      {
        title: "Totens & Displays",
        href: "/produtos/totens-displays",
        desc: "Torres de marca verticais: máximo impacto com mínima área de solo.",
      },
    ],
  },

  "feiras-exposicoes": {
    title: "Infláveis para Feiras e Exposições — Displays de Estande e Réplicas Gigantes",
    h1: "FEIRAS & EXPOSIÇÕES",
    description:
      "Destaque-se em qualquer feira com infláveis gigantes, réplicas de produtos e displays com marca. Atraia visitantes de todo o pavilhão e domine o piso de exposição.",
    heroText:
      "Em um ambiente de feira superlotado, altura e escala são os seus diferenciais mais poderosos. Infláveis gigantes garantem que seu estande seja visível de todos os ângulos do pavilhão — antes mesmo de o visitante saber o que você vende.",
    stats: [
      { number: "10×", label: "Mais Visibilidade vs Estande Convencional", color: "bg-primary text-on-primary" },
      { number: "2 min", label: "Montagem com Motor Sirocco HideVENT", color: "bg-orange text-white" },
      { number: "15m+", label: "Altura Máxima de Réplicas", color: "bg-on-surface text-inverse-on-surface" },
    ],
    useCases: [
      {
        icon: "🎪",
        title: "Réplicas de Produtos",
        desc: "Seu produto em escala monumental. Réplicas infláveis 3D com impressão fotorrealística criam um ponto de referência que atrai visitantes de qualquer ponto do pavilhão. É a ferramenta de geração de tráfego mais eficaz em feiras.",
        img: "/images/gallery/SaveClip.App_598989249_17877354600448342_7726145296482408610_n.jpg",
      },
      {
        icon: "🔵",
        title: "Arcos de Entrada para Estandes",
        desc: "Um portal inflável com a identidade visual da sua marca define o território do estande antes de qualquer conversa. Cria demarcação natural do espaço e guia o fluxo de visitantes para dentro da sua área.",
        img: "/images/gallery/SaveClip.App_598834557_17877354591448342_4532624735367015725_n.jpg",
      },
      {
        icon: "📐",
        title: "Totens e Pontos de Referência",
        desc: "Compactos no solo, imponentes em altura. Totens de 3 a 7m de altura criam um marco vertical que funciona como GPS do pavilhão: 'vire onde está o [seu produto] gigante'.",
        img: "/images/gallery/SaveClip.App_589648017_17876804814448342_8600020723861108054_n.jpg",
      },
      {
        icon: "🏟️",
        title: "Arenas Imersivas",
        desc: "Para demonstrações de produto ou ativações interativas, arenas infláveis criam um espaço fechado, controlado e completamente personalizado. Ideal para tech, pharma e setores que precisam de um ambiente de demonstração isolado.",
        img: "/images/gallery/SaveClip.App_598409687_17877354618448342_6209046712205705990_n.jpg",
      },
    ],
    caseStudy: {
      title: "Réplica Gigante de Produto — Feira Internacional NYC",
      challenge:
        "Uma marca global precisava de destaque em uma das maiores feiras de sua categoria, com centenas de expositores competindo pela atenção dos mesmos compradores.",
      solution:
        "Réplica inflável do produto principal com 7 metros de altura, impressão fotorrealística e sistema Sirocco HideVENT para montagem autônoma pela equipe da marca — sem montadores externos.",
      result:
        "O estande tornou-se o ponto de referência da feira, gerando fila de visitantes e cobertura espontânea por jornalistas de trade publications do setor.",
      metrics: [
        { value: "7m", label: "Altura da réplica inflável" },
        { value: "2 min", label: "Montagem pela equipe da marca" },
        { value: "10×", label: "Aumento de tráfego vs feiras anteriores" },
      ],
      img: "/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg",
    },
    products: [
      {
        title: "Infláveis Gigantes",
        href: "/produtos/inflaveis-gigantes",
        desc: "Réplicas fotorrealísticas de qualquer produto, em escala monumental.",
      },
      {
        title: "Arcos & Portais",
        href: "/produtos/arcos-portais",
        desc: "Entradas para estandes que definem território e guiam visitantes.",
      },
      {
        title: "Totens & Displays",
        href: "/produtos/totens-displays",
        desc: "Pontos de referência verticais visíveis de qualquer ponto do pavilhão.",
      },
    ],
  },

  "esportes-corridas": {
    title: "Infláveis para Eventos Esportivos — Arcos de Corrida e Displays de Patrocinadores",
    h1: "ESPORTES & CORRIDAS",
    description:
      "Arcos infláveis, totens de patrocinadores e displays gigantes para maratonas, corridas, eventos esportivos e competições atléticas. Instalação em 2 minutos.",
    heroText:
      "Eventos esportivos oferecem visibilidade de marca excepcional — alto fluxo de pessoas, cobertura midiática intensa e públicos apaixonados. Nossos infláveis são projetados para condições externas rigorosas e instalação rápida por equipes reduzidas.",
    stats: [
      { number: "2 min", label: "Instalação do Arco (Motor Sirocco)", color: "bg-primary text-on-primary" },
      { number: "300 kg/f", label: "Resistência à Tração da Ancoragem", color: "bg-orange text-white" },
      { number: "3 anos", label: "Garantia Sem Exclusão por Vento", color: "bg-on-surface text-inverse-on-surface" },
    ],
    useCases: [
      {
        icon: "🏁",
        title: "Arcos de Chegada e Largada",
        desc: "O ponto mais fotografado de qualquer corrida. Arcos infláveis personalizados com identidade do evento e patrocinadores garantem que sua marca apareça em todas as fotos de chegada. Disponíveis de 3m a 10m de largura, com ancoragem para vento.",
        img: "/images/gallery/SaveClip.App_598635946_17877354609448342_3340277087935498923_n.jpg",
      },
      {
        icon: "🏃",
        title: "Maratonas e Corridas 5K/10K",
        desc: "Da largada à chegada, os infláveis demarcam o percurso e posicionam patrocinadores nos pontos de maior concentração de atletas e espectadores. Instalação em 2 minutos com o motor Sirocco HideVENT — sem precisar de equipe técnica especializada.",
        img: "/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg",
      },
      {
        icon: "🦁",
        title: "Mascotes Infláveis de Equipes",
        desc: "O mascote da equipe ou do evento em escala gigante. Cria engajamento imediato com o público, gera conteúdo espontâneo nas redes sociais e reforça a identidade da competição ou do clube.",
        img: "/images/gallery/SaveClip.App_604055838_17878831959448342_7903443883004681535_n.jpg",
      },
      {
        icon: "🏆",
        title: "Zonas de Patrocinadores",
        desc: "Totens e displays de patrocinadores ao longo do percurso e nas zonas de descanso criam múltiplos pontos de contato da marca com atletas e espectadores — maximizando o ROI do patrocínio.",
        img: "/images/gallery/SaveClip.App_632153979_17885887683448342_7600628157039576746_n.jpg",
      },
    ],
    caseStudy: {
      title: "Arco de Corrida com Marca — Maratona de Miami",
      challenge:
        "Patrocinador de uma maratona precisava de visibilidade máxima no ponto de maior concentração de câmeras: a linha de chegada. O desafio era uma instalação rápida e segura em ambiente externo com vento variável.",
      solution:
        "Arco inflável de 8m de largura com sistema de ancoragem Amaze de 300 kg/f, motor Sirocco HideVENT (instalação em 2 min pela equipe do evento) e impressão fotográfica com identidade do patrocinador.",
      result:
        "O arco apareceu em todas as coberturas midiáticas do evento e em mais de 12.000 fotos de chegada postadas nas redes sociais pelos atletas.",
      metrics: [
        { value: "12.000+", label: "Fotos com o arco nas redes sociais" },
        { value: "2 min", label: "Tempo de instalação no local" },
        { value: "8m", label: "Largura do arco personalizado" },
      ],
      img: "/images/gallery/SaveClip.App_598904006_17877354627448342_7377931598932079293_n.jpg",
    },
    products: [
      {
        title: "Arcos & Portais",
        href: "/produtos/arcos-portais",
        desc: "Arcos de chegada e largada de 3m a 10m de largura com identidade visual completa.",
      },
      {
        title: "Mascotes Infláveis",
        href: "/produtos/mascotes-inflaveis",
        desc: "Mascotes gigantes de equipes e eventos que dominam qualquer espaço.",
      },
      {
        title: "Totens & Displays",
        href: "/produtos/totens-displays",
        desc: "Pontos de patrocinadores ao longo do percurso e nas zonas de espectadores.",
      },
    ],
  },

  "festas-celebracoes": {
    title: "Infláveis para Festas e Celebrações — Festivais de Música e Eventos Temáticos",
    h1: "FESTAS & CELEBRAÇÕES",
    description:
      "Infláveis personalizados para festivais de música, aniversários corporativos e celebrações públicas. Personagens gigantes, arcos e displays que criam momentos inesquecíveis.",
    heroText:
      "De festivais de música a celebrações de datas especiais, infláveis personalizados trazem um elemento de espetáculo que eleva qualquer evento. Estruturas gigantes criam pontos de foto naturais e geram conteúdo orgânico instantâneo.",
    stats: [
      { number: "10×", label: "Mais Shares vs Ativações Convencionais", color: "bg-primary text-on-primary" },
      { number: "5-10 anos", label: "Vida Útil Típica", color: "bg-orange text-white" },
      { number: "500+", label: "Projetos para Celebrações", color: "bg-on-surface text-inverse-on-surface" },
    ],
    useCases: [
      {
        icon: "🎵",
        title: "Festivais de Música",
        desc: "Portais de entrada com a identidade visual do festival, personagens gigantes que se tornam o símbolo do evento e displays de patrocinadores ao longo da área. Cada inflável é um ponto de foto natural — gerando cobertura espontânea nas redes sociais.",
        img: "/images/gallery/SaveClip.App_598904006_17877354627448342_7377931598932079293_n.jpg",
      },
      {
        icon: "🎂",
        title: "Aniversários Corporativos",
        desc: "Comemore marcos importantes da empresa com a mesma grandiosidade que você construiu o negócio. Infláveis personalizados com logotipo, ano de fundação ou slogan transformam festas corporativas em declarações de identidade.",
        img: "/images/gallery/SaveClip.App_598989249_17877354600448342_7726145296482408610_n.jpg",
      },
      {
        icon: "🎃",
        title: "Ativações Sazonais",
        desc: "Natal, Halloween, Carnaval, Páscoa — as datas comemorativas são oportunidades únicas de ativação de marca. Personagens temáticos gigantes criam associações emocionais com sua marca que permanecem muito além da data.",
        img: "/images/gallery/SaveClip.App_598834557_17877354591448342_4532624735367015725_n.jpg",
      },
      {
        icon: "🌟",
        title: "Celebrações Públicas",
        desc: "Eventos municipais, inaugurações e celebrações de rua ganham escala e identidade visual com infláveis gigantes. Estruturas de 10m+ criam marcos visuais que orientam o fluxo de pessoas e geram cobertura midiática espontânea.",
        img: "/images/gallery/SaveClip.App_589648017_17876804814448342_8600020723861108054_n.jpg",
      },
    ],
    caseStudy: null,
    products: [
      {
        title: "Mascotes Infláveis",
        href: "/produtos/mascotes-inflaveis",
        desc: "Personagens gigantes de qualquer tema — do Papai Noel ao mascote da marca.",
      },
      {
        title: "Arcos & Portais",
        href: "/produtos/arcos-portais",
        desc: "Entradas temáticas que definem o ambiente do evento desde a chegada.",
      },
      {
        title: "Infláveis Personalizados",
        href: "/produtos/inflaveis-personalizados",
        desc: "Qualquer formato, qualquer tema, qualquer escala.",
      },
    ],
  },

  "marketing-publicidade": {
    title: "Infláveis Publicitários — Marketing Exterior e Campanhas de Ativação de Marca",
    h1: "MARKETING & PUBLICIDADE",
    description:
      "Infláveis publicitários com 10× mais eficiência que mídia exterior convencional. Réplicas gigantes de produtos e displays que geram mídia espontânea e ROI mensurável.",
    heroText:
      "Enquanto a maioria das marcas compete pelos mesmos espaços de mídia convencional, as que dominam infláveis gigantes jogam em uma categoria diferente: impossível de ignorar, impossível de não fotografar, impossível de esquecer.",
    stats: [
      { number: "10×", label: "Mais Eficiência vs Mídia Exterior Convencional", color: "bg-primary text-on-primary" },
      { number: "35%", label: "Aumento de Sell-Out (Case Lata Monumental)", color: "bg-orange text-white" },
      { number: "5-20×", label: "ROI em Mídia Espontânea", color: "bg-on-surface text-inverse-on-surface" },
    ],
    useCases: [
      {
        icon: "📣",
        title: "Publicidade Exterior",
        desc: "Uma réplica inflável de 10m do seu produto no ponto de venda ou na entrada de um evento faz o que nenhum outdoor consegue: as pessoas param, tiram fotos e compartilham sem que ninguém peça. A escala desencadeia uma resposta que mídia convencional simplesmente não consegue replicar.",
        img: "/images/gallery/SaveClip.App_598409687_17877354618448342_6209046712205705990_n.jpg",
      },
      {
        icon: "🏪",
        title: "Ativações no Varejo",
        desc: "Infláveis no ponto de venda são comprovadamente capazes de gerar aumentos de sell-out de 30-40%. O produto gigante captura atenção, gera associação de marca e direciona o consumidor para a gôndola — tudo ao mesmo tempo.",
        img: "/images/gallery/SaveClip.App_598635946_17877354609448342_3340277087935498923_n.jpg",
      },
      {
        icon: "⚡",
        title: "Marketing de Guerrilha",
        desc: "Posicione uma estrutura inflável gigante em um local inesperado — praça pública, rooftop urbano, entrada de metrô — e crie um evento de mídia espontânea. O contraste entre a escala do inflável e o ambiente cotidiano é o gatilho de atenção mais poderoso no espaço físico.",
        img: "/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg",
      },
      {
        icon: "🎈",
        title: "Aeromarketing",
        desc: "Balões de ar quente personalizados comparáveis a edifícios de 7 andares. Comprovados por institutos dos EUA e Canadá como 10× mais eficientes que qualquer mídia convencional. Voos cativos ou livres, com identidade visual completa da marca.",
        img: "/images/gallery/SaveClip.App_604055838_17878831959448342_7903443883004681535_n.jpg",
      },
    ],
    caseStudy: {
      title: "A Lata Monumental — Marca Global de Bebidas",
      challenge:
        "Uma marca global de refrigerantes precisava de visibilidade em 50 pontos de venda simultâneos em um único final de semana. A logística parecia impossível: como garantir montadores especializados em 50 locais ao mesmo tempo?",
      solution:
        "Réplicas infláveis de 4 metros com motor Sirocco HideVENT. A facilidade de montagem (2 minutos) permitiu que a própria equipe de promotores instalasse as estruturas sem treinamento especializado — eliminando completamente o custo de montadores externos.",
      result:
        "A ativação gerou aumento expressivo de sell-out em todos os 50 pontos e o custo do ativo foi amortizado em apenas 3 dias de uso.",
      metrics: [
        { value: "+35%", label: "Sell-out durante a ativação" },
        { value: "50", label: "PDVs simultâneos, 1 fim de semana" },
        { value: "3 dias", label: "Para amortizar o custo do ativo" },
      ],
      img: "/images/gallery/SaveClip.App_598989249_17877354600448342_7726145296482408610_n.jpg",
    },
    products: [
      {
        title: "Infláveis Gigantes",
        href: "/produtos/inflaveis-gigantes",
        desc: "Réplicas de produtos em escala monumental — o gatilho de compartilhamento social mais eficaz.",
      },
      {
        title: "Infláveis Personalizados",
        href: "/produtos/inflaveis-personalizados",
        desc: "Qualquer formato para qualquer campanha. ROI mensurável por ativação.",
      },
      {
        title: "Totens & Displays",
        href: "/produtos/totens-displays",
        desc: "Presença vertical de marca em pontos estratégicos — PDVs, eventos e espaço público.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(SECTORS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = SECTORS_DATA[slug];
  if (!sector) return {};
  return {
    title: sector.title,
    description: sector.description,
    alternates: { canonical: `https://amazeballoons.com.br/setores/${slug}` },
  };
}

export default async function SetorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = SECTORS_DATA[slug];
  if (!sector) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "https://amazeballoons.com" },
          { name: "Setores", url: "https://amazeballoons.com.br/setores" },
          { name: sector.h1, url: `https://amazeballoons.com.br/setores/${slug}` },
        ]}
      />
      <Header />
      <main className="flex-1 pt-24">

        {/* 1. Hero */}
        <section className="py-24 px-4 lg:px-8 bg-gradient-to-br from-purple-dark to-purple text-white">
          <div className="max-w-7xl mx-auto">
            <p className="section-label text-orange mb-6">Setor</p>
            <h1
              className="text-4xl lg:text-6xl font-black leading-tight mb-6 uppercase"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              {sector.h1}
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mb-10 leading-relaxed">
              {sector.heroText}
            </p>
            <Link
              href="/orcamento"
              className="btn-hover-inflate inline-flex items-center gap-3 h-14 px-10 bg-orange text-white rounded-full font-black text-base uppercase tracking-wide shadow-xl"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Solicitar Orçamento Grátis →
            </Link>
          </div>
        </section>

        {/* 2. Stats bar */}
        <section className="bg-on-surface py-10 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4">
            {sector.stats.map((stat) => (
              <div
                key={stat.label}
                className={`${stat.color} rounded-xl p-6 flex flex-col justify-end aspect-square`}
              >
                <p
                  className="text-4xl font-black leading-none mb-2"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  {stat.number}
                </p>
                <p className="text-sm font-medium opacity-80 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Casos de uso */}
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-3xl lg:text-4xl font-black mb-12 uppercase"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              ONDE OS INFLÁVEIS AMAZE SÃO USADOS
            </h2>
            <div className="flex flex-col gap-6">
              {sector.useCases.map((uc) => (
                <div
                  key={uc.title}
                  className="bg-surface-container-low rounded-xl border border-border overflow-hidden flex flex-col sm:flex-row"
                >
                  {/* Imagem à esquerda */}
                  {uc.img && (
                    <div className="sm:w-56 sm:shrink-0 h-48 sm:h-auto relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={uc.img}
                        alt={uc.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {/* Conteúdo */}
                  <div className="flex flex-col justify-center p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="size-10 bg-primary/8 rounded-lg flex items-center justify-center text-xl shrink-0">
                        {uc.icon}
                      </div>
                      <h3
                        className="text-lg font-black uppercase leading-tight"
                        style={{ fontFamily: "var(--font-headline)" }}
                      >
                        {uc.title}
                      </h3>
                    </div>
                    <p className="text-muted text-sm leading-relaxed">{uc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Case Study (condicional) */}
        {sector.caseStudy && (
          <section className="relative py-24 px-4 lg:px-8 overflow-hidden">
            {/* Imagem de fundo com overlay degradê */}
            {sector.caseStudy.img && (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={sector.caseStudy.img}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Degradê: escuro à esquerda/baixo, transparente à direita/cima */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
              </>
            )}
            {/* Fallback sem imagem */}
            {!sector.caseStudy.img && <div className="absolute inset-0 bg-on-surface" />}

            <div className="relative z-10 max-w-7xl mx-auto">
              <p className="section-label text-orange mb-4">Case de Sucesso</p>
              <h2
                className="text-3xl lg:text-4xl font-black text-white mb-12 uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                {sector.caseStudy.title}
              </h2>

              {/* Desafio / Solução / Resultado */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-xl p-8">
                  <p className="text-orange text-xs font-black uppercase tracking-widest mb-3">
                    Desafio
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {sector.caseStudy.challenge}
                  </p>
                </div>
                <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-xl p-8">
                  <p className="text-orange text-xs font-black uppercase tracking-widest mb-3">
                    Solução
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {sector.caseStudy.solution}
                  </p>
                </div>
                <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-xl p-8">
                  <p className="text-orange text-xs font-black uppercase tracking-widest mb-3">
                    Resultado
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {sector.caseStudy.result}
                  </p>
                </div>
              </div>

              {/* Métricas */}
              <div className="grid grid-cols-3 gap-4">
                {sector.caseStudy.metrics.map((m, i) => (
                  <div
                    key={m.label}
                    className={`rounded-xl p-6 text-center ${i === 0 ? "bg-orange text-white" : i === 1 ? "bg-primary text-on-primary" : "bg-white/10 text-inverse-on-surface"}`}
                  >
                    <p
                      className="text-3xl lg:text-4xl font-black mb-2"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {m.value}
                    </p>
                    <p className="text-sm font-medium opacity-80 leading-snug">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. Produtos recomendados */}
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-3xl lg:text-4xl font-black mb-12 uppercase"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              PRODUTOS RECOMENDADOS PARA ESTE SETOR
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {sector.products.map((p) => (
                <div
                  key={p.title}
                  className="border border-border rounded-xl p-8 flex flex-col gap-4 hover:border-primary/30 hover:shadow-lg transition-all ambient-shadow"
                >
                  <h3
                    className="text-lg font-black uppercase"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed flex-1">{p.desc}</p>
                  <Link
                    href={p.href}
                    className="text-primary text-sm font-black uppercase tracking-widest hover:underline"
                  >
                    Ver produto →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CTA final */}
        <section className="py-24 px-4 lg:px-8 bg-purple text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-3xl lg:text-4xl font-black mb-4 uppercase"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              SOLICITE UM PROJETO PARA {sector.h1}
            </h2>
            <p className="text-white/70 mb-10 text-lg">
              Orçamento gratuito em 24 horas. Proposta técnica com especificação completa de materiais.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/orcamento"
                className="btn-hover-inflate inline-flex items-center gap-3 h-14 px-10 bg-orange text-white rounded-full font-black text-base uppercase tracking-wide shadow-xl"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Solicitar Orçamento Grátis →
              </Link>
              <Link
                href="/setores"
                className="text-white/70 hover:text-white text-sm font-black uppercase tracking-widest transition-colors"
              >
                Ver todos os setores →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
