import React from 'react';

import Container from '../Container';

import style from './style.module.css';
import { Heading2, P24 } from '../Typography';

export default () => (
  <section id="subscribe" className={style.subscribe}>
    <Container className={style.subscribeContainer}>
      <div className={style.bgLayer}>
        <Heading2 fontSize="56px">إنضم إلينا</Heading2>
        <P24>
          اترك لنا بريدك الالكتروني لنقوم بارسال لك نسخة من التطبيق قبل الجميع
        </P24>
        <form className={style.subscribeForm}>
          <label htmlFor="email">
            <input
              className={style.subscribeInput}
              placeholder="البريد الالكتروني"
              id="email"
              name="email"
              type="email"
            />
          </label>
          <button className={style.subscribeBtn} type="submit">
            تسجيل
          </button>
        </form>
      </div>
    </Container>
  </section>
);
