import React, { useState } from 'react';

import Container from '../Container';
import ListLink from '../ListLink';
import Logo from '../Logo';

import headerStyles from './style.module.css';

function Header() {
  const [isToggled, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!isToggled);
  };
  return (
    <header className={headerStyles.header}>
      <Container>
        <nav className={headerStyles.nav}>
          <Logo />
          <div className={headerStyles.navList}>
            <ul className="list-non-styled">
              <ListLink to="/"> الرئيسية</ListLink>
              <ListLink to="/#features">مزايانا</ListLink>
              <ListLink to="/#subscribe">اشترك مجانا</ListLink>
            </ul>
          </div>
          <button
            type="button"
            onClick={toggleMenu}
            className={headerStyles.mbNavBurgar}
          >
            <div className={headerStyles.mbNavToggle}>
              <span
                className={
                  isToggled
                    ? `${headerStyles.rotateRight} ${headerStyles.rotateLeft}`
                    : ''
                }
              />
            </div>
          </button>
          {isToggled && (
            <div className={headerStyles.mbMenu}>
              <ul className={headerStyles.mbList}>
                <ListLink className={headerStyles.mbItem} to="/"> الرئيسية</ListLink>
                <ListLink className={headerStyles.mbItem} to="/#features">مزايانا</ListLink>
                <ListLink className={headerStyles.mbItem} to="/#subscribe">اشترك مجانا</ListLink>
              </ul>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
