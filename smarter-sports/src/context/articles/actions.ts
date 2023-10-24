import { API_ENDPOINT } from '../../config/constants';
import { ArticleDispatch } from './reducer';

export const fetchArticles = async (dispatch: ArticleDispatch) => {
  try {
    dispatch({ type: "FETCH_ARTICLES_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/articles`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',  },
    }) 
    if (!response.ok) {
      throw new Error("Failed to Fetch Articles")
  };
    const data = await response.json();
     // console.log(data)
    
    dispatch({ type: "FETCH_ARTICLES_SUCCESS", payload: data });
  } catch (error) {
    console.log('Error fetching articles:', error);
    dispatch({ type: "FETCH_ARTICLES_FAILURE", payload: 'Unable to load articles' });
  }
};

export const fetchArticlesById = async (dispatch: ArticleDispatch,  id: number) => {
  const authToken = localStorage.getItem("authToken");
  try {
    dispatch({ type: "FETCH_ARTICLES_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/articles/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' ,
      Authorization: `Bearer ${authToken}`, },
    }) 
    if (!response.ok) {
      throw new Error("Failed to Fetch Articles id")
  };
    const content = await response.json();
      console.log(content)
    
    dispatch({ type: "FETCH_ARTICLES_SUCCESS", payload: content });
  } catch (error) {
    console.log('Error fetching articles:', error);
    dispatch({ type: "FETCH_ARTICLES_FAILURE", payload: 'Unable to load articles' });
  }
};

