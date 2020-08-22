import React from 'react';

import Container from '../Container';
import ListLink from '../ListLink';

import Logo from '../Logo';

import headerStyles from './style.module.css';

function Header() {
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
        </nav>
      </Container>
    </header>
  );
}

export default Header;
