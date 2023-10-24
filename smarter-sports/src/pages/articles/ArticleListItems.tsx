import { useState } from 'react';
import { useArticlesState } from '../../context/articles/context';
import ArticleModal from './ArticleModal';
import { SelectedArticle } from '../../context/articles/reducer';
const ArticleListItems = () => {
  const state = useArticlesState();
  const { articles, isLoading, isError, errorMessage } = state;
  const [selectedArticle, setSelectedArticle] = useState<SelectedArticle | null>(null);
  // console.log(articles);
  const openModal = (article : any) => {
    setSelectedArticle(article);
  };

  const closeModal = () => {
    setSelectedArticle(null);
  };

  if (articles.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>{errorMessage}</span>;
  }

  return (
    <div className="grid grid-cols-1">
      {articles.map((article) => (
        <div key={article.id}>
          <div className="flex w-3/4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transform hover:scale-10 mb-4">
            <div className="w-3/4 p-4">
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">{article.title}</h5>
              <p className="text-gray-700">
              {article.summary.split(' ').slice(0, 3).join(' ')}{article.summary.split(' ').length > 3 ? '...' : ''}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
  {new Date(article.date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })}
</p>

              <button onClick={() => openModal(article)}>Read More</button>
            </div>
            <div className="w-1/4">
  <div className="image-container">
    <img src={article.thumbnail} alt={article.title} className="w-full h-full object-cover" />
  </div>
</div>

          </div>
        </div>
      ))}
      {selectedArticle && (
        <ArticleModal article={selectedArticle} onClose={closeModal}  id={selectedArticle.id}/>
      )}
    </div>
  );
};

export default ArticleListItems;
