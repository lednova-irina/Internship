import {createContext} from 'react';

type LanguageContextType = {
  currentLocale: string;
  setCurrentLocale: (value: string) => void;
};

const LanguageContext = createContext<LanguageContextType>(
  {} as LanguageContextType,
);
export default LanguageContext;
