"use client";

import { useState } from "react";
import Link from "next/link";

interface Project {
  title: string;
  client: string;
  sector: string;
  href: string;
  description: string;
  tags: string[];
  year: number;
  image?: string;
}

interface PortfolioGridProps {
  projects: Project[];
  sectors: string[];
}

export default function PortfolioGrid({ projects, sectors }: PortfolioGridProps) {
  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos" ? projects : projects.filter((p) => p.sector === active);

  return (
    <>
      {/* ── Filter — texto simples estilo Marity ── */}
      <div className="flex flex-wrap items-center gap-6 mb-14">
        {sectors.map((s) => (
          <button
            key={s}
            onClick={() => setActive(s)}
            className={`relative text-sm font-black uppercase tracking-[0.15em] transition-colors pb-1 ${
              s === active
                ? "text-text after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-orange"
                : "text-muted hover:text-text"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* ── Masonry-style grid — estilo Marity ── */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {filtered.map((p, i) => (
          <Link
            key={p.href}
            href={p.href}
            className="group relative block overflow-hidden break-inside-avoid"
            style={{ marginBottom: "1.25rem" }}
          >
            {/* Imagem — altura variada por índice para efeito masonry */}
            <div
              className={`relative overflow-hidden w-full ${
                i % 5 === 0 ? "aspect-[4/5]" :
                i % 5 === 1 ? "aspect-[4/3]" :
                i % 5 === 2 ? "aspect-square" :
                i % 5 === 3 ? "aspect-[3/4]" :
                              "aspect-[16/10]"
              }`}
            >
              {p.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary to-purple" />
              )}

              {/* Overlay preto desliza de baixo — estilo Marity */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
                <p className="text-orange text-[0.65rem] font-black uppercase tracking-[0.2em] mb-2">
                  {p.sector} · {p.year}
                </p>
                <h3
                  className="text-white font-black text-xl leading-tight mb-3"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  {p.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-white/70 text-xs font-black uppercase tracking-widest">
                  Ver projeto
                  <svg className="size-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Caption abaixo da foto — estilo Marity */}
            <div className="pt-4 pb-1">
              <p className="text-[0.65rem] text-muted uppercase tracking-[0.2em] font-semibold mb-1">
                {p.client}
              </p>
              <h3
                className="text-base font-black text-text leading-tight group-hover:text-primary transition-colors"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                {p.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted text-sm">Nenhum projeto nessa categoria ainda.</p>
        </div>
      )}
    </>
  );
}
