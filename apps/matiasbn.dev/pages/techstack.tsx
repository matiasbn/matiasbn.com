import React, { useEffect } from 'react';
import Layout from '@templates/layout';
import styled from 'styled-components';
import { saveState } from '@utils/localStorage';
import { useSelector } from 'react-redux';
import TechStack from '@organisms/ts-techstack';

const Wrapper = styled.div``;

export default function Index() {
  const state = useSelector((state) => state);
  useEffect(() => {
    saveState('appState', state);
  }, [state]);

  return (
    <Layout>
      <Wrapper>
        <TechStack />
      </Wrapper>
    </Layout>
  );
}
