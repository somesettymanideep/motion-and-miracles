import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "te";
export type Bi = { en: string; te: string };

/** Picks the string for the active language out of a bilingual pair. */
export function useTr() {
  const { lang } = useLanguage();
  return (bi: Bi) => bi[lang];
}

const STORAGE_KEY = "svjp-lang";

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default English; restore the saved choice only after mount to keep SSR
  // and the first client render identical (no hydration mismatch).
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "te" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l === "te" ? "te" : "en";
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LangContext);
}
