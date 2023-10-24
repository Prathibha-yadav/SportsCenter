import React, { useEffect, useRef, useState } from 'react';
import { Article } from '../../context/articles/reducer';
import { API_ENDPOINT } from '../../config/constants';

interface ArticleModalProps {
  article: Article;
  onClose: () => void;
}

interface ArticleContent {
  id: number;
  content: string;
}

const ArticleModal: React.FC<ArticleModalProps & { id: number }> = ({ article, onClose, id }) => {
  const [articleContent, setArticleContent] = useState<ArticleContent | null>(null);
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

  const fetchArticleContent = async () => {
    const authToken = localStorage.getItem("authToken");
    try {
      const response = await fetch(`${API_ENDPOINT}/articles/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch article content");
      }

      const data = await response.json();
      console.log(data)
      setArticleContent(data);
    } catch (error) {
      console.error("Error fetching article content", error);
    }
  };

  useEffect(() => {
    fetchArticleContent();
  }, [id]);

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
          {articleContent && (
            <p className="my-6 text-md md:text-xl leading-normal md:leading-8 text-gray-600">
              {articleContent.content}
            </p>
          )}
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
