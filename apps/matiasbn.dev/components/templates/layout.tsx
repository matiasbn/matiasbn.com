import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Navbar from '@organisms/nb-navbar';
import breakpoints from '@utils/breakpoints';
import Animation from '@organisms/an-animation';

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 10vh 90vh;
  grid-template-columns: 100vw;

  @media (${breakpoints.desktop.min}) {
    grid-template-columns: 5vw 95vw;
    grid-template-rows: 100vh;
  }
`;

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
`;

const Layout = (props: { children: ReactNode }) => {
  return (
    <Animation>
      <Wrapper>
        <Navbar />
        <Container>{props.children}</Container>
      </Wrapper>
    </Animation>
  );
};

export default Layout;
