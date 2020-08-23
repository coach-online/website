import React from 'react';

import Logo from '../Logo';
import fb from '../../images/ico - 24 - social media & tools - facebook.png';
import instagram from '../../images/ico - 24 - social media & tools - instagram.png';
import linkedIn from '../../images/ico - 24 - social media & tools - linkedin.png';
import twitter from '../../images/ico - 24 - social media & tools - twitter.png';

import ListLink from '../ListLink';
import Container from '../Container';

import footerStyles from './style.module.css';

export default () => (
  <footer className={footerStyles.footer}>
    <Container className={footerStyles.footerContainer}>
      <div className={footerStyles.links}>
        <Logo />
        <ul className="list-non-styled">
          <ListLink to="/">الرئيسية</ListLink>
          <ListLink to="/terms">سياسة الإستخدام</ListLink>
          <ListLink to="/policy">سياسة الخصوصية</ListLink>
          <ListLink to="/map">خارطة الموقع</ListLink>
        </ul>
        <div className={footerStyles.social}>
          <img src={linkedIn} alt="online-coacth linkedIn" />
          <img src={instagram} alt="online-coacth instagram" />
          <img src={fb} alt="online-coacth facebook" />
          <img src={twitter} alt="online-coacth twitter" />
        </div>
      </div>
      <div className={footerStyles.cprights}>
        <p>جميع حقوق الملكية محفوظة 2020</p>
      </div>
    </Container>
  </footer>
);
