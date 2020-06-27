import React from 'react';
import styled from 'styled-components';
import Navbar from '@organisms/nb-navbar';
import Hero from '@organisms/he-hero';
import Footer from '@organisms/ft-footer';
import TechStack from '@organisms/ts-techstack';
import Disclaimer from '@organisms/dc-disclaimer';

const Wrapper = styled.div``;

export default function Main() {
  return (
    <Wrapper>
      <Navbar />
      <Hero />
      <Disclaimer />
      <TechStack />
      <Footer />
    </Wrapper>
  );
}
