import React from 'react';
import styled from 'styled-components';
import FooterText from '@atoms/FooterText';
import FooterIcon from '@atoms/FooterIcon';

type Props = {};

const Wrapper = styled.div`
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
  grid-template-columns: 1fr 1fr;
  width: 40%;

  @media (min-width: 60rem) {
    width: 30%;
  }

  @media (orientation: landscape) {
    width: 10%;
  }
`;

export default function Footer({}: Props) {
  return (
    <Wrapper>
      <FooterText>Powered by:</FooterText>
      <ContainerIcons>
        <FooterIcon src={'nextjs.png'} href={'https://nextjs.org/'} />
        <FooterIcon src={'netlify.png'} href={'https://www.netlify.com/'} />
      </ContainerIcons>
    </Wrapper>
  );
}
