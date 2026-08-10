import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";
import enAbout from "./locales/en/about.json";
import enServices from "./locales/en/services.json";
import enContact from "./locales/en/contact.json";
import enBlog from "./locales/en/blog.json";

import frCommon from "./locales/fr/common.json";
import frHome from "./locales/fr/home.json";
import frAbout from "./locales/fr/about.json";
import frServices from "./locales/fr/services.json";
import frContact from "./locales/fr/contact.json";
import frBlog from "./locales/fr/blog.json";

export const locales = ["en", "fr"] as const;
export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = "fr";

export const resources = {
  en: {
    common: enCommon,
    home: enHome,
    about: enAbout,
    services: enServices,
    contact: enContact,
    blog: enBlog,
  },
  fr: {
    common: frCommon,
    home: frHome,
    about: frAbout,
    services: frServices,
    contact: frContact,
    blog: frBlog,
  },
} as const;
