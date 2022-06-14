import * as React from 'react';
import {FC, useState, useMemo} from 'react';
import {IntlProvider} from 'react-intl';
import LanguageContext from '../contexts/LanguageContext';
import LOCALES from './locales';
import {messages} from './messages';

const LanguageProvider: FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const [currentLocale, setCurrentLocale] = useState(navigator.language);
  const langMemo = useMemo(() => ({currentLocale, setCurrentLocale}), [currentLocale]);

  return (
    <LanguageContext.Provider value={langMemo}>
      <IntlProvider
        messages={messages[currentLocale]}
        locale={currentLocale}
        defaultLocale={LOCALES.ENGLISH}
      >
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
export default LanguageProvider;
