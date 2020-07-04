import React, { AllHTMLAttributes } from 'react';
import styled from 'styled-components';
import NavbarSocialIcon from '@atoms/nb-social-icon';
import breakpoints from '@utils/breakpoints';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { MenuOptions } from '@utils/enums';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div<{ clicked?: boolean }>`
  box-sizing: border-box;
  position: fixed;
  top: 18vh;
  right: 0vw;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  height: auto;
  padding: 5px;
  gap: 20px;
  background: #222222;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  width: ${(props) => (props.clicked ? '150px' : '0')};
  display: grid;
  opacity: ${(props) => (props.clicked ? 'initial' : '0')};
  transition: 0.5s;

  @media (${breakpoints.desktop.landscape.min}) {
    align-self: center;
    justify-self: center;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    background: initial;
    position: initial;
    padding: initial;
  }
`;

const icons = [
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/matiasbarriosnunez/',
  },
  { icon: faGithub, url: 'https://www.github.com/matiasbn' },
  {
    icon: faEnvelope,
    url: 'mailto:matias.barriosn@gmail.com?subject=Hello Matías!',
  },
  {
    icon: faEnvelope,
    url: 'mailto:matias.barriosn@gmail.com?subject=Hello Matías!',
  },
];

export default function NavbarSocial(props: Props) {
  const menuOption = useSelector((state) => state.menuOption);
  const clicked = useSelector((state) => state.navBarClicked);
  const show = menuOption === MenuOptions.CONTACT && clicked;
  return (
    <Wrapper clicked={show}>
      {icons.map((icon) => (
        <NavbarSocialIcon href={icon?.url}>
          <FontAwesomeIcon icon={icon.icon} />
        </NavbarSocialIcon>
      ))}
    </Wrapper>
  );
}
