import React, { AllHTMLAttributes } from 'react';
import styled from 'styled-components';
import TechStackNavbar from '@molecules/ts-navbar';
import TechStackIntro from '@molecules/ts-intro';
import TechStackGallery from '@molecules/ts-gallery';
import TechStackSecondaryNavbar from '@molecules/ts-secondary-navbar';
interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-auto-rows: auto;
  grid-row-gap: 10px;
  @media (orientation: portrait) {
    display: none;
  }
`;
const ContainerGallery = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
`;

export default function TechStack(props: Props) {
  return (
    <Wrapper>
      <TechStackIntro />
      <ContainerGallery>
        <TechStackNavbar />
        <TechStackGallery className={'gallery'} />
        <TechStackSecondaryNavbar />
      </ContainerGallery>
    </Wrapper>
  );
}
