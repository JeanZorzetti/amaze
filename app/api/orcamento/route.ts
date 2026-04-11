import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Lazy init to avoid build-time env var errors
let resend: Resend | null = null;
function getResend() {
  if (!resend) resend = new Resend(process.env.RESEND_API_KEY);
  return resend;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { product, eventType, size, eventDate, quantity, name, company, email, phone, message } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Nome e e-mail são obrigatórios." }, { status: 400 });
    }

    const toEmail = process.env.QUOTE_EMAIL_TO ?? "contato@amazeballoons.com.br";

    const htmlBody = `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8" /></head>
<body style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
  <div style="background: #1A0A2E; padding: 24px 32px; border-radius: 8px 8px 0 0;">
    <h1 style="color: #F97316; font-size: 22px; margin: 0;">Nova Solicitação de Orçamento</h1>
    <p style="color: rgba(255,255,255,0.6); font-size: 13px; margin: 4px 0 0;">Amaze Balloons — amazeballoons.com.br</p>
  </div>

  <div style="background: #f8f8f8; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #eee;">

    <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 2px; color: #7B2FBE; margin: 0 0 16px;">Contato</h2>
    <table style="width:100%; border-collapse: collapse; margin-bottom: 24px;">
      <tr><td style="padding: 6px 0; font-size: 13px; color: #666; width: 140px;">Nome</td><td style="padding: 6px 0; font-size: 14px; font-weight: 600;">${name}</td></tr>
      ${company ? `<tr><td style="padding: 6px 0; font-size: 13px; color: #666;">Empresa</td><td style="padding: 6px 0; font-size: 14px;">${company}</td></tr>` : ""}
      <tr><td style="padding: 6px 0; font-size: 13px; color: #666;">E-mail</td><td style="padding: 6px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #7B2FBE;">${email}</a></td></tr>
      ${phone ? `<tr><td style="padding: 6px 0; font-size: 13px; color: #666;">Telefone</td><td style="padding: 6px 0; font-size: 14px;">${phone}</td></tr>` : ""}
    </table>

    <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 2px; color: #7B2FBE; margin: 0 0 16px;">Projeto</h2>
    <table style="width:100%; border-collapse: collapse; margin-bottom: 24px;">
      <tr><td style="padding: 6px 0; font-size: 13px; color: #666; width: 140px;">Produto</td><td style="padding: 6px 0; font-size: 14px; font-weight: 600;">${product || "Não informado"}</td></tr>
      <tr><td style="padding: 6px 0; font-size: 13px; color: #666;">Tipo de Evento</td><td style="padding: 6px 0; font-size: 14px;">${eventType || "Não informado"}</td></tr>
      <tr><td style="padding: 6px 0; font-size: 13px; color: #666;">Tamanho</td><td style="padding: 6px 0; font-size: 14px;">${size || "Não informado"}</td></tr>
      <tr><td style="padding: 6px 0; font-size: 13px; color: #666;">Quantidade</td><td style="padding: 6px 0; font-size: 14px;">${quantity || "Não informada"}</td></tr>
      ${eventDate ? `<tr><td style="padding: 6px 0; font-size: 13px; color: #666;">Data do Evento</td><td style="padding: 6px 0; font-size: 14px;">${new Date(eventDate).toLocaleDateString("pt-BR")}</td></tr>` : ""}
    </table>

    ${message ? `
    <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 2px; color: #7B2FBE; margin: 0 0 12px;">Descrição</h2>
    <p style="font-size: 14px; line-height: 1.6; background: white; padding: 16px; border-radius: 6px; border: 1px solid #eee; margin: 0 0 24px;">${message}</p>
    ` : ""}

    <div style="background: #F97316; padding: 16px 20px; border-radius: 6px; text-align: center;">
      <p style="color: white; font-size: 13px; margin: 0;">
        Responda para <strong>${email}</strong>
        ${phone ? ` · WhatsApp/Tel: <strong>${phone}</strong>` : ""}
      </p>
    </div>
  </div>
</body>
</html>
    `.trim();

    await getResend().emails.send({
      from: "Amaze Balloons <noreply@amazeballoons.com.br>",
      to: [toEmail],
      replyTo: email,
      subject: `[Orçamento] ${product || "Inflável"} — ${name}${company ? ` / ${company}` : ""}`,
      html: htmlBody,
    });

    // Auto-reply to lead
    await getResend().emails.send({
      from: "Thiago Marques · Amaze Balloons <noreply@amazeballoons.com.br>",
      to: [email],
      subject: "Recebemos sua solicitação de orçamento — Amaze Balloons",
      html: `
<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8" /></head>
<body style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
  <div style="background: #1A0A2E; padding: 24px 32px; border-radius: 8px 8px 0 0;">
    <h1 style="color: #F97316; font-size: 22px; margin: 0;">Solicitação Recebida</h1>
    <p style="color: rgba(255,255,255,0.6); font-size: 13px; margin: 4px 0 0;">Amaze Balloons · amazeballoons.com.br</p>
  </div>
  <div style="background: #f8f8f8; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #eee;">
    <p style="font-size: 15px; line-height: 1.6;">Olá, <strong>${name}</strong>!</p>
    <p style="font-size: 15px; line-height: 1.6; color: #444;">
      Recebemos sua solicitação de orçamento para <strong>${product || "inflável personalizado"}</strong>.
      Nossa equipe vai analisar seu projeto e responder em até <strong>24 horas úteis</strong> com uma proposta técnica personalizada.
    </p>
    <div style="background: white; border: 1px solid #eee; border-radius: 8px; padding: 20px; margin: 24px 0;">
      <p style="font-size: 13px; color: #666; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 1px;">Enquanto isso</p>
      <ul style="font-size: 14px; color: #444; line-height: 2; margin: 0; padding-left: 20px;">
        <li>Conheça nossa <a href="https://amazeballoons.com.br/tecnologia" style="color: #7B2FBE;">tecnologia de alta performance</a></li>
        <li>Leia nosso <a href="https://amazeballoons.com.br/faq" style="color: #7B2FBE;">FAQ completo</a> com 27 respostas</li>
        <li>Acesse nosso <a href="https://amazeballoons.com.br/portfolio" style="color: #7B2FBE;">portfólio de projetos</a></li>
      </ul>
    </div>
    <p style="font-size: 14px; color: #444; line-height: 1.6;">
      Precisa de resposta mais rápida? Entre em contato pelo WhatsApp:<br />
      <a href="https://wa.me/554892061259" style="color: #25D366; font-weight: 600;">+55 48 9206-1259</a>
    </p>
    <p style="font-size: 14px; color: #444; margin-top: 24px;">
      Atenciosamente,<br />
      <strong>Thiago Marques</strong><br />
      <span style="color: #666;">Diretor · Amaze Balloons</span>
    </p>
  </div>
</body>
</html>
      `.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/orcamento]", err);
    return NextResponse.json({ error: "Erro ao enviar. Tente novamente." }, { status: 500 });
  }
}
