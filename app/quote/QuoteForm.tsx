"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const PRODUCT_OPTIONS = [
  "Infláveis Personalizados",
  "Infláveis Gigantes",
  "Arcos & Portais",
  "Mascotes Infláveis",
  "Totens & Displays",
  "Ainda não sei",
];

const EVENT_TYPES = [
  "Feira / Exposição",
  "Evento Corporativo",
  "Evento Esportivo",
  "Festival de Música / Festa",
  "Campanha de Publicidade Exterior",
  "Varejo / Ponto de Venda",
  "Outro",
];

type Step = 1 | 2 | 3;

export default function QuoteForm() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    product: "",
    eventType: "",
    size: "",
    eventDate: "",
    quantity: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: wire to API route /api/orcamento (Resend)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-8 bg-surface-card rounded-2xl border border-border">
        <div className="size-16 rounded-full bg-green/10 text-green flex items-center justify-center text-3xl mx-auto mb-6">
          ✓
        </div>
        <h2
          className="text-2xl font-black text-text mb-3"
          style={{ fontFamily: "var(--font-headline)" }}
        >
          Solicitação de Orçamento Recebida!
        </h2>
        <p className="text-muted mb-6">
          Obrigado, <strong>{form.name}</strong>. Vamos analisar seu projeto
          e responder para <strong>{form.email}</strong> em até 24 horas.
        </p>
        <Button href="/" variant="outline">Voltar ao Início</Button>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-border bg-white text-text placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-purple/30 focus:border-purple transition-colors";

  const labelClass = "block text-sm font-semibold text-text mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="bg-surface-card rounded-2xl border border-border overflow-hidden">
      {/* Progress */}
      <div className="flex border-b border-border">
        {([1, 2, 3] as Step[]).map((s) => (
          <div
            key={s}
            className={`flex-1 py-3 text-center text-xs font-semibold border-b-2 transition-colors ${
              step === s
                ? "border-purple text-purple"
                : step > s
                ? "border-green text-green"
                : "border-transparent text-muted"
            }`}
          >
            {s === 1 ? "Projeto" : s === 2 ? "Detalhes" : "Contato"}
          </div>
        ))}
      </div>

      <div className="p-8 space-y-6">
        {/* Step 1 */}
        {step === 1 && (
          <>
            <div>
              <label className={labelClass}>Qual produto você tem interesse?</label>
              <div className="grid grid-cols-2 gap-2">
                {PRODUCT_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => set("product", opt)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium border text-left transition-all ${
                      form.product === opt
                        ? "bg-purple text-white border-purple"
                        : "bg-white text-text border-border hover:border-purple/40"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className={labelClass}>Tipo de evento</label>
              <div className="grid grid-cols-2 gap-2">
                {EVENT_TYPES.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => set("eventType", opt)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium border text-left transition-all ${
                      form.eventType === opt
                        ? "bg-purple text-white border-purple"
                        : "bg-white text-text border-border hover:border-purple/40"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <Button
              type="button"
              variant="primary"
              fullWidth
              disabled={!form.product || !form.eventType}
              onClick={() => setStep(2)}
            >
              Continuar →
            </Button>
          </>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Tamanho aproximado</label>
                <select
                  className={inputClass}
                  value={form.size}
                  onChange={(e) => set("size", e.target.value)}
                >
                  <option value="">Selecionar tamanho</option>
                  {["2m", "3m", "4m", "5m", "7m", "10m", "15m+", "Não sei"].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelClass}>Quantidade</label>
                <input
                  type="number"
                  min={1}
                  className={inputClass}
                  placeholder="ex: 1"
                  value={form.quantity}
                  onChange={(e) => set("quantity", e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Data do evento (aproximada)</label>
              <input
                type="date"
                className={inputClass}
                value={form.eventDate}
                onChange={(e) => set("eventDate", e.target.value)}
              />
            </div>

            <div>
              <label className={labelClass}>Descrição do projeto</label>
              <textarea
                rows={4}
                className={inputClass}
                placeholder="Conte-nos sobre seu projeto, ideias de design, imagens de referência, requisitos especiais..."
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
              />
            </div>

            <div className="flex gap-3">
              <Button type="button" variant="ghost" onClick={() => setStep(1)}>← Voltar</Button>
              <Button type="button" variant="primary" fullWidth onClick={() => setStep(3)}>
                Continuar →
              </Button>
            </div>
          </>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Seu nome *</label>
                <input
                  type="text"
                  required
                  className={inputClass}
                  placeholder="João Silva"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                />
              </div>
              <div>
                <label className={labelClass}>Empresa</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="Empresa Ltda"
                  value={form.company}
                  onChange={(e) => set("company", e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>E-mail corporativo *</label>
              <input
                type="email"
                required
                className={inputClass}
                placeholder="voce@empresa.com"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
              />
            </div>

            <div>
              <label className={labelClass}>Telefone / WhatsApp</label>
              <input
                type="tel"
                className={inputClass}
                placeholder="+55 (11) 99999-9999"
                value={form.phone}
                onChange={(e) => set("phone", e.target.value)}
              />
            </div>

            <p className="text-xs text-muted">
              Ao enviar, você concorda com nossa{" "}
              <a href="/privacy" className="text-purple hover:underline">Política de Privacidade</a>.
              Nunca compartilharemos suas informações.
            </p>

            <div className="flex gap-3">
              <Button type="button" variant="ghost" onClick={() => setStep(2)}>← Voltar</Button>
              <Button
                type="submit"
                variant="cta"
                fullWidth
                loading={loading}
                disabled={!form.name || !form.email}
              >
                Enviar Solicitação de Orçamento
              </Button>
            </div>
          </>
        )}
      </div>
    </form>
  );
}
