// sportsContext.tsx

import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState, SportsState, SportDispatch,  } from "./reducer";

const SportsStateContext = createContext<SportsState>(initialState);
const SportsDispatchContext = createContext<SportDispatch>(() => {});

export const SportsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SportsStateContext.Provider value={state}>
      <SportsDispatchContext.Provider value={dispatch}>
        {children}
      </SportsDispatchContext.Provider>
    </SportsStateContext.Provider>
  );
};

export const useSportsState = () => useContext(SportsStateContext);
export const useSportsDispatch = () => useContext(SportsDispatchContext);
