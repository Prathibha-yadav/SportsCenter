import { useMatchesState } from '../../context/match/context'; 
//import { useSportsState } from '../../context/sports/context'; 
//import { useTeamsState } from '../../context/teams/context'; 

const LiveScoreListItems = () => {
  const state  = useMatchesState();
 // const sportsState: any  = useSportsState();
  //const teamsState: any  = useTeamsState();

  const { matches, isLoading, isError, errorMessage } = state;
 // const { sports, isLoading: sportsLoading, isError: sportsError, errorMessage: sportsErrorMessage } = sportsState;
 // const { teams, isLoading: teamsLoading, isError: teamsError, errorMessage: teamsErrorMessage } = teamsState;

  if (matches.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError ) {
    return <span>{errorMessage}</span>;
  }

  return (
    <div className="">
      <div className="flex flex-nowrap space-x-4 p-4">
        {matches.map((match) => (
          <div key={match.id} className="bg-white p-4 rounded shadow-md min-w-[300px]">
            <p>ID: {match.id}</p>
            <p>Name: {match.name}</p>
            <p>Location: {match.location}</p>
            <p>Sport Name: {match.sportName}</p>
            <p>Ends At: {match.endsAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveScoreListItems;
