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
  const [currentLocale, setCurrentLocale] = useState(navigator.language);

  return (
    <LanguageContext.Provider value={{ currentLocale, setCurrentLocale }}>
      <IntlProvider
        messages={messages[currentLocale]}
        locale={currentLocale}
        defaultLocale={LOCALES.ENGLISH}
      >
        {props.children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
export default LanguageProvider;
