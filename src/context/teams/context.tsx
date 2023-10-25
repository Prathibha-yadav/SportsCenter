// teamsContext.tsx

import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState, TeamsState, TeamDispatch} from "./reducer"; 

const TeamsStateContext = createContext<TeamsState>(initialState);
const TeamsDispatchContext = createContext<TeamDispatch>(() => {});

export const TeamsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TeamsStateContext.Provider value={state}>
      <TeamsDispatchContext.Provider value={dispatch}>
        {children}
      </TeamsDispatchContext.Provider>
    </TeamsStateContext.Provider>
  );
};

export const useTeamsState = () => useContext(TeamsStateContext);
export const useTeamsDispatch = () => useContext(TeamsDispatchContext);
