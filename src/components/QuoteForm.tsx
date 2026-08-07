"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { logQuoteToSheet } from "../lib/quoteLog";

type QuoteStatus = "idle" | "sending" | "success" | "error";

const FORM_SUBMIT_URL = "https://formsubmit.co/ajax/gerenciageneral@agenciaaduaneralya.com";

const persistQuoteLog = (stage: "submit" | "success" | "error", payload?: Record<string, unknown>) => {
  try {
    const existingLogs = JSON.parse(localStorage.getItem("quoteLogs") || "[]");
    const logEntry = { timestamp: new Date().toISOString(), stage, ...payload };
    const nextLogs = [...existingLogs, logEntry].slice(-50);
    localStorage.setItem("quoteLogs", JSON.stringify(nextLogs));
    console.info("[quote-log]", logEntry);
  } catch (error) {
    console.error("[quote-log] No se pudo guardar el log", error);
  }
};

export function QuoteForm({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<QuoteStatus>("idle");
  const [message, setMessage] = useState("");
  const [isClosing, setIsClosing] = useState(false);

  const closeTimerRef = useRef<number | null>(null);
  const successTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
      if (successTimerRef.current) window.clearTimeout(successTimerRef.current);
    };
  }, []);

  const closeWithAnimation = useCallback(() => {
    setIsClosing(true);
    closeTimerRef.current = window.setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  }, [onClose]);

  const resetFields = () => {
    setSubject("");
    setEmail("");
    setPhone("");
    setName("");
    setDetails("");
  };

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-6 transition-opacity duration-300 sm:px-6 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`w-full max-w-2xl rounded-3xl bg-slate-900 p-6 text-slate-100 shadow-2xl shadow-slate-950/60 transition-all duration-300 ${
          isClosing ? "translate-y-4 scale-95 opacity-0" : "translate-y-0 scale-100 opacity-100"
        }`}
      >
        <div className="relative">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
              Formulario de cotización
            </p>
            <h3 className="mt-2 text-2xl font-bold">Envíanos tu solicitud</h3>
          </div>
          <button
            onClick={closeWithAnimation}
            className="absolute right-0 top-0 rounded-full bg-slate-800 px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-700"
          >
            Cerrar
          </button>
        </div>

        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const payload = {
              subject: subject || "Solicitud de cotización",
              name,
              email,
              phone,
              message: details,
              _replyto: email,
              _subject: `Cotización: ${subject || "Solicitud de cotización"}`,
              _template: "table",
            };

            const logEntry = {
              timestamp: new Date().toISOString(),
              subject: payload.subject,
              name: payload.name,
              email: payload.email,
              phone: payload.phone,
              details: payload.message,
            };

            persistQuoteLog("submit", logEntry);
            void logQuoteToSheet({ ...logEntry, stage: "submit" });
            setStatus("sending");
            setMessage("");

            try {
              const response = await fetch(FORM_SUBMIT_URL, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify(payload),
              });

              if (!response.ok) {
                throw new Error("Error enviando cotización");
              }

              persistQuoteLog("success", logEntry);
              void logQuoteToSheet({ ...logEntry, stage: "success" });
              setStatus("success");
              setMessage("Tu solicitud ha sido enviada. Nos comunicaremos pronto.");
              resetFields();

              successTimerRef.current = window.setTimeout(() => {
                closeWithAnimation();
              }, 3000);
            } catch (error) {
              const errorMessage =
                error instanceof Error ? error.message : "No se pudo enviar la solicitud";
              persistQuoteLog("error", { ...logEntry, error: errorMessage });
              void logQuoteToSheet({ ...logEntry, stage: "error", error: errorMessage });
              setStatus("error");
              setMessage(
                error instanceof Error
                  ? error.message
                  : "No se pudo enviar la solicitud. Intenta nuevamente."
              );
            }
          }}
          className="mt-6 space-y-5"
        >
          <div>
            <label htmlFor="quote-subject" className="block text-sm font-medium text-slate-200">
              Asunto
            </label>
            <input
              id="quote-subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              placeholder="Asunto de la cotización"
              required
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="quote-email" className="block text-sm font-medium text-slate-200">
                Correo cliente
              </label>
              <input
                id="quote-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="tucorreo@dominio.com"
                required
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
              />
            </div>
            <div>
              <label htmlFor="quote-name" className="block text-sm font-medium text-slate-200">
                Nombre
              </label>
              <input
                id="quote-name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Nombre del cliente"
                required
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
              />
            </div>
            <div>
              <label htmlFor="quote-phone" className="block text-sm font-medium text-slate-200">
                Teléfono
              </label>
              <input
                id="quote-phone"
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="+504 0000-0000"
                required
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
              />
            </div>
          </div>
          <div>
            <label htmlFor="quote-details" className="block text-sm font-medium text-slate-200">
              Detalle
            </label>
            <textarea
              id="quote-details"
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              placeholder="Describe tu solicitud o los datos de tu carga"
              rows={5}
              required
              className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400"
            />
          </div>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={closeWithAnimation}
              className="rounded-2xl border border-slate-700 bg-transparent px-5 py-3 text-sm text-slate-200 transition hover:bg-slate-800"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-2xl bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Enviando..." : "Enviar solicitud"}
            </button>
          </div>
          {message && (
            <div
              className={`rounded-2xl px-4 py-3 text-sm ${
                status === "success"
                  ? "bg-emerald-500/15 text-emerald-200"
                  : "bg-rose-500/10 text-rose-200"
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
