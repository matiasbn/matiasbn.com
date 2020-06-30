import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Navbar from '@organisms/nb-navbar';
import Footer from '@organisms/ft-footer';
import Disclaimer from '@organisms/dc-disclaimer';
import breakpoints from '@utils/breakpoints';

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 15vw 85vw;
  grid-template-columns: 1fr;

  @media (orientation: landscape) {
    grid-template-columns: 10vw 90vw;
    grid-template-rows: 1fr;
  }
`;

const ContainerContent = styled.div`
  @media (orientation: landscape) {
    height: 100vh;
    grid-template-rows: 90vh 10vh;
  }
`;
const Container = styled.div``;

const Layout = (props: { children: ReactNode }) => {
  return (
    <Wrapper>
      <Navbar />
      <ContainerContent>
        <Container>{props.children}</Container>
        {/*<Footer />*/}
      </ContainerContent>
    </Wrapper>
  );
};

export default Layout;
