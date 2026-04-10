import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "Contato — Fale com a Amaze Balloons",
  description:
    "Entre em contato com a Amaze Balloons: telefone, WhatsApp, e-mail e endereço. Atendemos projetos em todo o Brasil e nas Américas. Orçamento gratuito em até 24 horas.",
  alternates: { canonical: "https://amazeballoons.com.br/contato" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Amaze Balloons",
  description:
    "Fabricante de infláveis personalizados, balões gigantes e soluções publicitárias de alta performance. Mais de 40 anos de experiência.",
  url: "https://amazeballoons.com.br",
  telephone: "+554892061259",
  email: "contato@amazeballoons.com.br",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Florianópolis",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.5954,
    longitude: -48.548,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://instagram.com/amazeballoons",
    "https://linkedin.com/company/amazeballoons",
  ],
};

export default function ContatoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Início", url: "https://amazeballoons.com.br" },
          { name: "Contato", url: "https://amazeballoons.com.br/contato" },
        ]}
      />
      <Header />
      <main className="flex-1 pt-24">

        {/* ── HERO ── */}
        <section className="bg-on-surface py-20 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <span className="section-label text-orange mb-4">Fale Conosco</span>
            <h1
              className="text-4xl lg:text-6xl font-black uppercase leading-tight mb-6 text-inverse-on-surface"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              PROJETOS GRANDES<br />
              <span className="text-orange">EXIGEM CONVERSA DIRETA</span>
            </h1>
            <p className="text-inverse-on-surface/60 max-w-2xl text-lg leading-relaxed">
              Não somos distribuidores. Cada projeto começa com uma conversa com quem vai construir.
              Resposta em até 24 horas, proposta técnica completa.
            </p>
          </div>
        </section>

        {/* ── CONTATOS + MAPA ── */}
        <section className="py-20 px-4 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

            {/* Coluna esquerda — canais */}
            <div className="space-y-8">

              {/* WhatsApp — CTA principal */}
              <a
                href="https://wa.me/554892061259?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-[#25D366]/8 border border-[#25D366]/25 rounded-xl p-6 hover:bg-[#25D366]/15 transition-colors group"
              >
                <div className="size-14 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0">
                  <svg className="size-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-black uppercase tracking-widest text-[#25D366] mb-1">WhatsApp — Resposta Rápida</p>
                  <p className="font-black text-text text-lg">+55 48 9206-1259</p>
                  <p className="text-sm text-muted">Seg–Sex · 8h–18h · Resposta em minutos</p>
                </div>
                <svg className="size-5 text-muted group-hover:text-[#25D366] transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* E-mail */}
              <a
                href="mailto:contato@amazeballoons.com.br"
                className="flex items-center gap-5 bg-surface-container-low border border-border rounded-xl p-6 hover:border-primary/40 transition-colors group"
              >
                <div className="size-14 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-black uppercase tracking-widest text-primary mb-1">E-mail</p>
                  <p className="font-black text-text">contato@amazeballoons.com.br</p>
                  <p className="text-sm text-muted">Resposta em até 24 horas úteis</p>
                </div>
                <svg className="size-5 text-muted group-hover:text-primary transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Telefone */}
              <a
                href="tel:+554892061259"
                className="flex items-center gap-5 bg-surface-container-low border border-border rounded-xl p-6 hover:border-primary/40 transition-colors group"
              >
                <div className="size-14 rounded-xl bg-orange flex items-center justify-center shrink-0">
                  <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-black uppercase tracking-widest text-orange mb-1">Telefone</p>
                  <p className="font-black text-text">+55 48 9206-1259</p>
                  <p className="text-sm text-muted">Seg–Sex · 8h–18h (Horário de Brasília)</p>
                </div>
                <svg className="size-5 text-muted group-hover:text-orange transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Endereços */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-surface-container-low border border-border rounded-xl p-6">
                  <p className="text-xs font-black uppercase tracking-widest text-muted mb-3">Brasil</p>
                  <p className="font-bold text-text mb-1">Florianópolis, SC</p>
                  <p className="text-sm text-muted leading-relaxed">
                    Brasil<br />
                    CEP a confirmar
                  </p>
                </div>
                <div className="bg-surface-container-low border border-border rounded-xl p-6">
                  <p className="text-xs font-black uppercase tracking-widest text-muted mb-3">Estados Unidos</p>
                  <p className="font-bold text-text mb-1">Endereço a confirmar</p>
                  <p className="text-sm text-muted leading-relaxed">
                    United States<br />
                    <span className="text-orange text-xs font-medium">Em breve</span>
                  </p>
                </div>
              </div>

              {/* Horário de Funcionamento */}
              <div className="bg-surface-container-low border border-border rounded-xl p-6">
                <p className="text-xs font-black uppercase tracking-widest text-muted mb-4">Horário de Atendimento</p>
                <div className="space-y-2">
                  {[
                    { day: "Segunda a Sexta", hours: "8h00 – 18h00" },
                    { day: "Sábado", hours: "Fechado" },
                    { day: "Domingo", hours: "Fechado" },
                  ].map((item) => (
                    <div key={item.day} className="flex justify-between items-center">
                      <span className="text-sm text-muted">{item.day}</span>
                      <span className={`text-sm font-semibold ${item.hours === "Fechado" ? "text-muted/50" : "text-text"}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted mt-4 pt-4 border-t border-border">
                  Horário de Brasília (GMT-3). WhatsApp disponível fora do horário para urgências.
                </p>
              </div>
            </div>

            {/* Coluna direita — mapa embed */}
            <div className="flex flex-col gap-6">
              <div className="rounded-xl overflow-hidden border border-border bg-surface-container-low" style={{ height: "440px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116028.21895628124!2d-48.6503!3d-27.5969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952737806c6bffff%3A0xd93f5c2e13b72d1b!2sFlorianópolis%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Amaze Balloons — Florianópolis, SC"
                />
              </div>

              {/* CTA card */}
              <div className="bg-on-surface rounded-xl p-8 text-center">
                <p className="text-xs font-black uppercase tracking-widest text-orange mb-3">Prefere começar pelo formulário?</p>
                <h3
                  className="font-black text-inverse-on-surface text-xl uppercase mb-4"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  ORÇAMENTO EM 24 HORAS
                </h3>
                <p className="text-inverse-on-surface/60 text-sm leading-relaxed mb-6">
                  Preencha nosso formulário de orçamento em 3 etapas e receba
                  uma proposta técnica personalizada diretamente no seu e-mail.
                </p>
                <Link
                  href="/orcamento"
                  className="btn-hover-inflate inline-flex items-center justify-center h-12 px-8 rounded-full bg-orange text-white font-black text-sm uppercase tracking-wide"
                  style={{ fontFamily: "var(--font-headline)" }}
                >
                  Solicitar Orçamento Grátis →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── COBERTURA GEOGRÁFICA ── */}
        <section className="py-20 px-4 lg:px-8 bg-surface-container-low">
          <div className="max-w-7xl mx-auto text-center">
            <span className="section-label text-primary mb-4">Alcance</span>
            <h2
              className="text-3xl lg:text-5xl font-black uppercase leading-tight mb-6 text-on-surface"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              FABRICAMOS NO BRASIL,<br />
              <span className="text-primary">ENTREGAMOS NAS AMÉRICAS</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed mb-14">
              Nossa equipe gerencia logística, documentação e suporte de instalação em todo o continente.
              Você não precisa se preocupar com a complexidade da entrega internacional.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: "🇧🇷", title: "Brasil", desc: "Todos os estados. Logística expressa disponível para datas críticas de eventos." },
                { icon: "🇺🇸", title: "América do Norte", desc: "EUA e Canadá. Documentação de exportação e desembaraço aduaneiro incluídos." },
                { icon: "🌎", title: "América Latina", desc: "México, Argentina, Colômbia, Chile e mais. Consulte prazos e condições." },
              ].map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-8 border border-border">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3
                    className="font-black text-on-surface text-sm uppercase mb-3"
                    style={{ fontFamily: "var(--font-headline)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ RÁPIDO ── */}
        <section className="py-20 px-4 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <span className="section-label text-primary mb-4">Dúvidas Frequentes</span>
            <h2
              className="text-3xl font-black uppercase leading-tight mb-12 text-on-surface"
              style={{ fontFamily: "var(--font-headline)" }}
            >
              PERGUNTAS RÁPIDAS
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Em quanto tempo recebo um orçamento?",
                  a: "Nossa resposta padrão é em até 24 horas úteis. Para projetos urgentes, entre em contato pelo WhatsApp para atendimento imediato."
                },
                {
                  q: "Vocês atendem projetos pequenos?",
                  a: "Sim. Produzimos desde totens de 2m para ativações pontuais até réplicas gigantes de 15m+ para campanhas nacionais. Não há pedido mínimo de quantidade."
                },
                {
                  q: "Qual o prazo de produção?",
                  a: "A maioria dos projetos leva de 3 a 6 semanas, dependendo da complexidade. Produção urgente em 2–3 semanas está disponível para formatos selecionados."
                },
                {
                  q: "Vocês entregam fora do Brasil?",
                  a: "Sim. Gerenciamos logística e documentação para toda a América do Norte, Central e do Sul. Consulte-nos para prazos internacionais."
                },
              ].map((item) => (
                <details key={item.q} className="group bg-surface-container-low border border-border rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-text text-sm">
                    {item.q}
                    <svg
                      className="size-4 text-muted shrink-0 transition-transform group-open:rotate-180"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-6 pb-5 text-sm text-muted leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/faq" className="text-primary font-bold text-sm hover:underline">
                Ver todas as perguntas frequentes →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
