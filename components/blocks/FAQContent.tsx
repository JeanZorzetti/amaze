"use client";

import { useState } from "react";

/* ── Types ── */
interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  id: string;
  title: string;
  color: string;
  icon: React.ReactNode;
  items: FAQItem[];
}

/* ── SVG Icons (inline, no external deps) ── */
function IconQuestionCircle({ color }: { color: string }) {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth={3} />
    </svg>
  );
}

function IconWrench({ color }: { color: string }) {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function IconBolt({ color }: { color: string }) {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconPaintBrush({ color }: { color: string }) {
  return (
    <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 0 0-3-3z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 8c1-.5 3.5-2 4-7" />
      <path d="M14.5 17.5 4.5 15" />
    </svg>
  );
}

function IconChevron() {
  return (
    <svg className="size-4 shrink-0 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 9l-7 7-7-7" />
    </svg>
  );
}

/* ── FAQ Data ── */
const categories: FAQCategory[] = [
  {
    id: "gerais",
    title: "Dúvidas Gerais",
    color: "#ff6b35",
    icon: <IconQuestionCircle color="#ff6b35" />,
    items: [
      {
        q: "Os infláveis da Amaze são feitos em qual material?",
        a: "Nossos infláveis são produzidos em tecido técnico de poliéster de alta resistência, material superior às lonas comuns, garantindo alta resistência, cores vivas e acabamento impecável. Utilizamos impressão UV de alta resolução que não desbota com exposição ao sol e à chuva.",
      },
      {
        q: "Quanto tempo duram os infláveis?",
        a: "A durabilidade varia conforme o uso e os cuidados. O tecido poliéster suporta temperaturas extremas e a impressão UV tem garantia para uso externo. Em ambientes internos, com os cuidados adequados, os infláveis podem durar muitos anos mantendo sua funcionalidade e aparência.",
      },
      {
        q: "Como funciona a garantia?",
        a: "A garantia é de 1 ano contra defeitos de fabricação. Para mantê-la é obrigatório seguir as instruções de montagem e armazenamento. A garantia é cancelada em caso de reparos por pessoas não autorizadas, mau uso, vandalismo, ventos fortes ou chuva intensa.",
      },
      {
        q: "Qual o prazo de entrega?",
        a: "O prazo depende do modelo, tamanho e layout escolhido. Em média, a produção é concluída em 10 a 15 dias úteis após a aprovação do projeto e pagamento. Em casos de urgência, entre em contato para avaliarmos possibilidades de prazo reduzido.",
      },
      {
        q: "O inflável acompanha motor e personalização?",
        a: "Sim, todos os infláveis da Amaze incluem o motor ventilador embutido e personalização completa com sua marca ou design. Também fornecemos layout 3D para aprovação antes da produção.",
      },
      {
        q: "Qual a diferença entre infláveis 3D e 2D?",
        a: "Infláveis 3D possuem formato tridimensional com profundidade e volume, ideais para réplicas de produtos e personagens. Infláveis 2D apresentam design bidimensional, mais plano, sendo mais simples e acessíveis. A Amaze possui equipe qualificada em modelagem 3D para projetos personalizados.",
      },
      {
        q: "Vocês atendem para todo o Brasil e exterior?",
        a: "Sim. Atendemos em todo o território nacional e realizamos entregas internacionais para toda a América. Já entregamos projetos em mais de 10 países.",
      },
    ],
  },
  {
    id: "montagem",
    title: "Montagem, Limpeza e Transporte",
    color: "#3b82f6",
    icon: <IconWrench color="#3b82f6" />,
    items: [
      {
        q: "Quanto tempo demora para o inflável encher?",
        a: "O tempo de enchimento varia conforme o tamanho do inflável. Em geral, leva de 2 a 6 minutos para estar completamente inflado e pronto para uso.",
      },
      {
        q: "Preciso de alguém especializado para instalar?",
        a: "Não. A instalação é simples e pode ser feita pelo próprio cliente seguindo o manual de instruções incluído. O motor ventilador embutido facilita ainda mais o processo.",
      },
      {
        q: "Quais cuidados devo ter na instalação?",
        a: "Para instalar com segurança: verifique se a voltagem está correta, instale em local plano e limpo, utilize as cordas e estacas de ancoragem fornecidas para fixação adequada, e evite montar em condições adversas como vento forte acima de 40km/h ou chuva intensa.",
      },
      {
        q: "Como limpar o inflável?",
        a: "Utilize água e sabão neutro aplicados com um pano macio e úmido. Evite produtos abrasivos, solventes ou desengraxantes, pois podem danificar o material ou a impressão. Seque completamente antes de guardar.",
      },
      {
        q: "Como guardar o inflável?",
        a: "Guarde em local seco, limpo e longe de umidade excessiva. Dobre cuidadosamente e utilize a sacola de transporte fornecida. Evite guardar com o material ainda úmido para prevenir mofo.",
      },
      {
        q: "O inflável pode ser usado na chuva?",
        a: "O material é resistente à água, mas não recomendamos o uso em chuvas fortes. Ventos intensos associados à chuva podem comprometer a segurança da estrutura. Para chuvas leves, o inflável pode permanecer montado desde que devidamente ancorado.",
      },
    ],
  },
  {
    id: "motor",
    title: "Motor e Sistema de Ar",
    color: "#eab308",
    icon: <IconBolt color="#eab308" />,
    items: [
      {
        q: "O inflável acompanha o motor?",
        a: "Sim, todos os infláveis da Amaze incluem motor ventilador embutido. O motor é elétrico e mantém o inflável continuamente inflado, garantindo estabilidade e forma perfeita durante todo o uso.",
      },
      {
        q: "Como funciona a garantia do motor?",
        a: "A garantia do motor é de 1 ano contra defeitos de fabricação. Não cobre danos por quedas, reparos não autorizados, variações de tensão, obstrução da entrada de ar ou mau uso.",
      },
      {
        q: "Qual a voltagem do motor?",
        a: "Os motores padrão são 220V. Motores 110V podem ser solicitados no momento do pedido. Verifique sempre a voltagem da sua tomada antes de conectar.",
      },
      {
        q: "O motor precisa ficar ligado o tempo todo?",
        a: "Sim, é necessário que o motor fique ligado continuamente durante o uso, pois os infláveis são costurados (não soldados) e possuem pequenas saídas de ar internas que requerem reposição constante.",
      },
      {
        q: "Por quanto tempo o motor pode ficar ligado?",
        a: "O motor pode funcionar continuamente, desde que esteja em boas condições e com a entrada de ar desobstruída. Recomendamos verificação periódica da temperatura do motor.",
      },
      {
        q: "Qual o consumo de energia?",
        a: "Os motoventiladores possuem potência de aproximadamente 250 watts — equivalente a uma lâmpada incandescente de alta potência. O consumo mensal em uso contínuo é bastante reduzido e acessível.",
      },
      {
        q: "O motor pode ser usado na chuva?",
        a: "Não. O motor é elétrico e não deve ser exposto à água. Certifique-se de que o motor esteja sempre protegido da chuva e nunca em poças ou áreas alagadas.",
      },
      {
        q: "Qual o nível de ruído do motor?",
        a: "O motor gera aproximadamente 70-80 decibéis — comparável ao som de um ventilador de grande porte. Para eventos em ambientes fechados, considere a posição do motor em relação ao público.",
      },
    ],
  },
  {
    id: "layout",
    title: "Layout e Impressão",
    color: "#8b5cf6",
    icon: <IconPaintBrush color="#8b5cf6" />,
    items: [
      {
        q: "Como funciona o processo de aprovação do layout?",
        a: "Nossa equipe desenvolve um layout 3D realista do seu inflável antes da produção. Você revisa e aprova cada detalhe — formato, cores, logotipos e textos — antes de iniciarmos a fabricação. Ajustes são feitos até sua total aprovação.",
      },
      {
        q: "Quais formatos de arquivo são aceitos?",
        a: "Trabalhamos com arquivos vetoriais (.ai, .eps, .pdf, .cdr) e bitmap de alta resolução (.psd, .png, .jpg). Arquivos vetoriais são preferidos para garantir a melhor qualidade de impressão em grandes dimensões.",
      },
      {
        q: "Qual resolução mínima para as imagens?",
        a: "Para infláveis com mais de 2 metros, o arquivo deve ter resolução mínima de 72 DPI no tamanho final. Quanto maior o inflável, maior a necessidade de arquivo em alta qualidade. Envie sempre no maior tamanho disponível.",
      },
      {
        q: "Como especificar as cores corretamente?",
        a: "Recomendamos utilizar o sistema Pantone como referência para garantir precisão na reprodução das cores. Também aceitamos CMYK e RGB como referência. Amostras físicas do produto podem ser enviadas para correspondência exata de cores.",
      },
      {
        q: "O que é impressão UV?",
        a: "A impressão UV utiliza tintas curadas por luz ultravioleta, resultando em cores mais vivas, alta resistência à água, ao sol e ao desbotamento. É a tecnologia que utilizamos para garantir que seu inflável mantenha as cores originais por anos.",
      },
      {
        q: "Posso usar meu logotipo em alta qualidade?",
        a: "Sim. Quanto melhor a qualidade do arquivo enviado, melhor o resultado final. Logotipos em formato vetorial (.ai, .eps, .pdf) garantem reprodução perfeita em qualquer tamanho.",
      },
    ],
  },
];

/* ── Accordion Item ── */
function AccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-4 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={`text-sm font-semibold leading-snug transition-colors ${
            isOpen ? "text-primary" : "text-on-surface group-hover:text-primary"
          }`}
        >
          {item.q}
        </span>
        <span className={`text-on-surface-variant transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`}>
          <IconChevron />
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-on-surface/70 pb-5 pr-8">
          {item.a}
        </p>
      </div>
    </div>
  );
}

