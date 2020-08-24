import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';

import Container from '../Container';
import ListLink from '../ListLink';
import Logo from '../Logo';

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
            <ul className="list-non-styled">
              <ListLink to="/"> الرئيسية</ListLink>
              <ListLink to="/#features">مزايانا</ListLink>
              <ListLink to="/#subscribe">اشترك مجانا</ListLink>
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
                  الرئيسية
                </ListLink>
                <ListLink
                  toggleMenu={toggleMenu}
                  className={style.mbItem}
                  to="/#features"
                >
                  مزايانا
                </ListLink>
                <ListLink
                  toggleMenu={toggleMenu}
                  className={style.mbItem}
                  to="/#subscribe"
                >
                  اشترك مجانا
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
