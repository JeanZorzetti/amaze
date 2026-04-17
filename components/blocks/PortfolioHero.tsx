"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface PortfolioHeroProps {
  images: string[];
}

const SLIDES = [
  {
    label: "Feiras & Exposições",
    title: "500+",
    subtitle: "PROJETOS.",
    accent: "Para as maiores marcas das Américas.",
  },
  {
    label: "Esportes & Corridas",
    title: "40+",
    subtitle: "ANOS.",
    accent: "Engenharia aplicada a infláveis de alta performance.",
  },
  {
    label: "Eventos Corporativos",
    title: "15+",
    subtitle: "PAÍSES.",
    accent: "Entrega pan-americana com suporte total.",
  },
];

export default function PortfolioHero({ images }: PortfolioHeroProps) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [zooming, setZooming] = useState(true);

  const go = useCallback(
    (idx: number) => {
      setPrev(current);
      setCurrent(idx);
      setZooming(false);
      // tiny rAF gap so the new slide re-triggers CSS animation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setZooming(true));
      });
    },
    [current]
  );

  // auto-advance every 6s
  useEffect(() => {
    const t = setInterval(() => {
      go((current + 1) % images.length);
    }, 6000);
    return () => clearInterval(t);
  }, [current, go, images.length]);

  const slide = SLIDES[current % SLIDES.length];

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">

      {/* ── Slides ── */}
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100 z-10" : i === prev ? "opacity-0 z-0" : "opacity-0 z-0"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            aria-hidden="true"
            className={`w-full h-full object-cover origin-center transition-none ${
              i === current && zooming ? "animate-hero-zoom" : ""
            }`}
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
        </div>
      ))}

      {/* ── Content ── */}
      <div className="relative z-20 flex flex-col justify-end min-h-screen px-8 lg:px-16 pb-20 lg:pb-28">

        {/* Label */}
        <p className="text-[0.65rem] font-black uppercase tracking-[0.3em] text-orange mb-5 transition-opacity duration-500">
          {slide.label}
        </p>

        {/* Headline */}
        <h1
          className="text-6xl lg:text-[9rem] font-black leading-[0.9] uppercase text-white mb-4"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          {slide.title}<br />
          <span className="text-orange">{slide.subtitle}</span>
        </h1>

        {/* Sub */}
        <p className="text-white/70 text-base lg:text-lg max-w-md mb-10 leading-relaxed">
          {slide.accent}
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-5">
          <Link
            href="/orcamento"
            className="btn-hover-inflate inline-flex items-center justify-center h-13 px-8 rounded-full bg-orange text-white font-black text-sm uppercase tracking-wide"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Solicitar Orçamento →
          </Link>
          <Link
            href="#projetos"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-black uppercase tracking-widest transition-colors"
          >
            Ver projetos
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* ── Slide dots (bottom right) ── */}
      <div className="absolute bottom-10 right-8 lg:right-16 z-30 flex items-center gap-2.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Slide ${i + 1}`}
            className={`transition-all duration-400 rounded-full ${
              i === current
                ? "w-8 h-2 bg-orange"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* ── Slide counter (bottom left) ── */}
      <div className="absolute bottom-10 left-8 lg:left-16 z-30 flex items-center gap-3 text-white/50 text-xs font-black uppercase tracking-widest">
        <span className="text-white">{String(current + 1).padStart(2, "0")}</span>
        <span className="w-10 h-px bg-white/30" />
        <span>{String(images.length).padStart(2, "0")}</span>
      </div>

    </section>
  );
}
