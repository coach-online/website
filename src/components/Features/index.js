import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

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
        <Heading2 className="center">مزايا يلا كوتش</Heading2>
        <Feature
          src={getFeatureImgSrc('feature3')}
          alt="YallaCoach nutrition plans"
          p=" يلا كوتش يوفر لك قائمة كبيرة من الوجبات الغذائية التي يمكنك  استخدامها في بناء جداول التغذية بالاضافة لتفاصيل والمكونات الغذائية لكل وجبة"
          h3="بناء جداول التغذية"
        />
        <Feature
          order={-1}
          src={getFeatureImgSrc('feature4')}
          alt="YallaCoach workout plans"
          p=" يلا كوتش يوفر لك مكتبة فيديو ضخمة من التمارين مع شرح طريقة اداء كل تمارين يمكنك استخدامها في بناء جداول المشتركين"
          h3="بناء جداول التمرين"
        />
        <Feature
          src={getFeatureImgSrc('feature5')}
          alt="feature 1"
          p="يلا كوتش يساعدك على ارشفة ومتابعة تقدم المشتركين بكل بساطة"
          h3="متابعة تقدم المشتركين"
        />
        <Feature
          order={-1}
          src={getFeatureImgSrc('feature1')}
          alt="YallaCoach plans"
          p="يلا كوتش يتيح لك الفرصة للحصول على مشتركين جدد وزيادة دخلك"
          h3="الحصول على مشتركين جدد"
        />
      </section>
    </>
  );
}
