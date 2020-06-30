/* eslint-disable indent */
import React, { ReactNode } from 'react';
import { loadState } from '@utils/localStorage';
import { ToolType, Experience } from '@utils/tools';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  techstackOption: ToolType.ALL,
  experienceOption: Experience.ALL,
  navBarClicked: false,
};

type State = typeof initialState;

export enum ActionTypes {
  'SET_TECHSTACK_OPTION' = 'SET_TECHSTACK_OPTION',
  'SET_TECHSTACK_EXPERIENCE' = 'SET_TECHSTACK_EXPERIENCE',
  'SET_NAVBAR_CLICKED' = 'SET_NAVBAR_CLICKED',
}

type Action =
  | { type: ActionTypes.SET_TECHSTACK_OPTION; payload: ToolType }
  | { type: ActionTypes.SET_TECHSTACK_EXPERIENCE; payload: Experience }
  | { type: ActionTypes.SET_NAVBAR_CLICKED; payload: boolean };

export function reducer(state: State = initialState, action: Action): State {
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
    case ActionTypes.SET_NAVBAR_CLICKED: {
      return {
        ...state,
        navBarClicked: action.payload,
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
    navBarClicked: localState.navBarClicked || initialState.navBarClicked,
  };
}

function getCurrentState(): State {
  return getLocalState() || initialState;
}

export function AppProvider(props: { children: ReactNode }) {
  const store = createStore(reducer, composeWithDevTools());

  return <Provider store={store}>{props.children}</Provider>;
}
