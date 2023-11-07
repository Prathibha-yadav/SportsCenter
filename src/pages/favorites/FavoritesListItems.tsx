import { useMatchesState } from "../../context/match/context";
import MatchModal from "./FavoritesModal";

  const FavoritesListItems = () => {
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
       <div className=" p-4 flex flex-col">
        {matches.map((match : any) => (
    <div key={match.id} className="bg-white p-4 rounded shadow-md min-w-[300px]">
      <div className="flex justify-between mb-2">
        <p className="text-lg font-semibold">{match.sportName}</p> 
       
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
export default FavoritesListItems;