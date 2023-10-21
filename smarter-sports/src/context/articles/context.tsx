import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState, ArticlesState, ArticleDispatch } from "./reducer"; 

const ArticlesStateContext = createContext<ArticlesState>(initialState); 

const ArticlesDispatchContext = createContext<ArticleDispatch>(() => {}); 

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
