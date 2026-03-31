// Buttons faithful to v1.html:
// Primary CTA  → bg-tertiary-fixed text-on-tertiary-fixed (peach)
// Secondary CTA → bg-primary text-on-primary (deep purple)
// Ghost / link  → text-primary

import { type ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";

type Variant = "cta" | "primary" | "outline" | "ghost";
type Size    = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:      Variant;
  size?:         Size;
  href?:         string;
  external?:     boolean;
  loading?:      boolean;
  fullWidth?:    boolean;
  icon?:         React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  cta:     "bg-tertiary-fixed text-on-tertiary-fixed shadow-md",
  primary: "bg-primary text-on-primary ambient-shadow",
  outline: "border border-outline-variant text-on-surface hover:border-primary hover:text-primary",
  ghost:   "text-primary hover:bg-primary/5",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9  px-5 text-xs  gap-1.5 rounded-full",
  md: "h-11 px-6 text-sm  gap-2   rounded-full",
  lg: "h-14 px-8 text-base gap-2.5 rounded-full",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "cta", size = "md", href, external, loading, fullWidth, icon, children, className = "", disabled, ...props }, ref) => {
    const base = `btn-hover-inflate inline-flex items-center justify-center gap-2 font-label font-bold leading-normal tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-50 disabled:cursor-not-allowed ${fullWidth ? "w-full" : ""}`;
    const cls  = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    const content = loading
      ? <svg className="animate-spin size-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
      : <>{children}{icon && <span>{icon}</span>}</>;

    if (href) {
      return (
        <Link href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={cls}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={cls} disabled={disabled || loading} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
