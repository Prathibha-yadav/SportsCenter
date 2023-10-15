import { useMatchesState } from '../../context/match/context'; 
import { useSportsState } from '../../context/sports/context'; // Import the context for Sports
import { useTeamsState } from '../../context/teams/context'; // Import the context for Teams

const LiveScoreListItems = () => {
  const matchesState : any = useMatchesState();
  const sportsState: any  = useSportsState();
  const teamsState: any  = useTeamsState();

  const { matches, isLoading: matchesLoading, isError: matchesError, errorMessage: matchesErrorMessage } = matchesState;
  const { sports, isLoading: sportsLoading, isError: sportsError, errorMessage: sportsErrorMessage } = sportsState;
  const { teams, isLoading: teamsLoading, isError: teamsError, errorMessage: teamsErrorMessage } = teamsState;

  if (matchesLoading || sportsLoading || teamsLoading) {
    return <span>Loading...</span>;
  }

  if (matchesError || sportsError || teamsError) {
    return <span>{matchesErrorMessage || sportsErrorMessage || teamsErrorMessage}</span>;
  }

  return (
    <div className="grid grid-cols-1">
      {matches.map((match: any ) => (
        <div key={match.id}>
          <div className="flex w-3/4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transform hover:scale-10 mb-4">
            <div className="w-3/4 p-4">
              {/* Display the details from the initialData for Matches, Sports, and Teams */}
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                {sports.find((sport: any ) => sport.id === match.sport)?.sport}
              </p>
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">Match Details</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Team 1: {teams.find((team: any ) => team.id === 1)?.name} vs. Team 2: {teams.find((team: any ) => team.id === 2)?.name}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Score: {match.score1} - {match.score2}
              </p>
            </div>
            <div className="w-1/4">
              <div className="relative rounded-md overflow-hidden">
                {/* Display an image if available */}
                <img src="your-image-source" alt="Image Alt Text" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveScoreListItems;
