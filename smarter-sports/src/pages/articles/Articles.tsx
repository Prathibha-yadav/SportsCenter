// Articles.tsx
import React, { Suspense, useEffect } from "react";
const ArticleList = React.lazy(() => import("./ArticleList"));
import ArticleContainer from "./ArticleContainer";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useArticlesDispatch } from "../../context/articles/context";
import { fetchArticles } from "../../context/articles/actions";

const Articles = () => {
  const dispatch = useArticlesDispatch();
 

  useEffect(() => {
    fetchArticles(dispatch);
   
  }, []);
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          Articles
        </h2>
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <ArticleContainer />
          <ArticleList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Articles;
