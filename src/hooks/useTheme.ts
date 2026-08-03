"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setIsDarkMode(storedTheme === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    window.dispatchEvent(
      new CustomEvent("theme:changed", { detail: { isDarkMode } })
    );
  }, [isDarkMode]);

  useEffect(() => {
    const handleThemeChanged = (event: Event) => {
      const customEvent = event as CustomEvent<{ isDarkMode: boolean }>;
      setIsDarkMode(customEvent.detail.isDarkMode);
    };

    window.addEventListener("theme:changed", handleThemeChanged);

    return () => {
      window.removeEventListener("theme:changed", handleThemeChanged);
    };
  }, []);

  return { isDarkMode, toggleTheme: () => setIsDarkMode((value) => !value) };
}
