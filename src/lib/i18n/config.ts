import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { defaultLocale, resources } from "./resources";

if (!i18next.isInitialized) {
  i18next.use(initReactI18next).init({
    resources,
    lng: defaultLocale,
    fallbackLng: defaultLocale,
    defaultNS: "common",
    ns: ["common", "home", "about", "services", "contact", "blog"],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
}

export default i18next;
