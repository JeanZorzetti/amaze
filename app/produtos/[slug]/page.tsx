import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { ProductSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaOrg";

type ProductData = {
  title: string;
  h1: string;
  description: string;
  heroText: string;
  icon: string;
  sizes: string[];
  includes: string[];
  material: string;
  benefits: Array<{ icon: string; title: string; desc: string }>;
  useCases: Array<{ title: string; desc: string }>;
  specs: Array<{ label: string; value: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

const PRODUCTS: Record<string, ProductData> = {
  "tendas-inflaveis": {
    title: "Tendas Infláveis — Espaços Cobertos para Eventos e Ativações | Amaze",
    h1: "TENDAS INFLÁVEIS",
    description:
      "Tendas infláveis modulares para eventos, ativações de marca e espaços cobertos temporários. Instalação em minutos, sem ferramentas. De 3m a 20m de vão livre.",
    heroText:
      "Um espaço coberto completo que sai de uma bolsa e está pronto em minutos. Tendas infláveis Amaze entregam vão livre de até 20 metros sem colunas internas — criando ambientes imersivos de marca onde quer que o evento aconteça.",
    icon: "⛺",
    sizes: ["3×3m", "5×5m", "6×10m", "10×20m", "Sob Medida"],
    includes: [
      "Estrutura inflável completa",
      "Motor Sirocco HideVENT industrial",
      "Sistema de ancoragem 300 kg/f",
      "Cobertura lateral opcional",
      "Bolsas de transporte",
      "Kit de reparo rápido Amaze",
    ],
    material:
      "Poliéster Emborrachado 300g/m² com tratamento UV de alta tenacidade e revestimento antifungo. Estrutura tubular em fluxo contínuo — pressão constante garantida durante todo o evento. Resistente à chuva e ao vento.",
    benefits: [
      {
        icon: "⚡",
        title: "Montagem em Minutos",
        desc: "Uma tenda de 6×10m está de pé e pronta em menos de 15 minutos com 2 pessoas. Sem ferramentas, sem peças soltas, sem estrutura metálica para montar. O motor infla e a tenda se ergue sozinha.",
      },
      {
        icon: "🏛️",
        title: "Vão Livre Total",
        desc: "Sem colunas internas. O espaço interior da tenda inflável é 100% aproveitável para exposição, palco, lounge ou ativação. A estrutura é a própria cobertura — não há suportes que interfiram no layout.",
      },
      {
        icon: "🎨",
        title: "Superfície de Marca Total",
        desc: "A cobertura e as laterais da tenda são impressas em cobertura total com a identidade da marca. Do chão ao topo, o espaço é 100% personalizado — uma extensão física da identidade visual.",
      },
      {
        icon: "🔄",
        title: "Portátil e Reutilizável",
        desc: "Desinfla, dobra e cabe em bolsas de transporte. De um evento para o próximo sem custo adicional de estrutura. Vida útil de 5 a 10 anos com os cuidados adequados.",
      },
    ],
    useCases: [
      {
        title: "Ativações de Marca Externas",
        desc: "Leve o ambiente da marca para qualquer praça, parque ou área de grande circulação. A tenda inflável cria um espaço de experiência fechado e personalizado em qualquer localização — sem obra, sem permissão de construção.",
      },
      {
        title: "Estandes em Feiras e Festivais",
        desc: "Abandone o estande modular genérico. Uma tenda inflável personalizada se destaca imediatamente no pavilhão ou no festival — criando um ambiente de marca exclusivo que os visitantes entram, vivenciam e compartilham.",
      },
      {
        title: "Hospitality e Camarotes",
        desc: "Em eventos esportivos, festivais e shows, tendas infláveis criam áreas VIP e hospitality exclusivas com identidade total do patrocinador. Espaço diferenciado, montagem rápida, desmontagem igual.",
      },
      {
        title: "Pop-up Stores e Showrooms",
        desc: "Uma loja temporária completa que pode ser instalada em qualquer lugar. A tenda inflável com identidade da marca cria o ambiente de varejo sem necessidade de ponto fixo — com toda a experiência de uma loja física.",
      },
    ],
    specs: [
      { label: "Vão livre máximo", value: "20m (padrão)" },
      { label: "Motor", value: "Sirocco HideVENT industrial" },
      { label: "Montagem", value: "10–15 min (2 pessoas)" },
      { label: "Ancoragem", value: "300 kg/f" },
      { label: "Garantia", value: "3 anos" },
      { label: "Vida útil", value: "5–10 anos" },
    ],
    faqs: [
      {
        question: "As tendas infláveis suportam chuva?",
        answer:
          "Sim. O Poliéster 300g/m² com revestimento antifungo e tratamento UV é impermeável. O sistema de fluxo contínuo mantém a pressão estrutural mesmo em condições adversas.",
      },
      {
        question: "É possível usar a tenda em locais sem tomada?",
        answer:
          "Sim. O motor Sirocco HideVENT pode ser conectado a um gerador portátil. Oferecemos opções de motor 110v, 220v e bivolt — informe a disponibilidade de energia no local ao solicitar o orçamento.",
      },
      {
        question: "Quais são as dimensões disponíveis?",
        answer:
          "Temos modelos de 3×3m até 10×20m como padrão. Para projetos especiais maiores, consulte nossa equipe — cada tenda é fabricada sob medida.",
      },
      {
        question: "Qual é o prazo de produção?",
        answer:
          "4 a 7 semanas dependendo do tamanho e da complexidade da impressão. Aprovação em 3D antes da primeira costura.",
      },
    ],
  },

  "portais-inflaveis": {
    title: "Arcos & Portais Infláveis — Arcos de Corrida e Entradas para Eventos | Amaze",
    h1: "PORTAIS INFLÁVEIS",
    description:
      "Portais e arcos infláveis personalizados para linhas de chegada em corridas, entradas de eventos e ativações de marca. De 3m a 10m de largura. Instalação em 5 minutos.",
    heroText:
      "O ponto mais fotografado de qualquer corrida. A entrada que define o ambiente de um evento antes de qualquer palavra. Portais e arcos infláveis são o marco visual que coloca sua marca no centro de cada registro fotográfico.",
    icon: "🔷",
    sizes: ["3m", "4m", "5m", "7m", "10m", "Sob Medida"],
    includes: [
      "Motor Sirocco HideVENT embutido",
      "Sacos de ancoragem (conjunto)",
      "Bolsa de transporte",
      "Manual de instalação",
      "Impressão UV em cores completas",
      "Kit de reparo rápido Amaze",
    ],
    material:
      "Poliéster Emborrachado 300g/m² com impressão UV em cobertura total. Ancoragem com sistema de 300 kg/f. Sistema de fluxo contínuo para operação em condições externas.",
    benefits: [
      {
        icon: "📸",
        title: "O Ponto de Foto do Evento",
        desc: "Cada atleta que cruza a linha de chegada é uma foto com o portal da marca ao fundo. Uma maratona de 10.000 participantes gera no mínimo 10.000 impressões orgânicas — antes de considerar espectadores e cobertura de imprensa.",
      },
      {
        icon: "⚡",
        title: "Instalação em 5 Minutos",
        desc: "Motor Sirocco HideVENT embutido. Uma pessoa consegue montar e instalar um portal de 7m em 5 a 10 minutos. Sem ferramentas, sem equipe técnica especializada.",
      },
      {
        icon: "🔷",
        title: "Múltiplos Patrocinadores",
        desc: "A superfície do portal comporta logotipos de múltiplos patrocinadores em impressão de alta fidelidade. Cada corrida, cada evento — uma vitrine que todos os participantes cruzam.",
      },
      {
        icon: "⚓",
        title: "Resistência a Vento",
        desc: "Sistema de ancoragem de 300 kg/f projetado para eventos externos. O sistema de fluxo contínuo Amaze compensa pressões instantaneamente — estrutura sempre estável.",
      },
    ],
    useCases: [
      {
        title: "Linhas de Chegada em Corridas",
        desc: "O portal de chegada é a imagem símbolo de qualquer corrida. Personalizável com identidade do evento, patrocinadores principais e secundários. Disponível de 3m a 10m+.",
      },
      {
        title: "Entradas de Eventos e Feiras",
        desc: "Um portal inflável de entrada define o território da marca antes de qualquer conversa. Cria demarcação visual do espaço e posiciona a marca como protagonista do ambiente.",
      },
      {
        title: "Palcos e Zonas VIP",
        desc: "Portais delimitam zonas VIP, backstage e palcos em festivais. Criam a percepção de exclusividade e reforçam a hierarquia visual do evento.",
      },
      {
        title: "Ativações no Varejo",
        desc: "Portais na entrada de lojas transformam o acesso em uma experiência de marca. Especialmente eficaz em inaugurações, Black Friday e ativações sazonais de alto tráfego.",
      },
    ],
    specs: [
      { label: "Largura máxima", value: "10m (padrão) / sob medida" },
      { label: "Motor", value: "Sirocco HideVENT embutido" },
      { label: "Instalação", value: "5–10 min (1 pessoa)" },
      { label: "Impressão", value: "UV cobertura total" },
      { label: "Ancoragem", value: "300 kg/f" },
      { label: "Garantia", value: "3 anos" },
    ],
    faqs: [
      {
        question: "Os portais suportam múltiplos logotipos de patrocinadores?",
        answer:
          "Sim. A superfície é impressa em cobertura total em alta fidelidade. Trabalhamos com você para posicionar cada logotipo com hierarquia visual adequada.",
      },
      {
        question: "Em quanto tempo um portal pode ser montado?",
        answer:
          "A maioria infla e está pronta em 5 a 10 minutos com uma pessoa. O motor Sirocco HideVENT é embutido — sem mangueiras para conectar.",
      },
      {
        question: "Os portais são seguros em condições de vento?",
        answer:
          "Sim. O sistema de fluxo contínuo Amaze compensa pressões de vento instantaneamente, e o sistema de ancoragem de 300 kg/f garante estabilidade.",
      },
      {
        question: "Qual é o prazo de produção?",
        answer: "3 a 5 semanas dependendo do tamanho e complexidade da impressão. Aprovação em 3D antes da primeira costura.",
      },
    ],
  },

  "totens-inflaveis": {
    title: "Totens Infláveis e Displays Verticais — Visibilidade de Marca | Amaze",
    h1: "TOTENS INFLÁVEIS",
    description:
      "Totens infláveis de 2m a 5m para máxima visibilidade de marca com mínima área de solo. O inflável mais custo-eficiente do mercado.",
    heroText:
      "Área mínima no chão. Altura máxima. Os totens infláveis são a forma mais custo-eficiente de criar um ponto de referência vertical com identidade de marca — em feiras, PDVs, eventos e espaço público.",
    icon: "📐",
    sizes: ["2m", "3m", "4m", "5m", "Sob Medida"],
    includes: [
      "Motor Sirocco HideVENT 220v embutido",
      "Bolsa de transporte",
      "Manual de instalação",
      "Tratamento UV e antifungo",
      "Kit de reparo rápido Amaze",
    ],
    material:
      "Poliéster Emborrachado 300g/m² com impressão UV em cores completas. Tratamento UV de alta tenacidade e revestimento antifungo de série.",
    benefits: [
      {
        icon: "📐",
        title: "Footprint Mínimo, Impacto Máximo",
        desc: "Um totem de 4m ocupa menos de 1m² de área de solo. Em feiras, PDVs e eventos com espaço limitado, o totem entrega o máximo de visibilidade vertical com o mínimo de espaço consumido.",
      },
      {
        icon: "💰",
        title: "O Inflável Mais Custo-Eficiente",
        desc: "Totens são os infláveis de menor investimento inicial por metro de altura de visibilidade. São a porta de entrada ideal para marcas que querem começar com infláveis.",
      },
      {
        icon: "🔄",
        title: "Versátil para Qualquer Espaço",
        desc: "Do PDV de supermercado à praça pública, da feira corporativa ao evento de rua — totens se adaptam a qualquer contexto. Desinflam em minutos e se guardam em uma bolsa compacta.",
      },
      {
        icon: "🖼️",
        title: "Impressão Fotorrealística",
        desc: "Superfície cilíndrica ou quadrada impressa em cobertura total em alta fidelidade. Visível a distância, identificável de longe, fiel à identidade da marca.",
      },
    ],
    useCases: [
      {
        title: "Pontos de Venda (PDV)",
        desc: "No corredor do supermercado, na entrada da loja ou ao lado da gôndola — o totem inflável cria um marco visual que atrai o olhar do consumidor e reforça a associação de produto.",
      },
      {
        title: "Feiras e Exposições",
        desc: "Em espaços de estande onde metros quadrados são cobrados em ouro, o totem entrega visibilidade vertical máxima com ocupação horizontal mínima. Visível de qualquer ponto do pavilhão.",
      },
      {
        title: "Eventos Externos e Ambientação",
        desc: "No festival, na calçada ou na praça, totens criam pontos de referência de marca no espaço urbano. Fácil transporte, rápida instalação e impacto visual imediato.",
      },
      {
        title: "Ambientação de Lojas e Showrooms",
        desc: "Dentro de showrooms e lojas de grandes dimensões, totens infláveis criam hierarquia visual e destacam áreas, produtos ou campanhas sem reforma ou obra.",
      },
    ],
    specs: [
      { label: "Altura", value: "2m a 5m (padrão)" },
      { label: "Motor", value: "Sirocco HideVENT 220v" },
      { label: "Área de solo", value: "< 1m² (modelos compactos)" },
      { label: "Impressão", value: "UV cobertura total" },
      { label: "Garantia", value: "3 anos" },
      { label: "Vida útil", value: "5–10 anos" },
    ],
    faqs: [
      {
        question: "Qual é o menor tamanho disponível?",
        answer: "Nossos totens começam em 2 metros de altura. Ideal para ambientes internos de varejo, lojas e stands pequenos.",
      },
      {
        question: "Totens são adequados para uso externo?",
        answer: "Sim. O Poliéster 300g/m² com tratamento UV e revestimento antifungo garante performance em uso externo prolongado. O motor Sirocco HideVENT é à prova d'água.",
      },
      {
        question: "Qual é a diferença entre totem e colchão 2D?",
        answer: "Totens são estruturas cilíndricas ou quadradas verticais — ideais para visibilidade de marca de longe. Colchões 2D são planos, reproduzindo logotipos ou personagens — ideais para backdrop e fachada.",
      },
      {
        question: "Quanto tempo os totens duram?",
        answer: "Com os cuidados adequados, a vida útil típica é de 5 a 10 anos. Garantia de 3 anos de fabricação.",
      },
    ],
  },

  "tuneis-inflaveis": {
    title: "Túneis Infláveis — Entradas para Vestiários e Palcos Esportivos | Amaze",
    h1: "TÚNEIS INFLÁVEIS",
    description:
      "Túneis infláveis para entrada de atletas, palcos e eventos esportivos. Impressão fotorrealística, instalação em 5 minutos. O elemento visual mais impactante do esporte.",
    heroText:
      "O momento em que o atleta emerge do túnel é o instante de maior tensão e expectativa de qualquer evento esportivo. Um túnel inflável personalizado com a identidade da equipe ou patrocinador transforma esse momento em experiência de marca inesquecível — e em conteúdo que viraliza.",
    icon: "🏟️",
    sizes: ["3m", "5m", "8m", "10m", "Sob Medida"],
    includes: [
      "Motor Sirocco HideVENT embutido",
      "Sistema de ancoragem lateral",
      "Bolsas de transporte",
      "Manual de instalação",
      "Impressão UV completa interior e exterior",
      "Kit de reparo rápido Amaze",
    ],
    material:
      "Poliéster Emborrachado 300g/m² com impressão UV em cobertura total — interior e exterior. Estrutura tubular em fluxo contínuo com reforços de costura dupla em áreas de alto tráfego (bordas, base e junções).",
    benefits: [
      {
        icon: "🏟️",
        title: "Experiência de Entrada Inesquecível",
        desc: "O túnel transforma a entrada do atleta em ritual. Impressão no interior e exterior — o atleta percorre a identidade da marca enquanto o público assiste à sua chegada. Um momento de marca, não apenas de esporte.",
      },
      {
        icon: "📸",
        title: "Conteúdo Viral Garantido",
        desc: "A saída do atleta pelo túnel é um dos frames mais compartilhados em qualquer cobertura esportiva. Transmissões, redes sociais e cobertura de imprensa — o túnel é o cenário de todas.",
      },
      {
        icon: "⚡",
        title: "Instalação em 5 Minutos",
        desc: "Motor Sirocco HideVENT embutido. Túneis de até 8m são instalados por 2 pessoas em 5 a 8 minutos, sem ferramentas ou equipe técnica especializada.",
      },
      {
        icon: "🎨",
        title: "Personalização Total",
        desc: "Cores, logotipos, personagens e gráficos de equipe ou patrocinador em impressão fotorrealística no interior e exterior. Cada evento, um túnel único.",
      },
    ],
    useCases: [
      {
        title: "Entradas de Atletas em Estádios",
        desc: "Do futebol ao basquete, do vôlei ao e-sports — o túnel inflável cria o ritual de entrada que jogadores e torcida reconhecem como o momento inaugural do espetáculo.",
      },
      {
        title: "Palcos e Eventos de Música",
        desc: "Artistas emergindo de túneis infláveis personalizados com a identidade do álbum ou da turnê. Um elemento de produção que diferencia o show e gera cobertura espontânea em todas as plataformas.",
      },
      {
        title: "Competições de eSports",
        desc: "A entrada dos times em competições de eSports é um momento de produção tão importante quanto no esporte tradicional. Túneis infláveis com identidade do time ou do patrocinador elevam o nível da produção do evento.",
      },
      {
        title: "Eventos Corporativos e Convenções",
        desc: "Palestras e keynotes com entrada pelo túnel personalizado com a identidade da empresa. Um elemento de cenografia que surpreende a audiência antes que o palestrante diga uma palavra.",
      },
    ],
    specs: [
      { label: "Comprimento", value: "3m a 10m (padrão)" },
      { label: "Motor", value: "Sirocco HideVENT embutido" },
      { label: "Impressão", value: "UV interior e exterior" },
      { label: "Instalação", value: "5–8 min (2 pessoas)" },
      { label: "Ancoragem", value: "Sistema lateral 300 kg/f" },
      { label: "Garantia", value: "3 anos" },
    ],
    faqs: [
      {
        question: "O interior do túnel também pode ser personalizado?",
        answer: "Sim. A impressão UV cobre tanto o exterior quanto o interior do túnel — o atleta percorre uma experiência visual completa da marca durante toda a passagem.",
      },
      {
        question: "Qual é a altura mínima livre dentro do túnel?",
        answer: "Nossos modelos padrão têm altura interna de 2m a 2,5m. Para atletas de maior porte ou equipamentos específicos, o túnel pode ser fabricado em dimensões personalizadas.",
      },
      {
        question: "Túneis podem ser instalados em superfícies de quadra esportiva?",
        answer: "Sim. O sistema de ancoragem lateral usa sacos de areia ou bases de lastro — sem perfuração de superfície. Compatível com quadras de madeira, sintético e concreto.",
      },
      {
        question: "Qual é o prazo de produção?",
        answer: "3 a 5 semanas dependendo do comprimento e da complexidade dos gráficos. Aprovação em 3D antes da primeira costura.",
      },
    ],
  },

  "produtos-gigantes": {
    title: "Infláveis Gigantes — Réplicas de Produtos de até 15m | Amaze Balloons",
    h1: "PRODUTOS GIGANTES",
    description:
      "Réplicas de produtos infláveis de 5m a 15m ou mais de altura. Comparáveis a um prédio de 7 andares. O formato de marketing exterior com maior ROI em mídia espontânea.",
    heroText:
      "Comparáveis em altura a um prédio de 7 andares, nossos infláveis gigantes são o formato de marketing exterior com maior taxa de captura de atenção e geração de mídia espontânea. Impossível ignorar. Impossível não fotografar.",
    icon: "🏔️",
    sizes: ["5m", "7m", "10m", "15m+"],
    includes: [
      "Motor Sirocco HideVENT industrial",
      "Sistema de ancoragem 300 kg/f",
      "Bolsas de transporte (conjunto)",
      "Manual de instalação detalhado",
      "Tratamento UV e antifungo",
      "Kit de reparo rápido Amaze",
    ],
    material:
      "Poliéster Emborrachado 300g/m² reforçado com técnicas de viés de reforço e 4 camadas de proteção em áreas críticas. Fio de poliamida 40, 6–8 pontos por polegada. Ancoragem de 300 kg/f.",
    benefits: [
      {
        icon: "📸",
        title: "Geração de Mídia Espontânea",
        desc: "A escala desencadeia uma resposta que a mídia convencional não consegue replicar: as pessoas param, tiram fotos e compartilham sem que ninguém peça. ROI em mídia espontânea de 5 a 20× o custo de produção.",
      },
      {
        icon: "⚡",
        title: "Instalação em 2 Minutos",
        desc: "O motor Sirocco HideVENT industrial infla arenas inteiras em ~2 minutos. A própria equipe da marca instala — sem montadores externos, sem custo adicional de logística.",
      },
      {
        icon: "⚓",
        title: "Ancoragem 300 kg/f",
        desc: "Sistema de ancoragem projetado para condições externas reais: alças com argola de 38mm, arame soldado 4mm, 6 camadas de reforço. Suporta rajadas de vento sem instabilidade.",
      },
      {
        icon: "🎯",
        title: "Impressão Fotorrealística",
        desc: "O acabamento acetinado do Poliéster 300g/m² permite impressão em resolução fotográfica. O produto gigante é uma extensão fiel da identidade visual da marca.",
      },
    ],
    useCases: [
      {
        title: "Lançamentos de Produto",
        desc: "O momento do lançamento é único. Uma réplica inflável de 10m do produto revela ao público a magnitude da novidade antes de qualquer palavra.",
      },
      {
        title: "Pontos de Venda (PDV)",
        desc: "35% de aumento de sell-out documentado. A réplica gigante do produto no PDV direciona o olhar do consumidor de longe e impulsiona a decisão de compra.",
      },
      {
        title: "Feiras e Exposições",
        desc: "Em um pavilhão com centenas de expositores, o inflável gigante é visível de todos os ângulos — o único formato que atrai visitantes antes de chegarem ao seu corredor.",
      },
      {
        title: "Festivais e Eventos Externos",
        desc: "Posicionado em um festival ou evento ao ar livre, um inflável gigante torna-se o símbolo visual do evento. Cada registro fotográfico é uma impressão de marca espontânea.",
      },
    ],
    specs: [
      { label: "Altura máxima", value: "15m ou mais" },
      { label: "Motor", value: "Sirocco HideVENT industrial" },
      { label: "Inflagem", value: "~2 min" },
      { label: "Ancoragem", value: "300 kg/f ruptura" },
      { label: "Garantia", value: "3 anos sem exclusões" },
      { label: "Vida útil", value: "5–10 anos" },
    ],
    faqs: [
      {
        question: "Qual é a altura máxima disponível?",
        answer: "Fabricamos até 15m de altura como padrão. Para projetos especiais acima disso, consulte nossa equipe.",
      },
      {
        question: "Réplicas gigantes são seguras em eventos externos?",
        answer: "Sim. Todos os infláveis gigantes passam por análise de distribuição de pressão e carga de vento. O sistema de ancoragem suporta 300 kg/f.",
      },
      {
        question: "Quantas pessoas são necessárias para a instalação?",
        answer: "Com o motor Sirocco HideVENT, 2 pessoas conseguem instalar estruturas de até 10m em 10 a 15 minutos.",
      },
      {
        question: "Como calcular o ROI?",
        answer: "Marcas que usam réplicas gigantes consistentemente reportam ROI de 5 a 20× o investimento apenas em cobertura orgânica.",
      },
    ],
  },

  "personagens-inflaveis": {
    title: "Mascotes & Personagens Infláveis — Personagens Gigantes de Marca | Amaze",
    h1: "PERSONAGENS INFLÁVEIS",
    description:
      "Personagens e mascotes infláveis gigantes que dão vida ao mascote da sua marca em escala monumental. De personagens corporativos a sazonais. Impressão fotorrealística.",
    heroText:
      "Seu personagem já existe na mente do público. Agora imagine ele com 7 metros de altura, dominando o espaço, parando multidões. Personagens infláveis gigantes criam uma conexão emocional imediata — o mascote que todos querem fotografar.",
    icon: "🦁",
    sizes: ["3m", "5m", "7m", "10m", "Sob Medida"],
    includes: [
      "Motor Sirocco HideVENT embutido",
      "Hardware de ancoragem completo",
      "Bolsa de transporte personalizada",
      "Manual de instalação",
      "Tratamento UV e antifungo",
      "Kit de reparo rápido Amaze",
    ],
    material:
      "Poliéster Emborrachado 300g/m² com impressão por sublimação em cores completas e alta fidelidade de detalhes. Camada de borracha anti-torção preserva a forma do personagem sob qualquer pressão.",
    benefits: [
      {
        icon: "🦁",
        title: "Fidelidade Total ao Personagem",
        desc: "Trabalhamos a partir de seus arquivos de arte para criar uma réplica 3D que preserve cada detalhe — proporções, cores Pantone, expressões faciais e elementos específicos.",
      },
      {
        icon: "📸",
        title: "O Ponto de Foto Natural",
        desc: "Um personagem gigante é o ponto de interação mais instintivo em qualquer evento. As pessoas se aproximam, tiram foto e marcam — gerando conteúdo orgânico com o personagem da sua marca no centro.",
      },
      {
        icon: "🎭",
        title: "Qualquer Personagem",
        desc: "Mascotes corporativos, personagens sazonais, super-heróis, animais, alimentos gigantes — literalmente qualquer personagem pode se tornar um inflável gigante.",
      },
      {
        icon: "⚡",
        title: "Montagem Rápida",
        desc: "Motor Sirocco HideVENT garante inflagem em minutos. Personagens de 5m são instalados por uma pessoa em menos de 10 minutos.",
      },
    ],
    useCases: [
      {
        title: "Mascotes Corporativos",
        desc: "O mascote da sua marca em 7 metros de altura no evento de lançamento, na convenção de vendas ou na inauguração da loja.",
      },
      {
        title: "Personagens Sazonais",
        desc: "Papai Noel de 5m na entrada do shopping. Coelho de Páscoa no ponto de venda. Cada data comemorativa é uma oportunidade de ativação com o personagem temático correspondente.",
      },
      {
        title: "Festivais e Shows",
        desc: "Em festivais de música, o personagem gigante da marca patrocinadora torna-se parte da experiência visual. Cada foto tirada no festival inclui o personagem — e a marca.",
      },
      {
        title: "Mascotes Esportivos",
        desc: "O mascote do clube ou da competição em escala imponente no estádio. Engajamento imediato com a torcida e cobertura midiática garantida.",
      },
    ],
    specs: [
      { label: "Altura máxima", value: "10m (padrão) / sob medida" },
      { label: "Motor", value: "Sirocco HideVENT embutido" },
      { label: "Impressão", value: "Sublimação fotorrealística" },
      { label: "Material", value: "Poliéster 300g/m²" },
      { label: "Garantia", value: "3 anos" },
      { label: "Vida útil", value: "5–10 anos" },
    ],
    faqs: [
      {
        question: "Vocês conseguem replicar o design exato do nosso personagem?",
        answer: "Sim. Trabalhamos diretamente com seus arquivos de marca para criar uma réplica 3D fiel. Antes de produzir, aprovamos um render 3D colorido com você.",
      },
      {
        question: "Personagens sazonais podem ser adaptados para vários eventos?",
        answer: "Sim. O personagem pode ter acabamento neutro com espaços para personalização sazonal, ou ser fabricado com design específico para máxima fidelidade visual.",
      },
      {
        question: "Qual é o prazo de produção?",
        answer: "4 a 6 semanas dependendo da complexidade do personagem. Mascotes com muitos detalhes podem requerer prazo adicional.",
      },
      {
        question: "Quais formatos de arquivo são necessários?",
        answer: "AI, EPS, PDF e PNG em alta resolução. Se você não tiver o personagem em 3D, nossa equipe de modelagem pode desenvolvê-lo.",
      },
    ],
  },

  "colchoes-2d": {
    title: "Colchões 2D Infláveis — Logotipos e Personagens em Grande Formato | Amaze",
    h1: "COLCHÕES 2D",
    description:
      "Colchões infláveis 2D que reproduzem logotipos, personagens e gráficos de marca em grande formato com profundidade visual. A fachada móvel da sua marca.",
    heroText:
      "A profundidade tridimensional de um inflável com a clareza visual de um gráfico 2D. Colchões infláveis reproduzem logotipos, personagens e gráficos de marca em escala monumental — com nitidez fotográfica e a impactante dimensão que nenhum banner plano consegue replicar.",
    icon: "🖼️",
    sizes: ["1×1m", "2×2m", "3×4m", "5×5m", "Sob Medida"],
    includes: [
      "Motor Sirocco HideVENT embutido",
      "Sistema de suspensão e ancoragem",
      "Bolsa de transporte",
      "Manual de instalação",
      "Impressão UV frente e verso",
      "Kit de reparo rápido Amaze",
    ],
    material:
      "Poliéster Emborrachado 300g/m² com impressão UV em cobertura total frente e verso. Estrutura de câmara simples que mantém a forma do gráfico com precisão dimensional. Acabamento acetinado para máxima fidelidade de impressão.",
    benefits: [
      {
        icon: "🖼️",
        title: "Fachada Móvel da Marca",
        desc: "O colchão 2D é o banner que tem volume. A profundidade tridimensional cria uma presença visual que nenhum material plano consegue replicar — mesmo visto de perto, o detalhe e a fidelidade são fotográficos.",
      },
      {
        icon: "🎨",
        title: "Fidelidade de Impressão Total",
        desc: "Impressão UV frente e verso em cobertura 100%. Pantone, gradientes, detalhes finos — tudo reproduzido com a fidelidade exigida pelos guias de identidade visual das maiores marcas.",
      },
      {
        icon: "🔄",
        title: "Portátil e Reutilizável",
        desc: "Desinfla completamente em um plano, dobra e cabe em uma bolsa. De um evento para o próximo sem perda de qualidade visual. Vida útil de 5 a 10 anos.",
      },
      {
        icon: "📸",
        title: "Backdrop Fotográfico Perfeito",
        desc: "Colchões 2D são o backdrop mais fotogênico de qualquer evento. A profundidade cria um enquadramento natural para fotos — e a marca está sempre no centro da composição.",
      },
    ],
    useCases: [
      {
        title: "Backdrop de Foto e Red Carpet",
        desc: "A parede de logos de um red carpet ou evento de premiação. O colchão 2D com o padrão de logotipos da empresa ou patrocinadores cria o backdrop profissional que é o cenário de toda a cobertura fotográfica.",
      },
      {
        title: "Fachadas Temporárias de Loja",
        desc: "Para obras, reformas ou pop-ups, o colchão 2D substitui a fachada real com a identidade visual da marca — em grande formato, sem instalação permanente e com impacto visual imediato.",
      },
      {
        title: "Identidade de Estande em Feiras",
        desc: "A parede traseira de um estande em feira, reproduzindo o logotipo ou gráfico da campanha em escala e profundidade que nenhum display têxtil ou lona plana consegue replicar.",
      },
      {
        title: "Cenografia de Eventos",
        desc: "Personagens, produtos, logotipos e gráficos de campanha em escala. Posicionados estrategicamente no espaço do evento, os colchões 2D criam pontos de marca em todo o ambiente.",
      },
    ],
    specs: [
      { label: "Espessura", value: "15cm a 30cm (padrão)" },
      { label: "Dimensões máx.", value: "5×5m (padrão) / sob medida" },
      { label: "Impressão", value: "UV frente e verso" },
      { label: "Motor", value: "Sirocco HideVENT embutido" },
      { label: "Garantia", value: "3 anos" },
      { label: "Vida útil", value: "5–10 anos" },
    ],
    faqs: [
      {
        question: "Qual é a diferença entre colchão 2D e totem?",
        answer: "Colchões 2D são planos — reproduzem gráficos, logotipos e personagens como uma fachada com profundidade. Totens são estruturas cilíndricas ou quadradas verticais, ideais para visibilidade de longe.",
      },
      {
        question: "A impressão é feita frente e verso?",
        answer: "Sim. Impressão UV em cobertura total em ambas as faces — ideal para posicionamentos em corredores, entradas e espaços onde o público circula por ambos os lados.",
      },
      {
        question: "Colchões 2D podem ser suspensos no teto?",
        answer: "Sim. Oferecemos sistema de suspensão por cabos para instalação aérea — ideal para espaços de grandes pés-direitos, feiras e eventos em pavilhões.",
      },
      {
        question: "Qual é o prazo de produção?",
        answer: "2 a 4 semanas dependendo das dimensões e complexidade da impressão. Aprovação de arte antes da produção.",
      },
    ],
  },

  "roof-top": {
    title: "Roof-Top Infláveis — Publicidade Aérea e Cobertura de Edificações | Amaze",
    h1: "ROOF-TOP INFLÁVEIS",
    description:
      "Infláveis de cobertura para telhados de edificações — o único formato de publicidade exterior que domina o espaço vertical urbano. Visível a quilômetros. Permanente ou temporário.",
    heroText:
      "O único lugar onde nenhum outdoor, banner ou tela digital chega: o topo dos edifícios. Infláveis roof-top transformam coberturas de edificações em mídia exterior de alto impacto — visíveis a quilômetros de distância, identificáveis de helicóptero e impossíveis de ignorar.",
    icon: "🏙️",
    sizes: ["3m", "5m", "8m", "10m+", "Sob Medida"],
    includes: [
      "Motor Sirocco HideVENT industrial",
      "Sistema de ancoragem estrutural 300 kg/f",
      "Cabo de segurança anti-queda",
      "Manual de instalação e segurança",
      "Tratamento UV de alta tenacidade",
      "Kit de reparo rápido Amaze",
    ],
    material:
      "Poliéster Emborrachado 300g/m² com tratamento UV máximo de 10 anos de resistência e revestimento antifungo industrial. Ancoragem estrutural certificada de 300 kg/f com cabo de segurança redundante.",
    benefits: [
      {
        icon: "🏙️",
        title: "Domínio Visual Urbano",
        desc: "Um inflável roof-top de 8m sobre um edifício de 20 andares é visível em um raio de vários quilômetros. Nenhum outro formato de mídia exterior ocupa o espaço aéreo urbano — é território exclusivo.",
      },
      {
        icon: "🔁",
        title: "Permanente ou Temporário",
        desc: "Roof-tops podem ser instalados permanentemente (vida útil 5–10 anos) ou como ativação temporária para campanhas, lançamentos e datas comemorativas. O mesmo ativo serve os dois propósitos.",
      },
      {
        icon: "📸",
        title: "Cobertura Aérea Espontânea",
        desc: "Drones, helicópteros de imprensa e transmissões ao vivo de eventos urbanos capturam o inflável roof-top sem que a marca precise pagar por mídia. É a única mídia exterior que aparece em imagens aéreas.",
      },
      {
        icon: "⚡",
        title: "Motor Industrial Permanente",
        desc: "O motor Sirocco HideVENT industrial opera em fluxo contínuo 24/7 — compensando variações de pressão atmosférica, temperatura e vento em qualquer altitude. Projetado para operação continuada.",
      },
    ],
    useCases: [
      {
        title: "Identificação de Sede Corporativa",
        desc: "O logo da empresa em 8m sobre a sede — visível para toda a cidade. Uma declaração de presença que nenhum outdoor de rua consegue replicar. O edifício vira o maior ponto de marca da empresa.",
      },
      {
        title: "Campanhas de Lançamento Urbano",
        desc: "Para lançamentos de produto de alto impacto, um inflável roof-top na região da campanha domina visualmente o bairro. Em mercados altamente competitivos, a altitude é a diferença entre ser visto e ser ignorado.",
      },
      {
        title: "Eventos e Festivais Urbanos",
        desc: "Patrocinadores de grandes eventos urbanos (viradas, shows, comemorações) posicionam infláveis roof-top nos arredores — criando uma presença de marca que acompanha o público em todo o percurso do evento.",
      },
      {
        title: "Balonismo e Aeromarketing",
        desc: "Além de edificações, infláveis de grande porte podem ser posicionados em áreas elevadas, praças e espaços abertos para aeromarketing — a mídia que domina o horizonte visual da cidade.",
      },
    ],
    specs: [
      { label: "Altura", value: "3m a 10m+ (padrão)" },
      { label: "Motor", value: "Sirocco HideVENT industrial 24/7" },
      { label: "Ancoragem", value: "Estrutural certificada 300 kg/f" },
      { label: "Resistência UV", value: "Até 10 anos" },
      { label: "Garantia", value: "3 anos" },
      { label: "Operação", value: "Contínua ou intermitente" },
    ],
    faqs: [
      {
        question: "É necessária aprovação municipal para instalar em telhados?",
        answer: "Depende da cidade e do uso — temporário (até 30 dias em geral) não exige aprovação na maioria dos municípios. Para instalações permanentes, orientamos sobre a documentação necessária.",
      },
      {
        question: "O motor suporta operação 24/7?",
        answer: "Sim. O motor Sirocco HideVENT industrial é projetado para operação contínua. Consumo de energia similar a uma lâmpada comum — menos de R$50/mês em operação contínua.",
      },
      {
        question: "E a segurança em caso de ventos fortes?",
        answer: "O sistema de ancoragem estrutural de 300 kg/f com cabo de segurança redundante suporta condições de vento extremas. Em situações excepcionais, o motor pode ser desligado e o inflável deflado em minutos.",
      },
      {
        question: "Qual é o prazo de produção?",
        answer: "4 a 6 semanas para roof-tops padrão. Projetos de grande porte ou instalações permanentes podem requerer prazo adicional para projeto de ancoragem específico.",
      },
    ],
  },

  "inflaveis-personalizados": {
    title:
      "Infláveis Personalizados — 100% com Marca, Qualquer Formato | Amaze Balloons",
    h1: "INFLÁVEIS PERSONALIZADOS",
    description:
      "Infláveis publicitários 100% personalizados em qualquer formato, cor e tamanho. Motor Sirocco HideVENT embutido, Poliéster 300g/m² e garantia de 3 anos. O mais popular da Amaze.",
    heroText:
      "Sem templates. Sem formatos pré-definidos. Cada inflável personalizado Amaze é projetado do zero para replicar sua identidade de marca com precisão absoluta — forma, cor, escala e acabamento fotográfico.",
    icon: "🎨",
    sizes: ["2m", "3m", "4m", "5m", "Sob Medida"],
    includes: [
      "Motor Sirocco HideVENT 220v embutido",
      "Bolsa de transporte personalizada",
      "Manual de instalação",
      "Tratamento UV de alta tenacidade",
      "Revestimento antifungo",
      "Kit de reparo rápido Amaze",
    ],
    material:
      "Poliéster Emborrachado 300g/m² com fios de alta tenacidade, camada de borracha anti-torção e acabamento acetinado para impressão fotográfica. Tratamento UV e antifungo de série.",
    benefits: [
      {
        icon: "🎯",
        title: "Fidelidade Total à Marca",
        desc: "Trabalhamos com seus arquivos Pantone, AI e PDF para replicar cada detalhe da sua identidade visual. Cor, fonte, proporção — nenhum detalhe é ignorado.",
      },
      {
        icon: "⚡",
        title: "Motor Sirocco HideVENT",
        desc: "100% embutido na estrutura. Zero mangueiras externas, zero riscos de acidente. 330w de potência, inflagem em ~2 minutos, à prova d'água.",
      },
      {
        icon: "🛡️",
        title: "Garantia de 3 Anos",
        desc: "Cobertura total de fabricação sem exclusões por vento ou chuva. A maior garantia do setor — porque confiamos no que fabricamos.",
      },
      {
        icon: "♻️",
        title: "Reutilizável por Anos",
        desc: "Vida útil de 5 a 10 anos em uso intenso. Desinflável em minutos, cabe em uma bolsa de transporte. Um ativo de marketing que se paga no primeiro uso.",
      },
    ],
    useCases: [
      {
        title: "Lançamentos de Produto",
        desc: "A revelação de um novo produto merece uma presença visual à sua altura. Um inflável personalizado na forma do produto ou com a identidade do lançamento cria o backdrop perfeito — e o conteúdo espontâneo nas redes sociais.",
      },
      {
        title: "Ativações de Marca",
        desc: "Transforme qualquer espaço em um ambiente de marca imersivo. Infláveis personalizados em formatos únicos criam experiências que o público não apenas vê — mas sente e compartilha.",
      },
      {
        title: "Ponto de Venda",
        desc: "No varejo, o inflável personalizado direciona o olhar do consumidor antes de qualquer palavra. Posicionado na entrada ou sobre a gôndola, cria uma associação visual imediata entre o espaço e a marca.",
      },
      {
        title: "Eventos e Festivais",
        desc: "Seja um festival de música, uma feira corporativa ou um evento esportivo — infláveis personalizados criam o ponto de referência visual do evento. O lugar onde todos tiram foto.",
      },
    ],
    specs: [
      { label: "Material", value: "Poliéster 300g/m²" },
      { label: "Motor", value: "Sirocco HideVENT 330w" },
      { label: "Inflagem", value: "~2 min" },
      { label: "Garantia", value: "3 anos" },
      { label: "Vida útil", value: "5–10 anos" },
      { label: "Ancoragem", value: "300 kg/f" },
    ],
    faqs: [
      {
        question: "Quanto tempo leva para produzir?",
        answer:
          "A produção normalmente leva de 3 a 6 semanas, dependendo da complexidade e do tamanho. Projetos urgentes: consulte disponibilidade.",
      },
      {
        question: "Quais formatos de arquivo são necessários?",
        answer:
          "Aceitamos AI, EPS, PDF e PNG em alta resolução. Nossa equipe de design trabalha com você durante todo o processo de aprovação em 3D antes da primeira costura.",
      },
      {
        question: "O inflável pode ser reutilizado?",
        answer:
          "Sim. Com os cuidados adequados (limpeza com água e sabão neutro, secagem completa antes de guardar), a vida útil típica é de 5 a 10 anos em uso intenso.",
      },
      {
        question: "Qual é a diferença entre inflável personalizado e inflável gigante?",
        answer:
          "Infláveis personalizados abrangem qualquer formato sob medida — podem ser gigantes ou compactos. Infláveis Gigantes são uma categoria específica focada em réplicas de produtos de grande escala (5m a 15m+).",
      },
    ],
  },

  "inflaveis-gigantes": {
    title:
      "Infláveis Gigantes — Réplicas de Produtos de até 15m | Amaze Balloons",
    h1: "INFLÁVEIS GIGANTES",
    description:
      "Réplicas de produtos infláveis de 5m a 15m ou mais de altura. Comparáveis a um prédio de 7 andares. O formato de marketing exterior com maior ROI em mídia espontânea.",
    heroText:
      "Comparáveis em altura a um prédio de 7 andares, nossos infláveis gigantes são o formato de marketing exterior com maior taxa de captura de atenção e geração de mídia espontânea. Impossível ignorar. Impossível não fotografar.",
    icon: "🏔️",
    sizes: ["5m", "7m", "10m", "15m+"],
    includes: [
      "Motor Sirocco HideVENT industrial",
      "Sistema de ancoragem 300 kg/f",
      "Bolsas de transporte (conjunto)",
      "Manual de instalação detalhado",
      "Tratamento UV e antifungo",
      "Kit de reparo rápido Amaze",
    ],
    material:
      "Poliéster Emborrachado 300g/m² reforçado com técnicas de viés de reforço e 4 camadas de proteção em áreas críticas. Fio de poliamida 40, 6–8 pontos por polegada. Ancoragem de 300 kg/f.",
    benefits: [
      {
        icon: "📸",
        title: "Geração de Mídia Espontânea",
        desc: "A escala desencadeia uma resposta que a mídia convencional não consegue replicar: as pessoas param, tiram fotos e compartilham sem que ninguém peça. ROI em mídia espontânea de 5 a 20× o custo de produção.",
      },
      {
        icon: "⚡",
        title: "Instalação em 2 Minutos",
        desc: "O motor Sirocco HideVENT industrial infla arenas inteiras em ~2 minutos. A própria equipe da marca instala — sem montadores externos, sem custo adicional de logística.",
      },
      {
        icon: "⚓",
        title: "Ancoragem 300 kg/f",
        desc: "Sistema de ancoragem projetado para condições externas reais: alças com argola de 38mm, arame soldado 4mm, 6 camadas de reforço. Suporta rajadas de vento sem instabilidade.",
      },
      {
        icon: "🎯",
        title: "Impressão Fotorrealística",
        desc: "Acabamento acetinado do Poliéster 300g/m² permite impressão em resolução fotográfica. O produto gigante é uma extensão fiel da identidade visual da marca — cada detalhe reproduzido em escala.",
      },
    ],
    useCases: [
      {
        title: "Lançamentos de Produto",
        desc: "O momento do lançamento é único. Uma réplica inflável de 10m do produto revela ao público a magnitude da novidade antes de qualquer palavra. Gera cobertura de imprensa espontânea e conteúdo viral.",
      },
      {
        title: "Pontos de Venda (PDV)",
        desc: "35% de aumento de sell-out documentado. A réplica gigante do produto no PDV direciona o olhar do consumidor de longe, cria associação imediata e impulsiona a decisão de compra.",
      },
      {
        title: "Feiras e Exposições",
        desc: "Em um pavilhão com centenas de expositores, o inflável gigante é visível de todos os ângulos. É o único formato que atrai visitantes antes de chegarem ao seu corredor.",
      },
      {
        title: "Festivais e Eventos Externos",
        desc: "Posicionado em um festival, praça pública ou evento ao ar livre, um inflável gigante torna-se o símbolo visual do evento. Cada registro fotográfico é uma impressão de marca espontânea.",
      },
    ],
    specs: [
      { label: "Altura máxima", value: "15m ou mais" },
      { label: "Motor", value: "Sirocco HideVENT industrial" },
      { label: "Inflagem", value: "~2 min" },
      { label: "Ancoragem", value: "300 kg/f ruptura" },
      { label: "Garantia", value: "3 anos sem exclusões" },
      { label: "Vida útil", value: "5–10 anos" },
    ],
    faqs: [
      {
        question: "Qual é a altura máxima disponível?",
        answer:
          "Fabricamos até 15m de altura como padrão. Para projetos especiais acima disso, consulte nossa equipe — já entregamos estruturas ainda maiores.",
      },
      {
        question: "Os infláveis gigantes são seguros em eventos externos?",
        answer:
          "Sim. Todos os infláveis gigantes passam por análise de distribuição de pressão e carga de vento. O sistema de ancoragem suporta 300 kg/f e o motor Sirocco opera em fluxo contínuo — compensando pressões externas instantaneamente.",
      },
      {
        question: "Quantas pessoas são necessárias para a instalação?",
        answer:
          "Com o motor Sirocco HideVENT, 2 pessoas conseguem instalar estruturas de até 10m em 10 a 15 minutos. Nenhum treinamento especializado necessário.",
      },
      {
        question: "Como calcular o ROI de um inflável gigante?",
        answer:
          "Monitoramos o valor de mídia espontânea: cada foto postada nas redes sociais tem um valor equivalente de mídia paga. Marcas que usam réplicas gigantes consistentemente reportam ROI de 5 a 20× o investimento apenas em cobertura orgânica.",
      },
    ],
  },

  "arcos-portais": {
    title:
      "Arcos & Portais Infláveis — Arcos de Corrida e Entradas para Eventos | Amaze",
    h1: "ARCOS & PORTAIS",
    description:
      "Arcos infláveis personalizados para linhas de chegada em corridas, entradas de eventos e ativações de marca. De 3m a 10m de largura. Instalação em 5 minutos.",
    heroText:
      "O ponto mais fotografado de qualquer corrida. A entrada que define o ambiente de um evento antes de qualquer palavra. Arcos e portais infláveis são o marco visual que coloca sua marca no centro de cada registro fotográfico.",
    icon: "🔷",
    sizes: ["3m", "4m", "5m", "7m", "10m", "Sob Medida"],
    includes: [
      "Motor Sirocco HideVENT embutido",
      "Sacos de ancoragem (conjunto)",
      "Bolsa de transporte",
      "Manual de instalação",
      "Impressão UV em cores completas",
      "Kit de reparo rápido Amaze",
    ],
    material:
      "Poliéster Emborrachado 300g/m² com impressão UV em cobertura total. Ancoragem com sistema de 300 kg/f. Sistema de fluxo contínuo para operação em condições externas.",
    benefits: [
      {
        icon: "📸",
        title: "O Ponto de Foto do Evento",
        desc: "Cada atleta que cruza a linha de chegada é uma foto com o arco da marca ao fundo. Uma maratona de 10.000 participantes gera no mínimo 10.000 impressões orgânicas — antes de considerar espectadores e cobertura de imprensa.",
      },
      {
        icon: "⚡",
        title: "Instalação em 5 Minutos",
        desc: "Motor Sirocco HideVENT embutido. Uma pessoa consegue montar e instalar um arco de 7m em 5 a 10 minutos. Sem ferramentas, sem equipe técnica especializada.",
      },
      {
        icon: "🔷",
        title: "Múltiplos Patrocinadores",
        desc: "A superfície do arco comporta logotipos de múltiplos patrocinadores em impressão de alta fidelidade. Cada corrida, cada evento — uma vitrine que todos os participantes cruzam.",
      },
      {
        icon: "⚓",
        title: "Resistência a Vento",
        desc: "Sistema de ancoragem de 300 kg/f projetado para eventos externos. Infláveis selados seriam perigosos em condições de vento. O sistema de fluxo contínuo Amaze compensa pressões instantaneamente — estrutura sempre estável.",
      },
    ],
    useCases: [
      {
        title: "Linhas de Chegada em Corridas",
        desc: "O arco de chegada é a imagem símbolo de qualquer corrida. Personalizável com identidade do evento, patrocinadores principais e secundários. Disponível de 3m (corridas locais) a 10m+ (maratonas internacionais).",
      },
      {
        title: "Entradas de Eventos e Feiras",
        desc: "Um portal inflável de entrada define o território da marca antes de qualquer conversa. Cria demarcação visual do espaço, guia o fluxo de visitantes e posiciona a marca como protagonista do ambiente.",
      },
      {
        title: "Palcos e Zonas VIP",
        desc: "Portais delimitam zonas VIP, backstage e palcos em festivais. Criam a percepção de exclusividade e reforçam a hierarquia visual do evento com a identidade do organizador ou patrocinador.",
      },
      {
        title: "Ativações no Varejo",
        desc: "Arcos e portais na entrada de lojas transformam o acesso em uma experiência de marca. Especialmente eficaz em inaugurações, Black Friday e ativações sazonais de alto tráfego.",
      },
    ],
    specs: [
      { label: "Largura máxima", value: "10m (padrão) / sob medida" },
      { label: "Motor", value: "Sirocco HideVENT embutido" },
      { label: "Instalação", value: "5–10 min (1 pessoa)" },
      { label: "Impressão", value: "UV cobertura total" },
      { label: "Ancoragem", value: "300 kg/f" },
      { label: "Garantia", value: "3 anos" },
    ],
    faqs: [
      {
        question: "Os arcos suportam múltiplos logotipos de patrocinadores?",
        answer:
          "Sim. A superfície do arco é impressa em cobertura total em alta fidelidade. Trabalhamos com você para posicionar cada logotipo de patrocinador com hierarquia visual adequada.",
      },
      {
        question: "Em quanto tempo um arco pode ser montado?",
        answer:
          "A maioria dos arcos infla e está pronta em 5 a 10 minutos com uma pessoa. O motor Sirocco HideVENT é embutido — sem mangueiras para conectar, sem ferramentas necessárias.",
      },
      {
        question: "Os arcos são seguros em condições de vento?",
        answer:
          "Sim. O sistema de fluxo contínuo Amaze compensa pressões de vento instantaneamente, e o sistema de ancoragem de 300 kg/f garante estabilidade. Não trabalhamos com arcos selados — vulneráveis a variações de pressão.",
      },
      {
        question: "Qual é o prazo de produção?",
        answer:
          "3 a 5 semanas dependendo do tamanho e complexidade da impressão. Aprovação em 3D antes da primeira costura.",
      },
    ],
  },

  "mascotes-inflaveis": {
    title:
      "Mascotes Infláveis — Personagens Gigantes e Mascotes de Marca | Amaze",
    h1: "MASCOTES INFLÁVEIS",
    description:
      "Mascotes infláveis gigantes que dão vida ao personagem da sua marca em escala monumental. De mascotes corporativos a personagens sazonais. Impressão fotorrealística.",
    heroText:
      "Seu mascote já existe na mente do público. Agora imagine ele com 7 metros de altura, dominando o espaço, parando multidões. Mascotes infláveis gigantes criam uma conexão emocional imediata — o personagem que todos querem fotografar.",
    icon: "🦁",
    sizes: ["3m", "5m", "7m", "10m", "Sob Medida"],
    includes: [
      "Motor Sirocco HideVENT embutido",
      "Hardware de ancoragem completo",
      "Bolsa de transporte personalizada",
      "Manual de instalação",
      "Tratamento UV e antifungo",
      "Kit de reparo rápido Amaze",
    ],
    material:
      "Poliéster Emborrachado 300g/m² com impressão por sublimação em cores completas e alta fidelidade de detalhes. Camada de borracha anti-torção preserva a forma do personagem sob qualquer pressão.",
    benefits: [
      {
        icon: "🦁",
        title: "Fidelidade Total ao Personagem",
        desc: "Trabalhamos a partir de seus arquivos de arte para criar uma réplica 3D que preserve cada detalhe do personagem original — proporções, cores Pantone, expressões faciais e elementos específicos.",
      },
      {
        icon: "📸",
        title: "O Ponto de Foto Natural",
        desc: "Um mascote gigante é o ponto de interação mais instintivo em qualquer evento. As pessoas se aproximam, tiram foto e marcam — gerando conteúdo orgânico com o personagem da sua marca no centro.",
      },
      {
        icon: "🎭",
        title: "Qualquer Personagem",
        desc: "Mascotes corporativos, personagens sazonais (Papai Noel, Coelho de Páscoa), super-heróis, animais, alimentos gigantes — literalmente qualquer personagem que você imaginar pode se tornar um inflável gigante.",
      },
      {
        icon: "⚡",
        title: "Montagem Rápida",
        desc: "Motor Sirocco HideVENT garante inflagem em minutos. Personagens de 5m são instalados por uma pessoa em menos de 10 minutos — sem equipe técnica especializada.",
      },
    ],
    useCases: [
      {
        title: "Mascotes Corporativos",
        desc: "O mascote da sua marca em 7 metros de altura no evento de lançamento, na convenção de vendas ou na inauguração da loja. Uma presença que o público associa imediatamente ao personagem — e pela qual para para tirar foto.",
      },
      {
        title: "Personagens Sazonais",
        desc: "Papai Noel de 5m na entrada do shopping. Coelho de Páscoa de 4m no ponto de venda. Fantasma de Halloween de 7m no festival. Cada data comemorativa é uma oportunidade de ativação com o personagem temático correspondente.",
      },
      {
        title: "Festivais e Shows",
        desc: "Em festivais de música, o mascote gigante da marca patrocinadora torna-se parte da experiência visual do evento. Cada foto tirada no festival inclui o personagem — e a marca — espontaneamente.",
      },
      {
        title: "Mascotes Esportivos",
        desc: "O mascote do clube ou da competição em escala imponente no estádio, na zona de entrada ou na área de patrocinadores. Engajamento imediato com a torcida e cobertura midiática garantida.",
      },
    ],
    specs: [
      { label: "Altura máxima", value: "10m (padrão) / sob medida" },
      { label: "Motor", value: "Sirocco HideVENT embutido" },
      { label: "Impressão", value: "Sublimação fotorrealística" },
      { label: "Material", value: "Poliéster 300g/m²" },
      { label: "Garantia", value: "3 anos" },
      { label: "Vida útil", value: "5–10 anos" },
    ],
    faqs: [
      {
        question: "Vocês conseguem replicar o design exato do nosso mascote?",
        answer:
          "Sim. Trabalhamos diretamente com seus arquivos de marca (AI, EPS, PDF) para criar uma réplica 3D fiel ao personagem. Antes de produzir, aprovamos um render 3D colorido com você.",
      },
      {
        question: "Quais formatos de arquivo são necessários?",
        answer:
          "AI, EPS, PDF e PNG em alta resolução. Se você não tiver o personagem em 3D, nossa equipe de modelagem pode desenvolvê-lo — informe no orçamento.",
      },
      {
        question: "Personagens sazonais podem ser adaptados para vários eventos?",
        answer:
          "Sim. O personagem pode ter acabamento neutro com espaços para personalização de faixa sazonal, ou pode ser fabricado com design específico para máxima fidelidade visual.",
      },
      {
        question: "Qual é o prazo de produção de um mascote?",
        answer:
          "4 a 6 semanas dependendo da complexidade do personagem. Mascotes com muitos detalhes ou formas complexas podem requerer prazo adicional — consulte ao solicitar o orçamento.",
      },
    ],
  },

  "totens-displays": {
    title:
      "Totens Infláveis e Displays Verticais — Visibilidade de Marca | Amaze",
    h1: "TOTENS & DISPLAYS",
    description:
      "Totens infláveis de 2m a 5m e colchões 2D para máxima visibilidade de marca com mínima área de solo. O inflável mais custo-eficiente do mercado.",
    heroText:
      "Área mínima no chão. Altura máxima. Os totens e displays infláveis são a forma mais custo-eficiente de criar um ponto de referência vertical com identidade de marca — em feiras, PDVs, eventos e espaço público.",
    icon: "📐",
    sizes: ["2m", "3m", "4m", "5m", "Sob Medida"],
    includes: [
      "Motor Sirocco HideVENT 220v embutido",
      "Bolsa de transporte",
      "Manual de instalação",
      "Tratamento UV e antifungo",
      "Kit de reparo rápido Amaze",
    ],
    material:
      "Poliéster Emborrachado 300g/m² com impressão UV em cores completas. Tratamento UV de alta tenacidade e revestimento antifungo de série.",
    benefits: [
      {
        icon: "📐",
        title: "Footprint Mínimo, Impacto Máximo",
        desc: "Um totem de 4m ocupa menos de 1m² de área de solo. Em feiras, PDVs e eventos com espaço limitado, o totem entrega o máximo de visibilidade vertical com o mínimo de espaço consumido.",
      },
      {
        icon: "💰",
        title: "O Inflável Mais Custo-Eficiente",
        desc: "Totens são os infláveis de menor investimento inicial por metro de altura de visibilidade. São a porta de entrada ideal para marcas que querem começar com infláveis e escalar com o tempo.",
      },
      {
        icon: "🔄",
        title: "Versátil para Qualquer Espaço",
        desc: "Do PDV de supermercado à praça pública, da feira corporativa ao evento de rua — totens se adaptam a qualquer contexto. Desinflam em minutos e se guardam em uma bolsa compacta.",
      },
      {
        icon: "🖼️",
        title: "Colchões 2D: Fachadas Móveis",
        desc: "Além dos totens cilíndricos/quadrados, os colchões 2D reproduzem logotipos e personagens com detalhes de impressão que criam profundidade visual — como uma grande fachada, mas portátil e reutilizável.",
      },
    ],
    useCases: [
      {
        title: "Pontos de Venda (PDV)",
        desc: "No corredor do supermercado, na entrada da loja ou ao lado da gôndola — o totem inflável com a identidade da marca cria um marco visual que atrai o olhar do consumidor e reforça a associação de produto.",
      },
      {
        title: "Feiras e Exposições",
        desc: "Em espaços de estande onde metros quadrados são cobrados em ouro, o totem entrega visibilidade vertical máxima com ocupação horizontal mínima. Visível de qualquer ponto do pavilhão.",
      },
      {
        title: "Eventos Externos e Ambientação",
        desc: "No festival, na calçada ou na praça, totens criam pontos de referência de marca no espaço urbano. Fácil transporte, rápida instalação e impacto visual imediato.",
      },
      {
        title: "Colchões 2D para Logotipos",
        desc: "Quando a marca precisa aparecer como uma fachada móvel — em backdrop de foto, stand ou entrada — o colchão 2D reproduz o logo em escala com fidelidade fotográfica e profundidade tridimensional.",
      },
    ],
    specs: [
      { label: "Altura", value: "2m a 5m (padrão)" },
      { label: "Motor", value: "Sirocco HideVENT 220v" },
      { label: "Área de solo", value: "< 1m² (modelos compactos)" },
      { label: "Impressão", value: "UV cobertura total" },
      { label: "Garantia", value: "3 anos" },
      { label: "Investimento base", value: "A partir de R$ 1.790" },
    ],
    faqs: [
      {
        question: "Qual é a diferença entre totem e colchão 2D?",
        answer:
          "Totens são estruturas cilíndricas ou quadradas verticais — ideais para visibilidade de marca de longe. Colchões 2D são planos, reproduzindo logotipos ou personagens com profundidade visual — ideais para backdrop, fachada e destaque de produto.",
      },
      {
        question: "Qual é o menor tamanho disponível?",
        answer:
          "Nossos totens começam em 2 metros de altura. Ideal para ambientes internos de varejo, lojas e stands pequenos.",
      },
      {
        question: "Quanto tempo os totens duram?",
        answer:
          "Com os cuidados adequados (limpeza com água e sabão neutro, secagem completa antes de guardar em local ventilado), a vida útil típica é de 5 a 10 anos. Garantia de 3 anos de fabricação.",
      },
      {
        question: "Totens são adequados para uso externo?",
        answer:
          "Sim. O Poliéster 300g/m² com tratamento UV de alta tenacidade e revestimento antifungo garante performance em uso externo prolongado. O motor Sirocco HideVENT é à prova d'água.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(PRODUCTS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS[slug];
  if (!product) return {};
  return {
    title: product.title,
    description: product.description,
    alternates: { canonical: `https://amazeballoons.com.br/produtos/${slug}` },
  };
}

const arrowIcon = (
  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

export default async function ProdutoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS[slug];
  if (!product) notFound();

  return (
    <>
      <ProductSchema
        name={product.h1}
        description={product.description}
        url={`https://amazeballoons.com.br/produtos/${slug}`}
      />
      <FAQSchema items={product.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "https://amazeballoons.com" },
          { name: "Produtos", url: "https://amazeballoons.com.br/produtos" },
          {
            name: product.h1,
            url: `https://amazeballoons.com.br/produtos/${slug}`,
          },
        ]}
      />

      <Header />
      <main className="flex-1 pt-24">

        {/* Hero */}
        <section className="bg-gradient-to-br from-purple-dark to-purple text-white py-20 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
            {/* Coluna esquerda */}
            <div>
              <div className="size-16 bg-white/10 rounded-xl flex items-center justify-center text-4xl mb-6">
                {product.icon}
              </div>
              <h1
                className="text-4xl lg:text-6xl font-black uppercase leading-tight mb-6"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                {product.h1}
              </h1>
              <p className="text-xl text-white/70 leading-relaxed mb-8">
                {product.heroText}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/orcamento" variant="cta" size="lg" icon={arrowIcon}>
                  Solicitar Orçamento Grátis
                </Button>
                <Button
                  href="/portfolio"
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Ver Portfólio
                </Button>
              </div>
            </div>

            {/* Coluna direita — card de detalhes */}
            <div className="bg-white/10 rounded-xl p-8 border border-white/20 space-y-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">
                  Tamanhos
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-white/15 text-white text-sm font-medium rounded-full border border-white/20"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">
                  Incluso
                </h3>
                <ul className="space-y-2">
                  {product.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-white/80"
                    >
                      <span className="text-orange font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-2">
                  Material
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {product.material}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-3xl lg:text-4xl font-black uppercase mb-12"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              POR QUE ESCOLHER ESTE PRODUTO
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {product.benefits.map((b) => (
                <div
                  key={b.title}
                  className="bg-surface-container-low border border-border rounded-xl p-8"
                >
                  <div className="size-12 rounded-lg bg-primary/8 flex items-center justify-center text-2xl mb-5">
                    {b.icon}
                  </div>
                  <h3
                    className="text-lg font-black uppercase text-text mb-3"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {b.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Aplicações */}
        <section className="py-20 px-4 lg:px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-3xl lg:text-4xl font-black uppercase mb-12"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              ONDE É USADO
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {product.useCases.map((uc) => (
                <div
                  key={uc.title}
                  className="bg-white rounded-lg p-6 border border-border"
                >
                  <h3
                    className="font-black uppercase text-text mb-3"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {uc.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specs técnicas */}
        <section className="py-16 px-4 lg:px-8 bg-on-surface">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-3xl lg:text-4xl font-black uppercase text-inverse-on-surface mb-10"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              ESPECIFICAÇÕES TÉCNICAS
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="bg-white/5 border border-white/10 rounded-lg px-10 py-5"
                >
                  <p className="text-[0.6rem] uppercase tracking-widest text-inverse-on-surface/40 mb-1.5">
                    {spec.label}
                  </p>
                  <p
                    className="text-lg font-black text-inverse-on-surface"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-3xl lg:text-4xl font-black uppercase mb-10"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              PERGUNTAS FREQUENTES
            </h2>
            <div className="space-y-6">
              {product.faqs.map((faq) => (
                <div key={faq.question} className="border-b border-border pb-6">
                  <h3 className="font-semibold text-text mb-2">{faq.question}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 lg:px-8 bg-purple text-white text-center">
          <div className="max-w-2xl mx-auto">
            <span className="section-label text-orange mb-4 inline-block">
              Pronto para Começar?
            </span>
            <h2
              className="text-4xl lg:text-5xl font-black uppercase mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              SOLICITE SEU ORÇAMENTO GRÁTIS
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Proposta técnica em até 24 horas — com especificação completa de materiais,
              prazo garantido por escrito e aprovação 3D antes da produção.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Button href="/orcamento" variant="cta" size="lg" icon={arrowIcon}>
                Solicitar Orçamento Grátis
              </Button>
              <Link
                href="/produtos"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Ver todos os produtos →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
