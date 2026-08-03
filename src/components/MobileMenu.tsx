"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#ubicaciones", label: "Ubicaciones" },
  { href: "#contacto", label: "Contacto" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-label="Abrir menú"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
        className="inline-flex items-center justify-center rounded-md border border-slate-700 px-3 py-2 text-sm transition-colors duration-200 hover:bg-slate-800"
      >
        ☰
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-slate-700 bg-slate-900/95 p-2 shadow-lg backdrop-blur-lg">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-2 text-sm text-slate-200 transition-colors hover:bg-slate-800 hover:text-amber-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
