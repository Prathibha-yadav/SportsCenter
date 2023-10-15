// sportsTypes.ts

export interface Sport {
    id: number;
    sport: string;
    
  }
  
  export interface SportsState {
    sports: Sport[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  }
  
  export const initialState: SportsState = {
    sports: [],
    isLoading: false,
    isError: false,
    errorMessage: '',
  };
  
  export type SportsActions =
    | { type: 'FETCH_SPORTS_REQUEST' }
    | { type: 'FETCH_SPORTS_SUCCESS'; payload: Sport[] }
    | { type: 'FETCH_SPORTS_FAILURE'; payload: string }
    | { type: 'ADD_SPORT_SUCCESS'; payload: Sport }; // Rename actions.
  
  export const reducer = (
    state: SportsState = initialState,
    action: SportsActions
  ): SportsState => {
    switch (action.type) {
      case 'FETCH_SPORTS_REQUEST':
        return {
          ...state,
          isLoading: true,
        };
      case 'FETCH_SPORTS_SUCCESS':
        return {
          ...state,
          isLoading: false,
          sports: action.payload,
        };
      case 'FETCH_SPORTS_FAILURE':
        return {
          ...state,
          isLoading: false,
          isError: true,
          errorMessage: action.payload,
        };
      case 'ADD_SPORT_SUCCESS':
        return { ...state, sports: [...state.sports, action.payload] };
      default:
        return state;
    }
  };
  