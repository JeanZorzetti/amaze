import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema, FAQSchema } from "@/components/SchemaOrg";

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
  products: Array<{ title: string; href: string; desc: string; img: string }>;
  whyAmaze: Array<{ icon: string; title: string; desc: string }>;
  testimonial: { quote: string; name: string; company: string; role: string };
  faqs: Array<{ question: string; answer: string }>;
};

const GALLERY = [
  "/images/gallery/SaveClip.App_659586715_17891981046448342_7629493146823458172_n.jpg",
  "/images/gallery/SaveClip.App_604055838_17878831959448342_7903443883004681535_n.jpg",
  "/images/gallery/SaveClip.App_632153979_17885887683448342_7600628157039576746_n.jpg",
  "/images/gallery/SaveClip.App_598904006_17877354627448342_7377931598932079293_n.jpg",
  "/images/gallery/SaveClip.App_598989249_17877354600448342_7726145296482408610_n.jpg",
  "/images/gallery/SaveClip.App_598834557_17877354591448342_4532624735367015725_n.jpg",
  "/images/gallery/SaveClip.App_589648017_17876804814448342_8600020723861108054_n.jpg",
  "/images/gallery/SaveClip.App_598409687_17877354618448342_6209046712205705990_n.jpg",
  "/images/gallery/SaveClip.App_598635946_17877354609448342_3340277087935498923_n.jpg",
];

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
      { icon: "🚀", title: "Lançamentos de Produtos", desc: "O momento do lançamento é único — e precisa de uma presença visual que materialize a grandiosidade do novo produto. Réplicas gigantes de até 15m criam uma revelação inesquecível. A escala do inflável comunica o tamanho da inovação antes de qualquer word-of-mouth.", img: GALLERY[0] },
      { icon: "🏢", title: "Ativações de Marca", desc: "Transforme qualquer espaço corporativo em um ambiente de marca imersivo. Arenas infláveis personalizadas, totens e displays criam uma experiência que o público associa diretamente à sua identidade — muito além de banners e painéis.", img: GALLERY[1] },
      { icon: "🎤", title: "Conferências e Cúpulas", desc: "Portais de entrada com identidade visual, totens de patrocinadores e mascotes gigantes transformam conferências em experiências memoráveis. Cada ponto de contato reforça a mensagem da marca.", img: GALLERY[2] },
      { icon: "📊", title: "Estandes em Feiras B2B", desc: "Em eventos de networking, quem domina o espaço lidera a conversa. Infláveis gigantes tornam seu estande o ponto de referência do evento — garantindo visibilidade mesmo antes de o visitante chegar ao seu corredor.", img: GALLERY[3] },
    ],
    caseStudy: {
      title: "Arena Interativa — Empresa de Tecnologia",
      challenge: "Uma empresa de tecnologia precisava de um espaço imersivo e seguro para demonstrações de produtos em uma feira com alto fluxo de visitantes. O desafio: criar um ambiente que isolasse as demonstrações do ruído do evento, mas que continuasse atraindo visitantes.",
      solution: "Arena Inflável de 6×6 metros com redes de proteção removíveis a laser, permitindo instalação de telas interativas e projeções internas. Sistema de fluxo contínuo Amaze garantiu estabilidade mesmo com entrada e saída constante de pessoas.",
      result: "A Arena tornou-se o ponto focal do evento, superando todos os estandes tradicionais do pavilhão.",
      metrics: [
        { value: "200%", label: "Mais engajamento vs estandes padrão" },
        { value: "50%", label: "Aumento na coleta de leads qualificados" },
        { value: "6×6m", label: "Arena personalizada com proteção interna" },
      ],
      img: GALLERY[8],
    },
    products: [
      { title: "Infláveis Personalizados", href: "/produtos/inflaveis-personalizados", desc: "Qualquer formato, cor ou tamanho. Identidade visual da marca em escala monumental.", img: GALLERY[0] },
      { title: "Infláveis Gigantes", href: "/produtos/inflaveis-gigantes", desc: "Réplicas de produtos com até 15m de altura. Presença que domina qualquer espaço.", img: GALLERY[3] },
      { title: "Totens & Displays", href: "/produtos/totens-displays", desc: "Torres de marca verticais: máximo impacto com mínima área de solo.", img: GALLERY[6] },
    ],
    whyAmaze: [
      { icon: "⚡", title: "Instalação Autônoma em 2 min", desc: "Motor Sirocco HideVENT embutido — sua equipe instala sem montadores externos, sem custo adicional no dia do evento." },
      { icon: "🎨", title: "Impressão Fotorrealística", desc: "Poliéster 300g/m² com impressão UV de alta resolução. A identidade visual da marca preservada em qualquer escala." },
      { icon: "🔒", title: "Garantia de 3 Anos Sem Exclusões", desc: "A única garantia irrestrita do setor. Cobre vento, uso intenso e condições externas sem letra miúda." },
    ],
    testimonial: {
      quote: "O inflável virou o ponto de referência do evento. Toda visita ao stand começava com 'vou naquele inflável gigante'. Nunca tivemos tanto tráfego qualificado em uma feira.",
      name: "Ricardo Almeida",
      company: "Grupo Horizonte",
      role: "Gerente de Marketing",
    },
    faqs: [
      { question: "Qual o prazo de produção para um inflável corporativo?", answer: "A maioria dos projetos corporativos leva de 3 a 5 semanas. Para projetos com alto nível de personalização gráfica ou formatos complexos, pode chegar a 6 semanas. Confirmamos o prazo antes de iniciar a produção." },
      { question: "É possível usar o inflável em ambientes internos?", answer: "Sim. Nossos infláveis funcionam em ambientes internos (pavilhões, arenas, centros de convenções) com o motor Sirocco HideVENT operando em fluxo contínuo silencioso. Não é necessário ancora — apenas espaço adequado à altura da estrutura." },
      { question: "Quantas vezes o inflável pode ser reutilizado?", answer: "A vida útil típica é de 5 a 10 anos com uso regular. O Poliéster 300g/m² com tratamento antifungo e costura estrutural de 6–8 pontos por polegada garante durabilidade mesmo em eventos frequentes." },
      { question: "Vocês atendem eventos fora de Florianópolis?", answer: "Sim. Atendemos projetos em todo o Brasil e nas Américas. Nossa logística cobre o transporte seguro do inflável (compactado em bag de transporte) e podemos enviar um técnico para instalação em qualquer cidade." },
    ],
  },

  "feiras-exposicoes": {
    title: "Infláveis para Feiras e Exposições — Displays de Estande e Réplicas Gigantes",
    h1: "FEIRAS & EXPOSIÇÕES",
    description: "Destaque-se em qualquer exposição com infláveis e réplicas que atraem visitantes de todo o piso.",
    heroText: "Em um ambiente de feira superlotado, altura e escala são os seus diferenciais mais poderosos. Infláveis gigantes garantem que seu estande seja visível de todos os ângulos do pavilhão — antes mesmo de o visitante saber o que você vende.",
    stats: [
      { number: "10×", label: "Mais Visibilidade vs Estande Convencional", color: "bg-primary text-on-primary" },
      { number: "2 min", label: "Montagem com Motor Sirocco HideVENT", color: "bg-orange text-white" },
      { number: "15m+", label: "Altura Máxima de Réplicas", color: "bg-on-surface text-inverse-on-surface" },
    ],
    useCases: [
      { icon: "🎪", title: "Réplicas de Produtos", desc: "Seu produto em escala monumental. Réplicas infláveis 3D com impressão fotorrealística criam um ponto de referência que atrai visitantes de qualquer ponto do pavilhão. É a ferramenta de geração de tráfego mais eficaz em feiras.", img: GALLERY[4] },
      { icon: "🔵", title: "Arcos de Entrada para Estandes", desc: "Um portal inflável com a identidade visual da sua marca define o território do estande antes de qualquer conversa. Cria demarcação natural do espaço e guia o fluxo de visitantes para dentro da sua área.", img: GALLERY[5] },
      { icon: "📐", title: "Totens e Pontos de Referência", desc: "Compactos no solo, imponentes em altura. Totens de 3 a 7m de altura criam um marco vertical que funciona como GPS do pavilhão: 'vire onde está o [seu produto] gigante'.", img: GALLERY[6] },
      { icon: "🏟️", title: "Arenas Imersivas", desc: "Para demonstrações de produto ou ativações interativas, arenas infláveis criam um espaço fechado, controlado e completamente personalizado. Ideal para tech, pharma e setores que precisam de um ambiente de demonstração isolado.", img: GALLERY[7] },
    ],
    caseStudy: {
      title: "Réplica Gigante de Produto — Feira Internacional NYC",
      challenge: "Uma marca global precisava de destaque em uma das maiores feiras de sua categoria, com centenas de expositores competindo pela atenção dos mesmos compradores.",
      solution: "Réplica inflável do produto principal com 7 metros de altura, impressão fotorrealística e sistema Sirocco HideVENT para montagem autônoma pela equipe da marca — sem montadores externos.",
      result: "O estande tornou-se o ponto de referência da feira, gerando fila de visitantes e cobertura espontânea por jornalistas de trade publications do setor.",
      metrics: [
        { value: "7m", label: "Altura da réplica inflável" },
        { value: "2 min", label: "Montagem pela equipe da marca" },
        { value: "10×", label: "Aumento de tráfego vs feiras anteriores" },
      ],
      img: GALLERY[0],
    },
    products: [
      { title: "Infláveis Gigantes", href: "/produtos/inflaveis-gigantes", desc: "Réplicas fotorrealísticas de qualquer produto, em escala monumental.", img: GALLERY[3] },
      { title: "Arcos & Portais", href: "/produtos/arcos-portais", desc: "Entradas para estandes que definem território e guiam visitantes.", img: GALLERY[5] },
      { title: "Totens & Displays", href: "/produtos/totens-displays", desc: "Pontos de referência verticais visíveis de qualquer ponto do pavilhão.", img: GALLERY[6] },
    ],
    whyAmaze: [
      { icon: "📐", title: "Réplicas em Escala Real", desc: "Do esboço 3D à peça final: reproduzimos qualquer produto com fidelidade fotorrealística em qualquer escala, até 15m de altura." },
      { icon: "⚡", title: "Montagem Sem Equipe Técnica", desc: "O motor Sirocco HideVENT embutido permite que sua própria equipe de promotores monte e desmonte o inflável em 2 minutos — sem custo adicional." },
      { icon: "✈️", title: "Logística Internacional", desc: "Entregamos e damos suporte de instalação em qualquer feira nas Américas. Caixa de transporte compacta, fácil de despachar como carga." },
    ],
    testimonial: {
      quote: "Nosso estande ficou visível do outro lado do pavilhão. O retorno sobre o investimento foi mensurável já no primeiro evento — geramos mais leads em 3 dias do que em todo o ano anterior.",
      name: "Fernanda Costa",
      company: "TechExpo Brasil",
      role: "Diretora Comercial",
    },
    faqs: [
      { question: "Qual a altura máxima possível para um inflável de feira?", answer: "Produzimos réplicas de até 15m ou mais de altura. O limite prático costuma ser o pé-direito do pavilhão, não a capacidade de fabricação. Para feiras externas, o limite é definido apenas pelas condições de vento e ancoragem." },
      { question: "Como transportar o inflável para outra cidade ou país?", answer: "Todos os nossos infláveis são fornecidos com bag de transporte compacta. Estruturas de até 7m cabem em mala extra-grande ou caixa de papelão reforçada. Para estruturas maiores, usamos caixas de madeira para frete seguro." },
      { question: "O inflável aguenta o uso intenso durante toda uma feira de 4 dias?", answer: "Sim. O sistema de fluxo contínuo mantém pressão constante 24 horas por dia. Testamos cada peça com 72h de operação contínua antes de entregar. A garantia de 3 anos cobre uso intenso em eventos." },
      { question: "É possível personalizar com múltiplos logos de patrocinadores?", answer: "Sim. Especialmente arcos e totens, que têm múltiplas faces. Definimos a área de cada patrocinador durante a etapa de design e aprovação em 3D — antes de qualquer costura." },
    ],
  },

  "esportes-corridas": {
    title: "Infláveis para Eventos Esportivos — Arcos de Corrida e Displays de Patrocinadores",
    h1: "ESPORTES & CORRIDAS",
    description: "Arcos infláveis, totens de patrocinadores e displays gigantes para maratonas, corridas, eventos esportivos e competições atléticas. Instalação em 2 minutos.",
    heroText: "Eventos esportivos oferecem visibilidade de marca excepcional — alto fluxo de pessoas, cobertura midiática intensa e públicos apaixonados. Nossos infláveis são projetados para condições externas rigorosas e instalação rápida por equipes reduzidas.",
    stats: [
      { number: "2 min", label: "Instalação do Arco (Motor Sirocco)", color: "bg-primary text-on-primary" },
      { number: "300 kg/f", label: "Resistência à Tração da Ancoragem", color: "bg-orange text-white" },
      { number: "3 anos", label: "Garantia Sem Exclusão por Vento", color: "bg-on-surface text-inverse-on-surface" },
    ],
    useCases: [
      { icon: "🏁", title: "Arcos de Chegada e Largada", desc: "O ponto mais fotografado de qualquer corrida. Arcos infláveis personalizados com identidade do evento e patrocinadores garantem que sua marca apareça em todas as fotos de chegada. Disponíveis de 3m a 10m de largura, com ancoragem para vento.", img: GALLERY[8] },
      { icon: "🏃", title: "Maratonas e Corridas 5K/10K", desc: "Da largada à chegada, os infláveis demarcam o percurso e posicionam patrocinadores nos pontos de maior concentração de atletas e espectadores. Instalação em 2 minutos com o motor Sirocco HideVENT — sem precisar de equipe técnica especializada.", img: GALLERY[0] },
      { icon: "🦁", title: "Mascotes Infláveis de Equipes", desc: "O mascote da equipe ou do evento em escala gigante. Cria engajamento imediato com o público, gera conteúdo espontâneo nas redes sociais e reforça a identidade da competição ou do clube.", img: GALLERY[1] },
      { icon: "🏆", title: "Zonas de Patrocinadores", desc: "Totens e displays de patrocinadores ao longo do percurso e nas zonas de descanso criam múltiplos pontos de contato da marca com atletas e espectadores — maximizando o ROI do patrocínio.", img: GALLERY[2] },
    ],
    caseStudy: {
      title: "Arco de Corrida com Marca — Maratona de Miami",
      challenge: "Patrocinador de uma maratona precisava de visibilidade máxima no ponto de maior concentração de câmeras: a linha de chegada. O desafio era uma instalação rápida e segura em ambiente externo com vento variável.",
      solution: "Arco inflável de 8m de largura com sistema de ancoragem Amaze de 300 kg/f, motor Sirocco HideVENT (instalação em 2 min pela equipe do evento) e impressão fotográfica com identidade do patrocinador.",
      result: "O arco apareceu em todas as coberturas midiáticas do evento e em mais de 12.000 fotos de chegada postadas nas redes sociais pelos atletas.",
      metrics: [
        { value: "12.000+", label: "Fotos com o arco nas redes sociais" },
        { value: "2 min", label: "Tempo de instalação no local" },
        { value: "8m", label: "Largura do arco personalizado" },
      ],
      img: GALLERY[3],
    },
    products: [
      { title: "Arcos & Portais", href: "/produtos/arcos-portais", desc: "Arcos de chegada e largada de 3m a 10m de largura com identidade visual completa.", img: GALLERY[5] },
      { title: "Mascotes Infláveis", href: "/produtos/mascotes-inflaveis", desc: "Mascotes gigantes de equipes e eventos que dominam qualquer espaço.", img: GALLERY[1] },
      { title: "Totens & Displays", href: "/produtos/totens-displays", desc: "Pontos de patrocinadores ao longo do percurso e nas zonas de espectadores.", img: GALLERY[6] },
    ],
    whyAmaze: [
      { icon: "🌬️", title: "Ancoragem 300 kg/f Certificada", desc: "Sistema de ancoragem com argola 38mm aço galvanizado e 6 camadas de reforço. Garantia de resistência ao vento sem exclusões." },
      { icon: "⚡", title: "Instalação em 2 Minutos", desc: "Motor Sirocco HideVENT embutido. Sua equipe de 2 pessoas monta e desmonta o arco sem equipamentos especiais — mesmo em campo aberto." },
      { icon: "📸", title: "Máxima Visibilidade para Patrocinadores", desc: "Superfície de impressão de alta resolução que aparece nítida em fotos e transmissões ao vivo — o ROI de patrocínio mais mensurável do esporte." },
    ],
    testimonial: {
      quote: "O arco apareceu em mais de 12 mil fotos no Instagram só na linha de chegada. Nenhum outro formato de patrocínio gerou esse volume de mídia espontânea. Vale o investimento em qualquer corrida.",
      name: "Carlos Mendes",
      company: "RunBrasil Events",
      role: "Diretor de Operações",
    },
    faqs: [
      { question: "O arco inflável aguenta vento forte em ambiente externo?", answer: "Sim. Nosso sistema de ancoragem suporta 300 kg/f de tração e é certificado para uso externo. A garantia de 3 anos cobre explicitamente danos por vento — sem exclusões. Em condições extremas (rajadas acima de 80 km/h), recomendamos deflacionar preventivamente." },
      { question: "Qual a largura mínima e máxima de um arco de corrida?", answer: "Produzimos arcos de 3m a 12m de largura. O mais comum em corridas de rua é 6m a 8m, que acomoda bem 4–6 atletas lado a lado na linha de chegada. Para maratonas com maior volume de participantes simultâneos, podemos ir até 12m." },
      { question: "É possível montar e desmontar o arco várias vezes no mesmo evento?", answer: "Sim. O motor Sirocco HideVENT permite que um arco de 6m seja inflado e deflado em menos de 2 minutos. Ideal para eventos com múltiplas corridas ou checkpoints ao longo do percurso." },
      { question: "Vocês fornecem o arco para locação ou apenas venda?", answer: "Trabalhamos principalmente com venda, pois os custos de logística de locação tornam a equação desfavorável para o cliente. Com uso em 3–4 eventos por ano, o ativo se paga rapidamente e permanece disponível sem depender de terceiros." },
    ],
  },

  "festas-celebracoes": {
    title: "Infláveis para Festas e Celebrações — Festivais de Música e Eventos Temáticos",
    h1: "FESTAS & CELEBRAÇÕES",
    description: "Infláveis personalizados para festivais de música, aniversários corporativos e celebrações públicas. Personagens gigantes, arcos e displays que criam momentos inesquecíveis.",
    heroText: "De festivais de música a celebrações de datas especiais, infláveis personalizados trazem um elemento de espetáculo que eleva qualquer evento. Estruturas gigantes criam pontos de foto naturais e geram conteúdo orgânico instantâneo.",
    stats: [
      { number: "10×", label: "Mais Shares vs Ativações Convencionais", color: "bg-primary text-on-primary" },
      { number: "5-10 anos", label: "Vida Útil Típica", color: "bg-orange text-white" },
      { number: "500+", label: "Projetos para Celebrações", color: "bg-on-surface text-inverse-on-surface" },
    ],
    useCases: [
      { icon: "🎵", title: "Festivais de Música", desc: "Portais de entrada com a identidade visual do festival, personagens gigantes que se tornam o símbolo do evento e displays de patrocinadores ao longo da área. Cada inflável é um ponto de foto natural — gerando cobertura espontânea nas redes sociais.", img: GALLERY[3] },
      { icon: "🎂", title: "Aniversários Corporativos", desc: "Comemore marcos importantes da empresa com a mesma grandiosidade que você construiu o negócio. Infláveis personalizados com logotipo, ano de fundação ou slogan transformam festas corporativas em declarações de identidade.", img: GALLERY[4] },
      { icon: "🎃", title: "Ativações Sazonais", desc: "Natal, Halloween, Carnaval, Páscoa — as datas comemorativas são oportunidades únicas de ativação de marca. Personagens temáticos gigantes criam associações emocionais com sua marca que permanecem muito além da data.", img: GALLERY[5] },
      { icon: "🌟", title: "Celebrações Públicas", desc: "Eventos municipais, inaugurações e celebrações de rua ganham escala e identidade visual com infláveis gigantes. Estruturas de 10m+ criam marcos visuais que orientam o fluxo de pessoas e geram cobertura midiática espontânea.", img: GALLERY[6] },
    ],
    caseStudy: null,
    products: [
      { title: "Mascotes Infláveis", href: "/produtos/mascotes-inflaveis", desc: "Personagens gigantes de qualquer tema — do Papai Noel ao mascote da marca.", img: GALLERY[1] },
      { title: "Arcos & Portais", href: "/produtos/arcos-portais", desc: "Entradas temáticas que definem o ambiente do evento desde a chegada.", img: GALLERY[5] },
      { title: "Infláveis Personalizados", href: "/produtos/inflaveis-personalizados", desc: "Qualquer formato, qualquer tema, qualquer escala.", img: GALLERY[0] },
    ],
    whyAmaze: [
      { icon: "🎨", title: "Qualquer Personagem, Qualquer Tema", desc: "Do Papai Noel ao mascote da marca, do unicórnio ao totem de cervejaria — se você tem uma referência visual, nós fabricamos em escala gigante." },
      { icon: "📱", title: "Ativador Natural de Conteúdo", desc: "Estruturas gigantes geram compartilhamento espontâneo. Cada foto postada pelo público é mídia orgânica gratuita — o ROI que nenhuma campanha paga consegue replicar." },
      { icon: "🔁", title: "Reutilizável por Anos", desc: "Vida útil de 5 a 10 anos. Amortize o investimento ao longo de dezenas de eventos — festas, datas comemorativas, ativações sazonais." },
    ],
    testimonial: {
      quote: "O personagem gigante foi o símbolo do festival. As pessoas vinham especificamente tirar foto com ele. Em três horas, já tínhamos vídeos viralizando sem nenhuma campanha paga.",
      name: "Juliana Ramos",
      company: "Festival Verão Vivo",
      role: "Produtora Executiva",
    },
    faqs: [
      { question: "Vocês fazem réplicas de personagens licenciados (Disney, Marvel, etc)?", answer: "Produzimos réplicas de personagens com autorização do licenciante ou a partir de briefings originais do cliente. Para personagens licenciados, o cliente precisa apresentar a autorização de uso da marca antes do início da produção." },
      { question: "Qual o menor tamanho disponível para um mascote inflável?", answer: "Fabricamos mascotes a partir de 2m de altura. Para eventos em ambientes internos com pé-direito mais baixo, o mais comum é 3m a 5m. Mascotes de até 2m podem ser operados por uma pessoa interna (wearable inflatable)." },
      { question: "Como armazenar o inflável entre eventos?", answer: "Todos os nossos infláveis acompanham uma bag de transporte compacta. Após deflacionar, a estrutura dobra para cerca de 10–20% do volume inflado e pode ser guardada em qualquer armário seco. Não é necessário qualquer cuidado especial de armazenamento." },
      { question: "O inflável pode ser usado na chuva?", answer: "Sim. O Poliéster 300g/m² com tratamento antifungo e impermeabilizante é resistente à chuva. A eletricidade do motor é protegida por invólucro à prova d'água. Recomendamos deflacionar em caso de tempestades com raios." },
    ],
  },

  "marketing-publicidade": {
    title: "Infláveis Publicitários — Marketing Exterior e Campanhas de Ativação de Marca",
    h1: "MARKETING & PUBLICIDADE",
    description: "Infláveis publicitários com 10× mais eficiência que mídia exterior convencional. Réplicas gigantes de produtos e displays que geram mídia espontânea e ROI mensurável.",
    heroText: "Enquanto a maioria das marcas compete pelos mesmos espaços de mídia convencional, as que dominam infláveis gigantes jogam em uma categoria diferente: impossível de ignorar, impossível de não fotografar, impossível de esquecer.",
    stats: [
      { number: "10×", label: "Mais Eficiência vs Mídia Exterior Convencional", color: "bg-primary text-on-primary" },
      { number: "35%", label: "Aumento de Sell-Out (Case Lata Monumental)", color: "bg-orange text-white" },
      { number: "5-20×", label: "ROI em Mídia Espontânea", color: "bg-on-surface text-inverse-on-surface" },
    ],
    useCases: [
      { icon: "📣", title: "Publicidade Exterior", desc: "Uma réplica inflável de 10m do seu produto no ponto de venda ou na entrada de um evento faz o que nenhum outdoor consegue: as pessoas param, tiram fotos e compartilham sem que ninguém peça. A escala desencadeia uma resposta que mídia convencional simplesmente não consegue replicar.", img: GALLERY[7] },
      { icon: "🏪", title: "Ativações no Varejo", desc: "Infláveis no ponto de venda são comprovadamente capazes de gerar aumentos de sell-out de 30-40%. O produto gigante captura atenção, gera associação de marca e direciona o consumidor para a gôndola — tudo ao mesmo tempo.", img: GALLERY[8] },
      { icon: "⚡", title: "Marketing de Guerrilha", desc: "Posicione uma estrutura inflável gigante em um local inesperado — praça pública, rooftop urbano, entrada de metrô — e crie um evento de mídia espontânea. O contraste entre a escala do inflável e o ambiente cotidiano é o gatilho de atenção mais poderoso no espaço físico.", img: GALLERY[0] },
      { icon: "🎈", title: "Aeromarketing", desc: "Balões de ar quente personalizados comparáveis a edifícios de 7 andares. Comprovados por institutos dos EUA e Canadá como 10× mais eficientes que qualquer mídia convencional. Voos cativos ou livres, com identidade visual completa da marca.", img: GALLERY[1] },
    ],
    caseStudy: {
      title: "A Lata Monumental — Marca Global de Bebidas",
      challenge: "Uma marca global de refrigerantes precisava de visibilidade em 50 pontos de venda simultâneos em um único final de semana. A logística parecia impossível: como garantir montadores especializados em 50 locais ao mesmo tempo?",
      solution: "Réplicas infláveis de 4 metros com motor Sirocco HideVENT. A facilidade de montagem (2 minutos) permitiu que a própria equipe de promotores instalasse as estruturas sem treinamento especializado — eliminando completamente o custo de montadores externos.",
      result: "A ativação gerou aumento expressivo de sell-out em todos os 50 pontos e o custo do ativo foi amortizado em apenas 3 dias de uso.",
      metrics: [
        { value: "+35%", label: "Sell-out durante a ativação" },
        { value: "50", label: "PDVs simultâneos, 1 fim de semana" },
        { value: "3 dias", label: "Para amortizar o custo do ativo" },
      ],
      img: GALLERY[4],
    },
    products: [
      { title: "Infláveis Gigantes", href: "/produtos/inflaveis-gigantes", desc: "Réplicas de produtos em escala monumental — o gatilho de compartilhamento social mais eficaz.", img: GALLERY[3] },
      { title: "Infláveis Personalizados", href: "/produtos/inflaveis-personalizados", desc: "Qualquer formato para qualquer campanha. ROI mensurável por ativação.", img: GALLERY[0] },
      { title: "Totens & Displays", href: "/produtos/totens-displays", desc: "Presença vertical de marca em pontos estratégicos — PDVs, eventos e espaço público.", img: GALLERY[6] },
    ],
    whyAmaze: [
      { icon: "📊", title: "ROI Mensurável por Ativação", desc: "Infláveis geram +35% de sell-out em PDV e 5–20× de retorno em mídia espontânea. Métricas reais, não estimativas de GRP." },
      { icon: "🔁", title: "Ativo, Não Despesa", desc: "Ao contrário de mídia paga, o inflável é um ativo que se amortiza. Usado em 3–4 ativações, o ROI acumulado supera qualquer campanha de mídia tradicional equivalente." },
      { icon: "⚡", title: "Escala Nacional em Dias", desc: "Motor Sirocco embutido permite que promotores instalem em 2 min. 50 PDVs simultâneos, sem montadores externos, sem logística de equipe especializada." },
    ],
    testimonial: {
      quote: "Colocamos réplicas em 50 PDVs em um fim de semana. A equipe de promotores instalava em 2 minutos. O custo foi amortizado em 3 dias de ativação — nunca vi ROI assim em nenhuma outra mídia.",
      name: "Ana Beatriz Souza",
      company: "Agência Impulso",
      role: "Head de Trade Marketing",
    },
    faqs: [
      { question: "Qual a diferença entre um inflável publicitário e um banner/outdoor?", answer: "Escala, tridimensionalidade e capacidade de gerar compartilhamento espontâneo. Um inflável de 10m é visível a centenas de metros, cria uma experiência física que o público quer fotografar e compartilhar — gerando mídia orgânica que um outdoor plano simplesmente não consegue." },
      { question: "Como calcular o ROI de uma ativação com inflável?", answer: "A métrica mais direta é o sell-out no PDV durante o período de ativação vs períodos anteriores. Além disso, é possível medir o alcance de mídia espontânea (posts, stories, reels com o inflável). Casos documentados mostram aumentos de 30–40% de sell-out e ROI de mídia de 5–20× o investimento." },
      { question: "O inflável pode ser usado na via pública?", answer: "Sim, com as devidas autorizações municipais. Nossa equipe pode orientar sobre os procedimentos de licença para uso em espaço público, que variam por cidade. Em áreas privadas (estacionamentos, fachadas de lojas, eventos), não há necessidade de licença." },
      { question: "É possível alugar ao invés de comprar?", answer: "Trabalhamos com venda. Dado o custo de logística e higienização entre locações, a equação financeira favorece fortemente a compra — especialmente para marcas com calendar de eventos regular. Nos primeiros 3 eventos de uso, o ativo já começa a se pagar." },
    ],
  },
};

