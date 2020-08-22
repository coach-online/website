import React from 'react';

import featureImg1 from '../../images/Group 580.png';
import featureImg2 from '../../images/Group 577.png';
import featureImg3 from '../../images/Group 579.png';
import featureImg4 from '../../images/Group 578.png';

import Container from '../Container';
import Feature from '../Feature';

import featuresStyles from './style.module.css';

export default function MainFeaturesSection() {
  return (
    <>
      <section id="features" className={featuresStyles.features}>
        <Container>
          <h2 className="font-style-4 center">مزايا كوتش أونلاين</h2>
          <Feature
            src={featureImg1}
            alt="feature 1"
            p="كوتش اونلاين يساعدك على تنظيم جداول التغذية والتمرين للمشتركين الخاصين بك بسهولة تامة عن طريق اعادة استخدام الجداول التي قمت بانشائها سابقا"
            h3="توفير الوقت والجهد"
          />
          <Feature
            order="-1"
            src={featureImg2}
            alt="feature 2"
            p=" كوتش اونلاين يتيح لك مجموعة كبيرة من جداول التمرين والتغذية المعتمدة ويمكنك ايضا التعديل عليها وتخصيصها للمشترك الجديد"
            h3="تنظيم جداول المشتركين"
          />
          <Feature
            src={featureImg3}
            alt="feature 2"
            p=" كوتش اونلاين يوفر لك قائمة كبيرة من الوجبات الغذائية التي يمكنك  استخدامها في بناء جداول التغذية بالاضافة لتفاصيل والمكونات الغذائية لكل وجبة"
            h3="بناء جداول التغذية"
          />
          <Feature
            order="-1"
            src={featureImg4}
            alt="feature 2"
            p=" كوتش اونلاين يوفر لك مكتبة فيديو ضخمة من التمارين مع شرح طريقة اداء كل تمارين يمكنك استخدامها في بناء جداول المشتركين"
            h3="بناء جداول التمرين"
          />
        </Container>
      </section>
    </>
  );
}
