import React, { useEffect } from 'react';
import Layout from '@templates/layout';
import styled from 'styled-components';
import { saveState } from '@utils/localStorage';
import { useSelector } from 'react-redux';
import Hero from '@organisms/he-hero';

export default function Index() {
  const state = useSelector((state) => state);
  useEffect(() => {
    saveState('appState', state);
  }, [state]);

  return (
    <Layout>
      <Hero />
    </Layout>
  );
}
