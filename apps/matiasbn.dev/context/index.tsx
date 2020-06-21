/* eslint-disable indent */
import React, { ReactNode, useEffect } from 'react';
import { loadState, saveState } from '@utils/localStorage';

const initialState = {
  techstackOption: '',
};

type State = typeof initialState;

export enum ActionTypes {
  'SET_TECHSTACK_OPTION' = 'SET_TECHSTACK_OPTION',
}

type Action = { type: ActionTypes.SET_TECHSTACK_OPTION; payload: string };

type Dispatch = (action: Action) => void;

const DispatchContext = React.createContext<Dispatch | undefined>(undefined);
const AppContext = React.createContext(initialState);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.SET_TECHSTACK_OPTION: {
      return {
        ...state,
        techstackOption: action.payload,
      };
    }
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
}

function getLocalState(): State | undefined {
  const localState = loadState('appState') as State;
  if (!localState) {
    return;
  }

  return {
    techstackOption: localState.techstackOption || initialState.techstackOption,
  };
}

function getCurrentState(): State {
  return getLocalState() || initialState;
}

export function AppProvider(props: { children: ReactNode }) {
  const currentState = getCurrentState();
  const [state, dispatch] = React.useReducer(reducer, currentState);

  useEffect(() => {
    saveState('appState', state);
  }, [state]);

  return (
    <AppContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </AppContext.Provider>
  );
}

export function useContext() {
  const state = React.useContext(AppContext);
  const dispatch = React.useContext(DispatchContext);

  if (state === undefined) {
    throw new Error('usegiftcardState must be used within a giftcardProvider');
  }

  if (dispatch === undefined) {
    throw new Error(
      'usegiftcardDispatch must be used within a DispatchContext'
    );
  }

  return { state, dispatch };
}
