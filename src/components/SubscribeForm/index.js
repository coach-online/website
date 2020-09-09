import React, { useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

import Container from '../Container';

import style from './style.module.css';
import { Heading2, P24 } from '../Typography';

const url2 = 'https://coach.us17.list-manage.com/subscribe/post?u=ebb2318e8ceef00eeb027f40e&amp;id=ceeb2d7437';

const renderMsg = (status, msg) => {
  switch (status) {
    case 'sending':
      return 'Sending ...';
    case 'success':
      return 'Thank you for subscribing!';
    case 'error': {
      if (msg.includes('already subscribed')) {
        return 'Already subscribed';
      } if (
        msg.includes('Too many subscribe attempts')
          || msg.includes('has too many recent')
      ) {
        return 'Too many subscribe attempts, try in about 5 minutes';
      }
      return 'Something wrong, try again later';
    }

    default:
      return undefined;
  }
};

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  return (
    <section id="subscribe" className={style.subscribe}>
      <Container className={style.subscribeContainer}>
        <div className={style.bgLayer}>
          <Heading2 fontSize="56px">إنضم إلينا</Heading2>
          <P24>
            اترك لنا بريدك الالكتروني لنقوم بارسال لك نسخة من التطبيق قبل الجميع
          </P24>
          <MailchimpSubscribe
            url={url2}
            render={({ subscribe, status, message }) => (
              <>
                <form
                  className={style.subscribeForm}
                  onSubmit={(e) => {
                    e.preventDefault();
                    subscribe({ EMAIL: email });
                  }}
                >
                  <label htmlFor="email">
                    <input
                      className={style.subscribeInput}
                      placeholder="البريد الالكتروني"
                      id="email"
                      name="email"
                      type="email"
                      required="true"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </label>
                  <button
                    className={style.subscribeBtn}
                    type="submit"
                    disabled={status === 'sending'}
                  >
                    تسجيل
                  </button>
                </form>
                {email && (
                  <div style={{ color: 'green' }}>
                    {renderMsg(status, message)}
                  </div>
                )}
              </>
            )}
          />
        </div>
      </Container>
    </section>
  );
};

export default SubscribeForm;
