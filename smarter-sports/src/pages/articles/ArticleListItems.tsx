// ArticleListItems.tsx
import { Link } from "react-router-dom";
import { useArticlesState } from "../../context/articles/context"; 

const ArticleListItems = () => {
  const state: any = useArticlesState();
  const { articles, isLoading, isError, errorMessage } = state;

  if (articles.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5">
      {articles.map((article: any) => (
        <Link
          key={article.id}
          to={`${article.id}`}
          className="block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transform hover:scale-105"
        >
          <div className="relative aspect-w-1 aspect-h-1 rounded-md overflow-hidden">
            <img src={article.thumbnail} alt={article.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">{article.title}</h5>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{article.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticleListItems;
