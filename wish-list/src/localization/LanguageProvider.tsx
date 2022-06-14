import * as React from 'react';
import {FC, useState, useMemo} from 'react';
import {IntlProvider} from 'react-intl';
import LanguageContext from '../contexts/LanguageContext';
import LOCALES from './locales';
import {messages} from './messages';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};
const LanguageProvider: FC<Props> = (props) => {
  const [currentLocale, setCurrentLocale] = useState(navigator.language);
  const {children} = props;
  const langMemo = useMemo(() => ({currentLocale, setCurrentLocale}), []);

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
