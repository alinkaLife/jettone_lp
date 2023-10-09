const path = require('path')

module.exports = {
    i18n: {
        locales: ['en', 'ru', 'ua', 'kz', 'uz'],
        defaultLocale: 'en',
        localeDetection: false,
        localePath: path.resolve('./public/locales')
    },
}
