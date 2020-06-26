import React, { AllHTMLAttributes, useEffect } from 'react';
import styled from 'styled-components';
import { ActionTypes } from '@store';
import { useSelector, useDispatch } from 'react-redux';
import { ToolType } from '@utils/tools';
import TechStackNavbarText from '@atoms/TechStackNavbarText';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  justify-items: center;
  align-items: center;
  width: 80%;
  height: 100%;
`;

export default function TechStackNavbar(props: Props) {
  const dispatch = useDispatch();
  const techstackOption = useSelector((state) => state.techstackOption);

  const handleChange = (event) => {
    dispatch({
      type: ActionTypes.SET_TECHSTACK_OPTION,
      payload: event.target.id,
    });
  };

  return (
    <Wrapper>
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
