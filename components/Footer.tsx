// Footer — inverse-surface (#342e38) style from v1.html

import Link from "next/link";

const links = {
  Produtos: [
    { label: "Infláveis Personalizados",  href: "/produtos/inflaveis-personalizados" },
    { label: "Infláveis Gigantes",        href: "/produtos/inflaveis-gigantes" },
    { label: "Arcos & Portais",           href: "/produtos/arcos-portais" },
    { label: "Mascotes Infláveis",        href: "/produtos/mascotes-inflaveis" },
    { label: "Totens & Displays",         href: "/produtos/totens-displays" },
  ],
  Setores: [
    { label: "Eventos Corporativos",      href: "/setores/eventos-corporativos" },
    { label: "Festas & Celebrações",      href: "/setores/festas-celebracoes" },
    { label: "Marketing & Publicidade",   href: "/setores/marketing-publicidade" },
    { label: "Esportes & Corridas",       href: "/setores/esportes-corridas" },
    { label: "Feiras & Exposições",       href: "/setores/feiras-exposicoes" },
  ],
  Empresa: [
    { label: "Sobre Nós",    href: "/sobre" },
    { label: "Portfólio",    href: "/portfolio" },
    { label: "Blog",         href: "/blog" },
    { label: "Instruções",   href: "/instrucoes" },
    { label: "Contato",      href: "/contact" },
    { label: "Orçamento",    href: "/orcamento" },
  ],
  Legal: [
    { label: "Política de Privacidade",  href: "/privacy" },
    { label: "Termos de Serviço",        href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface border-t border-outline/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand col */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="size-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                </svg>
              </div>
              <span className="font-headline text-inverse-on-surface text-lg font-bold" style={{ fontFamily: "var(--font-headline)" }}>
                Amaze Balloons
              </span>
            </Link>
            <p className="text-sm text-inverse-on-surface/60 leading-relaxed mb-5">
              Infláveis personalizados premium e soluções publicitárias gigantes. Mais de 40 anos de experiência em todo o continente americano.
            </p>
            <div className="flex gap-3">
              {[
                {
                  label: "Instagram",
                  href: "https://instagram.com/amazeballoons",
                  icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />,
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/company/amazeballoons",
                  icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="size-9 rounded-full bg-inverse-on-surface/10 hover:bg-primary transition-colors flex items-center justify-center"
                >
                  <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h3 className="text-inverse-on-surface text-xs font-semibold uppercase tracking-widest mb-4">
                {section}
              </h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-inverse-on-surface/60 hover:text-inverse-on-surface transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── World map + locations ── */}
        <div className="border-t border-outline/20 pt-12 mb-0">
          <div className="relative flex flex-col md:flex-row items-center gap-8">

            {/* Address block */}
            <div className="md:w-64 shrink-0 text-center md:text-left">
              <p className="text-inverse-on-surface text-lg font-bold mb-6" style={{ fontFamily: "var(--font-headline)" }}>
                Presença Global
              </p>
              <div className="mb-5">
                <p className="text-inverse-on-surface/80 text-sm font-semibold uppercase tracking-widest mb-1">Brasil</p>
                <p className="text-inverse-on-surface/50 text-sm leading-relaxed">
                  Florianópolis, SC<br />
                  Brasil
                </p>
                <a href="tel:+5548920612591" className="text-orange text-sm mt-1 inline-block hover:underline">
                  +55 48 9206-1259
                </a>
              </div>
              <div>
                <p className="text-inverse-on-surface/80 text-sm font-semibold uppercase tracking-widest mb-1">Estados Unidos</p>
                <p className="text-inverse-on-surface/50 text-sm leading-relaxed">
                  Endereço a confirmar<br />
                  United States
                </p>
              </div>
            </div>

            {/* SVG World Map */}
            <div className="flex-1 relative overflow-hidden" style={{ minHeight: "260px" }}>
              {/* Simple world map paths — orange gradient fill */}
              <svg viewBox="0 0 1010 570" className="w-full h-full" style={{ opacity: 0.85 }}>
                <defs>
                  <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="50%" stopColor="#ea580c" />
                    <stop offset="100%" stopColor="#c2410c" />
                  </linearGradient>
                </defs>
                {/* Simplified continent shapes */}
                {/* North America */}
                <path fill="url(#mapGrad)" d="M120,80 L220,60 L280,70 L300,100 L310,140 L290,180 L260,220 L230,260 L200,280 L170,260 L140,230 L110,200 L90,160 L95,120 Z" />
                {/* Central America */}
                <path fill="url(#mapGrad)" d="M200,280 L230,260 L240,290 L230,320 L210,330 L195,310 Z" />
                {/* South America */}
                <path fill="url(#mapGrad)" d="M195,330 L240,310 L270,330 L290,370 L300,420 L290,460 L260,490 L230,480 L200,450 L185,410 L180,370 Z" />
                {/* Europe */}
                <path fill="url(#mapGrad)" d="M430,60 L490,55 L520,70 L530,100 L510,120 L480,130 L450,120 L420,100 L415,80 Z" />
                {/* Africa */}
                <path fill="url(#mapGrad)" d="M430,140 L490,130 L530,150 L545,200 L540,260 L520,310 L490,340 L460,330 L430,300 L415,250 L410,200 L420,160 Z" />
                {/* Asia */}
                <path fill="url(#mapGrad)" d="M530,55 L650,45 L780,60 L840,90 L860,130 L830,170 L780,190 L720,200 L660,190 L600,180 L550,160 L530,130 L520,100 Z" />
                {/* Russia north */}
                <path fill="url(#mapGrad)" d="M490,40 L650,30 L800,40 L840,60 L780,60 L650,45 L530,55 L490,55 Z" />
                {/* Southeast Asia / Indonesia */}
                <path fill="url(#mapGrad)" d="M720,200 L780,190 L830,210 L850,230 L820,240 L780,235 L740,225 Z" />
                <path fill="url(#mapGrad)" d="M800,240 L840,235 L860,255 L840,265 L810,258 Z" />
                {/* Australia */}
                <path fill="url(#mapGrad)" d="M760,310 L840,300 L890,320 L900,370 L870,410 L820,420 L770,400 L745,360 L750,325 Z" />
                {/* Japan / Korea */}
                <path fill="url(#mapGrad)" d="M840,120 L860,115 L870,130 L855,140 L840,135 Z" />
                {/* UK / Ireland */}
                <path fill="url(#mapGrad)" d="M415,65 L430,60 L428,80 L415,80 Z" />

                {/* Pin — Brasil (approx ~240, 390) */}
                <g transform="translate(240,375)">
                  <circle cx="0" cy="0" r="8" fill="white" opacity="0.9" />
                  <circle cx="0" cy="0" r="4" fill="#f97316" />
                  <line x1="0" y1="0" x2="0" y2="18" stroke="white" strokeWidth="2" />
                </g>

                {/* Pin — USA (approx ~185, 155) */}
                <g transform="translate(185,155)">
                  <circle cx="0" cy="0" r="8" fill="white" opacity="0.9" />
                  <circle cx="0" cy="0" r="4" fill="#f97316" />
                  <line x1="0" y1="0" x2="0" y2="18" stroke="white" strokeWidth="2" />
                </g>
              </svg>
            </div>

          </div>
        </div>

        <div className="border-t border-outline/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-inverse-on-surface/40">
            © {new Date().getFullYear()} Amaze Balloons. Todos os direitos reservados.
          </p>
          <p className="text-xs text-inverse-on-surface/40">
            Desenvolvido por{" "}
            <a href="https://roilabs.com.br" target="_blank" rel="noopener noreferrer"
              className="text-inverse-on-surface/60 hover:text-inverse-on-surface transition-colors">
              ROI Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
