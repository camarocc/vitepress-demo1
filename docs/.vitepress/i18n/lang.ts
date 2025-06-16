import zh from './zh'
import en from './en'
import xx from './xx'


const langs: Record<string, any> = {
  zh,
  en,
  xx
}

export function getLang(lang: string) {
  const dict = langs[lang] || zh
  return function(key: string) {
    return dict[key] || key
  }
}