import React, {
  AllHTMLAttributes,
  SyntheticEvent,
  useEffect,
  useState,
} from 'react';
import styled from 'styled-components';
import TechStackSelectorList from '@atoms/ts-selector-list';
import { Experience, ToolType } from '@utils/tools';
import { ActionTypes } from '@store';
import { useDispatch, useSelector } from 'react-redux';
import breakpoints from '@utils/breakpoints';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div`
  margin: 5rem;
  display: grid;
  grid-template-columns: min-content min-content;
  align-content: space-around;
  justify-content: space-around;
  width: 100%;
`;

const ContainerSelect = styled.select`
  height: 2rem;
  padding: 0 25px 0 10px;
  border-radius: 4px;
  border: solid 1px #e0e0e0;
  box-sizing: border-box;
  background: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)
    no-repeat 100% 10%;
  background-position-x: 99%;
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
  appearance: none;
  outline-width: 0;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (${breakpoints.desktop.min}) {
    background-position-x: 98%;
    padding: 0 32px 0 10px;
  }
`;

export default function TechStackSelector(props: Props) {
  const dispatch = useDispatch();
  const techstackOption = useSelector((state) => state.techstackOption);
  const experienceOption = useSelector((state) => state.experienceOption);
  const [techstack, setTechstack] = useState(techstackOption);
  const [experience, setExperience] = useState(techstackOption);

  useEffect(() => {
    setTechstack(techstackOption);
    setExperience(experienceOption);
  }, [techstackOption, experienceOption]);

  function handleToolChange(event) {
    dispatch({
      type: ActionTypes.SET_TECHSTACK_OPTION,
      payload: event.target.value,
    });
  }

  function handleExpChange(event) {
    dispatch({
      type: ActionTypes.SET_TECHSTACK_EXPERIENCE,
      payload: event.target.value,
    });
  }

  return (
    <Wrapper>
      <ContainerSelect onChange={handleToolChange} value={techstack}>
        {Object.keys(ToolType).map((tool) => (
          <TechStackSelectorList key={tool} value={tool}>
            {tool === ToolType.CICD || tool === ToolType.OS
              ? tool
              : tool.charAt(0).toUpperCase() + tool.slice(1).toLowerCase()}
          </TechStackSelectorList>
        ))}
      </ContainerSelect>
      <ContainerSelect onChange={handleExpChange} value={experience}>
        {Object.keys(Experience).map((exp) => (
          <TechStackSelectorList key={exp} value={exp}>
            {exp.charAt(0).toUpperCase() + exp.slice(1).toLowerCase()}
          </TechStackSelectorList>
        ))}
      </ContainerSelect>
    </Wrapper>
  );
}
