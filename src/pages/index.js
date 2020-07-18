import React from 'react';
import { createUseStyles } from 'react-jss';

import Header from '../components/Header';
import SEO from '../components/seo';
import HeroSection from '../components/HeroSection';

const useStyles = createUseStyles((theme) => ({
  paragraph: {
    color: theme.colors.blue,
  },
}));

const IndexPage = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <SEO title="Home" />
      <HeroSection />
      <p className={classes.paragraph}>test</p>
    </>
  );
};

export default IndexPage;
