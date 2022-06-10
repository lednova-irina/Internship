import { Link, Outlet } from "react-router-dom";
import React, { FC, useContext } from "react";
import { FormattedMessage } from "react-intl";
import { LOCALES } from "../localisation/locales";
// import {
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
// } from "@mui/material";
import { LanguageContext } from "../contexts/LanguageContext";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

const Navbar: FC = () => {
  const { currentLocale, setCurrentLocale } = useContext(LanguageContext);
  const onChange = (e: any) => {
    setCurrentLocale(e.target.value as string);
  };

  return (
    <>
      <nav className="navbar">
        <div>
          <Link className="navLink" to="/add-wish">
            {" "}
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
     value={currentLocale}
      exclusive
      onChange={onChange}
      aria-label="text alignment"
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
 

      {/* <FormControl
        sx={{
          width: "200px",
          backgroundColor: "#F2F2EB",
          opacity: "0.8",
          borderRadius: "5px ",
        }}
      >
        <InputLabel>
          <FormattedMessage id="language" />
        </InputLabel>
        <Select label="Age" value={currentLocale} onChange={onChange}>
          <MenuItem value={LOCALES.ENGLISH}>English</MenuItem>
          <MenuItem value={LOCALES.RUSSIAN}>Русский</MenuItem>
          <MenuItem value={LOCALES.UKRAINIAN}>Українська</MenuItem>
        </Select>
      </FormControl> */}

      <Outlet />
    </>
  );
};

export default Navbar;
