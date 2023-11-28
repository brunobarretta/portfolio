import { createContext, useState } from "react";
import i18n from "../i18n";

interface LocaleProps {
    locale: string,
    setLocale: any
    changeLanguage: (lng:string) => void
  }
  
  export const LocaleContext = createContext({} as LocaleProps);
  
  export const LocaleProvider = ({ children }:any) => {
    const [locale, setLocale] = useState(i18n.language);

    console.log(i18n.language)

    i18n.on('languageChanged', () => setLocale(i18n.language))
    
    const changeLanguage = (lng:string) => {
        i18n.changeLanguage(lng)
    }
  
    return <LocaleContext.Provider value={{ locale, setLocale, changeLanguage}}>
      {children}
    </LocaleContext.Provider>;
  }