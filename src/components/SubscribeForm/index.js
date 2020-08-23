import React from 'react';

import Container from '../Container';

import subscribeStyles from './style.module.css';

export default () => (
  <section id="subscribe" className={subscribeStyles.subscribe}>
    <Container className={subscribeStyles.subscribeContainer}>
      <div className={subscribeStyles.bgLayer}>
        <h2 className="font-style-5">إنضم إلينا</h2>
        <p className="font-style-2">
          اترك لنا بريدك الالكتروني لنقوم بارسال لك نسخة من التطبيق قبل الجميع
        </p>
        <form className={subscribeStyles.subscribeForm}>
          <label htmlFor="email" />
          <input
            className={subscribeStyles.subscribeInput}
            placeholder="البريد الالكتروني"
            id="email"
            name="email"
            type="email"
          />
          <button className={subscribeStyles.subscribeBtn} type="submit">
            تسجيل
          </button>
        </form>
      </div>
    </Container>
  </section>
);
