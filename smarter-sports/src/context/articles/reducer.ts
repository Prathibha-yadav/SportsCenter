interface Article {
    id: number;
    title: string;
    summary: string;
    thumbnail: string; // Add a thumbnail property for the image.
  }
  
  export interface ArticlesState {
    articles: Article[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  }
  
  export const initialState: ArticlesState = {
    articles: [],
    isLoading: false,
    isError: false,
    errorMessage: '',
  };
  
  export type ArticlesActions =
    | { type: 'FETCH_ARTICLES_REQUEST' }
    | { type: 'FETCH_ARTICLES_SUCCESS'; payload: Article[] }
    | { type: 'FETCH_ARTICLES_FAILURE'; payload: string }
    | { type: 'ADD_ARTICLE_SUCCESS'; payload: Article }; // Rename actions.
  
  export const reducer = (state: ArticlesState = initialState, action: ArticlesActions): ArticlesState => {
    switch (action.type) {
      case 'FETCH_ARTICLES_REQUEST':
        return {
          ...state,
          isLoading: true,
        };
      case 'FETCH_ARTICLES_SUCCESS':
        return {
          ...state,
          isLoading: false,
          articles: action.payload,
        };
      case 'FETCH_ARTICLES_FAILURE':
        return {
          ...state,
          isLoading: false,
          isError: true,
          errorMessage: action.payload,
        };
      case 'ADD_ARTICLE_SUCCESS':
        return { ...state, articles: [...state.articles, action.payload] };
      default:
        return state;
    }
  };
  