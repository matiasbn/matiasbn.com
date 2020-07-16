import React, { AllHTMLAttributes } from 'react';
import styled from 'styled-components';
import NavbarSocialIcon from '@atoms/nb-social-icon';
import breakpoints from '@utils/breakpoints';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { MenuOptions } from '@utils/enums';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div<{ clicked?: boolean; elements?: number }>`
  display: grid;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  grid-template-rows: repeat(${(props) => props.elements}, 1fr);
  align-items: center;
  justify-items: center;
  padding: 0.5rem;
  gap: 2rem;
  background: #222222;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  height: ${(props) => (props.clicked ? '20rem' : '0')};
  opacity: ${(props) => (props.clicked ? 'initial' : '0')};
  transition: 0.5s;

  @media (${breakpoints.desktop.min}) {
    align-self: center;
    justify-self: center;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    background: initial;
    position: initial;
    padding: initial;
    height: initial;
    opacity: initial;
  }
`;

const icons = [
  { icon: faGithub, url: 'https://www.github.com/matiasbn' },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/matiasbarriosnunez/',
  },
  {
    icon: faFileAlt,
    url:
      'https://drive.google.com/file/d/13QalMyoGVsxsAIaqyIpHZbebARirfA4L/view?usp=sharing',
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
    <Wrapper clicked={show} elements={icons.length}>
      {icons.map((icon, index) => (
        <NavbarSocialIcon href={icon?.url} key={index}>
          <FontAwesomeIcon icon={icon.icon} />
        </NavbarSocialIcon>
      ))}
    </Wrapper>
  );
}
