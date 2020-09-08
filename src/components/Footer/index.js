import React from 'react';
import { Trans } from 'react-i18next';

import Logo from '../Logo';
import fb from '../../images/ico - 24 - social media & tools - facebook.png';
import instagram from '../../images/ico - 24 - social media & tools - instagram.png';
import linkedIn from '../../images/ico - 24 - social media & tools - linkedin.png';
import twitter from '../../images/ico - 24 - social media & tools - twitter.png';

import ListLink from '../ListLink';
import Container from '../Container';

import style from './style.module.css';

export default () => (
  <footer className={style.footer}>
    <Container className={style.footerContainer}>
      <div className={style.links}>
        <Logo />
        <ul className="list-non-styled">
          <ListLink to="/">
            <Trans i18nKey="nav.home">الصفحة الرئيسية</Trans>
          </ListLink>
          <ListLink to="/terms">
            <Trans i18nKey="nav.terms"> سياسة الإستخدام</Trans>
          </ListLink>
          <ListLink to="/policy">
            <Trans i18nKey="nav.privacyPolicy">سياسة الخصوصية</Trans>
          </ListLink>
          <ListLink to="/map">
            <Trans i18nKey="nav.siteMap">خارطة الموقع</Trans>
          </ListLink>
        </ul>
        <div className={style.social}>
          <img src={linkedIn} alt="online-coach linkedIn" />
          <img src={instagram} alt="online-coach instagram" />
          <img src={fb} alt="online-coach facebook" />
          <img src={twitter} alt="online-coach twitter" />
        </div>
      </div>
      <div className={style.cprights}>
        <p>
          <Trans i18nKey="cprights">جميع حقوق الملكية محفوظة 2020</Trans>
        </p>
      </div>
    </Container>
  </footer>
);
