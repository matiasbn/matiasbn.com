import React from 'react';
import styled from 'styled-components';
import Navbar from '@organisms/Navbar';
import Hero from '@organisms/Hero';
import Footer from '@organisms/Footer';
import TechStack from '@organisms/TechStack';
import Disclaimer from '@organisms/Disclaimer';

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
