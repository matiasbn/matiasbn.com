import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Navbar from '@organisms/nb-navbar';
import breakpoints from '@utils/breakpoints';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 10vh 90vh;
  grid-template-columns: 1fr;

  @media (${breakpoints.desktop.landscape.min}) {
    grid-template-columns: min-content auto;
    grid-auto-rows: 1fr;
  }
`;

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
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
