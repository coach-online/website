import React from 'react';

import { Trans } from 'react-i18next';
import Container from '../Container';

import style from './style.module.css';
import { Heading2, P24 } from '../Typography';

export default () => (
  <section id="subscribe" className={style.subscribe}>
    <Container className={style.subscribeContainer}>
      <div className={style.bgLayer}>
        <Heading2 fontSize="56px">
          <Trans i18nKey="subscribeForm.joinUs">إنضم إلينا</Trans>
        </Heading2>
        <P24>
          <Trans i18nKey="subscribeForm.leaveEmail">
            اترك لنا بريدك الالكتروني لنقوم بارسال لك نسخة من التطبيق قبل الجميع
          </Trans>
        </P24>
        <form className={style.subscribeForm}>
          <label htmlFor="email">
            <input
              className={style.subscribeInput}
              placeholder={<Trans i18nKey="subscribeForm.email">البريد الالكتروني</Trans>}
              id="email"
              name="email"
              type="email"
            />
          </label>
          <button className={style.subscribeBtn} type="submit">
            <Trans i18nKey="subscribeForm.subscribeBtn">تسجيل</Trans>
          </button>
        </form>
      </div>
    </Container>
  </section>
);
