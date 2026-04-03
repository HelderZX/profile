import { createI18n } from 'vue-i18n'
import messages from '@/locales/messages.json'

const savedLocale = localStorage.getItem('locale') || 'pt'

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'pt',
  messages,
})

export default i18n
