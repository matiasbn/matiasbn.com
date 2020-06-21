import React, { AllHTMLAttributes } from 'react';
import styled from 'styled-components';
import FooterText from '@atoms/FooterText';
import FooterIcon from '@atoms/FooterIcon';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div`
  border-top: 1px solid #6e6e6e;
  margin-top: 20px;
  padding-top: 10px;
  background: white;
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: 5px;
  align-items: center;
  justify-items: center;
`;

const ContainerIcons = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 50%;

  @media (min-width: 60rem) {
    width: 30%;
  }

  @media (orientation: landscape) {
    width: 20%;
  }
`;

export default function Footer({}: Props) {
  return (
    <Wrapper>
      <FooterText>Powered by:</FooterText>
      <ContainerIcons>
        <FooterIcon src={'nextjs.png'} href={'https://nextjs.org/'} />
        <FooterIcon src={'netlify.png'} href={'https://www.netlify.com/'} />
        <FooterIcon
          src={'typescript.png'}
          href={'https://www.typescriptlang.org/'}
        />
        <FooterIcon
          src={'styled-components.png'}
          href={'https://styled-components.com/'}
        />
      </ContainerIcons>
    </Wrapper>
  );
}
