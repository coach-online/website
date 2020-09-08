import React, { useState } from 'react';
import { Trans } from 'gatsby-plugin-react-i18next';

import Container from '../Container';
import ListLink from '../ListLink';
import Logo from '../Logo';
import LanguageMenu from '../LanguageMenu';

import style from './style.module.css';

function Header() {
  const [isToggled, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };
  return (
    <header className={style.header}>
      <Container>
        <nav className={style.nav}>
          <Logo />
          <div className={style.navList}>
            <ul className={`list-non-styled ${style.ul}`}>
              <ListLink to="/">
                <Trans i18nKey="nav.home">الصفحة الرئيسية</Trans>
              </ListLink>
              <ListLink to="/#features">
                <Trans i18nKey="nav.ourFeatures">مزايانا</Trans>
              </ListLink>
              <ListLink to="/#subscribe">
                <Trans i18nKey="nav.freeSubscription">اشترك مجانا</Trans>
              </ListLink>
              <LanguageMenu />
            </ul>
          </div>
          <button
            type="button"
            onClick={toggleMenu}
            className={style.mbNavBurgar}
          >
            <div className={style.mbNavToggle}>
              <span
                className={
                  isToggled ? `${style.rotateRight} ${style.rotateLeft}` : ''
                }
              />
            </div>
          </button>
          {isToggled && (
            <div className={style.mbMenu}>
              <ul className={style.mbList}>
                <ListLink
                  toggleMenu={toggleMenu}
                  className={style.mbItem}
                  to="/"
                >
                  <Trans i18nKey="nav.home">الصفحة الرئيسية</Trans>
                </ListLink>
                <ListLink
                  toggleMenu={toggleMenu}
                  className={style.mbItem}
                  to="/#features"
                >
                  <Trans i18nKey="nav.ourFeatures">مزايانا</Trans>
                </ListLink>
                <ListLink
                  toggleMenu={toggleMenu}
                  className={style.mbItem}
                  to="/#subscribe"
                >
                  <Trans i18nKey="nav.freeSubscription">اشترك مجانا</Trans>
                </ListLink>
              </ul>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}
export default Header;
