import en from './en.json'
import zh from './zh.json'

const langTextMap = {
  en,
  zh
}

export const defaultLocale = process.env.DEFAULT_LOCALE || 'en'

export const langText = langTextMap[defaultLocale]