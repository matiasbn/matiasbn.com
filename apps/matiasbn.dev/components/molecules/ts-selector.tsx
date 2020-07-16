import React, { AllHTMLAttributes, SyntheticEvent } from 'react';
import styled from 'styled-components';
import TechStackSelectorList from '@atoms/ts-selector-list';
import { Experience, ToolType } from '@utils/tools';
import { ActionTypes } from '@store';
import { useDispatch } from 'react-redux';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div``;

const ContainerType = styled.select``;

const ContainerExperience = styled.select``;

const capitalizeFirst = (string: string) => {
  return string
    .split('')
    .map((char, index) => (index !== 0 && char.toLowerCase()) || char)
    .join('');
};

export default function TechStackSelector(props: Props) {
  const dispatch = useDispatch();

  function handleToolChange(event) {
    dispatch({
      type: ActionTypes.SET_TECHSTACK_OPTION,
      payload: event.target.value,
    });
  }

  function handleExpChange(event) {
    console.log(event.target.value);
    dispatch({
      type: ActionTypes.SET_TECHSTACK_EXPERIENCE,
      payload: event.target.value,
    });
  }

  return (
    <Wrapper>
      <ContainerType onChange={handleToolChange}>
        {Object.keys(ToolType).map((tool) => (
          <TechStackSelectorList key={tool} value={tool}>
            {capitalizeFirst(tool)}
          </TechStackSelectorList>
        ))}
      </ContainerType>
      <ContainerExperience onChange={handleExpChange}>
        {Object.keys(Experience).map((exp) => (
          <TechStackSelectorList key={exp} value={exp}>
            {capitalizeFirst(exp)}
          </TechStackSelectorList>
        ))}
      </ContainerExperience>
    </Wrapper>
  );
}
