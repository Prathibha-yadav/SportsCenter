import { useMatchesState } from "../../context/match/context";
import MatchModal from "./LiveScoreModal";

  const LiveScoreListItems = () => {
  let state: any = useMatchesState();
  
  const { matches, isLoading, isError, errorMessage } = state;

  if (matches.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>{errorMessage}</span>;
  }
  const MatchDetails = (id: number) => {
    return <MatchModal id={id} />;
  };
  return (
    <>
       <div className="flex flex-nowrap space-x-4 p-4">
        {matches.map((match : any) => (
    <div key={match.id} className="bg-white p-4 rounded shadow-md min-w-[300px]">
      <div className="flex justify-between mb-2">
        <p className="text-lg font-semibold">{match.sportName}</p> 
       
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
                <div key={match.endsAt}>
                  <div>{MatchDetails(match.id)}</div>
                </div>

              </div>
            )
        )}
      </div>
    </>
  );
}
export default LiveScoreListItems;