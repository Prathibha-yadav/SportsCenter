// initialData.tsx

// Import the necessary types
import { Match, MatchesState} from "../../context/match/reducer"
import { Sport, SportsState} from "../../context/sports/reducer"
import { Team, TeamsState} from "../../context/teams/reducer"

// Define initial data for Matches
export const initialMatches: Match[] = [
  {
    id: 1,
    place: "Stadium 1",
    score1: "3",
    score2: "2",
  },
  {
    id: 2,
    place: "Stadium 2",
    score1: "1",
    score2: "0",
  },
  // Add more match data here
];

// Create the initial state for Matches
export const initialMatchesState: MatchesState = {
  matches: initialMatches,
  isLoading: false,
  isError: false,
  errorMessage: '',
};

// Define initial data for Sports
export const initialSports: Sport[] = [
  {
    id: 1,
    sport: "Cricket",
  },
  {
    id: 2,
    sport: "Football",
  },
  // Add more sport data here
];

// Create the initial state for Sports
export const initialSportsState: SportsState = {
  sports: initialSports,
  isLoading: false,
  isError: false,
  errorMessage: '',
};

// Define initial data for Teams
export const initialTeams: Team[] = [
  {
    id: 1,
    sport: "Cricket",
    name: "Team A",
  },
  {
    id: 2,
    sport: "Football",
    name: "Team X",
  },
  // Add more team data here
];

// Create the initial state for Teams
export const initialTeamsState: TeamsState = {
  teams: initialTeams,
  isLoading: false,
  isError: false,
  errorMessage: '',
};
