import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQContent from "@/components/blocks/FAQContent";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "FAQ | Dúvidas Frequentes — Amaze Balloons",
  description:
    "Tudo que você precisa saber sobre infláveis personalizados Amaze Balloons: material, garantia, montagem, motor, impressão UV e muito mais.",
  alternates: { canonical: "https://amazeballoons.com.br/faq" },
};

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "https://amazeballoons.com" },
          { name: "FAQ", url: "https://amazeballoons.com.br/faq" },
        ]}
      />
      <Header />
      <main className="pt-[var(--header-height,7rem)]">

        {/* ── Hero ── */}
        <section className="bg-on-surface py-20 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <span className="section-label text-orange mb-4">Suporte &amp; Informações</span>
            <h1
              className="text-4xl lg:text-6xl font-black uppercase leading-tight mb-6 text-inverse-on-surface"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              DÚVIDAS{" "}
              <span className="text-orange">FREQUENTES</span>
            </h1>
            <p className="text-inverse-on-surface/60 max-w-2xl text-lg leading-relaxed">
              Tudo que você precisa saber sobre infláveis personalizados, produção, montagem e entrega.
            </p>

            {/* Quick stat pills */}
            <div className="flex flex-wrap gap-3 mt-10">
              {[
                { value: "4", label: "Categorias" },
                { value: "27", label: "Perguntas respondidas" },
                { value: "24h", label: "Resposta garantida" },
                { value: "10+", label: "Países atendidos" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5"
                >
                  <span
                    className="text-xl font-black text-orange"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs text-inverse-on-surface/60 font-medium">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ Accordion + Sidebar ── */}
        <section className="bg-surface-container-low">
          <FAQContent />
        </section>

        {/* ── Bottom CTA strip ── */}
        <section className="bg-white border-t border-border py-14 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p
                className="text-xl font-black uppercase text-on-surface"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Ainda tem dúvidas?
              </p>
              <p className="text-muted text-sm mt-1">
                Nossa equipe responde em até 24 horas, de segunda a sábado.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://wa.me/5548920612591"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hover-inflate inline-flex items-center gap-2 h-11 px-6 bg-[#25d366] text-white rounded-full font-black text-xs uppercase tracking-wide"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Falar no WhatsApp
              </a>
              <a
                href="/orcamento"
                className="btn-hover-inflate inline-flex items-center h-11 px-6 bg-on-surface text-inverse-on-surface rounded-full font-black text-xs uppercase tracking-wide hover:bg-on-surface/90 transition-colors"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
