import React, { useEffect } from 'react';
import Layout from '@templates/layout';
import styled from 'styled-components';
import { saveState } from '@utils/localStorage';
import { useSelector } from 'react-redux';
import Resume from '@organisms/re-resume';

const Wrapper = styled.div``;

export default function Index() {
  const state = useSelector((state) => state);
  useEffect(() => {
    saveState('appState', state);
  }, [state]);

  return (
    <Layout>
      <Wrapper>
        <Resume></Resume>
      </Wrapper>
    </Layout>
  );
}
