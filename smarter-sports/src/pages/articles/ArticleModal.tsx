import React from 'react';
import { Article } from '../../context/articles/reducer';

interface ArticleModalProps {
  article: Article;
  onClose: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 max-w-md rounded-lg shadow-lg">
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{article.sport}</p>
        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
        <p className="text-gray-700">{article.summary}</p>
        <p className="text-gray-700">{article.details}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ArticleModal;
