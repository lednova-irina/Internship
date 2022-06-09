import { createContext } from "react";

type LanguageContextType = {
  currentLocale: string,
  setCurrentLocale: React.SyntheticEvent<Element, Event>,
};

export const LanguageContext = createContext<LanguageContextType>(
  {} as LanguageContextType
);
