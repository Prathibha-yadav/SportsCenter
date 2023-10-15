export interface Team {
    id: number;
    sport: string;
    name: string;
    
  }
  
  export interface TeamsState {
    teams: Team[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  }
  
  export const initialState: TeamsState = {
    teams: [],
    isLoading: false,
    isError: false,
    errorMessage: '',
  };
  
  export type TeamsActions =
    | { type: 'FETCH_TEAMS_REQUEST' }
    | { type: 'FETCH_TEAMS_SUCCESS'; payload: Team[] }
    | { type: 'FETCH_TEAMS_FAILURE'; payload: string }
    | { type: 'ADD_TEAM_SUCCESS'; payload: Team }; // Rename actions.
  
  export const reducer = (
    state: TeamsState = initialState,
    action: TeamsActions
  ): TeamsState => {
    switch (action.type) {
      case 'FETCH_TEAMS_REQUEST':
        return {
          ...state,
          isLoading: true,
        };
      case 'FETCH_TEAMS_SUCCESS':
        return {
          ...state,
          isLoading: false,
          teams: action.payload,
        };
      case 'FETCH_TEAMS_FAILURE':
        return {
          ...state,
          isLoading: false,
          isError: true,
          errorMessage: action.payload,
        };
      case 'ADD_TEAM_SUCCESS':
        return { ...state, teams: [...state.teams, action.payload] };
      default:
        return state;
    }
  };
  