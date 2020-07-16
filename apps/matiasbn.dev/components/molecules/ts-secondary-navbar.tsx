import React, { AllHTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import TechStackSecondaryNavbarText from '@atoms/ts-secondary-navbar-text';
import { ActionTypes } from '@store';
import { useSelector, useDispatch } from 'react-redux';
import { Experience, ToolType } from '@utils/tools';
import breakpoints from '@utils/breakpoints';

interface Props extends AllHTMLAttributes<{}> {}

const tabWidth = '4rem';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, ${tabWidth});
  justify-items: center;
  align-items: center;
  position: relative;
  @media (${breakpoints.desktop.min}) {
    display: grid;
    grid-template-columns: repeat(4, ${tabWidth});
  }
`;

const NavBarSelector = styled.div<{ indexSelector?: number }>`
  transition: all 0.5s ease-in-out;
  position: absolute;
  display: grid;
  grid-template-columns: ${tabWidth};
  border-bottom-left-radius: 1em 1em;
  border-bottom-right-radius: 1em 1em;
  background: #282828;
  left: ${(props) => (props.indexSelector ? props.indexSelector * 20 : 0)}rem;
  height: 100%;
  color: white;
  z-index: 0;
`;

export default function TechStackSecondaryNavbar(props: Props) {
  const dispatch = useDispatch();
  const experienceOption = useSelector((state) => state.experienceOption);
  const [selector, setSelector] = useState(0);

  const handleChange = (event) => {
    setSelector(
      Object.keys(Experience).findIndex((exp) => exp === event.target.id)
    );
    dispatch({
      type: ActionTypes.SET_TECHSTACK_EXPERIENCE,
      payload: event.target.id,
    });
  };

  return (
    <Wrapper>
      <NavBarSelector indexSelector={selector} />
      {Object.keys(Experience).map((experience, index) => (
        <TechStackSecondaryNavbarText
          active={experienceOption === experience}
          onClick={handleChange}
          id={experience}
          key={index}
        >
          {experience}
        </TechStackSecondaryNavbarText>
      ))}
    </Wrapper>
  );
}
