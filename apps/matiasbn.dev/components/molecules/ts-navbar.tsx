import React, { AllHTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { ActionTypes } from '@store';
import { useSelector, useDispatch } from 'react-redux';
import { ToolType } from '@utils/tools';
import TechStackNavbarText from '@atoms/ts-navbar-text';
import breakpoints from '@utils/breakpoints';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(10, fit-content());
  justify-items: center;
  align-items: center;
  position: relative;
  @media (${breakpoints.desktop.min}) {
    display: grid;
  }
`;

const NavBarSelector = styled.div<{ indexSelector?: number }>`
  transition: all 0.5s ease;
  position: absolute;
  display: grid;
  grid-template-columns: 8rem;
  border-top-left-radius: 1em 1em;
  border-top-right-radius: 1em 1em;
  background: #282828;
  left: ${(props) => (props.indexSelector ? props.indexSelector * 8 : 0)}rem;
  height: 100%;
  color: white;
  z-index: 0;
`;

export default function TechStackNavbar(props: Props) {
  const dispatch = useDispatch();
  const techstackOption = useSelector((state) => state.techstackOption);
  const [selector, setSelector] = useState(0);
  const handleChange = (event) => {
    setSelector(
      Object.keys(ToolType).findIndex((type) => type === event.target.id)
    );
    dispatch({
      type: ActionTypes.SET_TECHSTACK_OPTION,
      payload: event.target.id,
    });
  };

  return (
    <Wrapper>
      <NavBarSelector indexSelector={selector} />
      {Object.keys(ToolType).map((toolType, index) => (
        <TechStackNavbarText
          active={techstackOption === toolType}
          onClick={handleChange}
          id={toolType}
          key={index}
        >
          {toolType === ToolType.CICD || toolType === ToolType.OS
            ? toolType
            : toolType.charAt(0).toUpperCase() +
              toolType.slice(1).toLowerCase()}
        </TechStackNavbarText>
      ))}
    </Wrapper>
  );
}
