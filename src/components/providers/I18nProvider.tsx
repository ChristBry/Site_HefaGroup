"use client";

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "@/lib/i18n/config";
import { locales, type AppLocale } from "@/lib/i18n/resources";

const STORAGE_KEY = "language";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as AppLocale | null;
    if (stored && locales.includes(stored) && stored !== i18next.language) {
      i18next.changeLanguage(stored);
    }

    const handleLanguageChanged = (lng: string) => {
      document.documentElement.lang = lng;
      window.localStorage.setItem(STORAGE_KEY, lng);
    };

    i18next.on("languageChanged", handleLanguageChanged);
    return () => {
      i18next.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}
