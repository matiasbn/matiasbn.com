import React from 'react';
import styled from 'styled-components';
import Navbar from '@organisms/Navbar';
import Hero from '@organisms/Hero';
import Footer from '@organisms/Footer';

const Wrapper = styled.div``;

export const Main = () => {
  return (
    <Wrapper>
      <Navbar />
      <Hero />
      <Footer />
    </Wrapper>
  );
};
export default Main;
