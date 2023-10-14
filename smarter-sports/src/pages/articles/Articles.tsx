// Articles.tsx
import React, { Suspense } from "react";
const ArticleList = React.lazy(() => import("./ArticleList"));
import ArticleContainer from "./ArticleContainer";
import ErrorBoundary from "../../components/ErrorBoundary";
import AccountLayout from "../../layouts";

const Articles = () => {
  return (
    <>
    <AccountLayout/>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          Articles
        </h2>
        {/* Add components or buttons for adding new articles if needed */}
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
