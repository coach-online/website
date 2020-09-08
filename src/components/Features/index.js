import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Trans } from 'react-i18next';

import Container from '../Container';
import Feature from '../Feature';
import { Heading2 } from '../Typography';

import style from './style.module.css';

export default function MainFeaturesSection() {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "features" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const getFeatureImgSrc = (name) => (data.images
    ? data.images.edges.find((edge) => edge.node.name === name).node
      .childImageSharp.fluid
    : null);
  return (
    <>
      <section id="features" className={style.features}>
        <Container>
          <Heading2 className="center">
            <Trans i18nKey="features.title">مزايا يلا كوتش</Trans>
          </Heading2>
          <Feature
            src={getFeatureImgSrc('feature1')}
            alt="YallaCoach saves time and effort"
            p={(
              <Trans i18nKey="features.feature1Des">
                يلا كوتش يساعدك على تنظيم جداول التغذية والتمرين للمشتركين
                الخاصين بك بسهولة تامة عن طريق اعادة استخدام الجداول التي قمت
                بانشائها سابقا
              </Trans>
            )}
            h3={<Trans i18nKey="features.feature1">توفير الوقت والجهد</Trans>}
          />
          <Feature
            order={-1}
            src={getFeatureImgSrc('feature2')}
            alt="YallaCoach plans"
            p={(
              <Trans i18nKey="features.feature2Des">
                يلا كوتش يتيح لك مجموعة كبيرة من جداول التمرين والتغذية المعتمدة
                ويمكنك ايضا التعديل عليها وتخصيصها للمشترك الجديد
              </Trans>
            )}
            h3={
              <Trans i18nKey="features.feature2">تنظيم جداول المشتركين</Trans>
            }
          />
          <Feature
            src={getFeatureImgSrc('feature3')}
            alt="YallaCoach nutrition plans"
            p={(
              <Trans i18nKey="features.feature3Des">
                يلا كوتش يوفر لك قائمة كبيرة من الوجبات الغذائية التي يمكنك
                استخدامها في بناء جداول التغذية بالاضافة لتفاصيل والمكونات
                الغذائية لكل وجبة
              </Trans>
            )}
            h3={<Trans i18nKey="features.feature3">بناء جداول التغذية</Trans>}
          />
          <Feature
            order={-1}
            src={getFeatureImgSrc('feature4')}
            alt="YallaCoach workout plans"
            p={(
              <Trans i18nKey="features.feature4Des">
                يلا كوتش يوفر لك مكتبة فيديو ضخمة من التمارين مع شرح طريقة اداء
                كل تمارين يمكنك استخدامها في بناء جداول المشتركين
              </Trans>
            )}
            h3={<Trans i18nKey="features.feature4">بناء جداول التمرين</Trans>}
          />
        </Container>
      </section>
    </>
  );
}