/* ── Category Block ── */
function CategoryBlock({ category }: { category: FAQCategory }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <div className="bg-white rounded-2xl border border-border overflow-hidden">
      {/* Category header */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-border">
        <div
          className="size-9 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${category.color}18` }}
        >
          {category.icon}
        </div>
        <h2
          className="text-base font-black uppercase text-on-surface tracking-wide"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          {category.title}
        </h2>
        <span
          className="ml-auto text-xs font-bold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: `${category.color}18`, color: category.color }}
        >
          {category.items.length} perguntas
        </span>
      </div>

      {/* Items */}
      <div className="px-6">
        {category.items.map((item, i) => (
          <AccordionItem
            key={i}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Sidebar CTA ── */
function SidebarCTA() {
  return (
    <div className="bg-on-surface rounded-2xl p-8 flex flex-col gap-6">
      {/* Header */}
      <div>
        <span className="section-label text-orange mb-3">Fale Conosco</span>
        <h3
          className="text-xl font-black uppercase text-inverse-on-surface leading-tight mt-2"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          Precisa de um orçamento?
        </h3>
        <p className="text-sm text-inverse-on-surface/60 mt-2 leading-relaxed">
          Fale com nosso especialista em até 24h.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        <a
          href="https://wa.me/5548920612591"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hover-inflate flex items-center justify-center gap-2.5 h-12 px-5 bg-[#25d366] text-white rounded-xl font-black text-sm uppercase tracking-wide"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          {/* WhatsApp icon */}
          <svg className="size-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Falar no WhatsApp
        </a>

        <a
          href="/orcamento"
          className="btn-hover-inflate flex items-center justify-center h-12 px-5 bg-white/10 border border-white/20 text-inverse-on-surface rounded-xl font-bold text-sm hover:bg-white/15 transition-colors"
        >
          Solicitar Orçamento
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Phone */}
      <a
        href="tel:+5548920612591"
        className="flex items-center gap-3 text-inverse-on-surface/60 hover:text-inverse-on-surface transition-colors group"
      >
        <div className="size-9 rounded-lg bg-white/8 flex items-center justify-center shrink-0 group-hover:bg-white/12 transition-colors">
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v3z" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-bold text-inverse-on-surface/40 uppercase tracking-widest">Telefone</p>
          <p className="text-sm font-semibold">+55 48 9206-1259</p>
        </div>
      </a>

      {/* Trust badges */}
      <div className="grid grid-cols-2 gap-2 mt-1">
        {[
          { icon: "⚡", text: "Resposta em 24h" },
          { icon: "🌎", text: "Entrega nas Américas" },
          { icon: "🏆", text: "40+ anos de exp." },
          { icon: "✅", text: "1 ano de garantia" },
        ].map((badge) => (
          <div key={badge.text} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
            <span className="text-sm">{badge.icon}</span>
            <span className="text-xs text-inverse-on-surface/50 font-medium leading-tight">{badge.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main Export ── */
export default function FAQContent() {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start max-w-7xl mx-auto px-4 lg:px-8 py-16">

      {/* Left: Accordion categories */}
      <div className="flex-1 min-w-0 space-y-5">
        {categories.map((cat) => (
          <CategoryBlock key={cat.id} category={cat} />
        ))}
      </div>

      {/* Right: Sticky sidebar */}
      <aside className="w-full lg:w-80 shrink-0 lg:sticky lg:top-36">
        <SidebarCTA />
      </aside>
    </div>
  );
}
