// matchesTypes.ts

export interface Match {
    id: number;
    place : string,
    score1  : string,
    score2 : string,
  }
  
  export interface MatchesState {
    matches: Match[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  }
  
  export const initialState: MatchesState = {
    matches: [],
    isLoading: false,
    isError: false,
    errorMessage: '',
  };
  
  export type MatchesActions =
    | { type: 'FETCH_MATCHES_REQUEST' }
    | { type: 'FETCH_MATCHES_SUCCESS'; payload: Match[] }
    | { type: 'FETCH_MATCHES_FAILURE'; payload: string }
    | { type: 'ADD_MATCH_SUCCESS'; payload: Match }; // Rename actions.
  
  export const reducer = (
    state: MatchesState = initialState,
    action: MatchesActions
  ): MatchesState => {
    switch (action.type) {
      case 'FETCH_MATCHES_REQUEST':
        return {
          ...state,
          isLoading: true,
        };
      case 'FETCH_MATCHES_SUCCESS':
        return {
          ...state,
          isLoading: false,
          matches: action.payload,
        };
      case 'FETCH_MATCHES_FAILURE':
        return {
          ...state,
          isLoading: false,
          isError: true,
          errorMessage: action.payload,
        };
      case 'ADD_MATCH_SUCCESS':
        return { ...state, matches: [...state.matches, action.payload] };
      default:
        return state;
    }
  };
  