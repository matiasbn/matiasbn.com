import React, { AllHTMLAttributes, useEffect } from 'react';
import styled from 'styled-components';
import TechStackNavbarText from '@atoms/TechStackNavbarText';
import { useContext, ActionTypes } from '@context';
import { ToolType } from '@utils/tools';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  justify-items: center;
  align-items: center;
  width: 80%;
  height: 100%;
`;

export default function TechStackNavbar(props: Props) {
  const {
    dispatch,
    state: { techstackOption },
  } = useContext();

  const handleChange = (event) => {
    dispatch({
      type: ActionTypes.SET_TECHSTACK_OPTION,
      payload: event.target.id,
    });
  };

  return (
    <Wrapper>
      <TechStackNavbarText
        active={techstackOption === ''}
        onClick={handleChange}
        id={''}
      >
        All
      </TechStackNavbarText>
      <TechStackNavbarText
        active={techstackOption === ToolType.LANGUAGE}
        onClick={handleChange}
        id={ToolType.LANGUAGE}
      >
        Languages
      </TechStackNavbarText>
      <TechStackNavbarText
        active={techstackOption === ToolType.FRONTEND}
        onClick={handleChange}
        id={ToolType.FRONTEND}
      >
        Front-end
      </TechStackNavbarText>
      <TechStackNavbarText
        active={techstackOption === ToolType.BACKEND}
        onClick={handleChange}
        id={ToolType.BACKEND}
      >
        Back-end
      </TechStackNavbarText>
      <TechStackNavbarText
        active={techstackOption === ToolType.OS}
        onClick={handleChange}
        id={ToolType.OS}
      >
        OS
      </TechStackNavbarText>
      <TechStackNavbarText
        active={techstackOption === ToolType.DATABASE}
        onClick={handleChange}
        id={ToolType.DATABASE}
      >
        Databases
      </TechStackNavbarText>
      <TechStackNavbarText
        active={techstackOption === ToolType.BLOCKCHAIN}
        onClick={handleChange}
        id={ToolType.BLOCKCHAIN}
      >
        Blockchain
      </TechStackNavbarText>
      <TechStackNavbarText
        active={techstackOption === ToolType.CICD}
        onClick={handleChange}
        id={ToolType.CICD}
      >
        CI/CD
      </TechStackNavbarText>
      <TechStackNavbarText
        active={techstackOption === ToolType.TOOLS}
        onClick={handleChange}
        id={ToolType.TOOLS}
      >
        Tools
      </TechStackNavbarText>
    </Wrapper>
  );
}
