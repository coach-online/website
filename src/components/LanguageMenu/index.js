import React, { useState } from 'react';
import { useI18next, Link, Trans } from 'gatsby-plugin-react-i18next';
import withDirection from 'react-with-direction';
import {
  DIRECTIONS,
  withDirectionPropTypes,
} from 'react-with-direction/dist/constants';
import style from './style.module.css';
import SAFlag from '../../images/sa.png';
import USFlag from '../../images/us.png';

function LanguageMenu({ direction }) {
  const { languages, originalPath, language } = useI18next();
  const [visible, setVisible] = useState(false);
  const toggleLangMenu = () => {
    setVisible(!visible);
  };
  return (
    <li>
      <button onClick={toggleLangMenu} type="button" className={style.langBtn}>
        <div className={style.imgContainer}>
          <img
            src={language === 'ar' ? SAFlag : USFlag}
            alt={`${language}flag`}
          />
        </div>
        <Trans>{language}</Trans>
        <div
          className={`${style.customDropDown} ${visible && style.visible} ${
            direction === DIRECTIONS.RTL ? style.ar : style.en
          }`}
        >
          <ul className={`list-non-styled ${style.languagesList}`}>
            {languages.map((lng) => (
              <li className={language === lng && style.active} key={lng}>
                <Link to={originalPath} language={lng} onClick={toggleLangMenu}>
                  <div className={style.imgContainer}>
                    <img
                      src={lng === 'ar' ? SAFlag : USFlag}
                      alt={`${lng}flag`}
                    />
                  </div>
                  <Trans>{lng}</Trans>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </button>
    </li>
  );
}

export default withDirection(LanguageMenu);

LanguageMenu.prototype = {
  ...withDirectionPropTypes,
};
