"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const SLIDES = [
  {
    gradient: "from-purple-dark via-primary to-primary-container",
    label: "Infláveis Publicitários Personalizados",
    headline: ["VOCÊ SONHA.", "NÓS INFLAMOS."],
    sub: "Infláveis publicitários personalizados, réplicas gigantes de produtos, arcos, mascotes e totens. Mais de 40 anos de artesanato em todo o continente americano.",
  },
  {
    gradient: "from-[#1a0030] via-secondary to-primary-container",
    label: "Réplicas Gigantes de Produtos",
    headline: ["DOMINE", "QUALQUER ESPAÇO."],
    sub: "De totens de 2m a réplicas de produtos de 15m — projetados para causar impacto em feiras, eventos esportivos e ativações de marca.",
  },
  {
    gradient: "from-primary-container via-primary to-[#1a0030]",
    label: "Alcance Pan-Americano",
    headline: ["40+ ANOS.", "SUA MARCA,", "INESQUECÍVEL."],
    sub: "O fabricante original de infláveis do Brasil — entregando precisão, artesanato e garantia de pontualidade para marcas em todo o continente americano.",
  },
];

const INTERVAL = 5000;

export default function HeroSlider() {
  const [current, setCurrent]   = useState(0);
  const [paused, setPaused]     = useState(false);
  const [progress, setProgress] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    setProgress(0);
    const step  = 50;
    const delta = (step / INTERVAL) * 100;
    const prog  = setInterval(() => setProgress((p) => Math.min(p + delta, 100)), step);
    const adv   = setTimeout(next, INTERVAL);
    return () => { clearInterval(prog); clearTimeout(adv); };
  }, [current, paused, next]);

  return (
    <section
      className="relative min-h-[80vh] flex items-end overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides (backgrounds) */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          aria-hidden={i !== current}
          className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-secondary-container opacity-20 blur-[120px]" />
          <div className="absolute bottom-0 -left-20  w-[500px] h-[500px] rounded-full bg-primary-container opacity-30 blur-[100px]" />
        </div>
      ))}

      {/* Content — small left-anchored text block, Floatie Kings style */}
      <div className="relative z-10 w-full max-w-10xl mx-auto px-4 lg:px-35 pt-24 pb-80">
        <div className="max-w-xs">
          <h1
            className="font-black leading-tight tracking-tight text-white uppercase mb-4 text-2xl lg:text-3xl"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            {SLIDES[current].headline.map((line, i) => (
              <span key={i} className={`block ${i === 1 ? "text-orange" : ""}`}>
                {line}
              </span>
            ))}
          </h1>

          <Link
            href="/orcamento"
            className="inline-flex items-center gap-2 h-9 px-5 border border-white/60 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-text transition-colors"
            style={{ fontFamily: "var(--font-headline)" }}
          >
            Começar Agora
          </Link>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => { setCurrent(i); setProgress(0); }}
            aria-label={`Ir para o slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current ? "w-5 h-1.5 bg-orange" : "w-1.5 h-1.5 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-[2px] bg-white/10">
        <div
          className="h-full bg-orange/70"
          style={{ width: `${progress}%`, transition: paused ? "none" : "width 50ms linear" }}
        />
      </div>
    </section>
  );
}
