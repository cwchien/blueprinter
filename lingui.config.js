module.exports = {
  locales: ['ru', 'zh-Hant', 'en'],
  catalogs: [{
    path: 'src/locales/{locale}/messages',
    include: ['src/app', 'src/fb-base-blocks'],
  }],
  format: 'minimal',
  sourceLocale: 'en',
  fallbackLocales: {
    'zh-Hant': 'zh'
  },
  compileNamespace: 'window.i18n',
};
