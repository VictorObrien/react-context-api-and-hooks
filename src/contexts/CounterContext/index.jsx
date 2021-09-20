import P from 'prop-types';
import { createContext, useContext, useReducer, useRef } from 'react';
import { buildActions } from './build-actions';
import { reducer } from './reducer';

export const initialState = {
  counter: 0,
  loading: false,
};

const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(buildActions(dispatch));

  return <CounterContext.Provider value={[state, actions.current]}>{children}</CounterContext.Provider>;
};

CounterContextProvider.propTypes = {
  children: P.node.isRequired,
};

export const useCounterContext = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error('You have to use useCounterContext inside <CounterContextProvider />');
  }

  return [...context];
};
