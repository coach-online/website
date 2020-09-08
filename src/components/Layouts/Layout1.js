import React from 'react';
import DirectionProvider, {
  DIRECTIONS,
} from 'react-with-direction/dist/DirectionProvider';
import { useI18next } from 'gatsby-plugin-react-i18next';

import Header from '../Header';
import Footer from '../Footer';

export default ({ children }) => {
  const { language } = useI18next();
  return (
    <DirectionProvider
      direction={language === 'ar' ? DIRECTIONS.RTL : DIRECTIONS.LTR}
    >
      <>
        <Header />
        {children}
        <Footer />
      </>
    </DirectionProvider>
  );
};
