import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Navbar from '@organisms/nb-navbar';
import breakpoints from '@utils/breakpoints';

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: 1fr;

  @media (${breakpoints.desktop.landscape.min}) {
    grid-template-columns: min-content auto;
    grid-auto-rows: 1fr;
  }
`;

const Container = styled.div`
  width: 100%;
`;

const Layout = (props: { children: ReactNode }) => {
  return (
    <Wrapper>
      <Navbar />
      <Container>{props.children}</Container>
    </Wrapper>
  );
};

export default Layout;