// Mapa de setores relacionados para cross-linking
const RELATED_SECTORS: Record<string, Array<{ slug: string; label: string; img: string }>> = {
  "eventos-corporativos": [
    { slug: "feiras-exposicoes",    label: "Feiras & Exposições",    img: GALLERY[4] },
    { slug: "marketing-publicidade", label: "Marketing & Publicidade", img: GALLERY[7] },
    { slug: "festas-celebracoes",   label: "Festas & Celebrações",   img: GALLERY[3] },
  ],
  "feiras-exposicoes": [
    { slug: "eventos-corporativos",  label: "Eventos Corporativos",   img: GALLERY[0] },
    { slug: "marketing-publicidade", label: "Marketing & Publicidade", img: GALLERY[7] },
    { slug: "esportes-corridas",     label: "Esportes & Corridas",    img: GALLERY[8] },
  ],
  "esportes-corridas": [
    { slug: "feiras-exposicoes",    label: "Feiras & Exposições",    img: GALLERY[4] },
    { slug: "festas-celebracoes",   label: "Festas & Celebrações",   img: GALLERY[3] },
    { slug: "marketing-publicidade", label: "Marketing & Publicidade", img: GALLERY[7] },
  ],
  "festas-celebracoes": [
    { slug: "esportes-corridas",     label: "Esportes & Corridas",    img: GALLERY[8] },
    { slug: "marketing-publicidade", label: "Marketing & Publicidade", img: GALLERY[7] },
    { slug: "eventos-corporativos",  label: "Eventos Corporativos",   img: GALLERY[0] },
  ],
  "marketing-publicidade": [
    { slug: "eventos-corporativos", label: "Eventos Corporativos",  img: GALLERY[0] },
    { slug: "feiras-exposicoes",    label: "Feiras & Exposições",   img: GALLERY[4] },
    { slug: "festas-celebracoes",   label: "Festas & Celebrações",  img: GALLERY[3] },
  ],
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
  const related = RELATED_SECTORS[slug] ?? [];

  return (
    <>
      <FAQSchema items={sector.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Início",  url: "https://amazeballoons.com" },
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
                  {uc.img && (
                    <div className="sm:w-56 sm:shrink-0 h-48 sm:h-auto relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={uc.img} alt={uc.title} className="w-full h-full object-cover" />
                    </div>
                  )}
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

        {/* 4. Case Study */}
        {sector.caseStudy && (
          <section className="relative py-24 px-4 lg:px-8 overflow-hidden">
            {sector.caseStudy.img && (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={sector.caseStudy.img} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
              </>
            )}
            {!sector.caseStudy.img && <div className="absolute inset-0 bg-on-surface" />}
            <div className="relative z-10 max-w-7xl mx-auto">
              <p className="section-label text-orange mb-4">Case de Sucesso</p>
              <h2
                className="text-3xl lg:text-4xl font-black text-white mb-12 uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                {sector.caseStudy.title}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                {[
                  { label: "Desafio",   text: sector.caseStudy.challenge },
                  { label: "Solução",   text: sector.caseStudy.solution },
                  { label: "Resultado", text: sector.caseStudy.result },
                ].map((item) => (
                  <div key={item.label} className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-xl p-8">
                    <p className="text-orange text-xs font-black uppercase tracking-widest mb-3">{item.label}</p>
                    <p className="text-white/80 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {sector.caseStudy.metrics.map((m, i) => (
                  <div
                    key={m.label}
                    className={`rounded-xl p-6 text-center ${i === 0 ? "bg-orange text-white" : i === 1 ? "bg-primary text-on-primary" : "bg-white/10 text-inverse-on-surface"}`}
                  >
                    <p className="text-3xl lg:text-4xl font-black mb-2" style={{ fontFamily: "var(--font-headline)" }}>{m.value}</p>
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
                <Link
                  key={p.title}
                  href={p.href}
                  className="group flex flex-col rounded-xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="flex flex-col flex-1 p-6 gap-3">
                    <h3
                      className="text-lg font-black uppercase group-hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed flex-1">{p.desc}</p>
                    <span className="text-primary text-sm font-black uppercase tracking-widest flex items-center gap-1.5">
                      Ver produto
                      <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Por que a Amaze para este setor */}
        <section className="py-24 px-4 lg:px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
              <div className="lg:sticky lg:top-32">
                <p className="section-label text-orange mb-4">Nosso Diferencial</p>
                <h2
                  className="text-3xl lg:text-4xl font-black uppercase leading-tight text-text"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  POR QUE A AMAZE<br />
                  <span className="text-primary">PARA {sector.h1}?</span>
                </h2>
              </div>
              <div className="flex flex-col gap-6">
                {sector.whyAmaze.map((item) => (
                  <div key={item.title} className="flex gap-6 bg-white rounded-xl border border-border p-8">
                    <div className="size-12 rounded-xl bg-primary/8 flex items-center justify-center text-2xl shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3
                        className="text-lg font-black uppercase mb-2 text-text"
                        style={{ fontFamily: "var(--font-headline)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Depoimento */}
        <section className="py-20 px-4 lg:px-8 bg-on-surface">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="size-10 text-orange/40 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote
              className="text-xl lg:text-2xl font-black text-inverse-on-surface leading-relaxed mb-8 uppercase"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              "{sector.testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-lg">
                {sector.testimonial.name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm">{sector.testimonial.name}</p>
                <p className="text-white/50 text-xs">{sector.testimonial.role} · {sector.testimonial.company}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ do Setor */}
        <section className="py-24 px-4 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="section-label text-orange mb-4 text-center">Dúvidas Frequentes</p>
            <h2
              className="text-3xl lg:text-4xl font-black mb-12 uppercase text-center"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              PERGUNTAS SOBRE {sector.h1}
            </h2>
            <div className="flex flex-col divide-y divide-border">
              {sector.faqs.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                    <h3 className="font-black text-text text-base leading-snug">{faq.question}</h3>
                    <span className="size-7 rounded-full border border-border flex items-center justify-center shrink-0 text-muted group-open:rotate-45 transition-transform duration-200">
                      <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-muted text-sm leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Outros setores */}
        {related.length > 0 && (
          <section className="py-24 px-4 lg:px-8 bg-surface-container-low">
            <div className="max-w-7xl mx-auto">
              <p className="section-label text-orange mb-4">Explore Mais</p>
              <h2
                className="text-3xl lg:text-4xl font-black mb-12 uppercase"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                OUTROS SETORES QUE ATENDEMOS
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/setores/${r.slug}`}
                    className="group relative h-56 rounded-xl overflow-hidden cursor-pointer"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={r.img} alt={r.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white/60 text-[0.6rem] font-black uppercase tracking-widest mb-1">Setor</p>
                      <h3
                        className="font-black text-white text-lg uppercase leading-tight group-hover:text-orange transition-colors"
                        style={{ fontFamily: "var(--font-headline)" }}
                      >
                        {r.label}
                      </h3>
                    </div>
                    <div className="absolute top-4 right-4 size-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 10. CTA final */}
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
