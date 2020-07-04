import React from 'react';
import styled from 'styled-components';
import NavbarMenuText from '@atoms/nb-menu-text';
import breakpoints from '@utils/breakpoints';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import {
  faUser,
  faKeyboard,
  faFileCode,
  faComment,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ActionTypes } from '@store';
import { MenuOptions } from '@utils/enums';

const Wrapper = styled.div<{ clicked?: boolean; elements?: number }>`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(${(props) => props.elements}, 1fr);
  background: #262626;
  height: 10vh;
  width: 100%;
  top: 8vh;
  right: ${(props) => (props.clicked ? '0' : '1000px')};
  transition: 0.5s;

  @media (${breakpoints.desktop.landscape.min}) {
    position: initial;
    display: grid;
    grid-template-rows: repeat(${(props) => props.elements - 1}, 6vh);
    gap: 20px;
    grid-template-columns: 1fr;
    height: 100%;

    a:nth-child(5) {
      display: none;
    }
  }
`;

const options = [
  {
    icon: faUser,
    title: 'About me',
    route: '/#',
    option: MenuOptions.ABOUT,
    //    route: '/techstack',
  },
  {
    icon: faFileCode,
    title: 'Skills',
    route: '/#',
    option: MenuOptions.SKILLS,
    //    route: '/techstack',
  },
  {
    icon: faKeyboard,
    title: 'Tools',
    route: '/#',
    option: MenuOptions.TECH,
    //    route: '/techstack',
  },
  {
    icon: faComment,
    title: "Let's talk!",
    option: MenuOptions.CONTACT,
    route: '/#',
    //    route: '/resume',
  },
];

type Props = {};

type Options = typeof options[0];

export default function NavbarMenu({}: Props) {
  const router = useRouter();
  const clicked = useSelector((state) => state.navBarClicked);
  const selected = useSelector((state) => state.menuOption);

  const dispatch = useDispatch();
  function handleClick(opt: Options) {
    const { route, option } = opt;
    dispatch({
      type: ActionTypes.SET_MENU_OPTION,
      payload: option === selected ? MenuOptions.NONE : option,
    });
    //    router.push(route);
  }
  return (
    <Wrapper clicked={clicked} elements={options.length}>
      {options.map((option) => (
        <NavbarMenuText key={option.title} onClick={() => handleClick(option)}>
          {selected === option.option ? (
            <p>{option.title}</p>
          ) : (
            <FontAwesomeIcon icon={option.icon} />
          )}
        </NavbarMenuText>
      ))}
    </Wrapper>
  );
}
