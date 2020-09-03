import React from 'react';

import { Link } from 'gatsby';
import logoSrc from '../../images/Logo@2x@2x.png';

import style from './style.module.css';

export default () => (
  <Link to="/">
    <div className={style.onlineCoachLogo}>
      <img src={logoSrc} alt="yallaCoach logo" />
      <h1>YallaCoach</h1>
    </div>
  </Link>
);
