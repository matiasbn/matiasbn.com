import React, { AllHTMLAttributes } from 'react';
import styled from 'styled-components';
import NavbarSocialIcon from '@atoms/nb-social-icon';
import breakpoints from '@utils/breakpoints';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr;
  gap: 20px;

  @media (orientation: portrait) {
    display: none;
  }

  @media (${breakpoints.desktop.landscape.min}) {
    align-self: center;
    justify-self: center;
  }
`;

const icons = [
  {
    image: 'linkedin.png',
    url: 'https://www.linkedin.com/in/matiasbarriosnunez/',
  },
  { image: 'github-white.png', url: 'https://www.github.com/matiasbn' },
  {
    image: 'mail.svg',
    url: 'mailto:matias.barriosn@gmail.com?subject=Hello Matías!',
  },
];

export default function NavbarSocial(props: Props) {
  return (
    <Wrapper>
      {icons.map((icon) => (
        <NavbarSocialIcon href={icon?.url}>
          <img src={icon.image} width={'30px'}></img>
        </NavbarSocialIcon>
      ))}
    </Wrapper>
  );
}
