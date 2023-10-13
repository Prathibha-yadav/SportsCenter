import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState, ArticlesState, ArticlesActions } from "./reducer"; // Create a new reducer and initialState for articles.

const ArticlesStateContext = createContext<ArticlesState | undefined>(undefined); // Rename the context.
type ArticlesDispatch = React.Dispatch<ArticlesActions>;

const ArticlesDispatchContext = createContext<ArticlesDispatch | undefined>(undefined); // Rename the context.

export const ArticlesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ArticlesStateContext.Provider value={state}>
      <ArticlesDispatchContext.Provider value={dispatch}>
        {children}
      </ArticlesDispatchContext.Provider>
    </ArticlesStateContext.Provider>
  );
};

export const useArticlesState = () => useContext(ArticlesStateContext); // Rename the hooks.
export const useArticlesDispatch = () => useContext(ArticlesDispatchContext);
