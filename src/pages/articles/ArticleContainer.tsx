// ArticleContainer.tsx
import { useEffect } from "react";
import { useArticlesDispatch } from "../../context/articles/context"; 
import { Outlet } from "react-router-dom";
import { fetchArticles } from "../../context/articles/actions";

const ArticleContainer = () => {
  const articlesDispatch = useArticlesDispatch();
  useEffect(() => {
    // Fetch articles from the initial data instead of a server call.
    fetchArticles(articlesDispatch);
  }, [articlesDispatch]);

  return <Outlet />;
};

export default ArticleContainer;
