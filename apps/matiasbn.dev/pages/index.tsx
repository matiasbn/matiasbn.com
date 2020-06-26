import React, { useEffect } from 'react';
import Main from '../components/templates/main';
import styled from 'styled-components';
import { saveState } from '@utils/localStorage';
import { useSelector } from 'react-redux';

const Wrapper = styled.div``;

export const Index = () => {
  const state = useSelector((state) => state);
  useEffect(() => {
    saveState('appState', state);
  }, [state]);
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  );
};
export default Index;
