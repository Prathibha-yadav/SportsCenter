import React, { useEffect, useRef } from 'react';
import { Article } from '../../context/articles/reducer';

interface ArticleModalProps {
  article: Article;
  onClose: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 max-w-md rounded-lg shadow-lg" ref={modalRef}>
      <div className="flex justify-end">
  <button
    className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4"
    onClick={onClose}
  >
    X
  </button>
</div>

        <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
        <div className="relative rounded-md overflow-hidden max-h-60">
          <img src={article.thumbnail} alt={article.title} className="w-full h-full object-cover" />
        </div>
        <div className="max-h-32 overflow-y-auto">
          <p className="text-gray-700">{article.summary}</p>
          <p className="my-6 text-md md:text-xl leading-normal md:leading-8 text-gray-600">
                              {article?.content}
                            </p>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {new Date(article.date).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
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
