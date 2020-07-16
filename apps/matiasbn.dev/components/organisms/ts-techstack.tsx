import React, { AllHTMLAttributes } from 'react';
import styled from 'styled-components';
import TechStackNavbar from '@molecules/ts-navbar';
import TechStackIntro from '@molecules/ts-intro';
import TechStackGallery from '@molecules/ts-gallery';
import TechStackSecondaryNavbar from '@molecules/ts-secondary-navbar';
import TechStackSelector from '@molecules/ts-selector';
interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-auto-rows: 1fr 1fr;
  grid-template-rows: min-content;
  margin-bottom: 5rem;
`;
const ContainerGallery = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-auto-rows: auto;
  width: 100%;
  height: 100%;
`;

export default function TechStack(props: Props) {
  return (
    <Wrapper>
      <TechStackIntro />
      <ContainerGallery>
        {/*<TechStackNavbar />*/}
        <TechStackSelector />
        <TechStackGallery />
        {/*<TechStackSecondaryNavbar />*/}
      </ContainerGallery>
    </Wrapper>
  );
}
