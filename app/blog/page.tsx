import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaOrg";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog de Marketing com Infláveis — Dicas, Guias e Casos de Sucesso",
  description:
    "Guias especializados sobre infláveis personalizados, aeromarketing, estratégia em feiras e ativações de marca. Saiba como as maiores marcas usam infláveis gigantes para dominar eventos.",
  alternates: { canonical: "https://amazeballoons.com.br/blog" },
};

const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
const [featured, ...rest] = sorted;
const categories = ["Todos", ...Array.from(new Set(posts.map((p) => p.category)))];

function categoryIcon(cat: string) {
  if (cat === "Feiras & Exposições" || cat === "Trade Shows") return "🎪";
  if (cat === "Marketing") return "📣";
  if (cat === "Esportes" || cat === "Sports") return "🏃";
  if (cat === "Eventos Corporativos" || cat === "Corporate Events") return "🏢";
  if (cat === "Eventos" || cat === "Events") return "🎉";
  if (cat === "Balonismo" || cat === "Ballooning") return "🎈";
  return "✦";
}

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "https://amazeballoons.com" },
          { name: "Blog", url: "https://amazeballoons.com.br/blog" },
        ]}
      />
      <Header />
      <main className="flex-1 pt-24">

        {/* Hero */}
        <section className="py-20 px-4 lg:px-8 bg-gradient-to-b from-purple-dark to-purple text-white">
          <div className="max-w-7xl mx-auto">
            <p className="section-label text-orange mb-4">Blog de Marketing com Infláveis</p>
            <h1
              className="text-4xl lg:text-6xl font-black leading-tight uppercase mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              Conteúdo para Marcas
              <br />
              <span className="text-orange">Que Pensam Grande</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Guias especializados sobre infláveis personalizados, estratégia em feiras,
              aeromarketing e ativações de marca — de quem tem 40+ anos no setor.
            </p>
          </div>
        </section>

        {/* Featured post */}
        <section className="py-12 px-4 lg:px-8 bg-surface-container">
          <div className="max-w-7xl mx-auto">
            <p className="section-label text-primary mb-6">Artigo em Destaque</p>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden border border-primary/20 hover:border-primary/50 hover:shadow-xl transition-all bg-white"
            >
              {/* Visual */}
              <div className="h-64 lg:h-auto bg-gradient-to-br from-primary to-secondary flex items-center justify-center min-h-64 relative">
                <span className="text-8xl opacity-20">{categoryIcon(featured.category)}</span>
                <span className="absolute top-4 left-4 px-3 py-1 bg-orange text-white text-xs font-black uppercase tracking-widest rounded-full">
                  Mais Recente
                </span>
              </div>
              {/* Content */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 bg-primary/8 text-primary text-xs font-bold uppercase tracking-wide rounded-full">
                    {featured.category}
                  </span>
                  <span className="text-xs text-muted">{featured.readTime}</span>
                </div>
                <h2
                  className="font-black text-text text-2xl lg:text-3xl leading-tight mb-4 group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  {featured.title}
                </h2>
                <p className="text-muted leading-relaxed mb-6 line-clamp-3">
                  {featured.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <span className="text-sm text-muted">
                    {new Date(featured.date).toLocaleDateString("pt-BR", { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="text-sm font-black text-primary uppercase tracking-widest flex items-center gap-1.5">
                    Ler artigo
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Category filter + grid */}
        <section className="py-16 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                    cat === "Todos"
                      ? "bg-primary text-on-primary border-primary"
                      : "bg-white text-text border-border hover:border-primary/40 hover:text-primary cursor-pointer"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Articles grid — remaining posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  {/* Visual placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary-container to-secondary-container flex items-center justify-center">
                    <span className="text-5xl opacity-30">{categoryIcon(post.category)}</span>
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-1 bg-primary/8 text-primary text-xs font-bold uppercase tracking-wide rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted">{post.readTime}</span>
                    </div>
                    <h2
                      className="font-black text-text text-lg leading-tight mb-3 group-hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {post.title}
                    </h2>
                    <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs text-muted">
                        {new Date(post.date).toLocaleDateString("pt-BR", { month: "long", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="text-xs font-black text-primary uppercase tracking-widest flex items-center gap-1.5">
                        Ler
                        <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
