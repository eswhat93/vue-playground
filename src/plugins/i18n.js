// import Vue from 'vue'
import {createI18n} from 'vue-i18n'
import en from '../locales/message_en.json'
import ko from '../locales/message_ko.json'

// Vue.use(VueI18n)

export const i18n =  new createI18n({
  locale: import.meta.env.VUE_APP_I18N_LOCALE,
  fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE,
  silentTranslationWarn: false,
  messages :{en, ko},
})
