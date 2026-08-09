"use client";

import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { locales, type AppLocale } from "@/lib/i18n/resources";

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const currentLocale = i18n.language as AppLocale;

  return (
    <div
      role="group"
      aria-label={t("actions.switchLanguage")}
      className="relative inline-flex h-9 items-center gap-1 rounded-full border border-white/20 bg-white/10 p-1"
    >
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => i18n.changeLanguage(locale)}
            aria-pressed={isActive}
            className="relative flex h-full w-8 items-center justify-center rounded-full cursor-pointer"
          >
            {isActive && (
              <motion.span
                layoutId="language-toggle-active"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute inset-0 rounded-full bg-[#f3b63c]"
              />
            )}
            <span
              className={`relative z-10 text-xs font-semibold transition-colors ${
                isActive ? "text-[#152149]" : "text-white/70 hover:text-white"
              }`}
            >
              {locale.toUpperCase()}
            </span>
          </button>
        );
      })}
    </div>
  );
}
