/* eslint-disable indent */
import React, { ReactNode, useEffect } from 'react';
import { loadState, saveState } from '@utils/localStorage';
import { ToolType, Experience } from '@utils/tools';
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  techstackOption: ToolType.ALL,
  experienceOption: Experience.ALL,
};

type State = typeof initialState;

export enum ActionTypes {
  'SET_TECHSTACK_OPTION' = 'SET_TECHSTACK_OPTION',
  'SET_TECHSTACK_EXPERIENCE' = 'SET_TECHSTACK_EXPERIENCE',
}

type Action =
  | { type: ActionTypes.SET_TECHSTACK_OPTION; payload: ToolType }
  | { type: ActionTypes.SET_TECHSTACK_EXPERIENCE; payload: Experience };

export function reducer(
  state: State = getCurrentState(),
  action: Action
): State {
  switch (action.type) {
    case ActionTypes.SET_TECHSTACK_OPTION: {
      return {
        ...state,
        techstackOption: action.payload,
      };
    }
    case ActionTypes.SET_TECHSTACK_EXPERIENCE: {
      return {
        ...state,
        experienceOption: action.payload,
      };
    }
  }
  return state;
}

function getLocalState(): State | undefined {
  const localState = loadState('appState') as State;
  if (!localState) {
    return;
  }

  return {
    techstackOption: localState.techstackOption || initialState.techstackOption,
    experienceOption:
      localState.experienceOption || initialState.experienceOption,
  };
}

function getCurrentState(): State {
  return getLocalState() || initialState;
}

export function AppProvider(props: { children: ReactNode }) {
  const store = createStore(reducer, getCurrentState(), composeWithDevTools());

  return <Provider store={store}>{props.children}</Provider>;
}
