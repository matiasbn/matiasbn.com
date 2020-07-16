import React, { AllHTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import TechStackIcon from '@atoms/ts-stack-icon';
import { Experience, tools, ToolType } from '@utils/tools';
import { useSelector } from 'react-redux';
import breakpoints from '@utils/breakpoints';

interface Props extends AllHTMLAttributes<{}> {}

const columnCalculator = (toolsAmount) => {
  let i = 12;
  while (toolsAmount % i !== 0) i -= 1;
  return i;
};

const Wrapper = styled.div`
  background: #282828;
  border-radius: 1rem;
  width: 95%;
`;

const Container = styled.div<{ toolsAmount: number }>`
  background: white;
  display: grid;
  grid-template-columns: repeat(
    ${(props) => columnCalculator(props.toolsAmount)},
    1fr
  );
  grid-auto-rows: 3rem;
  justify-items: center;
  align-items: center;
  border-color: #eee9ed;
  border-style: solid;
  border-radius: 1rem;
  margin: 1rem;

  @media (${breakpoints.desktop.min}) {
    grid-template-columns: repeat(
      ${(props) => columnCalculator(props.toolsAmount)},
      minmax(70rem, auto)
    );
    grid-auto-rows: 9rem;
    border-width: 1rem;
    padding: 1rem;
    margin: 2rem;
  }
`;

export default function TechStackGallery(props: Props) {
  const techstackOption = useSelector((state) => state.techstackOption);
  const experienceOption = useSelector((state) => state.experienceOption);

  const [selectedTools, setSelectedTools] = useState(tools);
  const [toolsAmount, setToolsAmount] = useState(selectedTools.length);

  useEffect(() => {
    if (
      techstackOption !== ToolType.ALL ||
      experienceOption !== Experience.ALL
    ) {
      let auxTools = tools;
      if (techstackOption !== ToolType.ALL) {
        auxTools = auxTools.filter((tool) =>
          tool.groups.some((group) => group === techstackOption)
        );
      }
      if (experienceOption !== Experience.ALL) {
        auxTools = auxTools.filter(
          (tool) => tool.experience === experienceOption
        );
      }
      setSelectedTools(auxTools);
      setToolsAmount(auxTools.length);
    } else {
      setSelectedTools(tools);
      setToolsAmount(tools.length);
    }
  }, [techstackOption, experienceOption]);

  return (
    <Wrapper>
      <Container toolsAmount={toolsAmount}>
        {selectedTools
          //          .sort(function () {
          //            return 0.5 - Math.random();
          //          })
          .map((tool, index) => (
            <a href={tool?.href} key={index}>
              <TechStackIcon src={tool.src} />
            </a>
          ))}
      </Container>
    </Wrapper>
  );
}
