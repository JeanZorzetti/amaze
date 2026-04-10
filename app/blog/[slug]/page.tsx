import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema, ArticleSchema } from "@/components/SchemaOrg";
import { posts, getPost } from "@/lib/blog";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Blog Amaze Balloons`,
    description: post.description,
    alternates: { canonical: `https://amazeballoons.com.br/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "https://amazeballoons.com" },
          { name: "Blog", url: "https://amazeballoons.com.br/blog" },
          { name: post.title, url: `https://amazeballoons.com.br/blog/${slug}` },
        ]}
      />
      <ArticleSchema
        title={post.title}
        description={post.description}
        url={`https://amazeballoons.com.br/blog/${slug}`}
        datePublished={post.date}
      />
      <Header />

      <main className="flex-1 pt-24">

        {/* Hero */}
        <section className="py-16 px-4 lg:px-8 bg-gradient-to-b from-purple-dark to-purple text-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/blog" className="text-white/50 hover:text-white transition-colors text-sm">
                ← Blog
              </Link>
              <span className="text-white/25">/</span>
              <span className="px-3 py-1 bg-white/15 text-white text-xs font-bold uppercase tracking-widest rounded-full">
                {post.category}
              </span>
            </div>
            <h1
              className="text-3xl lg:text-5xl font-black leading-tight mb-6"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-white/50">
              <span>
                {new Date(post.date).toLocaleDateString("pt-BR", { month: "long", day: "numeric", year: "numeric" })}
              </span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </section>

        {/* Article body */}
        <section className="py-16 px-4 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-black prose-headings:text-text prose-headings:uppercase
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-p:text-muted prose-p:leading-relaxed prose-p:mb-5
                prose-strong:text-text prose-strong:font-bold
                prose-li:text-muted"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA inline */}
            <div className="mt-16 p-8 rounded-xl bg-primary text-on-primary text-center">
              <h3
                className="text-2xl font-black uppercase mb-3"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Pronto para Ir ao Gigante?
              </h3>
              <p className="text-on-primary/70 mb-6 text-sm">
                Solicite um orçamento gratuito para seu inflável personalizado em até 24 horas.
              </p>
              <Link
                href="/quote"
                className="btn-hover-inflate inline-flex items-center gap-2 h-12 px-8 bg-orange text-white rounded-full font-black text-sm uppercase tracking-wide shadow-lg"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Solicitar Orçamento Grátis →
              </Link>
            </div>
          </div>
        </section>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="py-16 px-4 lg:px-8 bg-surface-container-low">
            <div className="max-w-7xl mx-auto">
              <h2
                className="text-2xl font-black text-text uppercase mb-8"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Mais em {post.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group bg-white rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-muted mb-2">{r.readTime}</p>
                    <h3
                      className="font-black text-text leading-tight group-hover:text-primary transition-colors mb-2"
                      style={{ fontFamily: "var(--font-headline)" }}
                    >
                      {r.title}
                    </h3>
                    <p className="text-muted text-sm line-clamp-2">{r.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
