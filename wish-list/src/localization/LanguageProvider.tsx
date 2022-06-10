import * as React from "react";
import { FC, useState } from "react";
import { IntlProvider } from "react-intl";
import { LanguageContext } from "../contexts/LanguageContext";
import { LOCALES } from "./locales";
import { messages } from "./messages";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};
const LanguageProvider: FC<Props> = (props) => {
  const userLang = navigator.language;
  let defaultLang:string;
  if (userLang === "ua-UA") {
    defaultLang = LOCALES.UKRAINIAN;
  } else if (userLang === "ru-RU") {
    defaultLang = LOCALES.RUSSIAN;
  } else {
    defaultLang = LOCALES.ENGLISH;
  }

  const [currentLocale, setCurrentLocale] = useState(defaultLang);

  return (
    <LanguageContext.Provider value={{ currentLocale, setCurrentLocale }}>
      <IntlProvider messages={messages[currentLocale]} locale={currentLocale}>
        {props.children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
export default LanguageProvider;
