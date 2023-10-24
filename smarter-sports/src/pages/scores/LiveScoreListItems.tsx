import { useMatchesDispatch, useMatchesState } from '../../context/match/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { fetchMatches } from '../../context/match/actions';

const LiveScoreListItems = () => {
  const state = useMatchesState();
  const matchDispatch = useMatchesDispatch();
  const { matches, isLoading, isError, errorMessage } = state;

  if (matches.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }

  // const handleRefresh = (id) => {
   
  // };

  return (
    
      <div className="flex flex-nowrap space-x-4 p-4">
        {matches.map((match) => (
    <div key={match.id} className="bg-white p-4 rounded shadow-md min-w-[300px]">
      <div className="flex justify-between mb-2">
        <p className="text-lg font-semibold">{match.sportName}</p> 
        <button
       onClick={() => {
        fetchMatches(matchDispatch);
      }}
        className="bg-blue-900 text-white px-2 py-1 rounded-md mt-4 hover:bg-blue-600 transition duration-300"
      >
        <FontAwesomeIcon icon={faSync} className="mr-1" />
        
      </button> 
      </div>
      <div className="flex items-center text-sm text-gray-500 mb-2">
        {match.isRunning ? (
          <span className="bg-green-400 w-4 h-4 rounded-full inline-block mr-2"></span>
        ) : (
          <span className="bg-red-400 w-4 h-4 rounded-full inline-block mr-2"></span>
        )}
        {match.isRunning ? 'Live' : 'Ended'}
      </div>
       
        <p className="text-xs text-gray-600">
          Ends At:{' '}
          {new Date(match.endsAt).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
        
     
      
      
      <p className="text-base">{match.name}</p>
      
      
        {match.teams.map((team) => (
          <p key={team.id} className="text-sm">
            Team {team.name} Score: {team.id}
          </p>
        ))}
      
      
    </div>
  ))}
      </div>
    
  );
};

export default LiveScoreListItems;
