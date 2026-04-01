// Service/format card — exact "Formatos de Contratação" style from v1.html
// bg-surface-container-highest, ambient-shadow, centered icon circle, stagger-ready

import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
  accent?: "primary" | "secondary" | "tertiary";
  stagger?: 0 | 1 | 2;           // 0 = no offset, 1 = mt-8, 2 = mt-16
  // Portfolio variant fields
  client?: string;
  sector?: string;
  tags?: string[];
  year?: string | number;
  variant?: "service" | "portfolio";
}

export default function ProjectCard({
  title,
  description,
  href,
  icon = "🎈",
  accent = "primary",
  stagger = 0,
  client,
  sector,
  tags,
  year,
  variant = "service",
}: ProjectCardProps) {
  const staggerClass = stagger === 1 ? "md:mt-8" : stagger === 2 ? "md:mt-16" : "";

  const iconBg: Record<string, string> = {
    primary:   "bg-primary-container text-on-primary-container",
    secondary: "bg-secondary-container text-on-secondary-container",
    tertiary:  "bg-tertiary-fixed text-on-tertiary-fixed",
  };

  const hoverBorder: Record<string, string> = {
    primary:   "hover:border-primary/30",
    secondary: "hover:border-secondary/30",
    tertiary:  "hover:border-tertiary/30",
  };

  if (variant === "portfolio") {
    return (
      <Link
        href={href}
        className={`group flex flex-col bg-surface-container-highest rounded-lg overflow-hidden ambient-shadow border border-outline-variant/10 ${hoverBorder[accent]} transition-colors ${staggerClass}`}
      >
        {/* Image placeholder */}
        <div className="relative h-52 bg-gradient-to-br from-primary-container to-secondary overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-20 text-on-primary">
            <span className="text-7xl">{icon}</span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        {/* Info */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-headline text-on-surface text-lg font-bold group-hover:text-primary transition-colors" style={{ fontFamily: "var(--font-headline)" }}>
              {title}
            </h3>
            {year && <span className="text-xs text-on-surface-variant shrink-0">{year}</span>}
          </div>
          {client && <p className="text-xs text-on-surface-variant mb-3">{client}</p>}
          <p className="text-sm text-on-surface-variant leading-relaxed flex-1">{description}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {sector && (
              <span className="px-2.5 py-1 text-xs font-medium bg-tertiary-fixed text-on-tertiary-fixed rounded-full">
                {sector}
              </span>
            )}
            {tags?.map((t) => (
              <span key={t} className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    );
  }

  // Service card (Formatos style)
  return (
    <div className={`bg-surface-container-highest rounded-lg p-8 ambient-shadow border border-outline-variant/10 ${hoverBorder[accent]} transition-colors flex flex-col items-center text-center ${staggerClass}`}>
      <div className={`size-16 rounded-full flex items-center justify-center mb-6 ${iconBg[accent]}`}>
        <span className="text-3xl">{icon}</span>
      </div>
      <h3
        className="font-headline text-on-surface text-xl font-bold mb-4"
        style={{ fontFamily: "var(--font-headline)" }}
      >
        {title}
      </h3>
      <p className="font-body text-on-surface-variant text-sm flex-grow leading-relaxed">
        {description}
      </p>
      <Link
        href={href}
        className="mt-6 text-sm font-semibold text-primary hover:underline"
      >
        Learn more →
      </Link>
    </div>
  );
}
