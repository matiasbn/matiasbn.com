import React, { AllHTMLAttributes, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { ActionTypes } from '@store';

const Wrapper = styled.div<{ clicked?: boolean }>`
  .container {
    display: inline-block;
    cursor: pointer;
  }

  .bar1 {
    width: 35px;
    height: 5px;
    background-color: #73f9d9;
    margin: 6px 0;
    transition: 0.4s;
    -webkit-transform: ${(props) =>
      props.clicked ? 'rotate(-45deg) translate(-9px, 6px)' : ''};
    transform: ${(props) =>
      props.clicked ? 'rotate(-45deg) translate(-9px, 6px)' : ''};
  }

  .bar2 {
    width: 35px;
    height: 5px;
    background-color: #73f9d9;
    margin: 6px 0;
    transition: 0.4s;
    opacity: ${(props) => (props.clicked ? 0 : 1)};
  }

  .bar3 {
    width: 35px;
    height: 5px;
    background-color: #73f9d9;
    margin: 6px 0;
    transition: 0.4s;
    -webkit-transform: ${(props) =>
      props.clicked ? ' rotate(45deg) translate(-8px, -8px)' : ''};
    transform: ${(props) =>
      props.clicked ? ' rotate(45deg) translate(-8px, -8px)' : ''};
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
