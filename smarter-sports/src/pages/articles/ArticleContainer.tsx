// ArticleContainer.tsx
import { useEffect } from "react";
import { useArticlesDispatch } from "../../context/articles/context"; 
import { Outlet } from "react-router-dom";
import { initialArticles } from "./initialData";

const ArticleContainer = () => {
  const articlesDispatch = useArticlesDispatch();
  useEffect(() => {
    // Fetch articles from the initial data instead of a server call.
    articlesDispatch?.({ type: "FETCH_ARTICLES_SUCCESS", payload: initialArticles });
  }, [articlesDispatch]);

  return <Outlet />;
};

export default ArticleContainer;
