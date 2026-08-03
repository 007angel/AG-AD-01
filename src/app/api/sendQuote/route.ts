import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const smtpConfig = {
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: "operaciones@agenciaaduaneralya.com",
    pass: process.env.SMTP_PASSWORD || "aw7XT6I@",
  },
};

const transporter = nodemailer.createTransport(smtpConfig);

export async function POST(request: Request) {
  try {
    const { subject, email, name, details } = await request.json();

    console.log("[sendQuote] solicitud recibida", {
      timestamp: new Date().toISOString(),
      subject,
      email,
      name,
      detailsLength: details?.length ?? 0,
    });

    if (!subject || !email || !name || !details) {
      return NextResponse.json({ error: "Faltan datos requeridos." }, { status: 400 });
    }

    await transporter.sendMail({
      from: "operaciones@agenciaaduaneralya.com",
      to: "angel.chaclan@outlook.com",
      replyTo: email,
      subject: `Cotización: ${subject}`,
      text: `Nombre: ${name}\nCorreo cliente: ${email}\n\nDetalle:\n${details}`,
      html: `
        <h2>Solicitud de cotización</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo cliente:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Detalle:</strong></p>
        <p>${details.replace(/\n/g, "<br />")}</p>
      `,
    });

/*     console.log("[sendQuote] correo enviado correctamente", {
      timestamp: new Date().toISOString(),
      subject,
      email,
      name,
    }); */

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[sendQuote] Error enviando cotización:", error);
    return NextResponse.json({ error: "No se pudo enviar la cotización." }, { status: 500 });
  }
}
