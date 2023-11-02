import React, { useState } from 'react';
import { useArticlesState } from '../../context/articles/context';
import ArticleModal from './ArticleModal';
import { SelectedArticle } from '../../context/articles/reducer';

const ArticleListItems = () => {
  const state = useArticlesState();
  const { articles, isLoading, isError, errorMessage } = state;
  const [selectedArticle, setSelectedArticle] = useState<SelectedArticle | null>(null);
  const [selectedSport, setSelectedSport] = useState<string>('All'); // Default to 'All'

  const openModal = (article: any) => {
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

  const uniqueSports = ['All', ...Array.from(new Set(articles.map((article) => article.sport?.name || 'All')))];

  const filteredArticles = selectedSport === 'All' ? articles : articles.filter((article) => article.sport?.name === selectedSport);

  return (
    <div className="grid grid-cols-1">
      <div className="space-x-4 p-4">
        {uniqueSports.map((sport, index) => (
          <button
            key={index}
            onClick={() => setSelectedSport(sport)}
            className={`${
              selectedSport === sport
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 hover:bg-gray-400 text-gray-800 hover:text-gray-900'
            } rounded-lg px-4 py-2`}
          >
            {sport}
          </button>
        ))}
      </div>
      {filteredArticles.map((article) => (
        <div key={article.id}>
        <div className="flex w-3/4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transform hover:scale-10 mb-4">
          <div className="w-3/4 p-4">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">{article.title}</h5>
            <p className="text-gray-700">
              {article.summary.split(' ').slice(0, 12).join(' ')}{article.summary.split(' ').length > 3 ? '...' : ''}
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
        <ArticleModal article={selectedArticle} onClose={closeModal} id={selectedArticle.id} />
      )}
    </div>
  );
};

export default ArticleListItems;
