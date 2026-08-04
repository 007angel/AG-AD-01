const WHATSAPP_URL = `https://wa.me/+50432890454?text=${encodeURIComponent(
  "Hola, me gustaría solicitar una cotización para mis operaciones de comercio exterior."
)}`;

export function FloatingActions({ onOpenQuote }: { onOpenQuote: () => void }) {
  return (
    <>
      <button
        type="button"
        onClick={onOpenQuote}
        className="fixed right-6 z-50 inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-500/30 transition hover:bg-emerald-400 bottom-[calc(max(1.5rem,env(safe-area-inset-bottom))+4.5rem)]"
      >
        Solicitar cotización
      </button>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="fixed right-6 z-50 inline-flex items-center gap-3 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-emerald-500/30 transition hover:bg-emerald-400 bottom-[max(1.5rem,env(safe-area-inset-bottom))]"
      >
        <span className="text-lg">💬</span>
        WhatsApp
      </a>
    </>
  );
}
