import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState, MatchesState,  MatchDispatch } from "./reducer"; 

const MatchesStateContext = createContext<MatchesState>(initialState);
const MatchesDispatchContext = createContext<MatchDispatch>(() => {});

export const MatchesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MatchesStateContext.Provider value={state}>
      <MatchesDispatchContext.Provider value={dispatch}>
        {children}
      </MatchesDispatchContext.Provider>
    </MatchesStateContext.Provider>
  );
};

export const useMatchesState = () => useContext(MatchesStateContext);
export const useMatchesDispatch = () => useContext(MatchesDispatchContext);
