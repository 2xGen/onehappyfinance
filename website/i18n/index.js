import enMessages from './messages/en.json';
import nlMessages from './messages/nl.json';

export const messages = {
  en: enMessages,
  nl: nlMessages,
};

export function getTranslations(locale) {
  return messages[locale] || messages.en;
}

export function t(translations, key, params = {}) {
  const keys = key.split('.');
  let value = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  // Replace params if value is a string
  if (typeof value === 'string' && params) {
    return Object.keys(params).reduce((str, param) => {
      return str.replace(new RegExp(`{${param}}`, 'g'), params[param]);
    }, value);
  }
  
  return value || key;
}


