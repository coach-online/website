import React from 'react';

import Header from '../components/Header';
import SEO from '../components/seo';
import HeroSection from '../components/HeroSection';

const IndexPage = () => (
  <>
    <Header />
    <SEO title="Home" />
    <HeroSection />
  </>
);

export default IndexPage;
