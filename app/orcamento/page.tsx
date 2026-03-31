import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaOrg";
import QuoteForm from "./QuoteForm";

export const metadata: Metadata = {
  title: "Solicitar Orçamento Grátis — Infláveis Personalizados",
  description:
    "Solicite um orçamento gratuito para infláveis personalizados, balões publicitários gigantes, arcos, mascotes e displays. Respondemos em até 24 horas.",
  alternates: { canonical: "https://amazeballoons.com/orçamento" },
};

export default function QuotePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início",   url: "https://amazeballoons.com" },
          { name: "Orçamento", url: "https://amazeballoons.com/orçamento" },
        ]}
      />
      <Header />
      <main className="flex-1 pt-24">
        <section className="py-20 px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-purple mb-3">
                Orçamento Grátis
              </p>
              <h1
                className="text-4xl lg:text-5xl font-black text-text leading-tight mb-4"
                style={{ fontFamily: "var(--font-headline)" }}
              >
                Conte-nos Sobre
                o Seu Projeto
              </h1>
              <p className="text-muted text-lg">
                Respondemos em até 24 horas com uma proposta detalhada.
              </p>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
