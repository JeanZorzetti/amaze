// ProductCard — Floatie Kings style:
// Full-bleed background image/gradient, dark bottom gradient overlay,
// bold white ALL-CAPS title at bottom, badge top-left, arrow top-right on hover.

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
  badge?: string;
  icon?: string;
  accent?: "primary" | "secondary" | "tertiary";
  large?: boolean;
}

const gradients: Record<string, string> = {
  primary:   "from-primary-container via-primary to-secondary-container",
  secondary: "from-secondary-container via-secondary to-primary-container",
  tertiary:  "from-primary via-secondary-container to-secondary",
};

export default function ProductCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  badge,
  icon = "🎈",
  accent = "primary",
  large = false,
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer flex items-end w-full h-full ${large ? "min-h-[640px]" : "min-h-[300px]"}`}
    >
      {/* Background */}
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradients[accent]} transition-transform duration-700 group-hover:scale-105`}
        >
          <span className="absolute inset-0 flex items-center justify-center text-[8rem] opacity-15 select-none">
            {icon}
          </span>
        </div>
      )}

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Badge — top left */}
      {badge && (
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-orange text-white text-[0.65rem] font-black uppercase tracking-widest rounded-full z-10">
          {badge}
        </div>
      )}

      {/* Arrow — top right, appears on hover */}
      <div className="absolute top-4 right-4 size-9 rounded-full bg-white/10 border border-white/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 group-hover:bg-orange/90 group-hover:border-orange">
        <svg className="size-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>

      {/* Content — bottom of card */}
      <div className="relative z-10 p-6 w-full">
        <h3
          className="font-black text-white text-2xl uppercase leading-tight mb-2"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          {title}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}
