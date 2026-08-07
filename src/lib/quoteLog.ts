export type QuoteLogEntry = {
  stage: "submit" | "success" | "error";
  timestamp: string;
  subject?: string;
  name?: string;
  email?: string;
  phone?: string;
  details?: string;
  error?: string;
};

const LOG_SHEET_URL =
  process.env.NEXT_PUBLIC_LOG_SHEET_URL ||
  "https://script.google.com/macros/s/AKfycbz0K2SD_qepmlFK3NMewWooaq8n7Z4e4MEOHY7SMvv4eHrnJivoLck3Khu9DV8cx_oQDg/exec";

/**
 * Envía cada solicitud a una Google Sheet vía Google Apps Script.
 * Usa POST con text/plain (petición simple, sin preflight CORS) y "cors"
 * para poder leer la respuesta. Si el log falla, nunca bloquea el envío.
 */
export async function logQuoteToSheet(entry: QuoteLogEntry): Promise<void> {
  if (!LOG_SHEET_URL || LOG_SHEET_URL.startsWith("PEGA_AQUI")) return;

  try {
    const response = await fetch(LOG_SHEET_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=UTF-8" },
      body: JSON.stringify(entry),
    });
    const result = await response.text();
    console.info("[quote-log-sheet]", result.slice(0, 120));
  } catch {
    // el log nunca debe bloquear el formulario
  }
}
