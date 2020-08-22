import React from 'react';

import SEO from '../components/seo';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import SubscribeForm from '../components/SubscribeForm';
import Layout1 from '../components/Layouts/Layout1';

const IndexPage = () => (
  <Layout1>
    <SEO title="Home" />
    <HeroSection />
    <Features />
    <SubscribeForm />
  </Layout1>
);

export default IndexPage;
