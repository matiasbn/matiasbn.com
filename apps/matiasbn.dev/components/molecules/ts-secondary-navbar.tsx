import React, { AllHTMLAttributes, useEffect } from 'react';
import styled from 'styled-components';
import TechStackSecondaryNavbarText from '@atoms/ts-secondary-navbar-text';
import { ActionTypes } from '@store';
import { useSelector, useDispatch } from 'react-redux';
import { Experience } from '@utils/tools';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  width: 80%;
  height: 100%;
`;

export default function TechStackSecondaryNavbar(props: Props) {
  const dispatch = useDispatch();
  const experienceOption = useSelector((state) => state.experienceOption);

  const handleChange = (event) => {
    dispatch({
      type: ActionTypes.SET_TECHSTACK_EXPERIENCE,
      payload: event.target.id,
    });
  };

  return (
    <Wrapper>
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
