import { useContext } from 'react'
import { LocaleContext } from '../contexts/LocaleContext'

export function useLocale() {
  return useContext(LocaleContext)
}
