import React, { AllHTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { ActionTypes } from '@store';

const Wrapper = styled.div<{ clicked?: boolean }>`
  height: fit-content;
  .container {
    display: inline-block;
    cursor: pointer;
  }

  .bar1 {
    width: 3.5rem;
    height: 0.5rem;
    background-color: #73f9d9;
    margin: 0 0 0.6rem 0;
    transition: 0.4s;
    -webkit-transform: ${(props) =>
      props.clicked ? 'rotate(-45deg) translate(-0.9rem, 0.6rem)' : ''};
    transform: ${(props) =>
      props.clicked ? 'rotate(-45deg) translate(-0.9rem, 0.6rem)' : ''};
  }

  .bar2 {
    width: 3.5rem;
    height: 0.5rem;
    background-color: #73f9d9;
    margin: 0.6rem 0;
    transition: 0.4s;
    opacity: ${(props) => (props.clicked ? 0 : 1)};
  }

  .bar3 {
    width: 3.5rem;
    height: 0.5rem;
    background-color: #73f9d9;
    margin: 0.66rem 0 0 0;
    transition: 0.4s;
    -webkit-transform: ${(props) =>
      props.clicked ? ' rotate(45deg) translate(-0.8rem, -0.8rem)' : ''};
    transform: ${(props) =>
      props.clicked ? ' rotate(45deg) translate(-0.8rem, -0.8rem)' : ''};
  }
`;

interface Props extends AllHTMLAttributes<{}> {}

export default function NavbarHamburgerIcon(props: Props) {
  const clicked = useSelector((state) => state.navBarClicked);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch({
      type: ActionTypes.SET_NAVBAR_CLICKED,
      payload: !clicked,
    });
  }
  return (
    <Wrapper onClick={() => handleClick()} clicked={clicked}>
      <div className={'bar1'} />
      <div className={'bar2'} />
      <div className={'bar3'} />
    </Wrapper>
  );
}
