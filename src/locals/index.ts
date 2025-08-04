// src/i18n/index.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: ("./locales/en/translation.json"),
            },
            fa: {
                translation: ("./locales/fa/translation.json"),
            },
        },
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        lng: "en",
    });

export default i18n;
