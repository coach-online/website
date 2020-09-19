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
      return 'شكرا لك! لقد تم اشتراكك بنجاح';
    case 'error': {
      if (msg.includes('already subscribed')) {
        return 'أنت مسجل مسبقا';
      }
      if (
        msg.includes('Too many subscribe attempts')
        || msg.includes('has too many recent')
      ) {
        return 'Too many subscribe attempts, try in about 5 minutes';
      }
      return 'حدث خطأ ما، الرجاء المحاولة من جديد';
    }

    default:
      return undefined;
  }
};

const SubscribeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [participants, setParticipants] = useState();
  const [workField, setWorkField] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <section id="subscribe" className={style.subscribe}>
      <Container className={style.subscribeContainer}>
        <div className={style.bgLayer}>
          <Heading2 fontSize="56px">إنضم إلينا</Heading2>
          <P24>
            قم بانشاء حساب مدرب في الموقع
          </P24>
          <MailchimpSubscribe
            url={url2}
            render={({ subscribe, status, message }) => (
              <form
                className={style.subscribeForm}
                onSubmit={(e) => {
                  e.preventDefault();
                  subscribe({
                    EMAIL: email,
                    FNAME: name,
                    MMERGE17: participants,
                    MMERGE18: workField,
                    PHONE: phoneNumber,
                  });
                }}
              >
                <label htmlFor="name">
                  <input
                    className={style.subscribeInput}
                    placeholder="الاسم"
                    id="name"
                    name="name"
                    type="text"
                    required="true"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </label>
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
                <div className={style.inputRow}>
                  <label htmlFor="participants">
                    <input
                      className={style.subscribeInput}
                      placeholder="متوسط عدد المشتركين الشهري"
                      id="participants"
                      name="participants"
                      type="number"
                      required="true"
                      value={participants}
                      onChange={(e) => {
                        setParticipants(e.target.value);
                      }}
                    />
                  </label>
                  <label htmlFor="workField">
                    <input
                      className={style.subscribeInput}
                      placeholder="مجال العمل"
                      id="workField"
                      name="workField"
                      type="text"
                      required="true"
                      value={workField}
                      onChange={(e) => {
                        setWorkField(e.target.value);
                      }}
                    />
                  </label>
                </div>
                <label htmlFor="phoneNumber">
                  <input
                    className={style.subscribeInput}
                    placeholder="رقم الجوال"
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    required="true"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
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
                {email && (
                  <P24>{renderMsg(status, message)}</P24>
                  // <div style={{ color: 'green' }}>
                  //   {renderMsg(status, message)}
                  // </div>
                )}
              </form>
            )}
          />
        </div>
      </Container>
    </section>
  );
};

export default SubscribeForm;
