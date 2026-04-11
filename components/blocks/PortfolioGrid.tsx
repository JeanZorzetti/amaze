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
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {sectors.map((s) => (
          <button
            key={s}
            onClick={() => setActive(s)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
              s === active
                ? "bg-primary text-on-primary border-primary shadow-sm"
                : "bg-white text-text border-border hover:border-primary/40 hover:text-primary"
            }`}
          >
            {s}
            {s !== "Todos" && (
              <span className={`ml-1.5 text-xs font-bold ${s === active ? "text-on-primary/70" : "text-muted"}`}>
                {projects.filter((p) => p.sector === s).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group flex flex-col rounded-xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all bg-white"
          >
            {/* Visual */}
            <div className="relative h-52 overflow-hidden bg-gradient-to-br from-primary to-purple">
              {p.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-20">🎈</span>
                </div>
              )}
              {/* Sector badge */}
              <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-black uppercase tracking-wide rounded-full">
                {p.sector}
              </span>
              {/* Year badge */}
              <span className="absolute top-3 right-3 px-2.5 py-1 bg-black/40 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                {p.year}
              </span>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-xs font-black uppercase tracking-widest text-orange flex items-center gap-2">
                  Ver projeto
                  <svg className="size-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-1.5">{p.client}</p>
              <h3
                className="font-black text-text text-base leading-snug mb-2 group-hover:text-primary transition-colors"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                {p.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed flex-1 line-clamp-2">{p.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border">
                {p.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-medium bg-primary/8 text-primary rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-4xl mb-4">🎈</p>
          <p className="text-muted text-sm">Nenhum projeto nessa categoria ainda.</p>
        </div>
      )}
    </>
  );
}
