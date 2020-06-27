import React, { AllHTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import TechStackIcon from '@atoms/ts-stack-icon';
import { Experience, tools, ToolType } from '@utils/tools';
import { useSelector } from 'react-redux';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div`
  width: 85%;
  background: black;
  border-radius: 10px;
`;

const Container = styled.div`
  background: white;
  display: grid;
  grid-template-columns: repeat(6, minmax(80px, auto));
  grid-auto-rows: 90px;
  justify-items: center;
  align-items: center;
  border-color: #eee9ed;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
`;

export default function TechStackGallery(props: Props) {
  const techstackOption = useSelector((state) => state.techstackOption);
  const experienceOption = useSelector((state) => state.experienceOption);

  const [selectedTools, setSelectedTools] = useState(tools);

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
    } else {
      setSelectedTools(tools);
    }
  }, [techstackOption, experienceOption]);

  return (
    <Wrapper>
      <Container>
        {selectedTools
          .sort(function () {
            return 0.5 - Math.random();
          })
          .map((tool, index) => (
            <a href={tool?.href} key={index}>
              <TechStackIcon src={tool.src} />
            </a>
          ))}
      </Container>
    </Wrapper>
  );
}
