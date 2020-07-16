import React, { useEffect } from 'react';
import Layout from '@templates/layout';
import styled from 'styled-components';
import { saveState } from '@utils/localStorage';
import { useSelector } from 'react-redux';
import TechStack from '@organisms/ts-techstack';

export default function Techstack() {
  const state = useSelector((state) => state);
  useEffect(() => {
    saveState('appState', state);
  }, [state]);

  return (
    <Layout>
      <TechStack />
    </Layout>
  );
}
