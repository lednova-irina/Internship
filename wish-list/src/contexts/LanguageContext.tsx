import {createContext} from 'react';

type LanguageContextType = {
  currentLocale: string;
  setCurrentLocale: (value: string) => void;
};

export const LanguageContext = createContext<LanguageContextType>(
  {} as LanguageContextType,
);
