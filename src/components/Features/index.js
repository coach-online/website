import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from '../Container';
import Feature from '../Feature';

import featuresStyles from './style.module.css';

export default function MainFeaturesSection() {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { relativeDirectory: { eq: "features" } }) {
        edges {
          node {
            id
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
  const images = data.images ? data.images.edges : null;
  return (
    <>
      <section id="features" className={featuresStyles.features}>
        <Container>
          <h2 className="font-style-4 center">مزايا كوتش أونلاين</h2>
          <Feature
            src={images && images[0].node.childImageSharp.fluid}
            alt="feature 1"
            p="كوتش اونلاين يساعدك على تنظيم جداول التغذية والتمرين للمشتركين الخاصين بك بسهولة تامة عن طريق اعادة استخدام الجداول التي قمت بانشائها سابقا"
            h3="توفير الوقت والجهد"
          />
          <Feature
            order="-1"
            src={images && images[1].node.childImageSharp.fluid}
            alt="feature 2"
            p=" كوتش اونلاين يتيح لك مجموعة كبيرة من جداول التمرين والتغذية المعتمدة ويمكنك ايضا التعديل عليها وتخصيصها للمشترك الجديد"
            h3="تنظيم جداول المشتركين"
          />
          <Feature
            src={images && images[2].node.childImageSharp.fluid}
            alt="feature 2"
            p=" كوتش اونلاين يوفر لك قائمة كبيرة من الوجبات الغذائية التي يمكنك  استخدامها في بناء جداول التغذية بالاضافة لتفاصيل والمكونات الغذائية لكل وجبة"
            h3="بناء جداول التغذية"
          />
          <Feature
            order="-1"
            src={images && images[3].node.childImageSharp.fluid}
            alt="feature 2"
            p=" كوتش اونلاين يوفر لك مكتبة فيديو ضخمة من التمارين مع شرح طريقة اداء كل تمارين يمكنك استخدامها في بناء جداول المشتركين"
            h3="بناء جداول التمرين"
          />
        </Container>
      </section>
    </>
  );
}
