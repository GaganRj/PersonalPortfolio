import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'

const selectedLanguage = localStorage.getItem('selectedLanguage');



i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .use(Backend)
    .init({
        debug: true,
        fallbackLng: selectedLanguage || 'en',
        returnObjects: true,
    })