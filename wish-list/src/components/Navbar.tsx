import { Link, Outlet } from 'react-router-dom';
import React, { FC, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { LOCALES } from '../localization/locales';
import { LanguageContext } from '../contexts/LanguageContext';
import logo from '../UI/images/logo.svg';

const Navbar: FC = () => {
  const { currentLocale, setCurrentLocale } = useContext(LanguageContext);
  const onChange = (
    _e: React.MouseEvent<HTMLElement, MouseEvent>,
    value: string,
  ) => {
    setCurrentLocale(value as string);
  };

  return (
    <>
      <nav className="navbar">
        <div className="App">
          <Link className="navLink" to="/">
            <img src={logo} alt="Logo" className="nav_logo" />
          </Link>
        </div>
        <div>
          <Link className="navLink" to="/add-wish">
            {' '}
            <FormattedMessage id="nav_add_wish" />
          </Link>
        </div>
        <div>
          <Link className="navLink" to="/wish-list">
            <FormattedMessage id="nav_wish_list" />
          </Link>
        </div>
        <div>
          <Link className="navLink" to="/archive">
            <FormattedMessage id="nav_archive" />
          </Link>
        </div>
      </nav>
      <ToggleButtonGroup
        className="lang_btn"
        value={currentLocale}
        exclusive
        onChange={onChange}
        aria-label="text alignment"
        size="small"
      >
        <ToggleButton value={LOCALES.RUSSIAN} aria-label="left aligned">
          RU
        </ToggleButton>
        <ToggleButton value={LOCALES.ENGLISH} aria-label="centered">
          EN
        </ToggleButton>
        <ToggleButton value={LOCALES.UKRAINIAN} aria-label="right aligned">
          UA
        </ToggleButton>
      </ToggleButtonGroup>

      <Outlet />
    </>
  );
};

export default Navbar;
