"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const products = [
  { label: "Tendas Infláveis",       href: "/produtos/tendas-inflaveis" },
  { label: "Portais Infláveis",      href: "/produtos/portais-inflaveis" },
  { label: "Totens Infláveis",       href: "/produtos/totens-inflaveis" },
  { label: "Túneis Infláveis",       href: "/produtos/tuneis-inflaveis" },
  { label: "Produtos Gigantes",      href: "/produtos/produtos-gigantes" },
  { label: "Personagens Infláveis",  href: "/produtos/personagens-inflaveis" },
  { label: "Colchões 2D",            href: "/produtos/colchoes-2d" },
  { label: "Roof-Top",               href: "/produtos/roof-top" },
];

const sectors = [
  { label: "Eventos Corporativos",       href: "/setores/eventos-corporativos" },
  { label: "Festas & Celebrações",       href: "/setores/festas-celebracoes" },
  { label: "Marketing & Publicidade",    href: "/setores/marketing-publicidade" },
  { label: "Esportes & Corridas",        href: "/setores/esportes-corridas" },
  { label: "Feiras & Exposições",        href: "/setores/feiras-exposicoes" },
];

const tecnologias = [
  {
    label: "Engenharia Aplicada",
    href: "/tecnologia/engenharia-aplicada",
    icon: "⚙️",
    desc: "Motor, ancoragem e fluxo contínuo",
    badge: null,
  },
  {
    label: "Impacto Visual Estratégico",
    href: "/tecnologia/impacto-visual",
    icon: "🎯",
    desc: "Escala, definição e domínio de atenção",
    badge: null,
  },
  {
    label: "Confiabilidade Operacional",
    href: "/tecnologia/confiabilidade",
    icon: "🛡️",
    desc: "Performance garantida do início ao fim",
    badge: null,
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen]     = useState<"products" | "sectors" | "tecnologia" | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMegaOpen(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50">

      {/* ── Announcement Bar ── */}
      <div className="bg-on-surface text-inverse-on-surface py-2 px-4 text-center hidden sm:block overflow-hidden">
        <div className="flex items-center justify-center gap-4 text-xs font-semibold whitespace-nowrap">
          <span>✦ 40+ Anos de Experiência</span>
          <span className="text-white/25">|</span>
          <span>✦ Entrega Pan-Americana</span>
          <span className="text-white/25">|</span>
          <span>✦ 500+ Projetos Entregues</span>
          <span className="text-white/25">|</span>
          <Link href="/orcamento" className="text-orange font-bold hover:underline">
            Orçamento Grátis em 24h →
          </Link>
        </div>
      </div>

      {/* ── Main Nav ── */}
      <div className="bg-white border-b border-surface-variant/30 relative flex items-center justify-between whitespace-nowrap px-6 py-3.5 lg:px-12">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-primary shrink-0">
          <div className="size-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
            <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
            </svg>
          </div>
          <span
            className="text-primary font-black text-xl leading-tight tracking-tight uppercase"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Amaze Balloons
          </span>
        </Link>

        {/* Desktop nav — centered absolutely, Michelin style */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-5 lg:gap-7">

          {/* Sectors dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen("sectors")}
            onMouseLeave={() => setMegaOpen(null)}
          >
            <button
              className="flex items-center gap-1 text-on-surface hover:text-primary transition-colors font-label text-sm font-semibold leading-normal"
              onClick={() => setMegaOpen(megaOpen === "sectors" ? null : "sectors")}
            >
              Setores
              <svg className={`size-3.5 transition-transform ${megaOpen === "sectors" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {megaOpen === "sectors" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64">
              <div className="bg-white rounded-lg ambient-shadow border border-surface-variant/30 p-4">
                <p className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-on-surface-variant mb-3">
                  Indústrias
                </p>
                {sectors.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMegaOpen(null)}
                    className="block px-3 py-2 rounded-lg text-sm font-semibold text-on-surface hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
              </div>
            )}
          </div>

          {/* Tecnologia dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen("tecnologia")}
            onMouseLeave={() => setMegaOpen(null)}
          >
            <button
              className="flex items-center gap-1 text-on-surface hover:text-primary transition-colors font-label text-sm font-semibold leading-normal"
              onClick={() => setMegaOpen(megaOpen === "tecnologia" ? null : "tecnologia")}
            >
              Tecnologia
              <svg className={`size-3.5 transition-transform ${megaOpen === "tecnologia" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {megaOpen === "tecnologia" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72">
                <div className="bg-white rounded-lg ambient-shadow border border-surface-variant/30 p-4">
                  <p className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-on-surface-variant mb-3">
                    3 Pilares de Engenharia
                  </p>
                  <div className="space-y-1">
                    {tecnologias.map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        onClick={() => setMegaOpen(null)}
                        className="group flex items-start gap-3 px-3 py-2.5 rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        <span className="text-lg mt-0.5 shrink-0">{t.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors truncate" style={{ fontFamily: "var(--font-headline)" }}>
                              {t.label}
                            </span>
                            {t.badge && (
                              <span className="shrink-0 px-1.5 py-0.5 bg-orange/10 text-orange text-[0.55rem] font-black uppercase tracking-wide rounded-full">
                                {t.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-on-surface-variant truncate">{t.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-outline-variant/40">
                    <Link
                      href="/tecnologia"
                      onClick={() => setMegaOpen(null)}
                      className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                    >
                      Ver toda a tecnologia Amaze →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMegaOpen("products")}
            onMouseLeave={() => setMegaOpen(null)}
          >
            <button
              className="flex items-center gap-1 text-on-surface hover:text-primary transition-colors font-label text-sm font-semibold leading-normal"
              onClick={() => setMegaOpen(megaOpen === "products" ? null : "products")}
            >
              Produtos
              <svg className={`size-3.5 transition-transform ${megaOpen === "products" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {megaOpen === "products" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64">
                <div className="bg-white rounded-lg ambient-shadow border border-surface-variant/30 overflow-hidden">
                  <p className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-on-surface-variant px-4 pt-4 pb-2">
                    Navegue por nossos modelos
                  </p>
                  {products.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={() => setMegaOpen(null)}
                      className="group flex items-center gap-3 px-4 py-2.5 hover:bg-primary/5 transition-colors border-b border-outline-variant/20 last:border-0"
                    >
                      {/* Image placeholder */}
                      <div className="size-8 rounded bg-surface-container shrink-0 flex items-center justify-center text-on-surface-variant/30 border border-border">
                        <svg className="size-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                      </div>
                      <span className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">
                        {p.label}
                      </span>
                    </Link>
                  ))}
                  <div className="px-4 py-3 bg-surface-container/50">
                    <Link href="/orcamento" onClick={() => setMegaOpen(null)} className="text-xs font-bold text-primary hover:underline">
                      Solicitar orçamento personalizado →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {[
            { label: "Portfólio", href: "/portfolio" },
            { label: "Sobre",     href: "/sobre" },
            { label: "Blog",      href: "/blog" },
            { label: "FAQ",       href: "/faq" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-on-surface hover:text-primary transition-colors font-label text-sm font-semibold leading-normal"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/orcamento"
            className="inline-flex items-center h-9 px-5 bg-orange text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-orange/90 transition-colors"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Orçamento
          </Link>
        </nav>

        {/* Right side: lang toggle + mobile hamburger */}
        <div className="flex items-center gap-3 shrink-0">

          {/* Language toggle — PT / EN */}
          <div className="flex items-center border border-border rounded-lg overflow-hidden text-xs font-black uppercase tracking-widest">
            <span className="px-3 py-1.5 bg-on-surface text-inverse-on-surface cursor-default select-none">
              PT
            </span>
            <Link
              href="/en"
              className="px-3 py-1.5 text-muted hover:bg-surface-container hover:text-text transition-colors"
            >
              EN
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-primary p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Alternar menu"
          >
            <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>

        </div>{/* end right side */}

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-surface-variant/30 md:hidden">
            <div className="px-6 py-4 space-y-1">
              <p className="px-2 py-1 text-[0.65rem] font-black uppercase tracking-[0.22em] text-on-surface-variant">Produtos</p>
              {products.map((p) => (
                <Link key={p.href} href={p.href} onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm font-semibold text-on-surface hover:bg-primary/5 hover:text-primary transition-colors">
                  {p.label}
                </Link>
              ))}
              <div className="border-t border-outline-variant/40 my-2" />
              <p className="px-2 py-1 text-[0.65rem] font-black uppercase tracking-[0.22em] text-on-surface-variant">Setores</p>
              {sectors.map((s) => (
                <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)}
                  className="block px-2 py-2.5 rounded-lg text-sm font-semibold text-on-surface hover:bg-primary/5 hover:text-primary transition-colors">
                  {s.label}
                </Link>
              ))}
              <div className="border-t border-outline-variant/40 my-2" />
              <p className="px-2 py-1 text-[0.65rem] font-black uppercase tracking-[0.22em] text-on-surface-variant">Tecnologia</p>
              {tecnologias.map((t) => (
                <Link key={t.href} href={t.href} onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm font-semibold text-on-surface hover:bg-primary/5 hover:text-primary transition-colors">
                  <span>{t.icon}</span>{t.label}
                </Link>
              ))}
              <div className="border-t border-outline-variant/40 my-2" />
              {[{ label: "Portfólio", href: "/portfolio" }, { label: "Sobre", href: "/sobre" }, { label: "Blog", href: "/blog" }, { label: "FAQ", href: "/faq" }].map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                  className="block px-2 py-2.5 rounded-lg text-sm font-semibold text-on-surface hover:bg-primary/5 hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Link href="/orcamento" onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full py-3 bg-orange text-white text-sm font-black rounded-full uppercase tracking-wide">
                  COMEÇAR AGORA
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
