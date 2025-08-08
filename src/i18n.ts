import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          addParent: 'Add parent',
          addChild: 'Add child',
          addSibling: 'Add sibling',
          addSpouse: 'Add spouse',
          export: 'Export',
          rootPerson: 'Root Person',
          newPerson: 'New person',
          treeCanvas: 'Tree canvas',
        },
      },
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
