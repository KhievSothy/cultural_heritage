
import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        home:"Home",
        historical:"Historical Sites",
        museum:"Museum",
        event:"Event",
        arts:"Arts",
        about:"About" 
    },
    khm: {
        home:"ទំព័រដើម",
        historical:"ទីតាំងប្រវត្តិសាស្ត្រ",
        museum:"សារមន្ទីរ",
        event:"ព្រឹត្តិការណ៍វប្បធម៌",
        arts:"សិល្បៈ",
        about:"អំពីយើង"
    },
}

// Create i18n instance with options
const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n