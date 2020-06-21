import React, { AllHTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import TechStackIcon from '@atoms/TechStackIcon';
import { tools } from '@utils/tools';
import { useContext } from '@context';
import { loadConfigurationFromPath } from 'tslint/lib/configuration';

interface Props extends AllHTMLAttributes<{}> {}

const Wrapper = styled.div`
  width: 85%;
  background: black;
  border-radius: 10px;
`;

const Container = styled.div`
  background: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 20px;
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
  const {
    state: { techstackOption },
    dispatch,
  } = useContext();

  const [selectedTools, setSelectedTools] = useState(tools);

  useEffect(() => {
    if (techstackOption) {
      setSelectedTools(
        tools.filter((tool) =>
          tool.groups.some((group) => group === techstackOption)
        )
      );
    } else {
      setSelectedTools(tools);
    }
  }, [techstackOption]);

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
