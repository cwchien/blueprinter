import { i18n } from '@lingui/core';
import { en, zh } from 'make-plural/plurals';

const supportedLocales = ['en', 'zh-Hant'];
const localeData = {
  en: { plurals: en },
  'zh-Hant': { plurals: zh },
};

const localeCatalog = window.i18n ? window.i18n.messages : undefined;
const definedLocale = document.documentElement.lang;
const activeLocale = supportedLocales.includes(definedLocale) ? definedLocale : 'zh-Hant';

if (localeCatalog) {
  i18n.load(activeLocale, localeCatalog);
}
i18n.loadLocaleData(activeLocale, localeData[activeLocale]);
i18n.activate(activeLocale);

export default i18n;
