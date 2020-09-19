import React from 'react';

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
          <ListLink to="/">الرئيسية</ListLink>
          <ListLink to="/terms">سياسة الإستخدام</ListLink>
          <ListLink to="/policy">سياسة الخصوصية</ListLink>
          <ListLink to="/map">خارطة الموقع</ListLink>
        </ul>
        <div className={style.social}>
          <a href="https://www.linkedin.com/company/yallacoach/" target="_blank">
            <img src={linkedIn} alt="online-coacth linkedIn" />
          </a>
          <a href="https://www.facebook.com/%D9%8A%D9%84%D8%A7-%D9%83%D9%88%D8%AA%D8%B4-YallaCoach-111607137357548" target="_blank">
            <img src={fb} alt="online-coacth facebook" />
          </a>
          <a href="https://www.instagram.com/yalla_coach" target="_blank">
            <img src={instagram} alt="online-coacth instagram" />
          </a>
          {/* <a href="https://www.instagram.com/yalla_coach" target="_blank">
            <img src={twitter} alt="online-coacth twitter" />
          </a> */}
        </div>
      </div>
      <div className={style.cprights}>
        <p>جميع حقوق الملكية محفوظة 2020</p>
        <a href="mailto:info@yalla.coach">info@yalla.coach</a>
      </div>
    </Container>
  </footer>
);
